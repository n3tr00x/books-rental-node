class App {
	#displayMenu() {
		const header = 'Witaj w wypożyczani książek!\n\n';
		const menu = 'Menu:\n';
		const options =
			'1. Dodaj wypożyczenie\n2. Wyświetl listę wypożyczeń\n3. Wykonanie obliczeń\n4. Zapis do pliku\n';
		const exit = '5. Wyjdź z programu';

		return header + menu + options + exit;
	}

	main() {
		console.log(this.#displayMenu());
	}
}

export default App;
