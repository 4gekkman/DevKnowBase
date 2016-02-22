<?php
/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Работа с функциями

Использование функций
> Общий синтаксис и phpDocumentator
> Рекурсивный вызов
> Условное определение функции
> Вложенные фукнции
> Аргументы функций
> Массив аргументов переменной длины
> Обращение к функции через переменную
> Анонимные функции (замыкания)
> Проверить, существует ли функция среди встроенных и пользовательских
> Использование статических переменных в функциях

Функции по управлению функциями
> call_user_func_array       | Вызывает пользовательскую функцию с массивом аргументов
> call_user_func             | Вызывает пользовательскую функцию с указанным списком аргументов
> create_function            | Создаёт анонимную (лямбда) функцию (аналог Function Expression из JS)
> forward_static_call_array  | Вызывает статический метод и передает ему массив аргументов
> forward_static_call        | Вызывает статический метод и передает ему список аргументов
> func_get_arg               | Возвращает элемент из списка аргументов
> func_get_args              | Возвращает массив, содержащий аргументы функции
> func_num_args              | Возвращает число аргументов, переданных функции
> function_exists            | Возвращает TRUE, если указанная функция определена
> get_defined_functions      | Возвращает массив всех определённых функций
> register_shutdown_function | Регистрирует функцию, которая выполнится по завершении работы скрипта


-------------------------------------------------- */

// ########################################################
// --------------> Использование функций <-------------- //

// Общий синтаксис и phpDocumentator
    /**
     * Возвращает сумму аргументов a и b
     * @author German Manvelov <4gekkman@gmail.com>
     * @version 1.0
     * @param int $a аргумент №1
     * @param int $b аргумент №2
     * @return int сумма a и b
     */
        function sum($a, $b) {
            return $a + $b;
        }
        $r = sum(10, 5);  // 15

// Рекурсивный вызов
    // На примере вычисления факториала
        function factorial($n) {
            if($n<=0) return 1;
            return $n * factorial($n-1);
        }
        echo '<p>5! = ' . factorial(5) . '</p>';   // 120

// Условное определение функции
    // Следующее определение в PHP не сработает (в отличие от JS)
        if(2>1) {
            function f1() {
                return 1;
            }
        } else {
            function f1b() {
                return 2;
            }
        }
        // echo f1b();  // FATAL ERROR: call to undefined function f1b()

    // Условное определение функции через include / require
        if(2>1) {
            // include_once 'путь к файлу с функцией №1';
        } else {
            // include_once 'путь к файлу с функцией №2';
        }

// Вложенные функции
    function f2() {
        function f3() {
            return 1;
        } return 1;
    }
    // echo f3();  // FATAL ERROR: call to undefined function f3()

// Аргументы функций
    // Пример функций, принимающей все 3 вида аргументов
        // $x - по значению
        // $y - по ссылке
        // $z - по умолчанию
            function f4($x, &$y, $z = 'Чашка чая') {
                return 1;
            }

// Массив аргументов переменной длины
    function f5($x,$y,$z) {
        echo "<p><b>Аргументы функции</b></p>";
        foreach (func_get_args() as $k => $v) {
            echo "<p>$k => " . $v . '</p>';
        }
        echo "<br><p>Количество аргументов = " . func_num_args() . '</p>';
    }
    f5('Иван','Петр','Катя', 'Жора');

// Обращение к функции через переменную
    $text = 'f5';
    $text(1,3,4,6);   // вызов функции f5

// Анонимные функции (замыкания)    (или экспрешены из JS)
    $f20 = function() {
        echo 'Привет!';
    };

// bool function_exists( string $function_name )
// > Проверить, существует ли функция среди встроенных и пользовательских
    $result = function_exists("f5");  // TRUE

// Использование статических переменных в функциях
    // Демонстрация работы статических переменных на примере функции-счетчика вызовов.
        function counter() {
            // static $x = 2 + 2;   такое объявление вызвало бы ошибку
            static $x = 0;  // эта строка сработает только при 1-м вызове функции
            $x++;
            return $x;
        }
        echo '<p>counter() = ' . counter() . '</p>';  // 1
        echo '<p>counter() = ' . counter() . '</p>';  // 2
        echo '<p>counter() = ' . counter() . '</p>';  // 3


// ##################################################################
// --------------> Функции по управлению функциями <-------------- //
function test($a,$b) {
    return $a + $b;
}

