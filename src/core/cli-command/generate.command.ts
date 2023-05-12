import got from 'got';
import chalk from 'chalk';
import { appendFile } from 'node:fs/promises';
import { MockOffer } from '../../types/mock.type';
import { CliCommandInterface } from './cli-command.interface';
import OfferGenerator from '../../modules/offer-generator/offer-generator.js';

export default class GenerateCommand implements CliCommandInterface {
  public readonly name = '--generate';
  private initialData!: MockOffer;

  execute = async (...params: string[]): Promise<void> => {
    const [count, filepath, url] = params;
    const offerCount = Number(count);

    try {
      this.initialData = await got.get(url).json();
    } catch {
      console.log(chalk.red(`Не удалось получить данные для генерации по адресу: ${url}.`));
    }

    if (!offerCount || offerCount < 0) {
      console.error(chalk.red(`
        Указанное количество генерируемых данных ${count} указано не верно.
        Параметр count должен быть числовым и больше 0`
      ));
      return;
    }

    const offerGenerator = new OfferGenerator(this.initialData);

    for (let i = 0; i < offerCount; i++) {
      await appendFile(filepath, `${offerGenerator.generate()}\n`, 'utf8');
    }

    console.log(`Файл ${filepath} Был создан! Было добавлено ${offerCount} строк`);
  };
}
