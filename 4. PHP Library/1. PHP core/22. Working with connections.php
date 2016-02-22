<?php
/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Работа с соединениями

Основное
> Как узнать размер потребляемой памяти в разных частях скрипта
> Как узнать, сколько MAX жрет скрипт в самом "тяжелом" месте
> Как замерить время выполнения скрипта
> Как продлить время работы скрипта до бесконечности если надо.
> Вызов указанной функции сразу после разрыва соединения


Функции
> connection_status           | Возвращает статус соединения в битах (0, 1, 2, 3)
> connection_aborted          | Возвращает TRUE, если соединение разорвано; инача FALSE.
> set_time_limit              | Обнуляет счетчик и задает новое МАХ время на выполнение скрипта
> ignore_user_abort           | Устанавливает, прерывать ли работу скрипта в случае разрыва соединения
> register_shutdown_function  | (см. '6. Wokring With Functions') Регистрирует функцию, которая выполнится по завершении работы скрипта
> memory_get_usage            | Возвращает размер памяти в байтах, выделенный скрипту на данный момент
> memory_get_peak_usage       | Возвращает размер памяти в байтах, соотв. МАХ величине, которая была выделена скрипту когда-либо с начала и вплоть до текущего момента






-------------------------------------------------- */


// ###########################################
// --------------> Основное <-------------- //

// Как узнать размер потребляемой памяти в разных частях скрипта
// > С помощью функции memory_get_usage()
// > Нужно запускать функцию memory_get_usage() в разных частях скрипта,
//   и узнавать, сколько в этом конкретном месте байт выделено скрипту

// Замерим, сколько памяти занимает массив [1,2,3,4,5]
    // Замер текущей используемой памяти до объявления массива
    $memStart = memory_get_usage();  // 229344 байт

    // Объявление массива
    $x = [1,2,3,4,5];     // он жрет 1.078 килобайт

    // Замер текущей используемой памяти после объявления массива
    $memEnd = memory_get_usage(); // 231080 байт

    // Теперь можно узнать дельту:
    $memDelta = $memEnd - $memStart;  // 1104 байт == 1.078 килобайт


// Как узнать, сколько MAX жрет скрипт в самом "тяжелом" месте
// > С помощью функции memory_get_peak_usage()

    // Вызовем его в конце скрипта, и узнаем, сколько он максимум жрал на пике:
    register_shutdown_function(
        create_function('','echo memory_get_peak_usage();'));  // 246528 байт == 240.75 килобайт


// Как замерить время выполнения скрипта

    // Сначала записать текущее UNIX-время с точностью до микросекунд
        $startTime = microtime(true);

    // Теперь смоделировать ситуацию, в которой скрипт выполняется больше секунды
    // > Для моего компа получились следующие значения $delta для разных $n:
    //   > $n == 10000,           $delta ==  0.0004  секунд
    //   > $n == 100000,          $delta ==  0.0041  секунд
    //   > $n == 1000000,         $delta ==  0.0404  секунд
    //   > $n == 10000000,        $delta ==  0.4059  секунд
    //   > $n == 100000000,       $delta ==  4.0196  секунд
    //   > $n == 500000000,       $delta ==  20.0335 секунд

        $n = 10000;
        for($i = 0; $i < $n; $i++) {}

    // Теперь (будем считать, что это конец скрипта), еще раз записать UNIX-время с точностью до микросекунд
    // > Чтобы запустить это в действительности в конце скрипта, можно использовать функцию register_shutdown_function()
        $endTime = microtime(true);

    // И теперь можно вычислить дельту $delta межну начальным и конечным временем
        $delta = $endTime - $startTime;
        echo '$delta = '.$delta;


// Как продлить время работы скрипта до бесконечности если надо.
// 1. Замерять работу скрипта счетчиком.
// 2. До того, как наступит timeout, запускать функцию set_time_limit(), которая обнуляет счетчик.



// Вызов указанной функции сразу после разрыва соединения
// > Иногда, когда ignore_user_abort == 0, после разрыва соединения все-таки
//   нужно произвести какие-то действия. Для этого можно использовать функцию
//   register_shutdown_function(), которая запускается в случае завершения работы
//   скрипта. Но нам же нужно, чтобы она запустилась только в случае завершения
//   работы скрипта по причине разрыва соединения клиентом. И здесь нам поможет
//   функция connection_aborted(), проверяющая разорвано ли соединение ( либо connection_status() )

    // Написать код для функции register_shutdown_function()
        $str = 'if(connection_aborted()) {echo "<br>Соединение было разорвано. Тут кикие-то завершающие действия."; }';

    // С помощью функции register_shutdown_function() зарегистрировать callback функцию
    // с вышеуказанным кодом, которая будет запущена в конце работы скрипта
    // > В том числе в случае разрыва соединения
        register_shutdown_function(create_function('',$str));

    // Смоделировать ситуацию, в которой скрипт будет работать достаточно долго,
    // чтобы я успел нажать на крестик в браузере, и тем самым разорвать соединение,
    // и посмотреть, как сработает вышеобозначенная функция
    // > *Примечание: к сожалению, результат работы функции не выводится после разрыва
    //                соединение, так как оно разорвано. Но внутренние изменения происходят.
        for($i = 0; $i < 100000000; $i++) {}   // время работы скрипта ~4 секунды


