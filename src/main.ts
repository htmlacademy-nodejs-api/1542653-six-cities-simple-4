import 'reflect-metadata';
import { Container } from 'inversify';
import PinoService from './core/logger/pino.service.js';
import ConfigService from './core/config/config.service.js';
import RestApplication from './app/rest.js';
import { AppComponent } from './types/app-components.enum.js';
import { RestSchema } from './core/config/rest.schema.js';
import { LoggerInterface } from './core/logger/logger.interface.js';
import { ConfigInterface } from './core/config/config.interface.js';

const bootstrap = (): void => {
  const appContainer = new Container();
  appContainer.bind<RestApplication>(AppComponent.RestApplication).to(RestApplication).inSingletonScope();
  appContainer.bind<ConfigInterface<RestSchema>>(AppComponent.ConfigInterface).to(ConfigService).inSingletonScope();
  appContainer.bind<LoggerInterface>(AppComponent.LoggerInterface).to(PinoService).inSingletonScope();

  const app = appContainer.get<RestApplication>(AppComponent.RestApplication);

  app.init();

};

bootstrap();
