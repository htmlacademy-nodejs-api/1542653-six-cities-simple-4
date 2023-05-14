import PinoService from './core/logger/pino.service.js';
import ConfigService from './core/config/config.service.js';
import RestApplication from './app/rest.js';

const bootstrap = (): void => {
  const logger = new PinoService();
  const config = new ConfigService(logger);

  const app = new RestApplication(logger, config);
  app.init();

};

bootstrap();
