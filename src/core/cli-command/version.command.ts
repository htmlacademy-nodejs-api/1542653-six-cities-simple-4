import path from 'node:path';
import { readFileSync } from 'node:fs';
import { CliCommandInterface } from './cli-command.interface';

export default class VersionCommand implements CliCommandInterface {
  public readonly name = '--version';
  private packagePath = './package.json';

  private readVersion = (): string => {
    const content = JSON.parse(readFileSync(path.resolve(this.packagePath), 'utf-8'));
    return content.version;
  };

  public execute = (): void => {
    const version = this.readVersion();
    console.log(version);
  };
}
