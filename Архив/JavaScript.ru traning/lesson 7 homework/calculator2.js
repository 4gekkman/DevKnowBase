function Calculator2() {
    this.calculate = function(str) {
        var tmpStr = str;
        var result = '22 - 33';

        /* что дальше
         * ? Надо сделать разбор строки на 2 числа
         */
        var a = '', b = '';
        var flag = false;
        var op = '';
        if(result.indexOf("+") != -1) {
            op = '+';
        }
        if(result.indexOf("-") != -1) {
            op = '-';
        }

        for(var i = 0; i<result.length; i++) {
            if(result.charAt(i) != op && flag == false) {
                a += result.charAt(i);
            }
            if(result.charAt(i) != op && flag == true) {
                b += result.charAt(i);
            }
            if(result.charAt(i) == op) {
                flag = true;
            }
        }
        if(op=='+') {
            result = +a + +b;
        }
        if(op=='-') {
            result = +a - +b;
        }

        return result;
    }

    this.addMethod = function(name,func) {
        Calculator2.name = name;
        Calculator2.func = function() {

        };
    }
}

var calc = new Calculator2;
alert(calc.calculate("3 + 5"));

calc.addMethod('*', function(a,b) {return a*b;});
calc.addMethod('/', function(a,b) {return a/b;});
alert(calc.calculate("14 / 2"));
