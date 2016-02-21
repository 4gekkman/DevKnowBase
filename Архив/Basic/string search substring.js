
// info
// => метод indexOf выдает -1 если ничего не нашел
// => результат работы метода indexOf регистрозависим
// => вызов ~n эквивалентен выражению -(n+1)

var str = 'Hello, mister John Lincoln';

// с помощью метода indexOf удостовериться в наличии и найти позиции,
// с которых начинаются строки 'mister' и 'Lincoln' в строке str,
// и вывести алертом
alert(str.indexOf('mister'));
alert(str.indexOf('lincoln'));  // выдает -1, результат регистрозависим
alert(str.indexOf('Lincoln'));

// сделать тоже самое с помощью метода lastIndexOf
alert(str.lastIndexOf('mister'));
alert(str.lastIndexOf('Lincoln'));

// красиво проверить удалось ли найти подстроку John в строке str
if(~str.indexOf('John')) {
    alert('Совпадение есть!');
}

