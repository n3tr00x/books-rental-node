class Position {
	#name;
	#publisher;
	#amount;

	constructor(name, publisher, amount) {
		this.id = Date.now();
		this.#name = name;
		this.#amount = amount;
		this.#publisher = publisher;
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
