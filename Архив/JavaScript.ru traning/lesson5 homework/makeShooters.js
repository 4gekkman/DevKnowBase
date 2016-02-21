
/* INFO
 *
 * http://learn.javascript.ru/task/armiya-funkcij
 * Тема: замыкания
 */

function makeArmy() {
    var shooters = [];
    for (var i = 0; i < 10; i++) {
        var shooter = (function (x) {
            return function () {
                alert(x);
            };
        })(i);
        shooters.push(shooter);
    }
    return shooters;
}
var army = makeArmy();
army[9](); // стрелок выводит 10, а должен 0
army[1](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9