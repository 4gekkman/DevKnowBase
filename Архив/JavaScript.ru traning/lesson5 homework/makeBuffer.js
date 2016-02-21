
/* INFO
 *
 * http://learn.javascript.ru/task/funkciya-strokovyj-bufer
 * Тема: замыкания
 *
 * PLAN
 *
 *
 *
 */

function makeBuffer() {
    var str = '';

    function buffer(str1) {
        if (str1 === undefined)
            return str;
        str += str1;
    };

    buffer.clear = function(){
        str='';
    }

    return buffer;
}

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

var result = buffer();
document.write("<p>"+result+"</p>");

buffer.clear();
var result = buffer();
document.write("<p>"+"Очищенный буфер: "+result+"</p>");

