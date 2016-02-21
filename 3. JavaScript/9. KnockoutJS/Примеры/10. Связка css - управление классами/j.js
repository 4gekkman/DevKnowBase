

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

		self.class1State = ko.observable(false);
		self.class2State = ko.observable(false);
		self.cssObject = ko.computed(function(){

				return {
					ivan: self.class1State(),
					petro: self.class2State()
				}

		});

		self.text = ko.computed(function(){

			// "Дотронемся" до этих наюлюдаемых.
			// - Тогда при их обновлении text тоже будет обновлятсья.
			var x = self.class1State() +
							self.class2State();

			// Вернём содержимое атрибута classes связанного элемента DIV.
			return document.getElementById('classes').className;

		});


		return self;
	}

};


// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




