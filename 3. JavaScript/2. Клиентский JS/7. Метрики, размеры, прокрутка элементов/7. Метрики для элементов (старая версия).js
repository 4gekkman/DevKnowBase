/* ---------------------------------------------------
 ---------------- О Г Л А В Л Е Н И Е ----------------

 База
 > Создание учебного контейнера средствами JS
 > Внутренние размеры                              | e.clientWidth  ,  e.clientHeight
 > Размеры контента (без полосы прокрутки)         | e.scrollWidth  ,  e.scrollHeight
 > Размеры прокрученной области                    | e.scrollTop    ,  e.scrollLeft
 > Внешние размеры                                 | e.offsetWidth  ,  e.offsetHeight
 > Верхний и левый Borders элемента                | e.clientTop    ,  e.clientLeft

 Техники и наработки
 > Функция раскрывающая/закрывающая элемент на всю ширину прокрутки так, чтобы она исчезла  | openWideWrap
 > Функция прокручивает элемент вверх или вниз на указанное кол-во пикселей                 | scroll(where,px)
 > Проверить, скрыт ли элемент                  | функция isHidden(e)
 > Вычислить ширину полосы прокрутки элемента   | функция scrollSize(e,type)
 > Вычислить высоту еще скрытой снизу непрокрученной области   | scrollBottom(e)

 -------------------------------------------------- */















// Создание учебного контейнера средствами JS
document.body.insertAdjacentHTML
    ('beforeEnd', '<br><p style="font: bold 14px sans-serif;">Учебный контейнер</p>');
document.body.insertAdjacentHTML
    ('beforeEnd', '<section id=\"example\"></section>');
var doc = document.getElementById('example');
doc.innerHTML =
    '<p><b>Introduction</b></p>'+
    'This Ecma Standard is based on several originating technologies, the most well known being JavaScript (Netscape) and JScript (Microsoft). The language was invented by Brendan Eich at Netscape and first appeared in that company\'s Navigator 2.0 browser. It has appeared in all subsequent browsers from Netscape and in all browsers from Microsoft starting with Internet Explorer 3.0.'+
    'The development of this Standard started in November 1996. The first edition of this Ecma Standard was adopted by the Ecma General Assembly of June 1997.'+
    'That Ecma Standard was submitted to ISO/IEC JTC 1 for adoption under the fast-track procedure, and approved as international standard ISO/IEC 16262, in April 1998. The Ecma General Assembly of June 1998 approved the second edition of ECMA-262 to keep it fully aligned with ISO/IEC 16262. Changes between the first and the second edition are editorial in nature.'+
    'The third edition of the Standard introduced powerful regular expressions, better string handling, new control statements, try/catch exception handling, tighter definition of errors, formatting for numeric output and minor changes in anticipation of forthcoming internationalisation facilities and future language growth. The third edition of the ECMAScript standard was adopted by the Ecma General Assembly of December 1999 and published as ISO/IEC 16262:2002 in June 2002.'+
    '';

