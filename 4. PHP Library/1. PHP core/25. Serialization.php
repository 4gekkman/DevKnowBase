<?php
/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Сериализация

Основное
> json_encode           | Возвращает строку с JSON представлением входных данных
> json_decode           | Принимает JSON-строку, декодирует, возвращает переменную PHP
> json_last_error       | Возвращает номер константы последней ошибки
> json_last_error_msg   | Возвращает строку с сообщением о последней ошибке
                          в функциях json_encode() и json_decode()

Дополнительно
> Закодировать все элементы массива в UTF-8 перед переводом в JSON-строку

-------------------------------------------------- */


// json_encode( mixed $value [, int $options = 0] )
// > Возвращает строку с JSON представлением входных данных
// > $value - значение, которое надо закодировать.
// > $options - можно настроить некоторые параметры кодирования:
//   > JSON_HEX_TAG           | Все < и > кодируются в \u003C и \u003E. Доступна начиная с PHP 5.3.0.
//   > JSON_HEX_AMP           | Все & кодируются в \u0026. Доступна начиная с PHP 5.3.0.
//   > JSON_HEX_APOS          | Все символы ' кодируются в \u0027. Доступна начиная с PHP 5.3.0.
//   > JSON_HEX_QUOT          | Все символы " кодируются в \u0022. Доступна начиная с PHP 5.3.0.
//   > JSON_FORCE_OBJECT      | Кодировать как объект, а не как массив, если входной массив - не ассоциативный.
//   > JSON_NUMERIC_CHECK     | Кодирование строк, содержащих числа, как числа. Доступна начиная с PHP 5.3.3.
//   > JSON_BIGINT_AS_STRING  | Сохранять тип BIGINT, как строку.
//   > JSON_PRETTY_PRINT      | Использовать пробельные символы в возвращаемых данных для их форматирования.
//   > JSON_UNESCAPED_SLASHES | Не экранировать /
//   > JSON_UNESCAPED_UNICODE | Не кодировать многобайтные символы Unicode (по умолчанию они кодируются как \uXXXX)

    // Закодировать массив. Без опций.

        // Объявить массив. Тут есть и UTF-8 и ASCII значения.
            $arr = ['Иван', 'John'];

            // Проверить кодировку элементов массива
                $res = mb_detect_encoding($arr[0]);  // UTF-8
                $res = mb_detect_encoding($arr[1]);  // ASCII

        // Перевести кодировку всех элементов массива в UTF-8

            // Колбэк-функция для кодирования не UTF-8 строк массива в UTF-8
                function to_utf8($n) {
                    // Является ли переданное значение строкой
                    if(is_string($n)) {
                        // Кодировка переданной строки не UTF-8?
                        if(mb_detect_encoding($n) != 'UTF-8') {
                            return utf8_encode($n);
                        } else { // если UTF-8, то просто вернуть ее как есть
                            return $n;
                        }
                    }
                    return $n;
                }

            // Получить UTF-8 массив
                $utf8Array = array_map('to_utf8', $arr);

        // Закодировать массив в JSON-строку
            $str_JSON = json_encode($utf8Array);  // ["\u0418\u0432\u0430\u043d","John"]


    // Демонстрация работы опций
        $arr = ['<xxx1>',"'xxx2' xxx3",'/"xxx4"/','&xxx5&', "\xc3\xa9"];

        // Без опций
        //   ["","'xxx2' xxx3","\/\"xxx4\"\/","&xxx5&","\u00e9"]
            $str_JSON = json_encode($arr);

        // Тэги                   [JSON_HEX_TAG]
        //   ["\u003Cxxx1\u003E","'xxx2' xxx3","\/\"xxx4\"\/","&xxx5&","\u00e9"]
            $str_JSON = json_encode($arr, JSON_HEX_TAG);

        // Амперсанды             [JSON_HEX_AMP]
        //   ["","'xxx2' xxx3","\/\"xxx4\"\/","\u0026xxx5\u0026","\u00e9"]
            $str_JSON = json_encode($arr, JSON_HEX_AMP);

        // Апострофы              [JSON_HEX_APOS]
        //   ["","\u0027xxx2\u0027 xxx3","\/\"xxx4\"\/","&xxx5&","\u00e9"]
            $str_JSON = json_encode($arr, JSON_HEX_APOS);

        // Кавычки                [JSON_HEX_QUOT]
        //   ["","'xxx2' xxx3","\/\u0022xxx4\u0022\/","&xxx5&","\u00e9"]
            $str_JSON = json_encode($arr, JSON_HEX_QUOT);

        // Массив как объект      [JSON_FORCE_OBJECT]
        //   {"0":"","1":"'xxx2' xxx3","2":"\/\"xxx4\"\/","3":"&xxx5&","4":"\u00e9"}
            $str_JSON = json_encode($arr, JSON_FORCE_OBJECT);

        // Числа как числа        [JSON_NUMERIC_CHECK]
        //   ["","'xxx2' xxx3","\/\"xxx4\"\/","&xxx5&","\u00e9"]
            $str_JSON = json_encode($arr, JSON_NUMERIC_CHECK);

        // BIGINT как стркоа      [JSON_BIGINT_AS_STRING]
        //   ["","'xxx2' xxx3","\/\"xxx4\"\/","\u0026xxx5\u0026","\u00e9"]
            $str_JSON = json_encode($arr, JSON_BIGINT_AS_STRING);

        // Пробелы                [JSON_PRETTY_PRINT]
        //   [ "", "'xxx2' xxx3", "\/\"xxx4\"\/", "&xxx5&", "\u00e9" ]
            $str_JSON = json_encode($arr, JSON_PRETTY_PRINT);

        // Не экранировать /      [JSON_UNESCAPED_SLASHES]
        //   ["","'xxx2' xxx3","/\"xxx4\"/","&xxx5&","\u00e9"]
            $str_JSON = json_encode($arr, JSON_UNESCAPED_SLASHES);

        // Не кодировать юникод   [JSON_UNESCAPED_UNICODE]
        //   ["","'xxx2' xxx3","\/\"xxx4\"\/","&xxx5&","é"]
            $str_JSON = json_encode($arr, JSON_UNESCAPED_UNICODE);


