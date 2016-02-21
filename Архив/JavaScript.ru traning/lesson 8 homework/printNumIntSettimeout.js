
var n = 0;
var t0 = new Date();
function f() {
    if(n==20) {
        console.log(n);
        var t1 = new Date();
        console.log(t1-t0);
        return 0;
    }
    setTimeout(function run() {f();},100);
    console.log(n);
    n++;
}

f();