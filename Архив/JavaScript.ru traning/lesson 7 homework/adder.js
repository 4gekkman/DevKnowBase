function Adder(startVal) {
    this.value = startVal;
    this.addInput = function() {
        this.value = this.value + +prompt("Число","");
    };
    this.showValue = function() {
        console.log(this.value);
    };
}

var adr = new Adder(3);
adr.showValue();
adr.addInput(5);
adr.showValue();