/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
JavaScript.
3. Справочник объектов


		8. String			| глобальный объект-конструктор для создания и работы со строками

			Конструктор String

			Свои свойства:
				> prototype			| (стат.) св-во prototype функции-конструктора String
				> constructor		| ссылка на объект-функцию-конструктор
				> length				| кол-во символов в строке
				> N							| доступ к N-ому символу строки (0 ... )

			Свои методы:
				> fromCharCode				| (стат.) возыращает строку, собранную из цепочки переданных Unicode значений
				> charAt							| возвращает строку с символом с указанным индексом
				> charCodeAt					| возвращает число, обозначающее юникод указанного символа
				> concat							| конкатенирует 2 строки, и возвращает результат
				> indexOf							| возвращает индекс первого вхождения (слева-направо) строки А в строку Б, или -1 (если не входит)
				> lastIndexOf					| возвращает индекс первого вхождения (справа-налево) строки А в строку Б, или -1 (если не входит)
				> split								| разделяет строку с указанным разделителем на массив строк
				> slice								|	копирует кусок строки от индекса A до Б, не включая Б, и возвращает его
				> substr							|	копирует кусок строки от индекса А, длины L, и возвращает его
				> substring						| копирует кусок строки от индекса A до Б, и возвращает его

				> match								| (работает с RegExp) применить регулярное выражение к строке
				> replace							| (работает с RegExp) найти и заменить
				> search							| (работает с RegExp) найти подстроку в строке

				> toLowerCase					| изменить регистр всех символов строки на верхний
				> toUpperCase					| изменить регистр всех символов строки на нижний

				> trim								| обрезать пробелы перед и после строки

				> localeCompare				| [только Chrome, IE, Opera] сравнивает (>,<,=) "вес" двух строк для сортировочных функций
				> contains						| [работает только в Firefox] содержится ли (true/false) указанная строка в другой строке?
				> endsWith						| [работает только в Firefox] кончается ли (true/false) указанная строка символами другой строки
				> startsWith					| [работает только в Firefox] начинается ли (true/false) строка символами указанной строки
				> toLocaleLowerCase		|
				> toLocaleUpperCase		|






-------------------------------------------------- */

var string, anotherString, array, regexp;




//Конструктор String

	console.log('Строка');					// 'Строка'
	console.log("Строка");					// "Строка"

	console.log(String(555));				// 555
	console.log(+new String(555));  // 555
	console.log(new String(555));  	// String {0: "5", 1: "5", 2: "5"}


//length
//> (стат.) кол-во символов в строке

	string = 'Hello John';
	console.log(string.length);		// 10


//N
//> доступ к N-ому символу строки (0 ... )

	string = 'Hello John';
	console.log(string[0]);  // 'H'
	console.log(string[1]);  // 'e'
	console.log(string[2]);  // 'l'
	console.log(string[3]);  // 'l'
	console.log(string[4]);  // 'o'


//String.fromCharCode(num1, ..., numN)
//> (стат.) возыращает строку, собранную из цепочки переданных Unicode значений
//> num - юникод код символа

	console.log(String.fromCharCode(65,66,67));		// 'ABC'


//string.charAt(index)
//возвращает строку, содержащую символ с индексом index

	string = 'John';
	console.log(string.charAt(0)); // 'J'
	console.log(string.charAt(1)); // 'o'
	console.log(string.charAt(2)); // 'h'
	console.log(string.charAt(3)); // 'n'


//string.charCodeAt(index)
//> возвращает число, обозначающее юникод указанного символа
//> index - индекс символа в строке string, код юникод которого требуется

	string = 'John';
	console.log(string.charCodeAt(0));  // 74
	console.log(string.charCodeAt(1));  // 111
	console.log(string.charCodeAt(2));  // 104
	console.log(string.charCodeAt(3));  // 110