// Внутренняя ширина и высота элемента
// clientWidth = width + 2*padding - ширина прокрутки
// clientHeight = height + 2*padding - ширина прокрутки
document.body.insertAdjacentHTML
    ('beforeEnd', '<p>clientWidth = '+doc.clientWidth+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = width + 2*padding</p>');
document.body.insertAdjacentHTML
    ('beforeEnd', '<p>clientHeight = '+doc.clientHeight+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = height + 2*padding</p>');

// Ширина и высота страницы с учетом прокручиваемой области
// scrollWidth = width + 2*padding - ширина прокрутки + прокручиваемая область
// scrollHeight = height + 2*padding - ширина прокрутки + прокручиваемая область
document.body.insertAdjacentHTML
    ('beforeEnd', '<p>scrollWidth = '+doc.scrollWidth+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = width + 2*padding - ширина прокрутки + прокручиваемая область</p>');
document.body.insertAdjacentHTML
    ('beforeEnd', '<p>scrollHeight = '+doc.scrollHeight+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = height + 2*padding - ширина прокрутки + прокручиваемая область</p>');


// Функция раскрывающая/закрывающая элемент на всю ширину прокрутки так, чтобы она исчезла
// > работает как переключатель распахнуть/запахнуть
// > инфа о старых width и height хранятся в замыканиях
// > в параметра how надо указать 1 из 2 значений:
//   > 'width'   -  распахнет по ширине
//   > 'height'  -  по высоте
function openWideWrap() {   // завернул ф-ию openWide в обертку, в которой хранятся старые данные
    var oldWidth = 0; var oldHeight = 0;
    function openWide(id,how) {   // распахивает, если запахнуто; запахивает, если распахнуто.
        id = document.getElementById(id);
        var count = 0;
        if(how == 'width') {
            if(id.clientWidth != id.scrollWidth) {
                oldWidth = id.clientWidth - 2*parseInt(getComputedStyle(id,'').paddingLeft);
                id.style.width = id.scrollWidth + 'px';
            } else {
                id.style.width = oldWidth + 'px';
            }
        }
        if(how == 'height') {
            if(id.clientHeight != id.scrollHeight) {
                oldHeight = id.clientHeight - 2*parseInt(getComputedStyle(id,'').paddingTop);
                id.style.height = id.scrollHeight + 'px';
            } else {
                id.style.height = oldHeight + 'px';
            }
        }
    }
    return openWide;
}
var f = openWideWrap();
document.body.insertAdjacentHTML
    ('beforeEnd', "<button onclick=\"f('example','height')\">Распахнуть | Запахнуть</button>");


// Ширина и высота прокрученной области элемента, скрывшейся с экрана
    // scrollTop | scrollLeft    |  размеры текущей прокрученной области
    // - их можно прямо менять
    // - также здесь я рассчитал отсутствующее в метриках значение scrollBottom
    document.body.insertAdjacentHTML
        ('beforeEnd', '<p id=\'st1\'>scrollTop = '+doc.scrollTop+
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scrollBottom = '+(doc.scrollHeight - doc.scrollTop - doc.clientHeight)+
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp; scrollBottom = doc.scrollHeight - doc.scrollTop - doc.clientHeight</p>');

// Вычислить высоту еще скрытой снизу непрокрученной области
// > Возвращает число без приставки px
function scrollBottom(e) {
    return e.scrollHeight - e.scrollTop - e.clientHeight;
}

// Функция прокручивает элемент вверх или вниз на указанное кол-во пикселей
// > в параметре where нужно указать куда покручивать
//   > 'down'   -   значит вниз
//   > 'up'     -   значит вверх
// > в параметре px надо указать на сколько пикселей прокручивать
function scroll(where,px) {
    if(where == 'down') {
        doc.scrollTop += px;
    } else if(where == 'up') {
        doc.scrollTop -= px;
    }
    document.getElementById('st1').innerHTML = '<p id=\'st1\'>scrollTop = '+doc.scrollTop+
                                                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scrollBottom = '+(doc.scrollHeight - doc.scrollTop - doc.clientHeight)+
                                                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp; scrollBottom = doc.scrollHeight - doc.scrollTop - doc.clientHeight</p>';
}
document.getElementById('st1').insertAdjacentHTML
    ('afterEnd','&nbsp;&nbsp;&nbsp;<button id=\'b2\' onclick="scroll(\'down\',10)">Прокрутить на 10 пунктов вниз</button>');
document.getElementById('b2').insertAdjacentHTML
    ('afterEnd','&nbsp;&nbsp;&nbsp;<button onclick="scroll(\'up\',10)">Прокрутить на 10 пунктов вверх</button>');


// Внешняя ширина и высота элемента
// offsetWidth = 2*borderWidth + 2*padding + width + ширина прокрутки   |   offsetHeight = 2*borderHeight + 2*padding + Height + ширина прокрутки
document.body.insertAdjacentHTML
    ('beforeEnd', '<p>offsetWidth = '+doc.offsetWidth+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = 2*borderWidth + 2*padding + width + ширина прокрутки</p>');
document.body.insertAdjacentHTML
    ('beforeEnd', '<p>offsetHeight = '+doc.offsetHeight+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = 2*borderHeight + 2*padding + height + ширина прокрутки</p>');

// Верхний и левый Border элемента
// clientTop - ширина верхней рамки  |  clientLeft - ширина левой рамки
document.body.insertAdjacentHTML
    ('beforeEnd', '<p>clientTop = '+doc.clientTop+'&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;clientLeft = '+doc.clientLeft+'</p>');

// Проверить, скрыт ли элемент
function isHidden(element) {
    return !element.offsetWidth && !element.offsetHeight;
}

// Вычислить ширину полосы прокрутки элемента
// > ширина прокрутки = offsetWidth - clientWidth - 2*clientLeft
// > e - элемент
// > type один из 2 значений:
//   > width -  вычислить ширину вертикальной прокрутки
//   > height - вычислить ширину (высоту?) горизонтальной прокрутки
function scrollSize(e,type) {
    if(type === 'width')
       return e.offsetWidth - 2*e.clientLeft - e.clientWidth;
    if(type === 'height')
        return e.offsetHeight - 2*e.clientTop - e.clientHeight;
}
document.body.insertAdjacentHTML
    ('beforeEnd', '<p>scrollWidth = '+scrollSize(doc,'width')+'&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;scrollWidth (ширина прокрутки) = offsetWidth - clientWidth - 2*clientLeft</p>');
document.body.insertAdjacentHTML
    ('beforeEnd', '<p>scrollHeight = '+scrollSize(doc,'height')+'&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;scrollHeight (ширина прокрутки) = offsetHeight - clientHeight - 2*clientTop</p>');


// -- ------------------------- -- //
// -- ------ З А Д А Ч И ------ -- //
// -- ------------------------- -- //

/*      1. Задача на размеры блока
 Надо создать фукнцию, которая:
   -> перемещает блок в id = id вправо вверх и абсолютно его позиционирует;
   -> помещает на его место пустой блок таких же размеров
 Смысл функции в том, чтобы текст до и после блока остался на местах
 */
// Название задачи
document.body.insertAdjacentHTML
    ('beforeEnd', '<br><p><b>1. Задача на размеры блока</b></p>');

// создание текста до блока, блока, текста после блока
document.body.insertAdjacentHTML
    ('beforeEnd', '<p>Текст до блока</p><section id=\'move\'>Привет!</section><p>Текст после блока</p>');
e = document.getElementById('move');
e.style.cssText = 'width: 120px; height: 40px; border: 1px solid black; background: yellow;text-align: center;';

// функция
function moveBlock(id,newID) {
    var block = document.getElementById(id);

    // создать новый блок и вставить перед этим
    block.insertAdjacentHTML('beforeBegin','<section id='+newID+'></section>');
    var newBlock = document.getElementById(newID);
    newBlock.style.width = block.offsetWidth + 'px';
    newBlock.style.height = block.offsetHeight + 'px';

    // применить абсолютное позиционирование к блоку
    block.style.position = 'absolute';
    block.style.top = '10px';
    block.style.right = '10px';

    //return newBlock;
}

// кнопка
document.getElementById('move').insertAdjacentHTML('beforeBegin','<p><button onclick="moveBlock(\'move\',\'newMove\')">Сместить блок вправо вверх</button></p>');


/*      2. Поместить один блок строго в центр другого
 Надо создать фукнцию, которая:
   помещает блок с id1 в центр блока с id2
 */

// Название задачи
document.body.insertAdjacentHTML
    ('beforeEnd', '<p><b>2. Поместить один блок строго в центр другого</b></p>');

// создание 2-х исходных блоков
document.body.insertAdjacentHTML('beforeEnd',
    '<section id=\'field\'></section>');
var field = document.getElementById('field');
field.style.cssText = 'width: 200px; border: 10px groove black; background-color: #00FF00; position: relative;';
field.innerHTML = "<img src='ball.gif' id='ball'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ";
var ball = document.getElementById('ball');
ball.style.cssText = 'position: absolute;';

// кнопка
document.getElementById('field').insertAdjacentHTML('beforeBegin','<p><button onclick="centrize(\'field\',\'ball\')">Поместить мяч в центр поля</button></p>');

// фукция - помещает блок с ball точно в центр блока field
function centrize(field,ball) {
    var fieldE = document.getElementById('field');
    var ballE = document.getElementById('ball');
    var top = (fieldE.clientHeight)/2 - (ballE.offsetHeight)/2;
    var left = (fieldE.clientWidth)/2 - (ballE.offsetWidth)/2;
    ballE.style.top = top+'px';
    ballE.style.left = left+'px';
}


/*      3. Распахнуть блок на всю ширину body
 Надо создать фукнцию, которая распахнет блок с указанным ID
  на всю ширину body
 */

// Название задачи
document.body.insertAdjacentHTML
    ('beforeEnd', '<p><b>3. Распахнуть блок на всю ширину body</b></p>');

// кнопка
var ff = openWideLikeBodyWrap();
document.body.insertAdjacentHTML('beforeEnd','<p><button onclick="ff(\'field1\')">Распахнуть на ширину body | Запахнуть</button></p>');

// создание блока
document.body.insertAdjacentHTML
    ('beforeEnd', '<section id=\'field1\'></section>');
block = document.getElementById('field1');
block.style.cssText = 'width: 200px; height: 150px; background-color: orange; padding: 20px; overflow: auto;';
block.innerHTML = 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст';

// создание функции
// - она делает offsetWidth блока с id равным width body

function openWideLikeBodyWrap() {
    var oldWidth = 0;
    function openWideLikeBody(id) {
        var block = document.getElementById(id);

        var blockPaddingLeft = parseInt(getComputedStyle(block,'').paddingLeft);
        var blockPaddingRight = parseInt(getComputedStyle(block,'').paddingRight);
        var blockBorderLeftWidth = parseInt(getComputedStyle(block,'').borderLeft);
        var blockBorderRightWidth = parseInt(getComputedStyle(block,'').borderRight);
        var diff = blockPaddingLeft + blockPaddingRight + blockBorderLeftWidth + blockBorderRightWidth;

        document.body.style.border = '1px solid black';

        if(block.style.width != (document.body.clientWidth - diff) + 'px' && block.style.width != 'auto') {
            oldWidth = block.style.width;
            document.body.style.border = '1px solid black';
            if(getComputedStyle(block,'').position != 'absolute') {
                block.style.width = (document.body.clientWidth - diff) + 'px';
            } else {
                block.style.width = 'auto';
            }
        } else {
            if(block.style.width == 'auto') {
                document.body.style.border = '';
                block.style.width = oldWidth;
            } else {
                document.body.style.border = '';
                block.style.width = oldWidth;
            }
        }


    }
    return openWideLikeBody;
}

/* ---------------------------------------------------
 ---------------- И Н Ф О Р М А Ц И Я ----------------

Общая информация
 > HTML 5-метрики для элементов
   > Здесь рассмотрены способы получения размеров и положения элемента
     в окне браузера.
   > JS-метрики - набор свойств, содержащих размеры элементов.
   > Размеры в JS-метриках всегда в px и без px на конце.
   > Если display: none, то все метрики = 0
   > Внутренняя ширина элемента width не содержит ширину прокрутки
   > Ширина прокрутки отнимает место у width, а не у padding
   > Ширина блока = (width + ширина прокрутки) + 2*margin + 2*padding
   > Ширина прокрутки = 16px || 18px || 0px (MacOS chrome)

JS-Метрики (встроенные свойства):
 > clientWidth   | внутренняя ширина эл-та без прокрутки | = width + 2*padding
 > clientHeight  | внутренняя высота эл-та без прокрутки | = height + 2*padding
 > scrollWidth   | ширина контента без полосы прокрутки  | = width + 2*padding - ширина прокрутки + прокручиваемая область
 > scrollHeight  | высота контента без полосы прокрутки  | = height + 2*padding - ширина прокрутки + прокручиваемая область
 > scrollTop     | размер прокрученной вверх области |
 > scrollLeft    | размер прокрученной влево области |
 > offsetWidth   | внешняя ширина эл-та    | = 2*borderWidth + 2*padding + width + ширина прокрутки
 > offsetHeight  | внешняя высота эл-та    | = 2*borderHeight + 2*padding + Height + ширина прокрутки
 > clientTop     | ширина верхней рамки    |
 > clientLeft    | ширина левой рамки      |

JS-Метрики (дополнительно собранные из имеющихся)
 > Ширина полосы Прокрутки
   = offsetWidth - 2*borderWidth - 2*padding - width
   = offsetWidth - clientWidth - 2*clientLeft;
 > Вычислить высоту еще скрытой снизу непрокрученной области
   = scrollHeight - scrollTop - clientHeight;





 -------------------------------------------------- */