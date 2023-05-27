import chalk from 'chalk';
import { LoggerInterface } from './logger.interface';

export default class ConsoleLoggerService implements LoggerInterface {
  public info = (message: string, ...args: unknown[]): void => {
    console.info(chalk.green(message), ...args);
  };

  public warn = (message: string, ...args: unknown[]): void => {
    console.warn(chalk.yellow(message), ...args);
  };

  public error = (message: string, ...args: unknown[]): void => {
    console.error(chalk.red(message), ...args);
  };

  public debug = (message: string, ...args: unknown[]): void => {
    console.debug(chalk.blue(message), ...args);
  };
}
