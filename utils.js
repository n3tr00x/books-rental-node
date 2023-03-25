import PromptSync from 'prompt-sync';
import chalk from 'chalk';
import { readFileSync, writeFileSync } from 'fs';

const databasePath = './database/database.json';

export const input = PromptSync();
export const { log, clear } = console;
export const error = message => {
	log(chalk.red(message));
};
export const highlight = message => {
	return chalk.greenBright(message);
};

export const validate = (text, type) => {
	let field = '';

	switch (type) {
		case 'string':
			while (field === '') {
				field = input(text);
			}
			break;
		case 'number':
			while (isNaN(field) || field === '') {
				field = input(text);
			}
			break;
		default:
			return;
	}

	return field;
};

export const readData = () => {
	try {
		const data = readFileSync(databasePath);
		return JSON.parse(data);
	} catch (err) {
		error('Błąd: ' + err.message);
	}
};

export const writeData = data => {
	try {
		const state = readData();
		const json = JSON.stringify([...state, data]);

		writeFileSync(databasePath, json);
	} catch (err) {
		error('Błąd: ' + err.message);
	}
};
