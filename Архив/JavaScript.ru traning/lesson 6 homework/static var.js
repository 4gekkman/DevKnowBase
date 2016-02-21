// организация статической переменной с помощью замыкания
var sayHi = (function() {
    var count = 0;  // статическая переменная

    return function() {
        count++;
        alert("Привет " + count);
    };
})();
sayHi();
sayHi();

// организация статического свойства в функции
function sayHi2() {
    sayHi2.count++;

    alert("Привет " + sayHi2.count);
}
sayHi2.count = 0;
sayHi2();
sayHi2();