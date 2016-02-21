/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
JavaScript.
3. Справочник объектов


		0. Global     | глобальный объект

			Свои свойства
				> Infinity						| числовое значение, означающее полож./отриц. бесконечность
				> NaN									| специальное значение 'Not a Number'
				> undefined						| означает, что переменной не было присвоено значение

			Свои методы
				> isFinite						| возвращает true, если значение не +/- Infinity или NaN; иначе false.
				> isNaN								| возвращает true, если значение равно NaN; иначе false.
				> Number							| конвертирует значение в число
				> String							| конвертирует значение в строку
				> parseInt						| парсит строку и возвращает целое число
				> parseFloat					| парсит строку и возвращает число с плавающей запятой
				> eval								| (не рекомендуется) выполняет строку как код скрипта
				> encodeURI						| кодирует URI
				> decodeURI						| декодирует URI
				> encodeURIComponent	| кодирует компонент URI
				> decodeURIComponent	| декодирует компонент URI







-------------------------------------------------- */

var string;




//Infinity
//> числовое значение, означающее полож./отриц. бесконечность

	console.log(Infinity);					// Infinity
	console.log(typeof Infinity);		// number

	console.log(-Infinity);					// -Infinity
	console.log(typeof -Infinity);	// number


//NaN
//> специальное значение 'Not a Number'

	console.log(NaN);					// NaN
	console.log(typeof NaN);  // number


//undefined
//> означает, что переменной не было присвоено значение

	var num;
	console.log(num);					// undefined

	num = undefined;					// undefined
	console.log(num);
	console.log(typeof num);	// undefined


//isFinite(number)
//> возвращает true, если значение не +/- Infinity или NaN; иначе false.

	console.log(isFinite(Infinity));		// false
	console.log(isFinite(-Infinity));		// false
	console.log(isFinite(NaN));					// false

	console.log(isFinite(10));					// true
	console.log(isFinite(-10));					// true
	console.log(isFinite(0));						// true


//isNaN(testValue)
//> возвращает true, если значение равно NaN; иначе false.

	console.log(isNaN(NaN));	// true
	console.log(isNaN(10));		// false


//Number(object)
//> конвертирует значение в число

	console.log(Number('123'));				// 123
	console.log(Number('123abc'));		// NaN
	console.log(Number(true));				// 1


//String(object)
//> конвертирует значение в строку

	string = String(123)
	console.log(string);						// '123'
	console.log(typeof string);			// string

	console.log(String(true));			// 'true'
	console.log(String(undefined));	// 'undefined'

	string = String(NaN);
	console.log(string);					// 'NaN'
	console.log(typeof string);		// string


//parseInt(string, radix);
//> парсит строку и возвращает целое число
//> string - строка, которую нужно привести к целому числу
//> radix - система счисления

	console.log(parseInt('123abc',10));		// 123
	console.log(parseInt('a12334',10));		// NaN


//parseFloat(string)
//> парсит строку и возвращает число с плавающей запятой
//> string - строка, которую нужно привести к числу с плавающей запятой

	console.log(parseFloat('123.456abcde'));	// 123.456
	console.log(parseFloat('a123.456'));			// NaN


//eval(string)
//> выполняет строку как код скрипта
//> если в параметре string лежит не строка, то то интерпретатор воспринимает
//  это так, как будто функции eval и нет в помине.
//> использовать eval НЕ РЕКОМЕНДУЕТСЯ - это нарушает безопасность программы

	eval(console.log(2+2));		// 4

	var y = 100;
	var x = eval('y + '+50);
	console.log(x);						// 150






/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Описание объекта на w3schools:
			http://www.w3schools.com/jsref/jsref_obj_global.asp

	> Описание свойств и методов глобального объекта на developer.mozilla.org
		(тут он не выделен в отдельный объект):
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Global_Objects




*****************************************************
Оглавление:

	> О глобальном объекте в javascript









*****************************************************


> О глобальном объекте в javascript
	> Между переменными и свойствами объекта в javascript нет никакой разницы,
		они никак принципиально не отличаются друг от друга.
	> Одно из первых действий, выполняемых интерпретатором javascript при
		запуске перед исполнением любого кода - создание глобального объекта.
	> Свойства глобального объекта - глобальные переменные программы.
		Т.Е. определяя в программе любую переменную в глобальной области
		видимости, вы фактически определяете свойство глобального объекта.
	> Глобальная область видимости - это и есть область видимости глобального
		объекта.
	> В глобальной области видимости ключевое слово this содержит ссылку
		как раз на тот самый глобальный объект.
	> Все прочие объекты, такие как Number, String, Object и так далее -
		это все свойства глобального объекта.
		В этом легко убедиться, посмотрев на содержимое глобального объекта:

			console.log(this);

	> В коде на глобальном уровне видимости (который не находится в функции),
		получить ссылку на глобальный объект можно с помощью ключевого слова
		this.
	> Если среда выполнения javascript-кода - это браузер, и он обеспечивает
		функционал клиентского javascript, то в такой среде глобальным объектом
		будет объект Window.
		> Среди прочих, он имеет св-во window, которое содержит ссылку на
			объект Window, и его можно использовать вместо this. Например:

				console.log(this);			// Window { ... }
				console.log(window);		// Window { ... }

	> Объект Window содержит множество различных свойств.
		> Среди них:
			> базовые глобальные свойства, такие как Infinity, NaN,
				Undefined, parseInt, parseFloat и так далее.
			> свойства со всеми глобальными объектами, такие как Object, Number,
				String и так далее.
			> Множество других свойств (см. содержимое объекта).







-------------------------------------------------- */

























