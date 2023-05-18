import { config } from 'dotenv';
import { LoggerInterface } from '../logger/logger.interface';
import { ConfigInterface } from './config.interface';
import { RestSchema, configRestSchema } from './rest.schema.js';
import { inject, injectable } from 'inversify';
import { AppComponent } from '../../types/app-components.enum.js';

@injectable()
export default class ConfigService implements ConfigInterface<RestSchema> {
  private readonly config: RestSchema;
  constructor(
    @inject(AppComponent.LoggerInterface) private readonly logger: LoggerInterface
  ) {
    const parsedOtput = config();

    if (parsedOtput.error) {
      throw new Error('Can\'t read .env file. Perhaps the file does not exists.');
    }
    configRestSchema.load({});
    configRestSchema.validate({ allowed: 'strict', output: this.logger.info });

    this.config = configRestSchema.getProperties();

    this.logger.info('.env file found and successfully parsed!');
  }

  public get = <U extends keyof RestSchema>(key: U): RestSchema[U] => this.config[key];

}
