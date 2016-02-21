

/* INFO
 *
 * Функция, которая считает свои вызовы
 * Тема: замыкания
*/

function makeCounter() {
    var cnt = 0;

    return function() {
        cnt++;
        return cnt;
    };
}

var counter = makeCounter();
counter();
counter();
alert( counter() );