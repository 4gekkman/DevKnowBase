<?php
/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Работа со строками URL: кодирование, декодирование, разбор

Основное
> base64_encode      | Kодирует данные алгоритмом MIME base64
> base64_decode      | Декодирует данные, закодированные алгоритмом MIME base64
> get_headers        | Возвращает массив всех HTTP-заголовков из ответа сервера
                       на HTTP-запрос к целевому URL
> get_meta_tags      | Возвращает массив содержимого метатегов <meta></meta> из
                       целевого файла или URL
> http_build_query   | Генерирует query string для URL по переданным атрибутам
> urldecode          | Декодирование URL-кодированной строки, закодированной по стандарту RFC 1738
> urlencode          | URL-кодирование строки по стандарту RFC 1738
> rawurlencode       | URL-кодированние строки по стандарту RFC 3986
> rawurldecode       | Декодирование URL-кодированной строки, закодированной по стандарту RFC 3986
> parse_url          | Разбирает URL и возвращает его компоненты



-------------------------------------------------- */


// string base64_encode ( string $data )
// > Kодирует данные алгоритмом MIME base64
// > Закодированная строка весит на 33% больше, чем оригинальная
// > Предназначено для передачи бинарных данных по протоколам, не поддерживающим
//   8-битную передачу (символ UTF-8 занимает от 1 до 4 байт, а 1 байт - 8 бит)
    $str = 'Строка в кодировке UTF-8';
    $str_base64 = base64_encode($str);  // '0KHRgtGA0L7QutCwINCyINC60L7QtNC40YDQvtCy0LrQtSBVVEYtOA=='


// string base64_decode ( string $data [, bool $strict = false ] )
// > Декодирует данные, закодированные алгоритмом MIME base64
    $str = base64_decode($str_base64);
    echo $str;   // 'Строка в кодировке UTF-8'

// array get_headers ( string $url [, int $format = 0 ] )
// > Возвращает массив всех HTTP-заголовков из ответа сервера на HTTP-запрос к целевому URL
// > $url - целевой URL, к которому будет послан запрос

    // Это целевой URL
    $url = 'http://www.yaplakal.com';

    // Послать запрос и получить заголовки в массив
    $arr = get_headers($url);

    // Посмотрим, что у нас в массиве...
        echo "<br><pre>";
        print_r($arr);
        echo "<br></pre>";
       /*
             [0] => HTTP/1.1 200 OK
             [1] => Server: nginx/0.8.54
             [2] => Date: Wed, 28 Aug 2013 18:26:55 GMT
             [3] => Content-Type: text/html; charset=windows-1251
             [4] => Connection: close
             [5] => X-Powered-By: PHP/5.3.5
       */


// array get_meta_tags ( string $filename [, bool $use_include_path = false ] )
// > Возвращает массив содержимого метатегов <meta></meta> из целевого файла или URL
// > Разбирает файл строку за строкой в поисков этих тегов, заканчивает на теге </head>
// > Приводит содержимое метатегов к нижнему регистру, заменяет '.' на '_'
// > $filename - целевой файл или URL
// > Если $use_include_path == true - искать файл еще и по стандартным путям (для локальных файлов)

    // Это целевой URL
        $url = 'http://www.2kom.ru/';

    // Послать запрос и получить мета-теги в массив
        $arr = get_meta_tags($url);

    // Посмотрим, что у нас в массиве...
        echo "<br><pre>";
        print_r($arr);
        echo "<br></pre>";
        /*
            [generator] => Triage CMS 6.0
            [keywords] => подключение высокоскоростного домашнего интернета, лучший интернет провайдер Москвы, подключить сеть
            [description] => Интернет провайдер 2КОМ оказывает услуги подключения высоскоростного интернета в квартиру. Подключить безлимитный домашний интернет по выгодному тарифу в Москве
        */

// string http_build_query ( mixed $query_data [, string $numeric_prefix [, string
//                           $arg_separator [, int $enc_type = PHP_QUERY_RFC1738 ]]] )
// > Генерирует query string для URL по переданным атрибутам
// > $query_data - массив свойств-значений для формирования query string
// > $arg_separator - разделитель аргументов, если указан
// > $enc_type - по какому стандарту кодировать query-string. Варианты:
//   > PHP_QUERY_RFC1738 - по умолчанию
//   > PHP_QUERY_RFC3986

    // Создать массив свойств-значений
    $data = ['X'=>'Иван Иванов',
             'Y'=>'Петр Петров',
             'Z'=>'Кот и Пёс',
             'F'=>'Джо Байден'];

    // Закодировать из этого массива query string
    // > *Примечание: к строке автоматом еще и применяется urlencode()
    //    так что декодировать ее можно с помощью urldecode()
    $res = http_build_query($data, '', '&amp;');  // 'X=%D0%98%D0%B2%D0%B0%D0%BD+%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2&Y=%D0%9F%D0%B5%D1%82%D1%80+%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2&Z=%D0%9A%D0%BE%D1%82+%D0%B8+%D0%9F%D1%91%D1%81&F=%D0%94%D0%B6%D0%BE+%D0%91%D0%B0%D0%B9%D0%B4%D0%B5%D0%BD'

// string urldecode ( string $str )
// > Декодирование URL-кодированной строки, закодированной по стандарту RFC 1738
    $res = urldecode($res);  // 'X=Иван Иванов&Y=Петр Петров&Z=Кот и Пёс&F=Джо Байден'

// string urlencode ( string $str )
// > URL-кодирование строки по стандарту RFC 1738
    $str = 'Некая строка';
    $strUrlEncoded = urlencode($str);  // '%D0%9D%D0%B5%D0%BA%D0%B0%D1%8F+%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B0'

// string rawurlencode ( string $str )
// > URL-кодированние строки по стандарту RFC 3986
    $str = 'Какая-то строка';
    $strUrl3986Encoded = rawurlencode($str);  // '%D0%9A%D0%B0%D0%BA%D0%B0%D1%8F-%D1%82%D0%BE%20%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B0'

// string rawurldecode ( string $str )
// > Декодирование URL-кодированной строки, закодированной по стандарту RFC 3986
    $str = rawurldecode($str);  // 'Какая-то строка'

// mixed parse_url ( string $url [, int $component = -1 ] )
// > Разбирает URL и возвращает его компоненты
// > $url       - URL для разбора
// > $component - можно указать, чтобы получить только 1 компонент URL-a:
//   > PHP_URL_SCHEME    |
//   > PHP_URL_HOST      |
//   > PHP_URL_PORT      |
//   > PHP_URL_USER      |
//   > PHP_URL_PASS      |
//   > PHP_URL_PATH      |
//   > PHP_URL_QUERY     |
//   > PHP_URL_FRAGMENT  |
// > Если $component == -1 (по умолчанию) вернут массив с по крайней мере 1-м элементом из:
//   > scheme   | например, 'http'
//   > host     | например, 'www.ya.ru'
//   > port     | например, '80'
//   > user     | например, 'ivan'
//   > pass     | например, 'mypassword'
//   > path     | например, 'index.php'
//   > query    | например, 'text=иван&lr=213' - это query string, который идет после ? в URL
//   > fragment | то, что идет после #

    // Это целевой URL
        $url = 'http://auto.mail.ru/article.html?id=43222';

    // Провести разбор URL в массив
        $arr = parse_url($url);

    // Посмотрим, что у нас в массиве...
        echo "<br><pre>";
        print_r($arr);
        echo "<br></pre>";
        /*
            [scheme] => http
            [host] => auto.mail.ru
            [path] => /article.html
            [query] => id=43222
        */




/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------

>

-------------------------------------------------- */
?>











