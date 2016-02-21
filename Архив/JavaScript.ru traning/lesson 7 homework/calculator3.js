
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function Calculator3() {

    this.methods = {
        '+' : function(a,b) {return a+b},
        '-' : function(a,b) {return a-b}
    };

    this.calculate = function(str) {
        var spl = str.split(' ');
        var a = spl[0];
        var op = spl[1];
        var b = spl[2];


        if(!this.methods[op] || !isNumeric(a) || !isNumeric(b)) {
            return NaN;
        }

        return this.methods[op](+a, +b);
    };

    this.addMethod = function(name,func) {
        this.methods[name] = func;
    }
}

var calc = new Calculator3();
alert(calc.calculate('2 + 2'));
calc.addMethod('*',function(a,b) {return a*b;});
calc.addMethod('/',function(a,b) {return a/b;});
alert(calc.calculate('3 / 2'));