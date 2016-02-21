

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

		self.class1State = ko.observable(false);
		self.cssObject = ko.computed(function(){

				if(self.class1State())
					return { backgroundColor: '#aaa'};

				else
					return { backgroundColor: '#eee' };

		});

		return self;
	}

};


// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