// mixed call_user_func_array( callable $callback, array $param_arr )
// > Вызывает пользовательскую функцию callback с аргументами из массива param_arr
// > Возвращает результат функции или false в случае ошибки
    $res = call_user_func_array('test',[5,10]);  // 15

// mixed call_user_func( callable $callback [, mixed $parameter [, mixed $... ]] )
// > Вызывает пользовательскую функцию с указанным списком аргументов
    $res = call_user_func('test', 5,10);    // 15

// string create_function( string $args, string $code )
// > Создаёт анонимную (лямбда) функцию (аналог Function Expression из JS)
// > $args - аргументы; $code - код фукнции.
// > Возвращает уникальное имя функции в виде строки, или FALSE в случае ошибки.

    // Создание анонимной функции
    $anonFunc = create_function('$a,$b','return $a + $b;');
    $res = $anonFunc(5,20);  // 25

    // Использование анонимной функции, как callable функции
    $arr = [1,2,3];
    $res = array_walk($arr, create_function('&$value', '$value += 10;'));  // прибавляет к каждому элементу массива 10
    print_r($arr);  // Array ( [0] => 11 [1] => 12 [2] => 13 )

// mixed forward_static_call_array( callable $function, array $parameters)
// > Вызывает статический метод и передает ему массив аргументов
// > Должна быть вызвана внутри метода
// > $function - статический метод, который должен быть вызван
//   > Может быть массивом с именем класса и метода / функции: ['имя класса','имя метода']
//   > Может быть строкой с именем метода / функции: 'имя метода'
    function test4() {
        $args = func_get_args();
        echo "C ".join(',', $args)." <br>";
    }

    class A {
        const NAME = 'A';
        public static function test4() {
            $args = func_get_args();
            echo static::NAME, " ".join(',', $args)." <br>";
        }
    }

    class B extends A {
        const NAME = '<br>B';

        public static function test4() {
            echo self::NAME.'<br>';
            forward_static_call_array(['A','test4'], ['Арг1', 'Арг2']);  // вызовет метод 'test4' класса 'A'
            forward_static_call_array('test4', ['Арг1_функ', 'Арг2_функ']);        // вызовет функцию 'test4'
        }
    }

    B::test4();


// mixed forward_static_call ( callable $function [, mixed $parameter [, mixed $... ]] )

    // Тоже самое, что и forward_static_call_array, только передается не массив аргументов, а список через запятую.
    // Пример см. выше.


// mixed func_get_arg( int $arg_num )
// > Возвращает элемент №arg_num из списка аргументов
// > Нельзя вызывать в global scope (PHP > 5.3.0), даже внутри include и require файлов.
    function test1($a,$b,$c) {
        return func_get_arg(1);  // вернет значение аргумента $b
    }
    $res = test1(10,20,30);   // 20

// array func_get_args( void )
// > Возвращает массив, содержащий аргументы функции
// > Нельзя вызывать в global scope (PHP > 5.3.0), даже внутри include и require файлов.
    function test2($a,$b,$c) {
        return func_get_args();  // вернет массив со значениями всех аргументов
    }
    $res = test2(10,20,30);
    print_r($res);       // Array ( [0] => 10 [1] => 20 [2] => 30 )

// int func_num_args( void )
// > Возвращает число аргументов, переданных функции
// > Нельзя вызывать в global scope (PHP > 5.3.0), даже внутри include и require файлов.
    function test3($a,$b,$c) {
        return func_num_args();  // вернет число аргументов, переданных функции
    }
    $res = test3(10,20,30);  // 3

// bool function_exists ( string $function_name )
// > Возвращает TRUE, если указанная функция определена; иначе FALSE
// > !! Возвращает false для включенных с помощью include или require функций.
    $res = function_exists('test3');  // TRUE

// array get_defined_functions( void )
// > Возвращает массив всех определённых функций, встроенных и пользовательских
// > ['internal'] - здесь все встроенные функции
// > ['user']     - здесь все пользовательские функции
    $arr = get_defined_functions();

    /*
    echo "<br><pre>";
    print_r($arr);         // посмотрим содержание массива: доступно 1363 встроенных функции и 10 пользовательских
    echo "<br></pre>";
    */

