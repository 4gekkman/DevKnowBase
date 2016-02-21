function write(x,text) {
    document.write("<br>"+text+x);
}

/* Напишите функцию getNextElement(elem), которая возвращает
 * следующий за elem узел-элемент (игнорирует остальные узлы).
 *
 *
*/

// Вариант 1
function getNextElem(elem) {
    var c = elem.parentNode.children;
    for(var key in c) {
        if(c[key] == elem) {
            continue;
        }
        if(c[key].nodeType == 1) {
            return c[key];
        }
    }
}

var x = getNextElem(document.body.children[0]);
write(x.nodeName,"Следующий элемент = ");
