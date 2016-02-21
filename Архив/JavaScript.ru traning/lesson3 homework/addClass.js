
/*
 * http://learn.javascript.ru/task/dobavit-klass-v-stroku
 *
 * @author 4gekkman@gmail.com
 * @param object obj some object
 * @param string str
 * @return object array with unique strings
 */
function addClass(obj,str) {
    var arr = obj.className ? obj.className.split(' ') : [];

    for(var i=0; i<=arr.length-1; i++) {
        if(arr[i] === str)   return;  // такой уже есть
    }

    arr.push(arr,str);
    obj.className = arr.join(' ');
}
var obj = {
    className: 'open menu'
}

document.write(obj.className+"<br>");
addClass(obj,'new');
addClass(obj,'open');
addClass(obj,'me');
document.write(obj.className);