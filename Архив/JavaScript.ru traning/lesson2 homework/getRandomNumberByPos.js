
/*
 * Generate random whole number of choosen number position.
 * Example: numberpos = 3. It means 3 numbers after comma,
 * it will generate a number in range from 100 to 999.
 *
 * @author 4gekkman@gmail.com
 * @param number number_position - whole number - number position
 * @return number random whole number, if numberpos
 * is not a whole number, or <=0, it returns -1;
 */
function getRandomNumberByPos(numberpos) {
    if(!isNumberWhole(numberpos) || numberpos <= 0) {
        return -1;
    }

    var multiplier = 1,
        mathround = 0;
    for(var i = 1; i <= numberpos; i++) {
        multiplier *= 10;
    }
    mathround = Math.random();
    while(mathround === 1) {
        mathround = Math.random();
    }
    return Math.floor(Math.random()*multiplier);
}