// void register_shutdown_function( callable $callback [, mixed $parameter [, mixed $... ]] )
// > Регистрирует callback функцию, которая выполнится по завершении работы скрипта или при вызове exit();
// > Возможна регистрация нескольких таких функций
// > $callback  - регистрируемая функция
// > $parameter - аргументы завершающей функции
    register_shutdown_function(create_function('','echo "<br><br>Конец скрипта";'));
    register_shutdown_function(create_function('','echo "<br><br>Совсем конец скрипта";'));










/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------

> PHPDocumentator - техника создания документации в PHP. В том числе описания
  функции.
  > Если при определении функции использовать эту технику, то многие IDE,
    например PHPStorm при использовании этих функций будут выводить подсказки
    с информацией из той самой документации.
    > Примечание*: документация начинается с /** (обязательно 2-х звездочек)
  > Подробности о PHPDocumentator и инструкции здесь: http://manual.phpdoc.org/HTMLframesConverter/default/
  > Чтобы просмотреть полную справку функции (описание, типы параметров ... ):
    1. Щелкнуть ЛК мыши по названию функции
    2. Нажать CTRL + Q

> Функции бывают:
  > Пользовательские
  > Встроенные - доступны по умолчанию
    > Есть ряд встроенных функций не доступных по умолчанию. Чтобы они стали доступны,
      PHP должен быть собран с соответствующими расширениями.
    > Вызвав phpinfo() или get_loaded_extensions() можно узнать поддержка каких
      модулей есть в PHP.
  > Анонимные (также известные, как Замыкания, но к замыканиям из JS отношения не имеющие)
    > Анонимная функция - это тоже самое, что function expression из
      JavaScript.
    > Анонимы могут наследовать переменные из родительской области видимости,
      (той, в которой было объявлено замыкания, не равно глобальной)
      для этого они должны быть переданы в функцию через ее аргументы.
> Все функции в PHP находятся в глобальной области видимости.
> PHP не поддерживает перегрузку функций
> В PHP нельзя переопределить или удалить уже созданную функцию
> Порядок выполнения и условное определение функций
  > Вызвать функцию можно хоть до, хоть после ее определения в коде, без разницы.
    Кроме случаев, описанных ниже:
    > В отличие от JS, в PHP возможно условное определение функций. Например,
      if(a>b) { function f() {...} }
      > Но вызов условно определенной функции возможен только ниже по коду после
        ее определения.
    > Если функция А определена внутри функции Б, то вызвать функцию А можно будет
      только после строчки в коде, в которой будет вызвана функция Б.
> Рекурсия
  > Лучше избегать вызовов функций с глубиной рекурсии более 150 уровней, иначе
    это может вызвать крах выполняемого скрипта.
> phpDocumentator - это система документировани исходных текстов
  на PHP. Она также встроена в phpStorm.
> Аргументы функций
  > Функция в PHP может принимать аргументы:
    > По значению
    > По ссылке
      > Поставить амперсанд & перед аргументом (означающий, что аргумент передается
        по ссылке) можно в определении функции. Тогда аргумент всегда будет передаваться
        в нее по ссылке. А можно в вызове функции.
    > По умолчанию
      > Значение по умолчанию может быть передано по ссылке (PHP >= 5)
      > Должно быть константным выражением, а не (например) вызовом функции.
      > Все аргументы со значением по умолчанию должны находиться правее
        остальных, иначе возможны проблемы.
    > Массив аргументов переменной длины
      > Аргументов в функции может быть и больше, чем указано в определении.
        Чтобы получить доступ к ним, используют массив аргументов переменной длины.
      > Реализуется с помощью следующих 3-х функций:
        > func_num_args()   | возвращает количество аргументов
        > func_get_arg()    | возвращает аргумент с указанным номером
        > func_get_args()   | возвращает массив аргументов
      > Эти функции могут быть использованы в качестве параметра функции (PHP >= 5.3)
        > Если такая функция будет вызвана из глобальной области видимости файла,
          подключенного через include или require, в функции вызывающего файла,
          то она вернет -1 и сгенерирует warning.
> return
  > Это необязательный оператор возврата
  > Возврат приводит к завершение работы функции
  > В качестве аргумента принимает значения любого типа, в том числе
    массивы и объекты.
> Обращение к функции через переменную
  > Если переменная типа string имеет значение, совпадающее с именем
    функции, то поставив справа от этой переменной () можно вызвать
    соответствующую функцию.

-------------------------------------------------- */
?>