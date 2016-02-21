function sum(a) {
    curSum = 0;
    function f(b) {
        curSum += b;
        return f;
    }

    f.toString = function() {
        return curSum;
    }

    return f;
}

alert(sum(1)(2));
alert(sum(1)(2)(3));