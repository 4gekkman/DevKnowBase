
function sum() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

document.write(sum(1,3,4,5,6,7));
