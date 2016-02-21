

/*
 * Multiply all numeric props by 2
 *
 * @author 4gekkman@gmail.com
 * @param object obj some object
 */
function multiplyNumeric(obj) {
    for(var key in obj) {
        if(typeof(obj[key])==="number") {
            obj[key] *= 2;
        }
    }
};

var ages = {Nancy: 18, Linda: 20, Kate: 16};
multiplyNumeric(ages);
for(var i in ages) {
    document.write("<br>"+ages[i]);
}
