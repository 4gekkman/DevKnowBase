/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
JavaScript.
3. Справочник объектов


		7. RegExp			| глобальный объект для создания и работы с регулярными выражениями

			Конструктор RegExp

			Свои свойства:
				> prototype				| (стат.) св-во prototype функции-конструктора RegExp
				> length					| (стат.) всегда 2
				> constructor			|	ссылка на объект-функцию-конструктор
				> global					|	регулярное выражение с флагом g
				> ignoreCase			| регулярное выражение с флагом i
				> multiline				| регулярное выражение с флагом m
				> lastIndex				| индекс, с которого начать следующий поиск
				> source					| строка с текстом паттерна

			Свои методы:
				> exec			| применяет это РегВыр к строке в аргументе, возвращает индекс 1-го совпадения или null
				> test			| применяет это РегВыр к строке в аргументе, возвращает true / false






-------------------------------------------------- */

var regexp, regexp2, string, lastindex, result;


//Конструктор RegExp

	regexp = /абв/gmi;
	regexp = new RegExp('абв','gmi');


//length
//> (стат.) всегда 2

	console.log(RegExp.length);		// 2


//constructor
//> ссылка на объект-функцию-конструктор

	regexp = /абв/gmi;
	console.log(regexp.constructor);		// function RegExp() { [native code] }


//global
//> регулярное выражение с флагом g
//> содержит true - если RegExp создан с флагом g
//> содержит false - если RegExp создан без флага g

	regexp = /абв/g;
	console.log(regexp.global);			// true

	regexp = /абв/;
	console.log(regexp.global);			// false


//ignoreCase
//> регулярное выражение с флагом i
//> содержит true - если RegExp создан с флагом i
//> содержит false - если RegExp создан без флага i

	regexp = /абв/i;
	console.log(regexp.ignoreCase);			// true

	regexp = /абв/;
	console.log(regexp.ignoreCase);			// false


//multiline
//> регулярное выражение с флагом m
//> содержит true - если RegExp создан с флагом m
//> содержит false - если RegExp создан без флага m

	regexp = /абв/m;
	console.log(regexp.multiline);			// true

	regexp = /абв/;
	console.log(regexp.multiline);			// false


//lastIndex
//> индекс, с которого начать следующий поиск

	string = 'Where is Jones? I want Jones come here now!';
	regexp = /Jones/g;
	console.log(regexp.exec(string));		// ["Jones", index: 9, input: "Where is Jones? I want Jones come here now!"]
	console.log(regexp.lastIndex);			// 14

	console.log(regexp.exec(string));		// ["Jones", index: 23, input: "Where is Jones? I want Jones come here now!"]
	console.log(regexp.lastIndex);			// 23


//source
//> строка с текстом паттерна

	console.log(regexp.source);					// 'Jones'




//RegExpObject.exec(string)
//> применяет это РегВыр к строке в аргументе, возвращает индекс
//  1-го совпадения или null

	// примеры см. выше



//RegExpObject.test(string)
//> применяет это РегВыр к строке в аргументе, возвращает
// 	true / false

	string = 'Where is Jones? I want Jones come here now!';
	regexp = /Jones/;
	regexp2 = /Nancy/;

	console.log(regexp.test(string));			// true
	console.log(regexp2.test(string));		// false





/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Описание объекта на developer.mozilla.org:
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FRegExp




*****************************************************
Оглавление:

	>










*****************************************************


>









-------------------------------------------------- */

























