import { setTimeout } from 'node:timers/promises';
import mongoose, { Mongoose } from 'mongoose';
import { inject, injectable } from 'inversify';
import { AppComponent } from '../../types/app-components.enum.js';
import { DataBaseClientInterface } from './database-client.interface';
import { LoggerInterface } from '../logger/logger.interface';
import { DatabaseClientLimits } from './database-client.constants.js';

@injectable()
export default class DataBaseClientService implements DataBaseClientInterface {
  isConnected = false;
  mongooseInstance: Mongoose | null = null;

  constructor(
        @inject(AppComponent.LoggerInterface) private readonly logger: LoggerInterface
  ) {}

  private _connect = async (uri: string): Promise<void> => {
    this.mongooseInstance = await this.retryСonnect(uri);
    this.isConnected = true;
  };

  private _disconnect = async (): Promise<void> => {
    if (this.mongooseInstance) {
      await this.mongooseInstance.disconnect();
      this.mongooseInstance = null;
      this.isConnected = false;
    }
  };

  private retryСonnect = async (uri: string): Promise<Mongoose> => {
    for (let attempt = 0; attempt < DatabaseClientLimits.RETRY_COUNT; attempt++) {
      try {
        return await mongoose.connect(uri);
      } catch (error: unknown) {
        this.logger.error(`Failed to connect to the database. Attempt: ${attempt}`);
        await setTimeout(DatabaseClientLimits.MAX_CONNECTION_TIMEOUT);
      }
    }

    this.logger.error('Unable to establish database connection');
    throw new Error('Failed to connect to the database');
  };

  public connect = async (uri: string): Promise<void> => {
    if (this.isConnected) {
      throw new Error('MongoDB client has already connected to database');
    }

    this.logger.info('Trying to connect to database');
    await this._connect(uri);
    this.logger.info('Database connection has been successfully established');
  };

  public disconnect = async (): Promise<void> => {
    if (!this.isConnected) {
      throw new Error('Connection with database has\'t been established');
    }
    await this._disconnect();
    this.logger.info('Connection with database has been closed');
  };

}
