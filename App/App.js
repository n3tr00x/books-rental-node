import {
	readData,
	clear,
	error,
	input,
	log as print,
	writeData,
} from '../utils.js';
import Book from '../Domain/Book/Book.js';

class App {
	#greetings() {
		return 'Witaj w wypożyczani książek!\n';
	}

	#displayMenu() {
		const menu = 'Menu:\n';
		const options =
			'(1) Dodaj wypożyczenie\n(2) Wyświetl listę wypożyczeń\n(3) Wykonanie obliczeń\n(4) Zapis do pliku\n';
		const exit = '(5) Wyjdź z programu';

		return menu + options + exit;
	}

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
		print(this.#displayMenu());
		//asking a option menu
		const option = input('Wybierz opcję: ');
		this.#menuHandler(option);
	}

	#displayRentals() {
		console.log(readData());
	}

	#addBookRental() {
		clear();
		const name = input('Podaj nazwę: ');
		const publisher = input('Podaj wydawcę: ');
		const amount = input('Podaj kwotę: ');
		const author = input('Podaj autora: ');
		// print(Book.getTypes());
		const type = input('Podaj rodzaj książki: ');

		const book = new Book(name, publisher, amount, author, type);

		const data = {
			name: book.getName(),
			publisher: book.getPublisher(),
			amount: book.getAmount(),
			author: book.getAuthor(),
			type: book.getType(),
		};

		// print(data);

		writeData(data);
	}

	#addRentalHandler() {
		const data = readData();

		print('(1) Książka\n(2) Gra planszowa');
		const rentalType = input('Podaj typ pozycji: ');

		switch (rentalType) {
			case '1':
				this.#addBookRental();
				break;
			case '2':
				break;
			default:
				clear();
				error('Podaj poprawny typ pozycji!\n');
				this.#addRentalHandler();
		}
	}

	main() {
		clear();
		//greetings
		print(this.#greetings());
		this.#applicationHandler();
	}
}

export default App;
