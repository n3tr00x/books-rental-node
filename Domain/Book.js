import Position from './Position/Position.js';
const types = ['dzieci', 'młodzież', 'dorośli', 'uniwersalny'];

class Book extends Position {
	#type;
	#author;

	constructor(name, publisher, amount, author, type) {
		super(name, publisher, amount);
		this.#author = author;
		this.#type = types[type];
	}

	getAuthor() {
		return this.#author;
	}

	getType() {
		return this.#type !== undefined ? this.#type : null;
	}

	static getTypes() {
		let typesString = '\n';

		for (let i = 0; i < types.length; i++) {
			typesString += `(${i}) ${types[i]}\n`;
		}

		return typesString;
	}
}

export default Book;
