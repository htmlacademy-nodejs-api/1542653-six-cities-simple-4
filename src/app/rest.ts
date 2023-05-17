import { ConfigInterface } from '../core/config/config.interface';
import { LoggerInterface } from '../core/logger/logger.interface';
import { RestSchema } from '../core/config/rest.schema';
import { inject, injectable } from 'inversify';
import { AppComponent } from '../types/app-components.enum.js';

@injectable()
export default class RestApplication {
  constructor(
    @inject(AppComponent.LoggerInterface) private readonly logger: LoggerInterface,
    @inject(AppComponent.ConfigInterface) private readonly config: ConfigInterface<RestSchema>
  ) {}

  public init = () => {
    this.logger.info('Application initialization…');
    this.logger.info(`Got value from .env file, application port: ${this.config.get('PORT')}`);
  };

}
