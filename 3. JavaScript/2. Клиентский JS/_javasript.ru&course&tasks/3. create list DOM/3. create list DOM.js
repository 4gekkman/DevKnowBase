

var data = {
    "Рыбы":{
        "Форель":{},
        "Щука":{}
    },

    "Деревья":{
        "Хвойные":{
            "Лиственница":{},
            "Ель":{}
        },
        "Цветковые":{
            "Берёза":{},
            "Тополь":{}
        }
    }
};

// собрать строку и вставить в BODY с помощью innerHTML
function creListByString(data) {
    document.write("<br><b>Cобрать строку и вставить в BODY с помощью innerHTML</b><br>");
    function countLooker(obj) {    // есть ли хоть 1 свойство у объекта
        var r = false;
        for (var key in obj) {
            r = true;
            break;
        }
        return r;
    }

    var s = '';
    var bypass = function bypass(data) {       // обход всего объекта data
        s += '<ul>';
        for (var key in data) {
            s += '<li>' + key + '</li>';
            if (countLooker(data[key])) {      // если у объекта есть дочернее свойство
                bypass(data[key]);
            }
        }
        s += '</ul>';
    };
    bypass(data);

    var e = document.createElement('temp');  // создать временный элемент
    e.innerHTML = s;                         // записать в него HTML 5'ем полученную строку с кодом
    document.body.appendChild(e.firstChild); // добавить этот код в BODY
}
creListByString(data);



// на лету методами DOM собирать список ul, li
function creListByDOM() {
    document.write("<br><b>На лету методами DOM собирать список ul, li</b><br>");
    function countLooker(obj) {    // есть ли хоть 1 свойство у объекта
        var r = false;
        for (var key in obj) {
            r = true;
            break;
        }
        return r;
    }

    // обход всего объекта data    target - куда вставлять новые DOM-элементы
    var bypass = function bypass(data,target) {
        for (var key in data) {
            var u = document.createElement('ul');
            var l = document.createElement('li');
            var t = document.createTextNode(key);
            document.body.appendChild(u);
            u.appendChild(l);
            l.appendChild(t);
            if (countLooker(data[key])) {
                bypass(data[key],l);
            }
        }
    };
    bypass(data, document.body);
}
creListByString(data);
