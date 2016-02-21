
/* INFO
 *
 * http://learn.javascript.ru/task/summa-cherez-zamykanie
 * Тема: замыкания
 *
 * PLAN
 *
 *
 *
 */


function sum(a) {
    return function(b) {
        result = a + b;
        return result;
    }
}

var result = sum(2)(5);
document.write(result);