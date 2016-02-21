/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
JavaScript.
3. Справочник объектов


		3. Date				| глобальный объект-конструктор для создания и работы с датой и временем

			Конструктор Date

			Свои свойства:
				> prototype				| (стат.) св-во prototype функции-конструктора Array
				> length					| (стат.) это значение = 7

			Свои методы:
				> now							| (стат.) возвращает кол-во мс, прошедших с 01.01.1970 00:00:00 UTC
				> parse						| (стат.) парсит строковое представление времени и возвращает UNIX-метку в мс
				> UTC							| (стат.) как конструктор принимает от 2 до 7 параметров, возвращает UNIX-метку UTC

				Геттеры:
					> getTimezoneOffset 	| возвращает смещение временной зоны текущего локального времени

					> getTime							| возвращает числовое представление объекта date в виде UNIX-метки
					> getFullYear					| год (4 цифры) в текущей временной зоне
					> getMonth						| месяц (0-11) в текущей временной зоне
					> getDate							| номер дня в месяце (1-31) в текущей временной зоне
					> getDay							| номер дня недели (0-6) в текущей временной зоне
					> getHours						| час (0-23) в текущей временной зоне
					> getMinutes					| минуты (0-59) в текущей временной зоне
					> getSeconds					| секунды (0-59) в текущей временной зоне
					> getMilliseconds			| миллисекунды (0-999) в текущей временной зоне

					> getUTCFullYear 			| год (4 цифры) во временной зоне UTC
					> getUTCMonth 				| месяц (0-11) во временной зоне UTC
					> getUTCDate 					| номер дня в месяце (1-31) во временной зоне UTC
					> getUTCDay 					| номер дня недели (0-6) во временной зоне UTC
					> getUTCHours 				| час (0-23) во временной зоне UTC
					> getUTCMinutes 			| минуты (0-59) во временной зоне UTC
					> getUTCSeconds 			| секунды (0-59) во временной зоне UTC
					> getUTCMilliseconds 	| миллисекунды (0-999) во временной зоне UTC

				Преобразующие в строку геттеры:
					> toDateString 				| возвращает строку с датой (без времени) в человеко-читаемой форме
					> toTimeString 				| возвращает строку с временем (без даты) в человеко-читаемой форме

					> toUTCString 				| возвращает строку с датой и временем во временной зоне UTC
					> toISOString 				| возвращает строку с датой и временем в формате ISO 8601
					> toJSON							| возвращает строку с датой в JSON формате

					> toLocaleString 			| возвращают строку с датой и временем, стилизованную "как в указанной стране"
					> toLocaleDateString 	| возвращают строку с датой (без времени), стилизованную "как в указанной стране"
					> toLocaleTimeString 	| возвращают строку с временем (без даты), стилизованную "как в указанной стране"

				Сеттеры:
					> setTime							| установить UNIX-метку объекта date
					> setFullYear 				| установить год (4 цифры) в текущей временной зоне
					> setMonth 						| установить месяц (0-11) в текущей временной зоне
					> setDate 						| установить номер дня в месяце (1-31) в текущей временной зоне
					> setHours 						| установить час (0-23) в текущей временной зоне
					> setMinutes 					| установить минуты (0-59) в текущей временной зоне
					> setSeconds 					| установить секунды (0-59) в текущей временной зоне
					> setMilliseconds 		| установить миллисекунды (0-999) в текущей временной зоне
					> setUTCFullYear 			|	установить год (4 цифры) во временной зоне UTC
					> setUTCMonth 				|	установить месяц (0-11) во временной зоне UTC
					> setUTCDate 					|	установить номер дня в месяце (1-31) во временной зоне UTC
					> setUTCHours 				|	установить час (0-23) во временной зоне UTC
					> setUTCMinutes 			|	установить минуты (0-59) во временной зоне UTC
					> setUTCSeconds				|	установить секунды (0-59) во временной зоне UTC
					> setUTCMilliseconds 	|	установить миллисекунды (0-999) во временной зоне UTC







-------------------------------------------------- */

var date, anotherDate, string, result, timestamp;




