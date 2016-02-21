// http://learn.javascript.ru/task/keshiruushij-dekorator

function f(arg){
    return Math.random()*arg;
}

function makeCaching(f) {
    var cache = {};

    return function(x) {
        if(!(x in cache)) {
            cache[x] = f.call(this,x);
        }
        return cache[x];
    };
}

f = makeCaching(f);

var a,b;

a = f(1);
b = f(1);
alert(a == b);  // true

b = f(2);
alert(a == b);  // false
