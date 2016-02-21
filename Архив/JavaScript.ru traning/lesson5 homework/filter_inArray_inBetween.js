

/* INFO
 *
 * http://learn.javascript.ru/task/filtraciya-cherez-funkciu
 * Тема: замыкания
 *
 * PLAN
 *
 *
 *
 */

function filter(arr,func) {
    var resArr = [];
    for(var key in arr) {
        if(func(arr[key])) {
            resArr.push(arr[key]);
        }
    }
    return resArr;
}

function inBeetween(a,b) {
    return function(x) {
        return x>=a && x<=b;
    }
}

function inArray(arr) {
    return function(x) {
        return arr.indexOf(x) !== -1;
    }
}

var arr = [1,2,3,4,5,6,7,8,9,10,11];
var result = filter(arr,function(a) {return a%2 == 0;});
document.write("<p>"+result+"</p>");

result = [];
result = filter(arr,inBeetween(3,6));
document.write("<p>"+result+"</p>");

result = [];
result = filter(arr,inArray([1,2,10]));
document.write("<p>"+result+"</p>");
