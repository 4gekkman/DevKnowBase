

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

		self.imageUrl = ko.observable('http://artmmuseum.ru/wp-content/uploads/2013/08/Widescreen_Flag_of_Russia_021276_.jpg');
		self.attrs = ko.computed(function(){

			return {
				"src": self.imageUrl
			};

		});

		return self;
	}

};


// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




