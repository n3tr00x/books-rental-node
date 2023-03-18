import Position from '../Position/Position.js';

class Book extends Position {
	#types = ['dzieci', 'młodzież', 'dorośli'];
	#type;
	#author;

	constructor(name, publisher, amount, author, type) {
		super(name, publisher, amount);
		this.#author = author;
		this.#type = this.#types[type];
	}

	getAuthor() {
		return this.#author;
	}

	getType() {
		return this.#type;
	}

	static getTypes() {
		let typesString = '\n';

		for (let i = 0; i < this.#types.length; i++) {
			typesString += `(${i}) ${this.#types[i]}\n`;
		}

		return typesString;
	}
}

export default Book;
