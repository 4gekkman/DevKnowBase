

/*
 * Suggests to input two numbers, and summing them up
 *
 * @author 4gekkman@gmail.com
 * @return {number} sum of two numbers
 */
function sumNumbers() {
    var a = +prompt("Введите 1-е число:","");
    var b = +prompt("Введите 2-е число:","");
    if(!isFinite(a) || !isFinite(b)) {
        return false;
    }
    var c = a + b;
    return c;
}
alert(sumNumbers());