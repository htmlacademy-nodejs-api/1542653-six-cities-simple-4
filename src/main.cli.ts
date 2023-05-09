#!/usr/bin/env node

import CliCommandManager from './app/cli.js';
import HelpCommand from './core/cli-command/help.command.js';
import VersionCommand from './core/cli-command/version.command.js';
import ImportCommand from './core/cli-command/import.command.js';


const commandManager = new CliCommandManager();
commandManager.registerCommands([
  new HelpCommand(), new VersionCommand(), new ImportCommand()
]);

commandManager.processedCommand(process.argv);
