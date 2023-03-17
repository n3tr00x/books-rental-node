import PromptSync from 'prompt-sync';
import chalk from 'chalk';

export const input = PromptSync();
export const { log, clear } = console;
export const error = message => {
	log(chalk.red(message));
};
