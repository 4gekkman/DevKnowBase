
function clock() {
    // отрисовка кнопок
    var e = [];
    for(var i=0; i<=1; i++) {
        if(!document.getElementById('in'+i)) {
            e[i] = document.createElement('input');
            e[i].type = 'button';
            !i ? e[i].onclick = function() {start();} :
                e[i].onclick = function() {stop();};
            e[i].id = 'in'+i;
            e[i].value = i ? 'Stop' : 'Start';
            document.body.appendChild(e[i]);
        } else {
            var r = document.getElementById('in'+i);
            var p = r.parentNode;
            p.removeChild(r);
        }
    }

    // отрисовка блока
    if(!document.getElementById('myClocky')) {
        e = document.createElement('section');
        e.id = "myClocky";
        document.body.appendChild(e);
    } else {
        r = document.getElementById('myClocky');
        p = r.parentNode;
        p.removeChild(r);
    }

    // таймер
    var timer = 0;

    function start() {        // обработчик кнопки Start
        update();
    }
    function stop() {         // обработчик кнопки Stop
        clearTimeout(timer);
    }
    function update() {       // рекурсивная обновлялся часиков
        var n = new Date();
        e.innerHTML = formatTime(
            n.getHours(),
            n.getMinutes(),
            n.getSeconds());
        timer = setTimeout(update,1000);
    }
    function formatTime(hh,mm,ss) {   // выдает отформатированный код
        var n = new Date();         // текущее время
        var s = ('0'+hh).slice(-2)+":"+
                ('0'+mm).slice(-2)+":"+
                ('0'+ss).slice(-2);
        return s;
    }
}
clock();