//Конструктор Date

	// Строковое представление объекта Date()  ( его toString() ):
	console.log(new Date());						 // 'Fri Nov 15 2013 12:22:28 GMT+0400 (Московское время (зима))'
	console.log(new Date().toString());	 // 'Fri Nov 15 2013 12:22:28 GMT+0400 (Московское время (зима))'


	// Числовое представление объекта Date()  ( его valueOf() ):
	console.log(+new Date());		// '1384503829163'    (это UNIX-timestamp)

	// new Date()
	console.log(new Date().toLocaleString()); // '15.11.2013 12:06:32'
	console.log(new Date().toUTCString());		// 'Fri, 15 Nov 2013 08:05:10 GMT'

	// new Date(value)
	console.log(new Date(Date.now()).toLocaleString());	// '15.11.2013 12:11:18'
	console.log(new Date(99887766554433).toLocaleString());	// '27.4.5135 13:49:14'

	// new Date(dateString);
	console.log(
			new Date('Thu, 01 Jan 1970 00:00:00 +0400')
					.toLocaleString());  // '1.1.1970 0:00:00'

	// new Date(year, month [, day, hour, minute, second, millisecond]);
	console.log(new Date(1999, 00).toLocaleString());		// '1.1.1999 0:00:00'
	console.log(
			new Date(1995, 05, 14, 13, 25, 34, 534)
					.toLocaleString());			// '14.6.1995 13:25:34'




/* Статические свойства и метды
================================*/



//length
//> (стат.) это значение = 7

	console.log(Date.length);		// 7


//Date.now()
//> (стат.) возвращает кол-во мс, прошедших с 01.01.1970 00:00:00 UTC

	date = Date.now();
	console.log(date);					// 1384504782442
	console.log(typeof date);		// number


//parse(dateString)
//> (стат.) парсит строковое представление времени и возвращает UNIX-метку в мс
//> dateString - строка с датой и временем в формате RFC 2822

	string = 'Thu, 01 Jan 1971 00:00:00 +0000';
	date = Date.parse(string);
	console.log(date);					// 31536000000
	console.log(typeof date);		// number


//Date.UTC(year,month[,date[,hrs[,min[,sec[,ms]]]]])
//> (стат.) как конструктор принимает от 2 до 7 параметров, возвращает UNIX-метку UTC

	console.log(Date.UTC(1995, 05, 14, 13, 25, 34, 534));		// 803136334534



/* Геттеры
================================*/


//dateObj.getTimezoneOffset()
//> возвращает смещение временной зоны текущего локального времени
//> значение возвращает в виде числа минут

	result = new Date().getTimezoneOffset();
	console.log(result);						// -240
	console.log(typeof result);			// number


//dateObj.getTime()
//> возвращает числовое представление объекта date в виде UNIX-метки

	console.log(new Date().getTime());		// 1384505479831

	birthday = new Date(2014, 0, 24).getTime();

	result = birthday - new Date().getTime();
	result /= 1000*60*60;
	console.log(result.toFixed(2));		// 1667.04 осталось до моего дня рождения

	console.log(new Date(1945,0,1).getTime());		// -788932800000


//dateObj.getFullYear()
//> год (4 цифры) в текущей временной зоне

	date = (new Date().getFullYear());
	console.log(new Date().getFullYear());		// 2013
	console.log(typeof date);									// number


//dateObj.getMonth()
//> месяц (0-11) в текущей временной зоне

	console.log(new Date().getMonth());				// 10 (ноябрь, 0 - январь, 11 - декабрь)


//dateObj.getDate()
//> номер дня в месяце (1-31) в текущей временной зоне

	console.log(new Date().getDate());				// 15


//dateObj.getDay()
//> номер дня недели (0-6) в текущей временной зоне

	console.log(new Date().getDay());					// 5


//dateObj.getHours()
//> час (0-23) в текущей временной зоне

	console.log(new Date().getHours());				// 13


//dateObj.getMinutes()
//> минуты (0-59) в текущей временной зоне

	console.log(new Date().getMinutes());			// 6


//dateObj.getSeconds()
//> секунды (0-59) в текущей временной зоне

	console.log(new Date().getSeconds());			// 28


//dateObj.getMilliseconds()
//> миллисекунды (0-999) в текущей временной зоне

	console.log(new Date().getMilliseconds());	// 812





/* Преобразующие в строку геттеры
================================*/

//dateObj.toDateString()
//> возвращает строку с датой (без времени) в человеко-читаемой форме

	console.log(new Date().toDateString());		// 'Fri Nov 15 2013'


//dateObj.toTimeString()
//> возвращает строку с временем (без даты) в человеко-читаемой форме

	console.log(new Date().toTimeString());		// '14:29:06 GMT+0400 (Московское время (зима))'


//dateObj.toUTCString()
//> возвращает строку с датой и временем во временной зоне UTC

	console.log(new Date().toUTCString());		// 'Fri, 15 Nov 2013 10:35:22 GMT'


//dateObj.toISOString()
//> возвращает строку с датой и временем в формате ISO 8601

	console.log(new Date().toISOString());		//	'2013-11-15T10:36:03.364Z'


