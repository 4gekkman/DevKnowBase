


var Model = {

	constructor: function() {
  var self = this;

	self.o = ko.observable({
		name: ko.observable('ivan'),
		age: 18
	});

	return self;
	}
};



ko.applyBindings(Object.create(Model).constructor());





