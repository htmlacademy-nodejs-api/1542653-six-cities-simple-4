import { CliCommandInterface } from './cli-command.interface';
import TSVFileReader from '../file-reader/tsv-file-reader.js';
import chalk from 'chalk';

export default class ImportCommand implements CliCommandInterface {
  public name = '--import';

  execute = (fileName: string): void => {
    const reader = new TSVFileReader(fileName.trim());
    try {
      reader.read();
      const content = reader.convertFileContentToArray();
      console.log(content);
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }

      console.log(chalk.red(`Не удалось импортировать данные из файла ${fileName}, по причине: ${err.message}`));
    }
  };
}