//string.concat(string2, string3[, ..., stringN])
//> конкатенирует 2 строки, и возвращает результат
//> string - строки, которые надо конкатенировать

	string = 'Hi! My name is ';
	console.log(anotherString =
			string.concat('John. ','Nice to meet you!'));		// 'Hi! My name is John. Nice to meet you!'


//string.indexOf(searchValue[, fromIndex])
//> возвращает индекс первого вхождения (слева-направо) строки А в
// 	строку Б, или -1 (если не входит)

	string = 'My name is John. What is your name?';
	console.log(string.indexOf('name'));			// 3
	console.log(string.indexOf('namesdf'));		// -1


//string.lastIndexOf(searchValue[, fromIndex])
//> возвращает индекс первого вхождения (справа-налево) строки А в
// 	строку Б, или -1 (если не входит)

	string = 'My name is John. What is your name?';
	console.log(string.lastIndexOf('name'));			// 30
	console.log(string.lastIndexOf('namesdf'));		// -1


//string.split([separator][, limit])
//> разделяет строку с указанным разделителем на массив строк
//> separator - может быть строкой или регулярным выражением;
//  > если в кач-ве separator передана пустая, то строка разбивается
// 		на массив символов.
//  > separator не может быть не передан
//	> limit - MAX кол-во элементов в результирующем массиве

	array = 'Hi!'.split('');
	console.log(array[0]); // 'H'
	console.log(array[1]); // 'i'
	console.log(array[2]); // '!'

	array = 'Hello from Moscow!'.split(' ');
	console.log(array[0]); // 'Hello'
	console.log(array[1]); // 'from'
	console.log(array[2]); // 'Moscow!'


//string.slice(beginslice[, endSlice])
//> копирует кусок строки от индекса A до Б, не включая Б, и возвращает его
//> beginslice - индекс элемента, с которого начинать копирование
// 	(может быть отрицательным)
//> endSlice - (не обязат.) индекс элемента, которым заканчивать копирование (не включая его в результат)
// 	(может быть отрицательным)

	string = 'Hello from Moscow!';
	anotherString = string.slice(6, string.length);
	console.log(anotherString);							// 'from Moscow!'

	anotherString = string.slice(-7);
	console.log(anotherString);							// 'Moscow!'

	anotherString = string.slice(5, -1);
	console.log(anotherString);							// 'from Moscow'


//string.substr(start[, length])
//> копирует кусок строки от индекса start, длины L, и возвращает его
//> start - индекс, с которого начинать извлекать (не может быть отрицательным)
//> length - количество символов, которые надо извлечь

	string = 'Hello from Moscow!';
	console.log(string.substr(0,5));		// 'Hello'
	console.log(string.substr(6,4));		// 'from'
	console.log(string.substr(11,7));		// 'Moscow!'


//string.substring(indexA[, indexB])
//> копирует кусок строки от индекса A до Б, и возвращает его
//> indexA - индекс, начиная с которого брать подстроку (0 ...)
//> indexB - индекс, заканчивая которым брать подстроку (0 ...) - не включительно;
//	если не установлен то брать начиная с indexA и до конца строки.

	string = 'Hello from Moscow!';
	console.log(string.substring(6));			// 'from Moscow!'
	console.log(string.substring(0,3));		// 'Hel'


//string.match(regexp)
//> (работает с RegExp) применить регулярное выражение к строке,
// 	получить массив совпадений
//> regexp - объект типа RegExp
//	> если передан не RegExp, а, например, строка, или что угодно, то это
//    неявно преобразуется к RegExp: new RegExp(regexp)
//> если RegExp не содержит флаг g, то:
// 	> эффект будет тот же, что от regexp.exec(string)
//  > ...но возвращается массив из 3-х элементов:
//  	> Индекс 0: найденная строка-сопадение
//  	> Индекс 'input': со строкой, в который происходит поиск
//  	> Индекс 'index': индекс символа, на котормо найдено совпадение
//> если RegExp содержит флаг g, то возвращает массив из найденных
//	совпадений без доп. элементов
//> если совпадений не найдено, возвращает null

	// regexp содержит флаг g
	string = 'Hello from Moscow!';
	regexp = /o/g;
	array = string.match(regexp);
	console.log(array);						// ["o", "o", "o", "o"]
	console.log(array['index']);			//

	// regexp не содержит флаг g
	regexp = /o/;
	array = string.match(regexp);
	console.log(array);						// ["o", index: 4, input: "Hello from Moscow!"]


