
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function f() {
    alert(arguments[0]);
    var args = [].slice.call(arguments);
    args.shift();
    g.apply(this, args);
}

function g(a,b,c) {
    var result = 0;
    for(var i = 0; i<=arguments.length; i++) {
        if(isNumeric(arguments[i]))
            result += arguments[i];
    }
    alert(result);
}

f('тест',1,2);         // выведет "тест", посчитает сумму: 3
f('тест2',1,2,3);      // выведет "тест", посчитает сумму: 6