// mixed json_decode( string $json [, bool $assoc = false [, int $depth = 512 [,
//                    int $options = 0 ]]] )
// > Принимает JSON-строку, декодирует, возвращает переменную PHP
// > $json - JSON-строка (должна была быть закодирована в UTF-8 при создании)
// > $assoc - если true, возвращаемые объекты будут преобразованы в ассоциативные массивы
// > $depth - указывает грубину рекурсии
// > $options - опции декодирования
//   > JSON_BIGINT_AS_STRING   | возвращать BIGINT значения, как строки (по умолчанию как float-значения)
// > Возвращает:
//   > Регистронезависимые значения 'true', 'false' и 'null' возвращаются, как
//     TRUE, FALSE и NULL.
//   > Возвращает NULL там, где не получается раскодировать данные.
//   > Возвращает объект или массив с элементами - декодированными из JSON данными

    // Создать JSON-строки
        // ... из массива
        $arr = ['Привет, народ!','12345','<html></html>', 'John McKeyne'];
        $str_JSON = json_encode($arr);  // ["\u041f\u0440\u0438\u0432\u0435\u0442, \u043d\u0430\u0440\u043e\u0434!","12345","<\/html>","John McKeyne"]

        // ... как объект
        $obj_JSON = '{"john-dow":1,"b":2,"c":3,"d":4,"e":5}';

        // ... содержащую большое число
        $bignum_JSON = '{"number": 12345678901234567890}';

    // Декодировать JSON-строки
        $arr = json_decode($str_JSON);
        $obj = json_decode($obj_JSON);

        // Посмотрим, что в массиве
            echo "<br><pre>";
            print_r($arr);
            echo "<br></pre>";
            /*
                Array
                (
                    [0] => Привет, народ!
                    [1] => 12345
                    [2] =>
                    [3] => John McKeyne
                )
            */

        // Посмотрим, что в объекте
            echo "<br><pre>";
            print_r($obj);
            echo "<br></pre>";
            /*
                stdClass Object
                (
                    [john-dow] => 1
                    [b] => 2
                    [c] => 3
                    [d] => 4
                    [e] => 5
                )
            */

            // Доступ к свойству объекта с неправильным именем
                $res = $obj->{'john-dow'};  // 1

        // Декодируем строку с большим BIGINT числом
            $bignum = json_decode($bignum_JSON, false, 512, JSON_BIGINT_AS_STRING);
            $res = $bignum->number;  // '12345678901234567890'