//str.replace(regexp|substr, newSubStr|function)
//> (работает с RegExp) найти и заменить
//> regexp|substr - что надо найти
//	> если передан не RegExp, а, например, строка, или что угодно, то это
//    неявно преобразуется к RegExp: new RegExp(regexp)
//> newSubStr|function - на что заменить
//	> function - функция, которая будет запущена, и которая вернет
//    новую подстроку.
//> этот метод не меняет объект String, на котором запущен, а просто
//  возвращает новую строку.

	string = 'Hello from Moscow!';
	console.log(string.replace('Moscow', 'Paris'));		// 'Hello from Paris!'


//string.search(regexp)
//> (работает с RegExp) найти подстроку в строке
//> regexp - объект типа RegExp
//	> если передан не RegExp, а, например, строка, или что угодно, то это
//    неявно преобразуется к RegExp: new RegExp(regexp)
//> в случае успешного поиска возвращает индекс, иначе -1.

	string = 'Hello from Moscow!';
	console.log(string.search(/Mos/));			// 11
	console.log(string.search(/Mos444/));		// -1


//string.trim()
//> обрезать пробелы перед и после строки
//> не изменяет исходное значение, а возвращает новую строку

	string = '     строка    ';
	console.log(string.trim());		// 'строка'











//string.localeCompare(compareString [, locales [, options]])
//> [только Chrome, IE, Opera] сравнивает (>,<,=) "вес" двух строк
// 	для сортировочных функций


//str.contains(searchString [, position]);
//> [работает только в Firefox] содержится ли строка searchString в строке str?
//> position - индекс, с которого (слева-направо) начинать поиски, по умолчанию 0
//> может вернуть только true(если содержится) или false(если нет)
//> *ПРИМЕЧАНИЕ: работает только в Firefox (15.11.2013)


//str.endsWith(searchString [, position]);
//> [работает только в Firefox] кончается ли (true/false) указанная
// 	строка str символами другой строки searchString
//> position - индекс, с которого (слева-направо) начинать поиски, по умолчанию 0
//> *ПРИМЕЧАНИЕ: работает только в Firefox (15.11.2013)


//str.startsWith(searchString [, position]);
//> [работает только в Firefox] начинается ли (true/false) указанная
// 	строка str символами другой строки searchString
//> position - индекс, с которого (слева-направо) начинать поиски, по умолчанию 0
//> *ПРИМЕЧАНИЕ: работает только в Firefox (15.11.2013)










/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Описание объекта на developer.mozilla.org:
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FString




*****************************************************
Оглавление:

	> О строках в JavaScript
		> Официальная информация здесь, пункт 6: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
		> Полная таблица символов UTF-16: http://www.fileformat.info/info/charset/UTF-16/list.htm?start=1024
		> UFT-8 и UTF-16 символы занимают по 4 байта.
		> В JS нет проблем с кодировкой, как в PHP.
		> Строка в JS - это последовательность 0 и более элементов.
		 	> Каждый элемент в строке имеет свой не отрицательный индекс: 0, 1, 2, ...
		> Каждый такой элемент:
			> Сожержит тип 16-bit unsigned int
			> Содержит значение: код символа в кодировке UTF-16
		> Длина строки - это количество таких вот элементов.
			> Длина строки == 0 означает, что строка пуста - не содержит Элементов.










*****************************************************


>









-------------------------------------------------- */

























