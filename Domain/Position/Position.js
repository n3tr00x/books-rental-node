class Position {
	#id;
	#className;
	#name;
	#publisher;
	#amount;

	constructor(name, publisher, amount) {
		this.#id = Date.now();
		this.#className = this.constructor.name.toLowerCase();
		this.#name = name;
		this.#amount = amount;
		this.#publisher = publisher;
	}

	getId() {
		return this.#id;
	}

	getClassName() {
		return this.#className;
	}

	getName() {
		return this.#name;
	}

	getPublisher() {
		return this.#publisher;
	}

	getAmount() {
		return +this.#amount;
	}
}

export default Position;
