

/* [ЕСТЬ ДРУГАЯ ВЕРСИЯ: 20. FUNCTIONS!!! она актуальнее]
 * Описание функции
 *
 * @author 4gekkman@gmail.com
 * @param {number} a описание параметра
 * @param {number} b описание параметра
 * @return {number}
*/
function sum(a,b) {
    return a+b;
}
document.write(sum(2,3));


// в JS функция видит глобальные переменные (в отличие от PHP)
var x = 10;  // глобальная переменная
function changeX() {
    x++;     // обращение к глобальной переменной
}
changeX();
document.write("<br>x = "+x);  // 11

// передача копии глобальной переменной через параметр
x = 10;
function dontChangeX(x) {
    x++;
}
dontChangeX(x);
document.write("<br>x = "+x);  // 10

// аргументы по умолчанию
function args(a,b,c) {
    a = a || "a не задано";
    b = b || "b не задано";
    c = c || "c не задано";

    var d = a+b+c;

    document.write("<br>"+d);
}
args();  // вызов функции, не задавая аргументов
args(2,3);
args(2,3,4);

// объект с аргументами
var obj = {
    width: 150,
    height: 20
};
function aros(obj) {
    var width = obj.width || 100;
    var height = obj.height || 10;
    var opacity = obj.opacity || 1;

}
aros(obj);
