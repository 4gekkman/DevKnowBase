
// http://learn.javascript.ru/task/logiruushij-dekorator-1-argument

function work(a) {

}

function makeLogging(f, log) {
    function wrapper(a) {
        log.push(a);
        return f.call(this,a);
    }
    return wrapper;
}

var log = [];

work = makeLogging(work,log);
work(1);  // 1 добавляется в log
work(5);  // 5 добавляется в log

for(var i=0; i<log.length; i++) {
    alert('Лог: ' + log[i]);
}