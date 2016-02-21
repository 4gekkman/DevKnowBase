<?php
/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Все о работе с Датами и Временем


Дата и время
    > Красивый просмотр содержания объекта

    Функции (выборка наиболее нужных)
    > date_default_timezone_get | возвращает строку с временной зоной, используемой этим скриптом по умолчанию во всех функциях даты/времени
    > date_default_timezone_set | Устанавливает временную зону по умолчанию для всех фукнций даты/времени в скрипте
    > time                      | кол-во секунд, прошедших с начала эпохи UNIX
    > microtime                 | возвращает текущую метку UNIX с микросекундами
    > getdate                   | По метке времени возвращает массив и снформацией о дате и времени
    > date                      | Форматирует вывод системной даты/времени
    > mktime                    | возвращает метку UNIX-времени для заданой даты
    > strtotime                 | преобразует текстовое представление даты в UNIX-время
    > date_parse                | Возвращает ассоциативный массив с подробной информацией о заданной дате
    > date_parse_from_format    | возвращает массив о заданной в указанном формате $format дате в виде строки $date
    > date_sun_info             | возвращает массив со временем рассвета, заката, сумерек, солнечного полдня

    Класс DateTime
    > Конструктор
    > Обработка исключений
    > ::Add                 | добавляет заданный интервал времени к объекту DateTime
    > ::createFromFormat    | создает и возвращает экземпляр класса DateTime из указанной строки по указанному формату
    > ::modify              | изменяет метку времени объекта DateTime
    > ::setDate             | устанавливает дату (число, месяц, год) объекта DateTime
    > ::setTime             | устанавливает время (часы, минуты, секунды) объекта DateTime
    > ::setTimestamp        | устанавливает дату и время, основываясь на метке UNIX
    > ::setTimeZone         | установка временной зоны для объекта класса DateTime

    Класс DateInterval
    > Конструктор

    Класс DateTimeZone
    > Конструктор
    > Обработка исключений
    > ::getLocation         | возвращает массив с широтой, долготой и кодом страны для этой временной зоны
    > ::getName             | возвращает имя временной зоны
    > ::getOffset           | возвращает смещение временной зоны от GMT




-------------------------------------------------- */


// ###############################################
// --------------> Дата и время <-------------- //



// Красивый просмотр содержания объекта
/*

echo "<br><pre>";
print_r($i);
echo "<br></pre>";

*/


// ----------------------- Функции (выборка наиболее нужных) ----------------------- //

// string date_default_timezone_get( void )
// > Ищет данные о временной зоне в следующем приоритетном порядке:
//   > Значение, которое было (если) установлено функцией date_default_timezone_set()
//   > Значение, установленное в php.ini директивой date.timezone
    $d = date_default_timezone_get();  // Europe/Moscow

// bool date_default_timezone_set( string $timezone_identifier )
// > Устанавливает временную зону по умолчанию для всех фукнций даты/времени в скрипте
// > Имеет бОльший приоритет, чем директива date.timezone в php.ini
// > $timezone_identifier - идентификатор временной зоны, их список здесь:
//   > http://www.php.net/manual/ru/timezones.php
// > Возвращает FALSE, если timezone_identifier неверный; в остальных случаях TRUE.
    $b = date_default_timezone_set('Europe/Moscow');  // TRUE

// int time( void )
// > кол-во секунд, прошедших с начала эпохи UNIX
    $d = time();  // 1373130942

// mixed microtime ([ bool $get_as_float = false ] )
// > Возвращает текущую метку UNIX с микросекундами
// > Если get_as_float == false:
//   > возвращает строку в формате 'msec sec', где:
//     > sec   - кол-во секунд, прошедших с момента начала эпохи UNIX
//     > msec  - кол-во микросекунд, прошедших с начала последней секунды
// > Если get_as_float == true
//   > Вернет результат в вещественном float виде, представляющий собой текущее время в секундах,
//     прошедшее с момента начала эпохи UNIX, с точностью до микросекунд.
    $res = microtime();      // '0.93296000 1377640255'
    $res = microtime(true);  // 1377640283.5387

