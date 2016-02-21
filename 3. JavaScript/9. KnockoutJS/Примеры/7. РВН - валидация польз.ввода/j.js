

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

		// Наблюдаемое св-во для хранения значения из input
    self.acceptedNumericValue = ko.observable(123);

		// Наблюдаемое св-во: был ли последний ввод валидным? (true/false).
		// - При старте передаём true, чтобы ошибка не выскакивала
    self.lastInputWasValid = ko.observable(true);

		// Вычисляемое наблюдаемое редактируемое свойство
		// - При чтении возвращает acceptedNumericValue
		// - При записи см. write
    self.attemptedValue = ko.computed({

			// При чтении
			read: self.acceptedNumericValue,

			// При записи
			write: function (value) {

				// Если было передано не число
				if (isNaN(value)) {

					// Записать false в lastInputWasValid
					self.lastInputWasValid(false);

				}

				// Если было передано число
				else {

					// Записать true в lastInputWasValid
					self.lastInputWasValid(true);

					// Записать value в acceptedNumericValue
					self.acceptedNumericValue(value);

				}

      },

			// Указать контекст
      owner: self

    });

		return self;
	}

};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