// ##########################################
// --------------> Функции <-------------- //

// int connection_status( void )
// > Возвращает статус соединения в битах (0, 1, 2, 3)
    $res = connection_status();  // 0

// int connection_aborted ( void )
// > Возвращает TRUE, если соединение разорвано; инача FALSE.
    $res = connection_aborted();  // 0

// void set_time_limit ( int $seconds )
// > Обнуляет счетчик и задает новое МАХ время на выполнение скрипта в секундах
    set_time_limit(60);  // теперь счетчик обнулен и новое время на выполнение скрипта: 60 секунд

// int ignore_user_abort ([ string $value ] )
// > Если $value задан, то:
//   > Функция устанавливает его в качестве значения в директиву ignore_user_abort в php.ini
//   > $value может быть равен TRUE или FALSE
// > Если $value не задан, то:
//   > Функция просто возвращает текущий установленный параметр.
//   > Вернет 0, если параметр ignore_user_abort в php.ini отключен.
    ignore_user_abort('0');      // Выключить
    $res = ignore_user_abort();  // 0

    ignore_user_abort('1');      // Включить
    $res = ignore_user_abort();  // 1

// register_shutdown_function
// > (см. '6. Wokring With Functions') Регистрирует функцию, которая выполнится по завершении работы скрипта

// int memory_get_usage ([ bool $real_usage = false ] )
// > Возвращает размер памяти в байтах, выделенный скрипту на данный момент
// > Если $real_usage == true, то будет возвращено реальное кол-во памяти.
// > Если $real_usage == false, то будет возвращено только кол-во памяти, выделенное
//   с помощью функции emalloc()
    $res = memory_get_usage(1);  // 262144   байт


// int memory_get_peak_usage ([ bool $real_usage = false ] )
// > Возвращает размер памяти в байтах, соотв. МАХ величине, которая была выделена скрипту когда-либо с начала и вплоть до текущего момента
// > Если $real_usage == true, то будет возвращено реальное кол-во памяти.
// > Если $real_usage == false, то будет возвращено только кол-во памяти, выделенное
//   с помощью функции emalloc()
    $res = memory_get_peak_usage(1);  // 262144   байт





/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------

> Соединение - с браузером клиента.
> Есть 3 состояния соединения:
  > 0 - NORMAL     | Во время штатного выполнения PHP-скрипта установлен статус NORMAL
  > 1 - ABORTED    | В случае, если удаленный клиент разорвал соединение, статус изменяется на ABORTED
                     >  Чаще всего отсоединение удаленного клиента происходит при нажатии кнопки "Stop" в браузере.
  > 2 - TIMEOUT    | Устанавливается в случае, если достигнут временной лимит выполнения скрипта
                     > См. max_execution_time в php.ini или функцию set_time_limit()
  > 3 - ABORTED и TIMEOUT  | 2 статуса установлены одновременно.
                             > Такое возможно, если скрипт проигнорировал разрыв соединения,
                               и продолжил работу, пока не наступил еще и таймаут.
> Иногда скрипт должен по-любому продолжать свою работу до конца, даже если
  клиент разорвал соединение. Например, так идет какая-нибудь важная транзакция,
  и скрипт должен отработать до конца.
  > По умолчанию: скрипт прекращает работу в тот момент, когда клиент разрывает соединение.
    > Изменить это поведение можно следующими способами:
      > Установить директиву ignore_user_abort == 1 в конфигурационном файле php.ini.
      > Установить php_value ignore_user_abort в конф. файле httpd.conf веб-сервера Apache.
      > Воспользоваться функцией ignore_user_abort()
  > Последний шанс что-то поправить в скрипте, если клиент разорвал соединение,
    и скрипт прекратил работу - появляется, если была установлена завершающая
    функция register_shutdown_function().
    > Но она вызывается и при нормальном завершении работы скрипта. Поэтому чтобы
      этого не происходило, и она вызывалась только, если пользователь отменил
      соединение, нужно проверить этот факт функцией connection_aborted().

-------------------------------------------------- */
?>



















