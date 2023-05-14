import chalk from 'chalk';
import TSVFileReader from '../file-reader/tsv-file-reader.js';
import { convertFileLineToOffer } from '../helpers/index.js';
import { CliCommandInterface } from './cli-command.interface';

export default class ImportCommand implements CliCommandInterface {
  public name = '--import';

  private onLine = (line: string) => {
    const offer = convertFileLineToOffer(line);
    console.log(offer);
  };

  private onComplete = (lineCount: number) => {
    console.log(`${lineCount} было импортировано.`);
  };

  execute = (fileName: string): void => {
    const reader = new TSVFileReader(fileName.trim());

    reader.on('line', this.onLine);

    reader.on('end', this.onComplete);

    try {
      reader.read();
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }

      console.log(chalk.red(`Не удалось импортировать данные из файла ${fileName}, по причине: ${err.message}`));
    }
  };
}
