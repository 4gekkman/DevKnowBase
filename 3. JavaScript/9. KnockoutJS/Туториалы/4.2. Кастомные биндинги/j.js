/** Tutorial 4
 * 4.2. Кастомные биндинги
 *
 * > Описание
 * 	 - KO позволяет делать свои, кастомные биндинги.
 * 	 - Это будет простой пример такого кастомного биндинга.
 *
 *
**/


// Мой кастомный биндинг
// - Можно нанзачить любому эл-ту, как data-bind="bigFont: "
ko.bindingHandlers.bigFont = {
    update: function(element, valueAccessor) {

				console.log(123);

				// При обновлении проверять:
				// - Если введено более 5 символов, увеличить шрифт до 40px
				// - Если введено менее 5 символов, вернуть шрифт по умолчанию
				// - В valueAccessor лежит выражение: num > 5
				if(valueAccessor()) element.style.fontSize = '40px';
				else element.style.fontSize = '';

    }
};




function ViewModel() {

	// 1. Свойства

		// Значение value в input
		this.val = ko.observable('Иван');

		// Количество символов в value input'а
		this.num = ko.computed(function(){
			return this.val().length;
		}, this);


}


// Активировать knockout.js
ko.applyBindings(new ViewModel());



















