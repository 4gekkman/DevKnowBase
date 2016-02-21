

// Создать компонент
var Model = {

	constructor: function(){
		var self = this;

		self.someHandler = function() {

			alert('Форма отправлена');

		};

		return self;
	}

};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




