

// Создать компонент
var Model = {

	constructor: function() {
		var self = this;

		self.detailsEnabled = ko.observable(false);

		self.enableDetails = function() {
				self.detailsEnabled(true);
		};

		self.disableDetails = function() {
				self.detailsEnabled(false);
		};

		self.eventsHandlersObj = {
			mouseover: self.enableDetails,
			mouseout: self.disableDetails
		};

		return this;
	}

};

// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




