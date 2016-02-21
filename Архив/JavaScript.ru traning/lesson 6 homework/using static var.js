
// http://learn.javascript.ru/task/sozdat-schetchik-so-staticheskoj-peremennoj

function makeCounter() {
    return function f() {
        if (!f.currentCount) {
            f.currentCount = 0;
        }
        return ++f.currentCount;
    };
}


var c1 = makeCounter();
var c2 = makeCounter();

alert(c1());  // 1
alert(c2());  // 2
alert(c1());  // 3
