


/*
 * http://learn.javascript.ru/task/sortirovka-obektov
 *
 * @author 4gekkman@gmail.com
 * @param object arr some array
 */
function sortObjects(arr) {
    arr.sort(function sortMethod(a,b) {
        return a.age - b.age;
    });
}
var vasya = { name: "", age: 23};
var masha = { name: "", age: 18};
var vovochka = { name: "", age: 6};

var people = [ vasya, masha, vovochka];
for(var key in people) {
    document.write(people[key].age+" ");
}
document.write("<br>");

sortObjects(people);
for(var key in people) {
    document.write(people[key].age+" ");
}