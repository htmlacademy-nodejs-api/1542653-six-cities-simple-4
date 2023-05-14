import { ConfigInterface } from '../core/config/config.interface';
import { LoggerInterface } from '../core/logger/logger.interface';
import { RestSchema } from '../core/config/rest.schema';

export default class RestApplication {
  constructor(
    private readonly logger: LoggerInterface,
    private readonly config: ConfigInterface<RestSchema>
  ) {}

  public init = () => {
    this.logger.info('Application initialization…');
    this.logger.info(`Got value from .env file, application port: ${this.config.get('PORT')}`);
  };

}
