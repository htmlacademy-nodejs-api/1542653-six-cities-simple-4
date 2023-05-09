import fs from 'node:fs';
import path from 'node:path';
import { CliCommandInterface } from '../core/cli-command/cli-command.interface';

type ParsedCommand = Record<string, string[]>;

export default class CliCommandManager {
  private commands: {[commandName: string]: CliCommandInterface} = {};
  private defaultCommand = '--help';
  private commandDirPath = './src/core/cli-command';

  public parseCommandFiles = async (): Promise<CliCommandInterface[]> => {
    const commandFiles = fs.readdirSync(path.resolve(this.commandDirPath))
      .filter((file) => (file.includes('.command.ts') || file.includes('.command.js')) && !file.includes('.js.map'));
    const commandInstances: CliCommandInterface[] = await Promise.all(commandFiles.map(async (file) => {
      const module = await import(`../core/cli-command/${file}`);
      return new module.default();
    }));
    return commandInstances;
  };

  public registerCommands = async (commandList: CliCommandInterface[]): Promise<void> => {
    commandList.reduce((savedList, commandItem) => {
      savedList[commandItem.name] = commandItem;
      return savedList;
    }, this.commands);
  };

  private parseCommand = (cliArguments: string[]): ParsedCommand => {
    let command = '';
    return cliArguments.reduce((parsedCommands: ParsedCommand, item: string) => {
      if (item.startsWith('--')) {
        parsedCommands[item] = [];
        command = item;
      } else if (command && item) {
        parsedCommands[command].push(item);
      }
      return parsedCommands;
    }, {});
  };

  public getCommand = (commandName: string): CliCommandInterface => this.commands[commandName] ?? this.commands[this.defaultCommand];

  public processedCommand = (argv: string[]): void => {
    const parsedCommand = this.parseCommand(argv);
    const [ commandName ] = Object.keys(parsedCommand);
    const command = this.getCommand(commandName);
    const commandArguments = parsedCommand[commandName] ?? [];
    command.execute(...commandArguments);
  };
}
