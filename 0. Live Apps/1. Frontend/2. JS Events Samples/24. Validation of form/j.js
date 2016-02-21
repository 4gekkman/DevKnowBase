/**
 * Задача:
 *
 * > Написать функцию validate(form), которая проверяет форму form на
 *   ошибки при нажатии на кнопку "Проверить"
 *
 * > Проверку следует проводить на следующие ошибки:
 * 	 - Поле не заполнено
 * 	 - Пароли не совпадают
 *
 * > В случае ошибки справа от поля с ошибкой должно появляться сообщение
 * 	 об ошибке.
 *
 *
 *
 *
 *
 * Архитектура решения:
 *
 * 1. Создать функцию validate(form). Выполнить в ней: [2-3]
 *
 * 2. Получить NodeList со ссылками на все элементы формы с помощью
 * 		её свойства form.elements.
 *
 * 3. Написать функцию showError(elem, color, message, className), которая
 * 		"уведомляет пользователя" об ошибке:
 * 		> Делает элементу elem "outline: 1px solid color"
 * 		> Добавляет родителю эл-та elem в конец новый эл-т span с классом
 * 			className, и содержащий сообщение message класным цветом. Причем,
 * 		  он должен добавляться только, если его там еще нет.
 *
 * 4. Написать функцию removeError(elem, className), которая удаляет
 * 		"уведомления пользователя" об ошибке:
 * 		> Убирает у элемента elem outline.
 * 		> Убирает добавленный ф-ией showError span с классом className, если
 * 			он там есть.
 *
 * 5. С помощью полученного в п.2 NodeList устроить цикл по всем эл-там
 * 		формы для их валидации.
 * 		> Проверка №1 - всех эл-тов формы, на отсутствие/присутствие
 * 										введенного значения. Задействовать функции из п.3 и п.4.
 * 		> Проверка №2 - эл-та формы с name='password'.
 * 			- Если значение эл-та с name='password' не совпадает со значением
 * 				эл-та с name='password1', то для эл-та с name='password' удалить
 * 				с помощью ф-ии из п.4. все существующие уведомления об ошибках,
 * 			  и создать новое уведомление о том, что пароли не совпадают.
 *
 *
 *
 *
 */


//1. Создать функцию validate(form). Выполнить в ней: [2-3]
var validate = function(form) {



	//2. Получить NodeList со ссылками на все элементы формы с помощью
	//		её свойства form.elements.
	var elements = form.elements;




	//3. Написать функцию showError(elem, color, message, className), которая
	//		"уведомляет пользователя" об ошибке:
	//		> Делает элементу elem "outline: 1px solid color"
	//		> Добавляет родителю эл-та elem в конец новый эл-т span с классом
	//			className, и содержащий сообщение message класным цветом. Причем,
	//		  он должен добавляться только, если его там еще нет.
	var showError = function(elem, color, message, className) {

		// Окрасить outline эл-та elem в красный цвет
		elem.style.outlineColor = '#f00';
		elem.style.outlineWidth = '1px';
		elem.style.outlineStyle = 'solid';


		// Добавить справа от него эл-т span с текстом ошибки, если его еще нет
		if(elem.parentNode.lastChild.className !== className) {
			var newErrorSpan = document.createElement('span');
			newErrorSpan.innerHTML = message;
			newErrorSpan.className = className;
			newErrorSpan.style.color = color;
			elem.parentNode.appendChild(newErrorSpan);
		}

	};



	//4. Написать функцию removeError(elem, className), которая удаляет
	//		"уведомления пользователя" об ошибке:
	//		> Убирает у элемента elem outline.
	//		> Убирает добавленный ф-ией showError span с классом className, если
	//			он там есть.
	var removeError = function(elem, className) {

		// Убрать outline у элемента elem
		elem.style.outlineWidth = '0';

		// Убрать span с сообщением об ошибке
		if(elem.parentNode.lastChild.className === className) {
			elem.parentNode.removeChild(elem.parentNode.lastChild);
		}

	};



	//5. С помощью полученного в п.2 NodeList устроить цикл по всем эл-там
	//		формы для их валидации.
	//		> Проверка №1 - всех эл-тов формы, на отсутствие/присутствие
	//										введенного значения. Задействовать функции из п.3 и п.4.
	//		> Проверка №2 - эл-та формы с name='password'.
	//			- Если значение эл-та с name='password' не совпадает со значением
	//				эл-та с name='password1', то для эл-та с name='password' удалить
	//				с помощью ф-ии из п.4. все существующие уведомления об ошибках,
	//			  и создать новое уведомление о том, что пароли не совпадают.
	for(var i = elements.length-1; i>=0; i--) {

		// Удалить все старые сообщения об ошибках
		removeError(elements[i],'error-message');


		// Проверить поле input типа text с name='from'
		if(elements[i].name === 'from') {

			// Если значение value эл-та пусто, то:
			if(!elements[i].value) showError(elements[i],'#f00','Введите своё имя','error-message');

			// Если значение value эл-та не пусто, то:
			else removeError(elements[i],'error-message');

		}


		// Проверить поле input типа password с name='password'
		if(elements[i].name === 'password') {

			// Проверка на пустоту значения:

				// Если значение value эл-та пусто, то:
				if(!elements[i].value) showError(elements[i],'#f00','Введите пароль','error-message');

				// Если значение value эл-та не пусто, то:
				else removeError(elements[i],'error-message');


			// Проверка на совпадение паролей
			if(elements[i].value !== elements[i+1].value) {

				// Удалить старые сообщения об ошибках
				removeError(elements[i],'error-message');

				// Создать новое:
				showError(elements[i],'#f00','Пароли не совпадают','error-message');

			}

		}


		// Проверить поле input типа password с name='password2'
		if(elements[i].name === 'password2') {

		}


		// Проверить элемент select с name='to'
		if(elements[i].name === 'to') {

			// Если значение value эл-та пусто, то:
			if(!elements[i].value) showError(elements[i],'#f00','Укажите, куда вы хотели бы отправить письмо','error-message');

			// Если значение value эл-та не пусто, то:
			else removeError(elements[i],'error-message');

		}


		// Проверить элемент textarea с name='message'
		if(elements[i].name === 'message') {

			// Если значение value эл-та пусто, то:
			if(!elements[i].value) showError(elements[i],'#f00','Введите сообщение','error-message');

			// Если значение value эл-та не пусто, то:
			else removeError(elements[i],'error-message');

		}



	}




	console.log(elements);
	console.log(elements[0]);
	console.log(elements[0].nodeName);
	console.log(elements[0].type);
	console.log(elements[0].name);

};


