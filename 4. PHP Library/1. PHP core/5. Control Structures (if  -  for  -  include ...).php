<?php
/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Управляющие конструкции

Обычные управляющие конструкции
> If - Else
> While
> Do-While
> For
> Foreach
  > Простой пример
  > Изменение значений массива или объекта внутри цикла foreach
  > Динамические массивы
  > Перебор двухмерного массива
  > Распаковка вложенных массивов с помощью list()  (PHP >= 5.5)
> Break
> Continue
> Switch
> Return
> Include и require
> goto

> Управление выводом HTML блоков из PHP

-------------------------------------------------- */

// If  -  Else
    if(2 > 1) {
        $a = 10;
    } else {
        $a = 5;
    }
// While
    $a = 0; while($a < 10) {
        $a++;
    }                         // в итоге $a == 10
// Do-While
    $a = 0; do{
        $a++;
    } while ($a < 10);        // в итоге $a == 10
// For
    for($a=0;$a<10;$a++) {

    }                         // в итоге $a == 10
// Foreach
$a = ['one' => 1, 'two' => 2, 'three' => 3];
    // Простой пример
        foreach ($a as $key => $value) {
            echo "<p>$key => " . $value . '</p>';
        }
    // Изменение значений массива или объекта внутри цикла foreach
        foreach ($a as $key => &$value) {    // &$value - указатель на переменную массива
            $value++;                        // напрямую меняем значение переменной из массива
            echo "<p>$key => " . $value . '</p>';
        }
    // Динамические массивы
        foreach ([5,6,7] as $value) {
            echo "<p>". $value . '</p>';
        }
    // Перебор двухмерного массива
        $a = [];
        $a[0][0] = "a";
        $a[0][1] = "b";
        $a[1][0] = "y";
        $a[1][1] = "z";
        foreach ($a as $b) {
            foreach ($b as $value) {
                echo "<p>". $value . '</p>';
            }
        }
    // Распаковка вложенных массивов с помощью list()  (PHP >= 5.5)
        $a = [[1, 2],
              [3, 4]];
        foreach ($a as list($x,$y)) {  // phpstorm показывает ошибку, потому что он еще не знает о PHP 5.5
            echo "A: $x; B: $y\n";
        }
// break
    for(;;) {
        for(;;) {
            for(;;) {
                break 3;  // выйти из 3-х циклов
            }
        }
    }
// continue
    for($a=0; $a<1; $a++) {
        for($a=0; $a<1; $a++) {
            for($a=0; $a<1; $a++) {
                continue 3;    // прервать итерацию всех 3 циклов, начать новую с внешнего
            }
        }
    }
// switch
    // простой пример
        $a = 1;
        switch($a) {
            case 0: echo '<p>$a = ' . 0 . '</p>'; break;
            case 1: echo '<p>$a = ' . 1 . '</p>'; continue;
            case 2: echo '<p>$a = ' . 2 . '</p>'; break;
            default: echo '<p>Ничто из предложенного не подходит</p>';
        }
    // использование switch и continue в цикле
        for($a=0; $a<=2; $a++) {
            switch($a) {
                case 0: echo '--1--'; continue;
                case 1: echo '--2--'; continue 2;  // переход к следующей итерации цикла
                case 2: echo '--3--'; continue;
            }
            echo '<p>$a = ' . $a . '</p>';   // ... $a = 1 не выведется
        }
// return
    // простой пример
        function f($a,$b) {
            return $a + $b;
        }
// include и require
    // простой пример
        include "5. files/test.php";
        $x14 = $x13 + $x12;
        echo '<p>$x14 = ' . $x14 . '</p>';
    // включение через URL
        include "http://www.someSite.ru/test2.php";
        $x17 = $x15 + $x16;
        echo '<p>$x15 = ' . $x17 . '</p>';
// goto
    // например, как выход из нескольких вложенных циклов
        for(;;) {
            for(;;) {
                for(;;) {
                    goto end;
                }
            }
        }
        end:



// Управление выводом HTML блоков из PHP
    ?>
    <?php if(2>1) { ?>          <!--  блок ниже выведется, только если условие в PHP == TRUE -->
        <p>Управление выводом HTML блоков из PHP</p>
    <?php }?>
    <?php





/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------

> While
  > Проверяет условие выражения каждый раз ПЕРЕД началом итерации.
> Do-While
  > Первая итерация цикла гарантированно происходит вне зависимости
    от выражения у while
  > Проверяет условие выражения каждый раз ПОСЛЕ окончани итерации
> For
  > Проверяет условие ПЕРЕД началом итерации
  > Все параметры являются необязательными
> Foreach
  > Простой способ перебора массивов и объектов
  > При запуске автоматом устанавливает внутренний указатель массива в 0
  > Чтобы напрямую изменять значения элементов массива из цикла Foreach,
    надо копировать их в цикл не по значению, а по ссылке &value
    > Сделать указатели на value возможно, только если перебираемый массив
      является переменной.
    > Ссылка $value на последний элемент остается даже после окончания
      работы цикла. Рекомендуется уничтожить ее с помощью unset()
    > Не поддерживает возможность подавления ошибок префиксом @.
> Break
  > Принимает числовой аргумент, указывающий из какого количества циклов надо
    выйти. Его можно не указывать, по умолчанию он = 1.
> Continue
  > Принимает числовой аргумент, указывающий итерации какого количества циклов
    надо прервать. Его можно не указывать, по умолчанию он = 1.
> Switch
  > Continue в Switch дает тот же эффект, что и break
  > Если Switch находится в цикле, и по результату его работы надо перейти
    к следующей итерации цикла, используй continue 2
> Return
  > Круглые скобки принято не использовать с return
    > Если параметры не указаны, вернется NULL
  > Если вызван из глобальной scope, выполнение скрипта прекращается.
  > Если из локальной, управление возвращается на уровень выше.
  > Если вызван из кода, который включен с помощью include или require,
    то управление возвращается файлу, который вызвал текущий.
    > А значение, передаваемое return, == include(...) | require (...)
> Include и Require
  > При ошибке выдает лишь предупреждение (в отличие от Require, которая выдает
    фатальную ошибку и останавливает скрпит)
  > Чтобы случайно не включить 2 одинаковых файла надо использовать:
    > include_once    | включае файл только 1 раз; не включает, если он уже был включен.
    > require_once    | включае файл только 1 раз; не включает, если он уже был включен.
  > Круглые скобки принято не использовать с Include
  > Включает в файл Б указанный файл А, и выполняет его.
  > Если путь не указан, проверяет пути, указанные в директиве
    include_path файла php.ini. По умолчанию это documentRoot
    из httpd.conf (если установлен веб-сервер Apache).
  > Область видимости:
    > Включаемый файл наследует ту же область видимости, что и строка,
      на которой произошло включение.
    > Все функции и классы из включаемого файла будут доступны в глобальной
      области видимости.
  > Чтобы можно было include'ить файлы по URL (http://...), надо в php.ini
    сделать allow_url_include = ON.
  > Возвращаемые значения:
    > FALSE если ошибка
    > 1 если успех
    > Если в конце включаемог файла есть return, то возвращаемое им значение.
  > Директива auto_prepend_file в php.ini позволяет укзать путь к файлу,
    который автоматом будет includ'иться перед основным файлом.
  > Директива auto_append_file в php.ini позволяет укзать путь к файлу,
    который автоматом будет includ'иться после основного файла.
> goto
  > Его надо использовать пореже. Только там, где он действительно нужен.


-------------------------------------------------- */
?> 
