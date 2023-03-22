class Menu {
	greetings() {
		return 'Witaj w wypożyczani książek!\n';
	}

	displayMenu() {
		const menu = 'Menu:\n';
		const options =
			'(1) Dodaj wypożyczenie\n(2) Wyświetl listę wypożyczeń\n(3) Wykonanie obliczeń\n(4) Zapis do pliku\n';
		const exit = '(5) Wyjdź z programu';

		return menu + options + exit;
	}
}

export default Menu;
