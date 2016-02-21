
// http://learn.javascript.ru/task/logiruushij-dekorator-mnogo-argumentov

function work(a,b) {
    alert(a+b);
}

function makeLogging(f, log) {
    function wrapper() {
        log.push(arguments);
        return f.apply(this.arguments);
    }
    return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1,2);  // 3
work(4,5);  // 9

for(var i=0; i<log.length; i++) {
    alert("Лог: " + [].join.call(log[i]));  //Лог: 1,2    Лог: 4,5
}