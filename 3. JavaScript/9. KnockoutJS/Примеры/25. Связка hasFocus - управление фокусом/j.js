

// Создать компонент
var Model = {

	constructor: function(){
		var self = this;

		self.isSelected = ko.observable();
		self.setIsSelected = function() {
			self.isSelected(true);
		};

		return self;
	}

};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




