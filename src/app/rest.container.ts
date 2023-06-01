import { Container } from 'inversify';
import RestApplication from './rest.js';
import ConfigService from '../core/config/config.service.js';
import PinoService from '../core/logger/pino.service.js';
import DataBaseClientService from '../core/database-client/database-client.service.js';
import { RestSchema } from '../core/config/rest.schema.js';
import { AppComponent } from '../types/app-components.enum.js';
import { ConfigInterface } from '../core/config/config.interface';
import { LoggerInterface } from '../core/logger/logger.interface';
import { DataBaseClientInterface } from '../core/database-client/database-client.interface';

export const createRestApplicationContainer = (): Container => {
  const restAppContainer = new Container();
  restAppContainer.bind<RestApplication>(AppComponent.RestApplication).to(RestApplication).inSingletonScope();
  restAppContainer.bind<ConfigInterface<RestSchema>>(AppComponent.ConfigInterface).to(ConfigService).inSingletonScope();
  restAppContainer.bind<LoggerInterface>(AppComponent.LoggerInterface).to(PinoService).inSingletonScope();
  restAppContainer.bind<DataBaseClientInterface>(AppComponent.DataBaseClientInterface).to(DataBaseClientService).inSingletonScope();

  return restAppContainer;
};