// int json_last_error ( void )
// > Если при последнем JSON кодировании/декодировании возникла ошибка, то возвращает её код.
// > Коды ошибок здесь:  http://www.php.net/manual/ru/function.json-last-error.php

    // JSON-строка без ошибок
        $json1[] = '{"Organization": "PHP Documentation Team"}';

    // JSON-строка с ошибками: ' вместо "
        $json2[] = "{'Organization': 'PHP Documentation Team'}";

    // Поищем ошибки в этих строках

        // В строке без ошибок
            foreach ($json1 as $string) {
                echo 'Декодируем строку без ошибок: ' . $string;
                json_decode($string);

                switch (json_last_error()) {
                    case JSON_ERROR_NONE:
                        echo ' - Ошибок нет';
                        break;
                    case JSON_ERROR_DEPTH:
                        echo ' - Достигнута максимальная глубина стека';
                        break;
                    case JSON_ERROR_STATE_MISMATCH:
                        echo ' - Некорректные разряды или не совпадение режимов';
                        break;
                    case JSON_ERROR_CTRL_CHAR:
                        echo ' - Некорректный управляющий символ';
                        break;
                    case JSON_ERROR_SYNTAX:
                        echo ' - Синтаксическая ошибка, не корректный JSON';
                        break;
                    case JSON_ERROR_UTF8:
                        echo ' - Некорректные символы UTF-8, возможно неверная кодировка';
                        break;
                    default:
                        echo ' - Неизвестная ошибка';
                        break;
                }

                echo '<br>';
            }
            // Результат выполнения:
            //   'Декодируем строку без ошибок: {"Organization": "PHP Documentation Team"} - Ошибок нет'


        // В строке с ошибками
            foreach ($json2 as $string) {
                echo 'Декодируем строку с ошибками: ' . $string;
                json_decode($string);

                switch (json_last_error()) {
                    case JSON_ERROR_NONE:
                        echo ' - Ошибок нет';
                        break;
                    case JSON_ERROR_DEPTH:
                        echo ' - Достигнута максимальная глубина стека';
                        break;
                    case JSON_ERROR_STATE_MISMATCH:
                        echo ' - Некорректные разряды или не совпадение режимов';
                        break;
                    case JSON_ERROR_CTRL_CHAR:
                        echo ' - Некорректный управляющий символ';
                        break;
                    case JSON_ERROR_SYNTAX:
                        echo ' - Синтаксическая ошибка, не корректный JSON';
                        break;
                    case JSON_ERROR_UTF8:
                        echo ' - Некорректные символы UTF-8, возможно неверная кодировка';
                        break;
                    default:
                        echo ' - Неизвестная ошибка';
                        break;
                }

                echo PHP_EOL;
            }
            // Результат выполнения:
            //   'Декодируем строку с ошибками: {'Organization': 'PHP Documentation Team'} - Синтаксическая ошибка, не корректный JSON'

    // Поищем ошибки в закодированном JSON многомерном массиве

        // Объявить многомерный массив
            $arr = [
                1 => array(
                    'English' => array(
                        'One',
                        'January'
                    ),
                    'French' => array(
                        'Une',
                        'Janvier'
                    )
                )
            ];

        // Закодировать его в JSON-строку
           $arr_JSON = json_encode($arr);


    // Поиск ошибки при указании неправильного $depth, при декодировании JSON-строки
    // *Примечание: $depth - глубина рекурсии объектов или многомерного массива

        // Создать массив кодов ошибок (номеров констант)

            // Получить все сейчас определенные константы в массив
            $constants = get_defined_constants(true);

            // Отобрать из них только константы в массиве с ключём JSON
                $json_errors = [];
                foreach ($constants["json"] as $name => $value) {
                    if (!strncmp($name, "JSON_ERROR_", 11)) {
                        $json_errors[$value] = $name;
                    }
                }

        // Отобразить ошибки для выбранных глубин $depth рекурсий ( с 4 по 3 )

            // Пробежаться по глубинам от 4 до 3, в поисках верной
            foreach (range(4, 3, -1) as $depth) {
                // Декодировать JSON-строку с текущей выбранной $depth
                $res = json_decode($arr_JSON, true, $depth);

                // Вывести содержимое $res
                echo "<br><pre>";
                print_r($res);
                echo "<br></pre>";

                // Вывести имя константы последней ошибки
                echo 'Last error: ', $json_errors[json_last_error()].'<br>';

                // С помощью json_last_error_msg() вывод сообщения об ошибке:
                echo 'Сообщение: ', json_last_error_msg().'<br>';
            }
            // Результат:
            // $depth == 4 - верное значение для этой JSON-строки. Остальные не верные



// string json_last_error_msg ( void )
// > Возвращает строку с сообщением о последней ошибке
//   в функциях json_encode() и json_decode()

    // См. пример выше



/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------

> Расширение JSON с PHP 5.2.0 входит в поставку PHP.
> JSON работает только с UTF-8 кодировкой.
> При кодировании массива:
  > Если его индексы не являются последовательными числами от нуля,
    то они кодируются, как строки.
  > Если массив содержит не UTF-8 значения, то на выходе будут нули.
> Нужно всегда убеждаться, что на принимающей стороне JSON декодер может
  правильно декодировать значение, закодированное с помощью JSON_encode().
> Правила валидных JSON-данных:
  > Имя и значение (если это строка) должны обрамляться " а не '
  > Не должно быть завершающей запятой после последнего элемента в объекте:
    > Пример ошибки: {"a":10,}


-------------------------------------------------- */
?>









