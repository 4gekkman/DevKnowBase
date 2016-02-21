
var str = "John";              // строка            string
var a = 10;                    // число             number
var b = 50.33;                 // дробное число     number
var bool = true;               // буль              boolean
var arr = new Array(1,2,3);    // массив            object
var obj = {                    // объект            object
    firstname : "John",
    lastname  : "Doe",
    age       : 26
};
var nul = null;                // null              object
var und = undefined;           // undefined         undefined

document.write("Тип переменной str типа 'строка': <b>"+
    typeof(str)+"</b><br>");
document.write("Тип переменной a типа 'число': <b>"+
    typeof(a)+"</b><br>");
document.write("Тип переменной b типа 'дробное число': <b>"+
    typeof(b)+"</b><br>");
document.write("Тип переменной bool типа 'буль': <b>"+
    typeof(bool)+"</b><br>");
document.write("Тип переменной arr типа 'массив': <b>"+
    typeof(arr)+"</b><br>");
document.write("Тип переменной obj типа 'объект': <b>"+
    typeof(obj)+"</b><br>");
document.write("Тип переменной nul типа 'null': <b>"+
    typeof(nul)+"</b><br>");
document.write("Тип переменной und типа 'undefined': <b>"+
    typeof(und)+"</b><br>");
