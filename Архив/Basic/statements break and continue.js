
// info
// =>


// break
var i;
for(i = 0; i < 10; i++)
{
    alert(i);
    break;
}

//continue
for(i = 0; i < 10; i++)
{
    if(i >= 2 && i <= 8)
        continue;
    alert(i);
}

// метки с break;  этот код выводит из цикла;
lalalasign:  // это метка, может называться как угодно; break 'метка' выводит на уровень вложенности метки
    for(;;) {
        i = 0;
        while(i < 6) {
            i++;
            if(i==5)
                break lalalasign;
        }
    }
alert("Конец 1");

// метки с continue;  отправляет код на следующую итерацию
lalalasign1:  // это метка, может называться как угодно; break 'метка' выводит на уровень вложенности метки
    for(;;) {
        i = 0;
        while(i < 6) {
            i++;
            if(i==5)
                continue lalalasign1;
        }
    }
alert("Конец 2");