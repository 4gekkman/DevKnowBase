

// создание объекта
var object = {};
var bmw = {
    model: "X5",
    price: 3000000,
    engine: 5.5,
    "супер мощь": 555
};
var cars = {
    "car": {
        volvo: "v40",
        mercedes: "a20"
    }
};

// ЗАПИСЬ: создание ключа name и присвоение ему значения-свойства "John"
object.name = "John";
object.surname = "Parker";

// ЧТЕНИЕ: проверим, присвоилось ли значение ключу
document.write(object.name);  // да

// УДАЛЕНИЕ: удалим эти ключ-значение
delete object.name;

// проверка, удалилось ли?
document.write("<br>"+object.name);  // да, выдает undefined

// СПОСОБ 1: проверить, существует ли свойство
if(object.surname !== undefined) {
    document.write("<br>Свойство surname существует");
}

// СПОСОБ 2: проверить, существует ли свойство
if("surname" in object) {
    document.write("<br>Свойство surname существует");
}

// квадратные скобки
var key = "surname";
document.write("<br>"+object[key]);  // доступ к значению по ключу в переменной (эксклюзинвно для [])

// просмотреть объект целиком в консоли chrome
console.log(cars);

// цикл по всем ключам объекта
for(var key in bmw) {
    document.write("<br>"+key);
}

// вывод в нужном порядке, избжание сортировки
var obj = {
    "4" : "Россия",
    "1" : "Венгрия",
    "29": "ЮАР"
};
document.write("<br><b>АВТОМАТОМ ОТСОРТИРОВАННЫЙ ВЫВОД:</b> ")
for(var key in obj) {
    document.write("<br>"+key+" - "+obj[key]);
}
obj = {
    "+4" : "Россия",
    "+1" : "Венгрия",
    "+29": "ЮАР"
};
document.write("<br><b>БЛАГОДАРЯ + ПЕРЕД ЧИСЛОВЫМ КЛЮЧЕМ ВЫВОД В ПОРЯДКЕ ПРИСВОЕНИЯ:</b> ")
for(var key in obj) {
    document.write("<br>"+key+" - "+obj[key]);
}

// объект копируется по ссылке
var citys = {
    moscow: 15,
    spb: 5
};
var citysCopy = citys;
citysCopy.moscow = 150;
document.write("<br>"+citys.moscow);  // 150
document.write("<br>"+citysCopy.moscow);  // 150