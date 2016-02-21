/* 1. Window.location
--------------------------
Оглавление:

	Общая информация

		- Ссылки
		- Обзор и примеры
			- Получить полный URL документа
			- Запросить и отобразить документ по адресу newURL
			- Перезагрузить текущий документ с сервера
			- Показать значения всех свойств объекта Location в консоли
			- Отправить методом GET на сервер строку "some=data&ivan=pete" в query string
			- Функция для получения значения по указанному ключу из query string
			- Извлечь все параметры из query string и поместить их в объект

	Свойства

			Пример: http://ya.ru/some?ivan=petrov#123

		- hash  			| '#123'
		- host        | 'ya.ru'
		- hostname    | 'ya.ru'
		- href        | 'http://ya.ru/some?ivan=petrov#123'
		- origin      | 'http://ya.ru/'
		- pathname    | '/some'
		- protocol    | 'http'
		- search      | '?ivan=petrov#123'

	Стандартные методы

		- assign(url)  | Открыть документ по указанному URL, с удалением из "истории" документа.
		- reload(serv) | Перезагрузить текущую страницу. reload() - из кэша. reload(true) - с сервера.
		- replace(url) | Открыть документ по указанному URL, без удаления из "истории" документа.

  Мои трюки

  	- URL без query string
  	- Query string без ? в начале
  	- Полный URI без \ в начале


--------------------------


Общая информация

// Ссылки

		- Справочник по объекту window.location на developer.mozilla.com:
				https://developer.mozilla.org/en-US/docs/Web/API/Window.location

		- W3C - справочник свойств и методов объекта Window.location:
				http://www.w3schools.com/jsref/obj_location.asp

// Обзор и примеры
	- Свойство Window.location содержит ссылку на объект Location.
	- Объект Location содержит информацию о местоположении документа.
	- Строковое представление объекта Location выдаёт полный URL.
	  - Объекту Location также можно присвоить строку с URL.
	  - В этом случае произойдёт будет запрошен и отображён документ по этому URL.
	- Примеры:


		- Получить полный URL документа

				var oldLocation = window.location;
				var oldLocation = window.location.href;  // синоним


		- Запросить и отобразить документ по адресу newURL

				window.location = newURL;


	  - Перезагрузить текущий документ с сервера

	  		window.location.reload(true);


	  - Показать значения всех свойств объекта Location в консоли

				function showLocationProps() {

					var locObj = window.location;
					for (var prop in locObj) {
						console.log( typeof locObj[prop] + ' ' + prop + ' = ' + (locObj[prop] || "n/a") );
					}

				}


		- Отправить методом GET на сервер строку "some=data&ivan=pete" в query string
			- Допустим, мы находимся в документе с адресом: google.com
			- Выполняем следующее выражение:

					window.location.search = 'some=data&ivan=pete';

			- Эта команда производит следующий HTTP-запрос методом GET:
					"http://google.com?some=data&ivan=pete"
			- Запрошенный документ отображается в окне браузера.


		- Функция для получения значения по указанному ключу из query string

			- Функция:

					function loadPageVar (sVar) {
						return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
					}

			- Допустим, у нас такая query string: some=data&ivan=pete
			- Получим значение параметра 'some':

					var value = loadPageVar('some');  // "data"


		- Извлечь все параметры из query string и поместить их в объект

				var oGetVars = {};

				if (window.location.search.length > 1) {
					for (var aItKey, nKeyId = 0, aCouples = window.location.search.substr(1).split("&"); nKeyId < aCouples.length; nKeyId++) {
						aItKey = aCouples[nKeyId].split("=");
						oGetVars[decodeURIComponent(aItKey[0])] = aItKey.length > 1 ? <span style="line-height: normal;">decodeURIComponent</span><span style="line-height: normal;">(aItKey[1]) : "";</span>
					}
				}



Стандартные методы


  // Открыть документ по указанному URL, с удалением из "истории" документа.
  // assign(url)
	// - История документа удаляется.
	// - Нельзя будет нажать кнавишу "Назад", чтобы вернуться назад.
	// - url - адрес документа, который требуется открыть.

		- Перейти на сайт гугла:

				window.location.assign('http://google.com');  // перейти на сайт гугла


	// reload(serv)    | Перезагрузить текущую страницу. reload() - из кэша. reload(true) - с сервера.


	// Открыть документ по указанному URL, без удаления из "истории" документа.
	// replace(url)
	// - История документа НЕ удаляется.
	// - Можно будет нажать кнавишу "Назад", чтобы вернуться назад.
	// - url - адрес документа, который требуется открыть.

		- Перейти на сайт гугла:

				window.location.replace('http://google.com');


Мои трюки

 // URL без query string

 		var x = window.location.href.split('?')[0];   // "http://ya.ru/some"


 // Query string без ? в начале

 		var qs = window.location.search.slice(1);		 // "ivan=petrov"


 // Полный URI без \ в начале

 		var x = (window.location.pathname + window.location.search).slice(1);







*/


