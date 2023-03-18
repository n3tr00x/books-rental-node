import Position from '../Position/Position.js';

class BoardGame extends Position {
	#minAge;
	#maxAge;

	constructor(name, publisher, amount, minAge, maxAge) {
		super(name, publisher, amount);
		this.#minAge = minAge;
		this.#maxAge = maxAge;
	}

	getMinAge() {
		return this.#minAge;
	}

	getMaxAge() {
		return this.#maxAge;
	}
}

export default BoardGame;
