

// Создать компонент
var Model = {
	constructor: function(){
		var self = this;

		self.buyer = { name: 'Иван', credits: 250 };
		self.seller = { name: 'Петро', credits: 5800 };

		return self;
	}
};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




