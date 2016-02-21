/** Tutorial 1
 * 1. MVVM, binding, observable, computed
 *
 *	> Задача
 *		- Продемонстрировать, как KnockoutJS позволяет реализовывать MMVM.
 *
**/



// Создать ViewModel
function AppViewModel() {

		// Наблюдаемые свойства
    this.firstName = ko.observable("Иван");
    this.lastName = ko.observable("Иванов");

	  // Computed свойство
		this.fullname = ko.computed(function(){
			return this.firstName() + " " + this.lastName();
		}, this);

		// Функция, которая переводит значение в lastName в верхний регистр
    this.capitalizeLastName = function() {
        var currentVal = this.lastName();       		 // Прочитать значение lastName
        this.lastName(currentVal.toUpperCase()); 		 // Перевести его в верхний регистр и записать обратно
    };

}

// Активировать knockout.js
ko.applyBindings(new AppViewModel());
