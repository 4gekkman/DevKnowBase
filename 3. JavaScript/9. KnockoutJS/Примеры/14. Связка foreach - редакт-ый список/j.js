

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

    self.people = ko.observableArray([
        { name: 'Bert' },
        { name: 'Charles' },
        { name: 'Denise' }
    ]);

    self.removePerson = function() {
      self.people.remove(this);
    };

		return self;
	}

};


// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




