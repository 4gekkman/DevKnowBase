

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

		self.myHtml = ko.observable('<div style="width: 300px; height: 300px; color: #f00; box-shadow: 0 0 10px RGBA(0,0,0,.3)">Привет!</div>');

		return self;
	}

};


// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




