

var myArray = [];

for(var i = 0;;i++) {
    var value = prompt("Введите число","");
    if(value===0 || isNaN(value) || value===null) {
        alert("lalala");
        break;
    }
    myArray[i] = value;
}

var result = 0;
for(var i = 0; i <= myArray.length - 1; i++) {
    document.write("<br>"+myArray[i]);
    result += +myArray[i];
}
document.write("<br>----------<br>Результат: "+result);






/*
var array1;
var result = 0;

for(var i = 0;i<=100;i++) {
    var value = Number(prompt("Введите число"));
    if(value.isNaN()  value === null || typeof(value) !== "string") {
        alert(typeof(value));
        break;
    }
    array1[i] = Number(value);
}
for(var i = 0; i<= length-1; i++) {
    result += array1[i];
}
document.write("Результат = "+result);
*/