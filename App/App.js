import {
	readData,
	clear,
	error,
	input,
	log as print,
	writeData,
	validate,
} from '../utils.js';
import Menu from './Menu/Menu.js';
import Book from '../Domain/Book.js';
import BoardGame from '../Domain/BoardGame.js';
import chalk from 'chalk';

class App {
	menu = new Menu();

	#menuHandler(option) {
		switch (option) {
			case '1':
				clear();
				this.#addRentalHandler();
				break;
			case '2':
				clear();
				this.#displayRentals();
				this.#applicationHandler();
				break;
			case '3':
				clear();
				this.#countAmount();
				this.#applicationHandler();
				break;
			case '5':
				clear();
				print('Dziękujemy za skorzystanie z programu :)');
				break;
			default:
				clear();
				error('Wprowadzono złą opcję w menu!');
				this.#applicationHandler();
				break;
		}
	}

	#applicationHandler() {
		//displaying menu
		print(this.menu.displayMenu());
		//asking a option menu
		const option = input('Wybierz opcję: ');
		this.#menuHandler(option);
	}

	#displayRentals() {
		const data = readData();
		let text = '';

		data.forEach(rental => {
			text += `Nazwa: ${rental.name}`;
		});

		print(text);
	}

	#addBookRental() {
		clear();

		const texts = {
			name: 'Podaj nazwę: ',
			publisher: 'Podaj wydawcę: ',
			amount: 'Podaj kwotę: ',
			author: 'Podaj autora: ',
			type: 'Podaj rodzaj książki: ',
		};

		const name = validate(texts.name, 'string');
		const publisher = validate(texts.publisher, 'string');
		const amount = validate(texts.amount, 'number');
		const author = validate(texts.author, 'string');
		print(Book.getTypes());
		const type = validate(texts.type, 'number');

		const book = new Book(name, publisher, amount, author, type);

		const data = {
			id: book.getId(),
			className: book.getClassName(),
			name: book.getName(),
			publisher: book.getPublisher(),
			amount: book.getAmount(),
			author: book.getAuthor(),
			type: book.getType(),
		};

		writeData(data);
	}

	#addBoardGameRental() {
		clear();

		const texts = {
			name: 'Podaj nazwę: ',
			publisher: 'Podaj wydawcę: ',
			amount: 'Podaj kwotę: ',
			minAge: 'Podaj minimalny wiek: ',
			maxAge: 'Podaj maksymalny wiek: ',
		};

		const name = validate(texts.name, 'string');
		const publisher = validate(texts.publisher, 'string');
		const amount = validate(texts.amount, 'number');
		const minAge = validate(texts.minAge, 'number');
		const maxAge = validate(texts.maxAge, 'number');

		const boardGame = new BoardGame(
			name,
			publisher,
			amount,
			minAge,
			maxAge
		);

		const data = {
			id: boardGame.getId(),
			className: boardGame.getClassName(),
			name: boardGame.getName(),
			publisher: boardGame.getPublisher(),
			amount: boardGame.getAmount(),
			minAge: boardGame.getMinAge(),
			maxAge: boardGame.getMaxAge(),
		};

		writeData(data);
	}

	#addRentalHandler() {
		print('(1) Książka\n(2) Gra planszowa');
		const rentalType = input('Podaj typ pozycji: ');

		switch (rentalType) {
			case '1':
				this.#addBookRental();
				break;
			case '2':
				this.#addBoardGameRental();
				break;
			default:
				clear();
				error('Podaj poprawny typ pozycji!\n');
				this.#addRentalHandler();
		}
	}

	#countAmount() {
		const data = readData();
		const totalAmount = data.reduce(
			(accumulator, { amount }) => accumulator + amount,
			0
		);

		print(
			`Suma kwot z wypożyczeń wynosi ${chalk.greenBright(totalAmount)}`
		);
	}

	main() {
		clear();
		//greetings
		print(this.menu.greetings());
		this.#applicationHandler();
	}
}

export default App;
