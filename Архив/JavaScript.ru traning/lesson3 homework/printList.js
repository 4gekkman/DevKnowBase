

/*
 * http://learn.javascript.ru/task/vyvesti-odnosvyaznyy-spisok
 *
 * @author 4gekkman@gmail.com
 * @param object obj some object
 */
function printList(obj) {
    var tmp = list;
    while(tmp) {
        document.write(tmp.value+" ");
        tmp = tmp.next;
    }
}

var list = { value: 1};
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = { value: null };

printList(list);

