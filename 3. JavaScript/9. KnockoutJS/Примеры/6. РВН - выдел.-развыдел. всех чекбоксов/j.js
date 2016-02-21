

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

		// Все варианты для выбора
    self.produce = [ 'Apple', 'Banana', 'Celery', 'Corn', 'Orange', 'Spinach' ];

		// Выбранные чекбоксы
		self.selectedProduce = ko.observableArray([ 'Corn', 'Orange' ]);

		// Редактируемая вычисляемая наблюдаемая
    self.selectedAllProduce = ko.computed({
			read: function () {

				// Если выбрано столько же эл-тов, сколько в produce, значит выбраны все.
				return self.selectedProduce().length === self.produce.length;

			},
			write: function (value) {

				// Произвести следующеие действия:
				// - Если флажок снимается, удалить все эл-ты из selectedProduce
				// - Если флажок ставиться, скопировать содержимое produce в selectedProduce
				self.selectedProduce(value ? self.produce.slice(0) : []);

			},
			owner: self
    });

		return self;
	}

};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