// array getdate([ int $timestamp = time() ])
// > По метке времени возвращает массив и снформацией о дате и времени
    $arr = getdate();                                      // информация о текущем времени
    $arr = getdate( strtotime('01-07-2013 12:55:03') );    // информация об указанной дате и времени
    $d = $arr['yday'];     // 181     (день в году)
    $d = $arr['year'];     // 2013
    $d = $arr['mon'];      // 7
    $d = $arr['wday'];     // 1       (номер дня в неделе: с 1 по 7)
    $d = $arr['mday'];     // 1       дата
    $d = $arr['hours'];    // 12
    $d = $arr['minutes'];  // 55
    $d = $arr['seconds'];  // 3
    $d = $arr['weekday'];  // Monday
    $d = $arr['month'];    // July
    $d = $arr[0];          // 1372668903    (UNIX-время)

// string date( string $format [, int $timestamp = time()] )
// > Возвращает строку, отформатированную в соответствии с шаблоном $format
//   > Правила оформления шаблона см. здесь:  http://www.php.net/manual/ru/function.date.php
    $d = date('Y:m:d');        // 2013:07:06
    $d = date('d F Y');        // 06 July 2013
    $d = date('H:i:s');        // 21:45:44
    $d = date('Y-m-d H:i:s');  // 2013-07-06 21:44:48   (формат MySQL DATETIME)

// int mktime( [int $hour = date("H") [,
//              int $minute = date("i") [,
//              int $second = date("s") [,
//              int $month = date("n") [,
//              int $day = date("j") [,
//              int $year = date("Y")       [, int is_dst = -1 ]]]]]]] )
// > возвращает метку UNIX-времени для заданой даты
// > is_dst - летнее или нет время; с PHP>5.1.0 не рекомендуется к использованию, вместо него надо установить соответствующую временную зону.
    $d = mktime(04,00,00,01,24,1987);   // 538448400  (соответствует дате 1987-01-24 04:00:00)