//dateObj.toJSON()
//> возвращает строку с датой в JSON формате

	console.log(new Date().toJSON());					//	'2013-11-15T10:37:20.658Z'


//dateObj.toLocaleString([locales [, options]])
//> возвращают строку с датой и временем, стилизованную "как в указанной стране"
//> locales - строка или массив с меткой языка в формате BCP 47
//> options - объект с некоторыми или всеми опциями:
//  > localeMatcher - какой locale matching алгоритм использовать,
// 		возможны 2 значения:
//    - lookup
//    - best fit (по умолчанию)
//  > timeZone - какую использовать временную зону; по умолчанию - локаль компьютера;
//	  еще может быть "UTC" и также имена временных зон по ссылке: https://www.iana.org/time-zones
//  > hour12 - использовать ли 12-чисовое время (true) или 24-часовое (false)
//  > formatMatcher - какой format matching алгоритм использовать,
//		возможны 2 значения: "basic" и "best fit" (по умолчанию).

	console.log(new Date().toLocaleString());					// '15.11.2013 15:01:53'


//dateObj.toLocaleDateString([locales [, options]])
// возвращают строку с датой (без времени), стилизованную "как в указанной стране"

	console.log(new Date().toLocaleDateString());			// '15.11.2013'


//dateObj.toLocaleTimeString([locales [, options]])
// возвращают строку с временем (без даты), стилизованную "как в указанной стране"

	console.log(new Date().toLocaleTimeString());			// '15:03:28'





/* Сеттеры
================================*/


//dateObj.setTime(timeValue)
//> установить UNIX-метку объекта date в UTC
//> timeValue - UNIX-метка в UTC

	timestamp = new Date(2014, 0, 24).getTime();
	anotherDate = new Date();
	anotherDate.setTime(timestamp);
	console.log(anotherDate.toLocaleString());		// '24.1.2014 0:00:00'


//dateObj.setFullYear(yearValue[, monthValue[, dayValue]])
//> установить год (4 цифры) в текущей временной зоне
//> если не устаносить monthValue, то значение не явно возьмется из getMonth()
//> если не устаносить dayValue, то значение не явно возьмется из getDate()
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит; например, если задать месяц 15, то функция просто
//  прибавит + 1 к году, и задаст 3-й месяц (цифра 2).

	date = new Date();
	date.setFullYear(1995, 0, 24);
	console.log(date.toLocaleDateString());		// '24.1.1995'

	date = new Date();
	date.setFullYear(1995, 15, 24);
	console.log(date.toLocaleDateString());		// '24.4.1996'


//dateObj.setMonth(monthValue[, dayValue])
//> установить месяц (0-11) в текущей временной зоне
//> если не устаносить dayValue, то значение не явно возьмется из getDate()
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит

	date = new Date('Fri, 01 Jan 2010 12:59:59');
	date.setMonth(10,15);
	console.log(date.toLocaleString());		// '15.11.2010 12:59:59'


//dateObj.setDate(dayValue)
//> установить номер дня в месяце (1-31) в текущей временной зоне
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит

	date = new Date('Fri, 01 Jan 2010 12:59:59');
	date.setDate(15);
	console.log(date.toLocaleString());		// '15.1.2010 12:59:59'


//dateObj.setHours(hoursValue[, minutesValue[, secondsValue, msValue]])
//> установить час (0-23) в текущей временной зоне
//> если не указать параметры minutesValue, secondsValue и msValue, то
//  значения для них неявно будут взяты из следующих методов соответственно:
//  getMinutes(), getSeconds(), и getMilliseconds()
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит

	date = new Date('Fri, 01 Jan 2010 12:59:59');
	date.setHours(10, 29, 59, 534);
	console.log(date.toLocaleTimeString());		// '10:29:599'
	console.log(date.getMilliseconds());			// 534


//dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])
//> установить минуты (0-59) в текущей временной зоне
//> если не указать параметры secondsValue, msValue, то
//  значения для них неявно будут взяты из следующих методов соответственно:
//  getSeconds(), getMilliseconds()
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит

	date = new Date('Fri, 01 Jan 2010 12:59:59');
	date.setMinutes(29, 39, 534);
	console.log(date.toLocaleTimeString());		// '12:29:39'
	console.log(date.getMilliseconds());			// 534


//dateObj.setSeconds(secondsValue[, msValue])
//> установить секунды (0-59) в текущей временной зоне
//> если не указать параметр msValue, то значение для него неявно будет
// 	взято из getMilliseconds()
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит

	date = new Date('Fri, 01 Jan 2010 12:59:59');
	date.setSeconds(45, 534);
	console.log(date.toLocaleTimeString());		// '12:59:45'
	console.log(date.getMilliseconds());			// 534


