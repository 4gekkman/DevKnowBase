/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
JavaScript.
3. Справочник объектов


		5. Number			| объект-обертка для значений типа number, для работы с этими типами

			Конструктор Number

			Свои свойства:
				> prototype						| (стат.) св-во prototype функции-конструктора Number
				> MAX_VALUE						| (стат.) возвращает MAX возможное числовое значение
				> MIN_VALUE						| (стат.) возвращает MIN возможное числовое значение
				> NaN									| (стат.) специальное значение 'Not a Number'
				> NEGATIVE_INFINITY		| (стат.) отрицательная бесконечность
				> POSITIVE_INFINITY		| (стат.) положительная бесконечность

			Свои методы:
				> toExponential()			| возвращает строку с числом в экспоненцаильной нотации
				> toFixed()						| возвращает строку, представляющую число, округленное до указанного кол-ва цифр после запятой
				> toPrecision()				| возвращает строку, представляющую число, округленное до указанного кол-ва цифр в общем







-------------------------------------------------- */

var num,string;



//Конструктор Number

	// Создать объект-обертку для числа, и завернуть в него число 10
	num = new Number(10);			// здесь 10 - это то, что вернет valueOf этого объекта
														// 	(т.е. это его числовое представление)
	console.log(+num);				// 10
	console.log(typeof num); 	// object

	// А здесь никакого объекта-обертки не создается, просто происходит приведение к числу
	num = Number(10);
	console.log(num);
	console.log(typeof num);	// number


//MAX_VALUE
//> (стат.) возвращает MAX возможное числовое значение
//> Числа, которые больше MAX_VALUE, становится +Infinity

	num = Number.MAX_VALUE;
	console.log(num);				// 1.7976931348623157e+308

	num *= 2;
	console.log(num);				// Infinity


//MIN_VALUE
//> (стат.) возвращает MIN возможное числовое значение
//> Числа, которые меньше MIN_VALUE, становится 0. Такие числа
//  называют 'underflow values'.

	num = Number.MIN_VALUE;
	console.log(num);				// 5e-324

	num /= 2;
	console.log(num);				// 0


//NaN
//> (стат.) специальное значение 'Not a Number'
//> Эквивалент значения NaN.

	console.log(Number.NaN);		// NaN
	console.log(NaN);						// NaN


//NEGATIVE_INFINITY
//> (стат.) отрицательная бесконечность
//> Это аналог свойства Infinity объекта Global

//POSITIVE_INFINITY
//> (стат.) положительная бесконечность
//> Это аналог свойства Infinity объекта Global

	num = Number.NEGATIVE_INFINITY
	console.log(num);													// -Infinity
	console.log(-Infinity);										// -Infinity

	console.log(10 * num);										// -Infinity
	console.log(Number.POSITIVE_INFINITY * num); 	// -Infinity
	console.log(num / 10);										// -Infinity

	console.log(-10 * num);										// Infinity
	console.log(num * num);										// Infinity
	console.log(num / -10);										// Infinity

	console.log(0 * num);											// NaN
	console.log(NaN * num);										// NaN
	console.log(num / num);  									// NaN
	console.log(num / Number.POSITIVE_INFINITY);  // NaN

	console.log(10 / num);										// 0


//numObj.toExponential(fractionDigits)
//> возвращает строку с числом в экспоненцаильной нотации
//> fractionDigits - целое число - кол-во цифр после запятой

	string = Number(100500).toExponential(5);
	console.log(string);											// '1.00500e+5'
	console.log(typeof string);								// string


//numObj.toFixed(digits)
//> возвращает строковое представление числа, которое выглядит как число
//  с фиксированной запятой.
//> digits - кол-во цифр после запятой

	string = Number(100500.345234).toFixed(2);
	console.log(string);												// '100500.35'
	console.log(typeof string);									// string


//numObj.toPrecision(precision)
//> возвращает строку, представляющую число, округленное до указанного
// 	кол-ва цифр в общем
//> precision - кол-во цифр, до которого округлить число

	console.log(Number(123.345).toPrecision(4));	// '123.3'
	console.log(Number(123.345).toPrecision(2));	// '1.2e+2'










/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Описание объекта на developer.mozilla.org:
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FNumber






*****************************************************
Оглавление:

	>










*****************************************************


>








-------------------------------------------------- */

























