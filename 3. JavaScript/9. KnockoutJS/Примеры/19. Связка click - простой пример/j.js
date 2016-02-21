

// Создать компонент
var Model = {

	constructor: function() {
		var self = this;

		self.places = ko.observableArray(['Moscow', 'Ivanovo', 'Tver']);

		self.removePlace = function(place) {
			self.places.remove(place);
		};

		return this;
	}

};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