//setMilliseconds
//> установить миллисекунды (0-999) в текущей временной зоне
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит

	date = new Date('Fri, 01 Jan 2010 12:59:59');
	date.setMilliseconds(213);
	console.log(date.getMilliseconds());			// 213


//dateObj.setUTCFullYear(yearValue[, monthValue[, dayValue]])
//>	установить год (4 цифры) во временной зоне UTC
//> если не устаносить monthValue, то значение не явно возьмется из getUTCMonth()
//> если не устаносить dayValue, то значение не явно возьмется из getUTCDate()
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит; например, если задать месяц 15, то функция просто
//  прибавит + 1 к году, и задаст 3-й месяц (цифра 2).

	date = new Date();
	date.setUTCFullYear(1995, 0, 24);
	console.log(date.toLocaleDateString());		// '24.1.1995'

	date = new Date();
	date.setUTCFullYear(1995, 15, 24);
	console.log(date.toLocaleDateString());		// '24.4.1996'


//dateObj.setUTCMonth(monthValue[, dayValue])
//>	установить месяц (0-11) во временной зоне UTC
//> если не устаносить dayValue, то значение не явно возьмется из getUTCDate()
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит

	date = new Date('Fri, 01 Jan 2010 12:59:59');
	date.setUTCMonth(10,15);
	console.log(date.toLocaleString());		// '15.11.2010 12:59:59'


//dateObj.setUTCDate(dayValue)
//>	установить номер дня в месяце (1-31) во временной зоне UTC
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит

	date = new Date('Fri, 01 Jan 2010 12:59:59');
	date.setUTCDate(15);
	console.log(date.toLocaleString());		// '15.1.2010 12:59:59'


//dateObj.setUTCHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
//>	установить час (0-23) во временной зоне UTC
//> если не указать параметры minutesValue, secondsValue и msValue, то
//  значения для них неявно будут взяты из следующих методов соответственно:
//  getUTCMinutes(), getUTCSeconds(), и getUTCMilliseconds()
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит

	date = new Date('Fri, 01 Jan 2010 12:59:59');
	date.setUTCHours(10, 29, 59, 534);
	console.log(date.toLocaleTimeString());		// '14:29:59'
	console.log(date.getMilliseconds());			// 534


//dateObj.setUTCMinutes(minutesValue[, secondsValue[, msValue]])
//>	установить минуты (0-59) во временной зоне UTC
//> если не указать параметры secondsValue, msValue, то
//  значения для них неявно будут взяты из следующих методов соответственно:
//  getUTCSeconds(), getUTCMilliseconds()
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит

	date = new Date('Fri, 01 Jan 2010 12:59:59');
	date.setUTCMinutes(29, 39, 534);
	console.log(date.toLocaleTimeString());		// '12:29:39'
	console.log(date.getMilliseconds());			// 534


//dateObj.setUTCSeconds(secondsValue[, msValue])
//>	установить секунды (0-59) во временной зоне UTC
//> если не указать параметр msValue, то значение для него неявно будет
// 	взято из getUTCMilliseconds()
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит

	date = new Date('Fri, 01 Jan 2010 12:59:59');
	date.setUTCSeconds(45, 534);
	console.log(date.toLocaleTimeString());		// '12:59:45'
	console.log(date.getMilliseconds());			// 534


//dateObj.setUTCMilliseconds(millisecondsValue)
//>	установить миллисекунды (0-999) во временной зоне UTC
//> если заданный параметр выйдет за границы допустимого диапазона, функция
//  сама все исправит

	date = new Date('Fri, 01 Jan 2010 12:59:59');
	date.setUTCMilliseconds(213);
	console.log(date.getMilliseconds());			// 213
















/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------


Ссылки:


	> Описание объекта на developer.mozilla.org:
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FDate

	> Формат RFC 2822 (который понимает функция Date.parse() )
			http://tools.ietf.org/html/rfc2822#page-14



*****************************************************
Оглавление:

	> Конструкторы Date










*****************************************************


> Конструкторы Date
	> new Date()
	> new Date(value)
		- value - кол-во миллисекунд, прошедших с 01.01.1970 00:00:00 UTC
	> new Date(dateString)
		- dateString - строка в определенном формате, представляющая дату и время,
			формат строки должен распознаваться функцией Date.parse()

	> new Date(year, month [, day, hour, minute, second, millisecond])









-------------------------------------------------- */

























