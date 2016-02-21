
/*
 * Get object an multiply all numeric prop by 2
 *
 * @author 4gekkman@gmail.com
 * @param object some object
 */
function multiplyNumeric(menu) {
    for(var key in menu) {
        if(!isNaN(menu[key])) {
            menu[key] *= 2;
        }
    }
}
