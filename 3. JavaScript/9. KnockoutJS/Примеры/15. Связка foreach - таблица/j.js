

// Создать модель
var Model = {

	constructor: function (){
		var self = this;

    self.people = ko.observableArray([
			{ firstName: 'Bert', lastName: 'Bertington' },
			{ firstName: 'Charles', lastName: 'Charlesforth' },
			{ firstName: 'Denise', lastName: 'Dentiste' }
    ]);

    self.addPerson = function() {
        self.people.push({ name: "New at " + new Date() });
    };

    self.removePerson = function() {
        self.people.remove(this);
    };

		return self;
	}

};


// Активировать модель
ko.applyBindings(Object.create(Model).constructor());




