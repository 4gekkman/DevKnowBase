

// создание массива
var city = ["Moscow", "Russia", 15000000];

// доступ к элементу
city[0] += "-city";
document.write(city[0]);

// число элементов в массиве
document.write("<br>В массиве содержится вот сколько элементов: "+city.length+"<br>");

// можно вывести весь массив целиком
document.write(city);  // элементы перечислены через ,

// работа с концом и началом массива
var lastElement = city.pop();     // удаляет посл. эл. и возвращает его
var firstElement = city.shift();  // удаляет первый. эл. и возвращает его
document.write("<br>"+city);

city.push(lastElement);       // добавляет элемент в конец массива
city.unshift(firstElement);       // добавляет элемент в конец массива
document.write("<br>"+city);