// int strtotime( string $time [, int $now = time() ] )
// > преобразует текстовое представление даты в UNIX-время
// > подробнее о форматах $time здесь: http://www.php.net/manual/ru/datetime.formats.php
    $d = strtotime('now');               // 1373208633| 2013-07-07 19:12:24 | возвращает метку текущего серверного времени
    $d = strtotime('24 january 1987');   // 538434000 | 1987-01-24 00:00:00 | возвращает метку для указанной даты
    $d = strtotime('
                2006-12-12 10:00:00.5'); // 1165906800| 2006-12-12 10:00:00 | возвращает метку для указанной даты
    $d = strtotime('24:00',538448400);   // 538520400 | 1987-01-25 00:00:00 | +24 часа к указанной метке
    $d = strtotime('+1 day',538434000);  // 538520400 | 1987-01-25 00:00:00 | +1 день к к указанной метке
    $d = strtotime('+1 week',538434000); // 539038800 | 1987-01-31 00:00:00 | +1 неделя к указанной метке
    $d = strtotime('+1 month',538434000);// 541112400 | 1987-02-24 00:00:00 | +1 месяц к указанной метке
    $d = strtotime('+1 year',538434000); // 569970000 | 1988-01-24 00:00:00 | +1 год к указанной метке
    $d = strtotime('
     +1 week 2 days 4 hours 2 seconds',
                             538434000); // 539226002 | 1987-02-02 04:00:02 | +1 неделя 2 дня 4 часа 2 секуны
    $d = strtotime('next Thursday',
                             538434000); // 538866000 | 1987-01-29 00:00:00 | следующий четверг
    $d = strtotime('last Monday',
                             538434000); // 538002000 | 1987-01-19 00:00:00 | предыдущий понедельник

// array date_parse( string $date )
// > Возвращает ассоциативный массив с подробной информацией о заданной дате
// > $date в том же формате, что принимает функция strtotime
    $arr = date_parse('2006-12-12 10:00:02.5');
    $d = $arr['year'];    // 2006
    $d = $arr['month'];   // 12
    $d = $arr['day'];     // 12
    $d = $arr['hour'];    // 10
    $d = $arr['minute'];  // 00
    $d = $arr['second'];  // 2
    $d = $arr['fraction'];// 0.5

// array date_parse_from_format( string $format, string $date )
// > возвращает массив о заданной в указанном формате $format дате в виде строки $date
    $date = '6.1.2009 13:00+01:00';
    $format = 'j.n.Y H:iP';
    $arr = date_parse_from_format($format, $date);
    $d = $arr['year'];    // 2009
    $d = $arr['month'];   // 1
    $d = $arr['day'];     // 6
    $d = $arr['hour'];    // 13
    $d = $arr['minute'];  // 00
    $d = $arr['second'];  // нет
    $d = $arr['fraction'];// нет

// array date_sun_info( int $time, float $latitude, float $longitude )
// > возвращает массив со временем рассвета, заката, сумерек, солнечного полдня
// > $time - временная метка
    $arr = date_sun_info(strtotime('2013-07-07'), 55.790859, 37.781875);
    $d = date('Y-m-d H:i:s', $arr['sunrise']);  // 2013-07-07 04:55:19
    $d = date('Y-m-d H:i:s', $arr['sunset']);   // 2013-07-07 22:12:25
    $d = date('Y-m-d H:i:s', $arr['transit']);  // 2013-07-07 13:33:52  (солнечный полдень)
    $d = date('Y-m-d H:i:s',
                $arr['civil_twilight_end']);    // 2013-07-07 23:10:33  (заканчиваются послезакатные сумерки)
    $d = date('Y-m-d H:i:s',
                $arr['civil_twilight_begin']);  // 2013-07-07 03:57:11  (начинаются предрассветные сумерки)

    // Определить время восхода, заката, начала сумерек до восхода
    //  и конца сумерек после заката для текущей даты

        // Получить массив с данными для текущей даты
            $arr = date_sun_info(time(), 55.790859, 37.78187);

        // Определить функцию, которой надо воздействовать на каждый элемент массива
        // (в массиве UNIX-время, а нам нужно в человекочитаемом формате)
            function formatting($n) {
                return date('Y-m-d H:i:s', $n);
            }

        // С помощью функции array_map применить определенную выше функцию к каждому элементу массива
            $newArr = array_map('formatting',$arr);

        // Вывести результат
        echo "<br><pre>";
        print_r($newArr);
        echo "<br></pre>";



// ----------------------- Класс DateTime ----------------------- //

// public DateTime::__construct() ([ string $time = "now" [, DateTimeZone $timezone = NULL]] )
// > Создает новый объект класса DateTime
// > $timezone задает временную зону; если не задано, используется временная зона скрипта
//   > Если в качестве $time указана временная метка, то $timezone не учитывается
// > В случае ошибки возвращает исключение типа Exception
    $d = new DateTime('2006-12-12 10:00:00');                               // указанные дата и время во временной зоне скрипта
    $d = new DateTime();                                                    // серверная дата и время во временной зоне скрипта
    $d = new DateTime('2006-12-12', new DateTimeZone('Australia/Sydney'));  // дата и время во временной зоне Австралия/Сидней
    $d = new DateTime('@538434000');                                        // использование метки UNIX; !!! РЕЗУЛЬТАТ В UTC !!!
    $d = new DateTime('2013-07-31');
        // echo $d->format('Y-m-d H:i:sP');  // 2013-07-31 00:00:00+04:00

// Обработка исключений
    try {
        $d = new DateTime('2000-01-01');
    } catch (Exception $e) {
        echo $e->getMessage();
        exit(1);
    }

// public DateTime DateTime::Add( DateInterval $interval)
// > добавляет заданный интервал времени к объекту DateTime
    $d = new DateTime('2000-01-01');
    $d->add(new DateInterval('P10D'));  // 2000-01-11   (добавили 10 дней)

// public static DateTime DateTime::createFromFormat( string $format, string $time [, DateTimeZone $timezone ] )
// > создает и возвращает экземпляр класса DateTime из указанной строки по указанному формату
    $format = 'Y-m-d H:i:s';
    $d = DateTime::createFromFormat($format, '08-07-2013 13:27:30');

// public DateTime DateTime::modify( string $modify )
// > изменяет метку времени объекта DateTime
// > $modify - параметр в том же формате, какой принимает функция strtotime()
    $d = new DateTime('08-07-2013');   // 2013-07-08
    $d->modify('24 january 1987');     // 1987-01-24
    $d->modify('+1 day');              // 1987-01-25

// public DateTime DateTime::setDate( int $year, int $month, int $day )
// > устанавливает дату (число, месяц, год) объекта DateTime
    $d = new DateTime();
    $d->setDate(2000,1,1);  // 2000-01-01

// public DateTime DateTime::setTime( int $hour, int $minute [, int $second = 0] )
// > устанавливает время (часы, минуты, секунды) объекта DateTime
    $d = new DateTime();
    $d->setTime(22,22,22);  // 22:22:22

// public DateTime DateTime::setTimestamp( int $unixtimestamp )
// > устанавливает дату и время, основываясь на метке UNIX
    $d = new DateTime();
    $d->setTimestamp('538434000');  // 1987-01-24

// public DateTime DateTime::setTimeZone( DateTimeZone $timezone )
// > установка временной зоны для объекта класса DateTime
    $d = new DateTime();
    $d->setTimezone(new DateTimeZone('Pacific/Chatham'));



// ----------------------- Класс DateInterval ----------------------- //


// public DateInterval::__construct()( string $interval_spec )
// > Создает новый объект DateInterval
// > $interval_spec - строка в особом формате: http://www.php.net/manual/ru/dateinterval.construct.php
//   > Начинается всегда с P
//   > От большего к меньшему слева-направо: сначала года, потом месяцы, потом дни и так далее
//   > Перед временем должна стоять буква T
    $interval = 'P2Y3M4DT6H7M8S';  // 2 года, 3 месяца, 4 дня, 6 часов, 7 минут, 8 секунд
    $i = new DateInterval($interval);



// ----------------------- Класс DateTimeZone ----------------------- //


// public DateTimeZone::__construct()( string $timezone )
// > Создает новый объект DateTimeZone
    $tz = new DateTimeZone('Europe/London');

// Обработка исключений
    try {
        $tz = new DateTimeZone('Marc/Phobos');
    } catch(Exception $e) {
        echo '<p>' . $e->getMessage() . '</p>';
    }

// public array DateTimeZone::getLocation( void )
// > возвращает массив с широтой, долготой и кодом страны для этой временной зоны
    $tz = new DateTimeZone('Europe/Moscow');
    $arr = $tz->getLocation();
    $e = $arr['country_code'];  // RU
    $e = $arr['latitude'];      // 55.75
    $e = $arr['longitude'];     // 37.58333

// public string DateTimeZone::getName( void )
// > возвращает имя временной зоны
    $tz = new DateTimeZone('Europe/Moscow');
    $e = $tz->getName();  // Europe/Moscow

// public int DateTimeZone::getOffset( DateTime $datetime )
// > возвращает смещение временной зоны от GMT
    $tz = new DateTimeZone('Europe/Moscow');
    $d = new DateTime('now', $tz);
    $e = $tz->getOffset($d);        // 14400  (секунд = 240 минут = 4 часа, то есть GMT + 4)





echo "<br><pre>";
print_r($e);
echo "<br></pre>";


/*
echo "<br><pre>";
print_r($arr);
echo "<br></pre>";
echo '<p>' . $d . '</p>';

*/







/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------

Дата и время
> Настройка в php.ini
  > date.timezone   - временная зона, используемая всеми функциями даты/времени.
    > Список временных зон можно посмотреть здесь: http://www.php.net/manual/ru/timezones.php
    > У меня установлено значение = "Europe/Moscow"
  > date.default_latitude   - широта по умолчанию
  > date.default_longitude  - долгота по умолчанию
  > date.sunrise_zenith     - угол, под которым солнце светит во время восхода
  > date.sunset_zenith      - угол, под которым солнце светит во время заката
> Есть 3 вида формата для даты и времени:
  1 Формат для парсинга, который используется для распознавания даты и времени
    парсерами нескольких функций и методов.
    > Используется: strtotime(), date_parse(), класс DateTime
    > http://www.php.net/manual/ru/datetime.createfromformat.php
  2 Формат-шаблон для вывода строки с отформатированными в соответствии с ним
    датой и временем.
    > Используется функцией date(), date_parse_from_format()
    > http://php.net/manual/en/function.date.php
  3 Формат, который принимает конструктор класса DateInterval:
    > http://www.php.net/manual/ru/dateinterval.construct.php


-------------------------------------------------- */
?> 
