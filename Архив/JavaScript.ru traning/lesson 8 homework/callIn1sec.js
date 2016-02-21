function User(name) {
    this.name = name;
    this.sayHi = function() {
        alert(this.name);
    }.bind(this);
}

var vasya = new User("Vasya");
setTimeout(vasya.sayHi,1000);