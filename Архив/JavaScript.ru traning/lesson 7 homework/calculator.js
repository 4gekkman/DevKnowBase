var calculator = {};
calculator.readValues = function() {
    this.a = +prompt("a","");
    this.b = +prompt("b","");
};
calculator.sum = function() {
    return this.a+this.b;
};
calculator.mul = function() {
    return this.a*this.b;
};

calculator.readValues();
alert(calculator.sum());
alert(calculator.mul());