function User(name) {
    this.sayHi = function b(name) {  // обращение к этой локальной переменной
                                     //  невозможно
        alert(name);
    }
}

var a = new User("Жора");
a.sayHi("Вася");
