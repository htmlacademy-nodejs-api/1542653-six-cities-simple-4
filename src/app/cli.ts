import { CliCommandInterface } from '../core/cli-command/cli-command.interface';

type ParsedCommand = Record<string, string[]>;

export default class CliCommandManager {
  private commands: {[commandName: string]: CliCommandInterface} = {};
  private defaultCommand = '--help';

  public registerCommands = (commandList: CliCommandInterface[]): void => {
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

  public processedCommand = (): void => {
    
  };
}
