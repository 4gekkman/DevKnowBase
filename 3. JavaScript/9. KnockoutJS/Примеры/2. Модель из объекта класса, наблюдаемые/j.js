/**
 * - Реализация шаблона MVVM.
 * - Связывание, наблюдаемые, двусторонняя синхронизация.
 * - Создание объекта модели на основе прототипа.
 *
**/


// Создать объект-прототип
// - На основе этого прототипа ниже мы сделаем модель.
var Model = {

	// Конструктор
	constructor: function() {

		// self
		var self = this;

		// Наблюдаемые свойства
		self.firstName = ko.observable("Иван");
		self.lastName = ko.observable("Иванов");

		// Вычисляемое свойство
		self.fullName = ko.computed(function(){

			return self.firstName() + " " + self.lastName();

		});

		// Вернуть созданный из прототипа объект
		return self;
	},

	// Функция, которая переводит значение в lastName в верхний регистр
	capitalizeLastName: function() {
        var currentVal = this.lastName();       		 // Прочитать значение lastName
        this.lastName(currentVal.toUpperCase()); 		 // Перевести его в верхний регистр и записать обратно
  }

};


// Активировать knockout.js
ko.applyBindings(Object.create(Model).constructor());
