<?php
/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Функции по работе с веб-сервером Apache

> apache_child_terminate  | Завершить процесс Apache по окончании текущего запроса
> apache_get_modules      | Возвращает массив загруженных модулей сервера Apache
> apache_get_version      | Возвращает версию Apache
> apache_getenv           | Возвращает переменную окружения сервера Apache, указанную параметров variable
> apache_setenv           | Устанавливает значение переменной окружения сервера Apache
> apache_lookup_uri       | Осуществить частичный запрос на указанный URI и вернуть все полученные сведения
> apache_note             | Возвращает и устанавливает уведомления к запросу Apache
> apache_request_headers  | Получает список всех заголовков HTTP-запроса
> apache_reset_timeout    | Сбрасывает таймер сервера Apache
> apache_response_headers | Возвращает список всех HTTP заголовков ответа Apache
> getallheaders           | Возвращает все заголовки HTTP-запроса
> virtual                 | Выполняет подзапрос Apache


-------------------------------------------------- */


// bool apache_child_terminate( void )
// > Завершить процесс Apache по окончании текущего запроса

    // Для windows платформ функция не реализована

// array apache_get_modules( void )
// > Возвращает массив загруженных модулей сервера Apache

    // Получить массив данных
        $arr = apache_get_modules();

    // Посмотреть, что в массиве
        echo "<br><pre>";
        print_r($arr);
        echo "<br></pre>";


// string apache_get_version( void )
// > Возвращает версию Apache
// > В случае ошибки возвращает FALSE
    $res = apache_get_version();  // 'Apache/2.4.4 (Win64) PHP/5.5.0'

// string apache_getenv( string $variable [, bool $walk_to_top = false ] )
// > Возвращает переменную окружения сервера Apache, указанную параметров variable
//   *Примечание: вообще то эти переменные доступны в суперглобальном массиве $_SERVER
// > В случае ошибки возвращает FALSE
    $res = apache_getenv('SERVER_NAME');  // localhost

// bool apache_setenv( string $variable, string $value [, bool $walk_to_top = false ] )
// > Устанавливает переменную subprocess_env Apache
// > $variable - переменная среды Apache, которой надо присвоить значение
// > $value - значение, которое надо присвоить переменной среды $variable
// > $walk_to_top - делать ли доступной переменную для всех уровней Apache
// > Возвращает TRUE в случае успеха, иначе FALSE.
    $res = apache_setenv("EXAMPLE_VAR", "Какое-либо значение");

// object apache_lookup_uri( string $filename )
// > Осуществить частичный запрос на указанный URI и вернуть все полученные сведения
// > $filename - путь к файлу или URL
// > Возвращает объект со следующими свойствами:
//   > status
//   > the_request
//   > status_line
//   > method
//   > content_type
//   > handler
//   > uri
//   > filename
//   > path_info
//   > args
//   > boundary
//   > no_cache
//   > no_local_copy
//   > allowed
//   > bytes_sent
//   > byterange
//   > clength
//   > unparsed_uri
//   > mtime
//   > request_time

    // Запросить данные
        $arr = apache_lookup_uri('3.%20PHP%20Library/PHP%20%20-%20%20base/26.%20Working%20with%20Apache.php');

    // Посмотреть, что в полученном массиве
        echo "<br><pre>";
        print_r($arr);
        echo "<br></pre>";

// string apache_note( string $note_name [, string $note_value = '' ] )
// > Возвращает и устанавливает уведомления к запросу Apache
// > Эта функцию является оберткой для table_get и table_set, с ее помощью можно редактирвоать
//   таблицу уведомлений 'apache notes table', которая создается при передаче запроса. Таблица
//   уведомлений позволяет модулям Apache обмениваться данными.
// > Основное назначение apache_note() - передавать информацию из одного модуля в другой
//   внутри одного запроса.
// > $note_name - название уведомления
// > $note_value - значение уведомления

    // *Не понимаю пока, зачем эта функция. Может, если потом понадобится, станет ясно.

// array apache_request_headers( void )
// > Получает список всех заголовков HTTP-запроса
// > Возвращает массив со всеми HTTP-заголовками текущего запроса, или FALSE в случае ошибки.

    // Запросить заголовки
        $headers = apache_request_headers();

    // Посмотреть, что в полученном массиве
        echo "<br><pre>";
        print_r($headers);
        echo "<br></pre>";
        /*
            [Host] => localhost
            [Connection] => keep-alive
            [Cache-Control] => max-age=0
            [Accept] => text/html,application/xhtml+xml,application/xml;q=0.9,*\/*;q=0.8
            [User-Agent] => Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.66 Safari/537.36
            [Referer] => http://localhost/3.%20PHP%20Library/PHP%20%20-%20%20base/
            [Accept-Encoding] => gzip,deflate,sdch
            [Accept-Language] => ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4
            [Cookie] => cookArray[0]=BMW; cookArray[1]=Mercedes; cookArray[2]=Audi; PHPSESSID=dcc8qn8dfqtkl8ekh74955se10
         */

// bool apache_reset_timeout( void )
// > Сбрасывает таймер сервера Apache, который по умолсанию == 300 секунд
// > Возвращает TRUE в случае успеха, иначе FALSE.
    // $res = apache_reset_timeout();  !! не работает в PHP 5.5.0

// array apache_response_headers( void )
// > Возвращает список всех HTTP заголовков ответа Apache
// > Возвращает TRUE в случае успеха, иначе FALSE.

    // Получить массив заголовков ответа сервера
        $arr = apache_response_headers();

    // Посмотреть, что в полученном массиве
        echo "<br><pre>";
        print_r($arr);
        echo "<br></pre>";
        /*
            [X-Powered-By] => PHP/5.5.0
         */

// array getallheaders( void )
// > Возвращает все заголовки HTTP-запроса
// > Похоже, это тоже самое, что и apache_request_headers()

    // Получить все заголовки для текущего запроса
    $arr = getallheaders();

    // Посмотреть, что в массиве
    echo "<br><pre>";
    print_r($arr);
    echo "<br></pre>";

// bool virtual( string $filename )
// > Выполняет подзапрос Apache

    // Тоже непонятная функция, если столкнусь с ней то разберусь, зачем она нужна








/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------

> Большинство из описанных выше функций очень старые.


-------------------------------------------------- */
?>














