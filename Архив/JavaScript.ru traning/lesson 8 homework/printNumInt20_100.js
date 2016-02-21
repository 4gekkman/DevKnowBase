var n = 0;
function f() {
    if(n==20)
        clearTimeout(timer);
    console.log(n);
    n++;
}
var timer = setInterval(f,100);