
/*
 * http://learn.javascript.ru/task/vyvesti-odnosvyaznyy-spisok
 *
 * @author 4gekkman@gmail.com
 * @param object obj some object
 */
function printReverseList2(obj) {
    var arr = [];
    var tmp = obj;
    while(tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for(var i=arr.length-1; i>=0; i--) {
        document.write(arr[i]+" ");
    }
}

var list = { value: 1};
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = { value: null };

printReverseList2(list);