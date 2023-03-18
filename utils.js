import PromptSync from 'prompt-sync';
import chalk from 'chalk';
import { readFileSync } from 'fs';

const databasePath = './database/database.json';

export const input = PromptSync();
export const { log, clear } = console;
export const error = message => {
	log(chalk.red(message));
};

export const readData = () => {
	try {
		const data = readFileSync(databasePath);
		return JSON.parse(data);
	} catch (err) {
		error('Błąd: ' + err.message);
	}
};