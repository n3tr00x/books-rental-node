import { readData, clear, error, input, log as print } from '../utils.js';

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
				this.#applicationHandler();
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

	main() {
		clear();
		//greetings
		print(this.#greetings());
		this.#applicationHandler();
	}
}

export default App;
