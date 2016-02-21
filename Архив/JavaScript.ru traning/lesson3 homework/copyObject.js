
/*
 * Copy object by value. The passed object mast not have any object-property.
 *
 * @author 4gekkman@gmail.com
 * @param object obj some object
 * @return object duplicated object
 */
function copyObject(obj) {
    var obj2 = {};
    for(var key in obj) {
        obj2[key] = obj[key];
    }
    return obj2;
};