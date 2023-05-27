import 'reflect-metadata';
import CliCommandManager from './app/cli.js';

const commandManager = new CliCommandManager();

commandManager.parseCommandFiles().then((commands) => {
  commandManager.registerCommands(commands);
  commandManager.processedCommand(process.argv);
});
