<?php
/* --------------------------------------------------
---------------- О Г Л А В Л Е Н И Е ----------------
Работа с файловой системой

Директории:
> mkdir               | создает директорию
> rmdir               | удаляет директорию
> is_dir              | определяет, является ли переданный путь директорией
> opendir             | Открывает дескриптор каталога для последующего использования с функциями closedir(), readdir() и rewinddir()
> closedir            | Закрывает поток директории по переданному дескриптору
> rewinddir           | Сбрасывает поток каталога в начало директории
> readdir             | Возвращает имя следующего по порядку элемента каталога
> scandir             | Возвращает массив с именами файлов и каталогов по переданному пути
> dir                 | Псевдо-объектно-ориентированный механизм для чтения каталога
> getcwd              | Возвращает путь к текущей рабочей директории
> chroot              | Меняет корневую директорию текущего процесса на указанную

Файлы:
> pathinfo            | возвращает массив с разложенным на составляющие путем к файлу
> fopen               | открывает файл или URL
> fclose              | закрывает файл, на который указывает дескриптор
> fseek               | перемещает курсор в файле в указанное место
> fwrite              | бинарно-безопасная запись в файл
> fread               | бинарно-безопасное чтение из файла
> copy                | копирует файл куда укажешь
> unlink              | удаляет указанный файл
> rename              | переименовывает файл или директорию
> file_exists         | проверяет наличие файла или каталога
> is_writable         | проверяет наличие файла или каталога, и его доступность для записи
> is_readable         | проверяет наличие файла или каталога, и его доступность для чтения
> is_file             | проверяет, является ли файл обычным файлом
> file                | читает содержимое файла (и из URL тоже) и помещает его в массив
                        > Этой функцией можно спарсить любую страницу из интернета
> file_get_contents   | читает содержимое файла (и из URL тоже) в строку
                        > Этой функцией можно спарсить любую страницу из интернета
                        > Получить и вывести исходный код главной страницы яндекса
                        > Чтение секции файла c 7 индекса, длиной 23 байта
                        > Использование потокового контекста
> fgets               | читает содержимое файла в строку
                        > старый вариант, лучше использовать file_get_contents
> stat                | возвращает массив с информацией о файле
> lstat               | возвращает массив с информацией о файле или символической ссылке
> is_executable       | определяет, является ли файл исполняемым
> filesize            | возвращает размер указанного файла в байтах
> filetype            | возвращает тип указанного файла (1 из нескольких фиксированных)
> disk_free_space     | возвращает количество свободного места на диске в байтах
> disk_total_space    | возвращает общий размер диска в байтах
> feof                | проверяет, указывает ли указатель на конец файла
> fgetc               | считывает символ на котором указатель, сдвигает его вправо на 1
> fflush              | сбрасывает буфер вывода в файл
> rewind              | сбрасывает курсор файлового указателя в начало файла
> ftell               | возвращает текущую позицию файлового указателя
> fgetss              | прочитать строку из файла и отбросить все HTML и PHP теги
> ftruncate           | урезает файл до указанной длинны
> fputcsv             | записывает массив в файл в формате CSV
> fgetcsv             | читает строку из файла в формате CSV в массив
> fpassthru           | читает с текущего положения курсора до EOF и выводит результат на экран


Реальный путь (realpath) и его кэширование
> realpath            | возвращает канонизированный абсолютный путь к файлу
> realpath_cache_size | возвращает размер кэша, выделенный под кэширование realpath
> realpath_cache_get  | возвращает массив с содержимым кэша realpath
> clearstatcache      | очистить кэш realpath


-------------------------------------------------- */



// ------------------> Директории <------------------ //


// bool mkdir( string $pathname [, int $mode = 0777 [, bool $recursive = false [, resource $context ]]] )
// > создает директорию, указанную в $pathname
// > $mode - указывает права новой директории в unix системах (Windows игнорирует этот параметр)
// > $recursive - разрешает создание вложенных директорий, указанных в $pathname
// > $context - см. раздел Потоки - http://www.php.net/manual/ru/book.stream.php
// > Возвращает TRUE в случае успеха; иначе false.

    // создание 1-й директории test_dir
    $r = mkdir('C:/Users/Administrator/Desktop/Practice/3. PHP Library/PHP  -  base/some_files/test_dir');

    // создание директории и вложенной в нее директории
    // $r = mkdir('C:/Users/Administrator/Desktop/Practice/3. PHP Library/PHP  -  base/some_files/test_dir2/nested',0,TRUE);  // что-то эта строка глючит в PHPstorm, поэтому ее закомментил

// bool rmdir( string $dirname [, resource $context] )
// > удаляет директорию, указанную в $pathname
//   > Чтобы она удалилась, она должна быт пуста.
// > $context - см. раздел Потоки - http://www.php.net/manual/ru/book.stream.php
// > Возвращает TRUE в случае успеха; иначе false.
    $r = rmdir('C:/Users/Administrator/Desktop/Practice/3. PHP Library/PHP  -  base/some_files/test_dir');

// bool id_dir( string $filename )
// > определяет, является ли переданный путь $filename директорией
// > возаращает TRUE, если существует и является директорией; иначе FALSE
    $path = 'C:/Users/Administrator/Desktop/Practice/3. PHP Library/PHP  -  base/some_files/test_dir2';
    $r = is_dir($path);  // 1

// resource opendir( string $path [, resource $context ])
// > Открывает дескриптор каталога для последующего использования с функциями closedir(), readdir() и rewinddir()
// > Возвращает дескриптор каталоги типа resource в случае успеха; FALSE в случае ошибки;
    $r = opendir($path);  // Resource id #3

// void closedir([ resource $dir_handle])
// > Закрывает поток директории по переданному дескриптору
// > Перед использованием этой функции, поток должен быть открыт функцией opendir()
// > $dir_handle - дескриптор каталога
    closedir($r);

// void rewinddir([ resource $dir_handle])
// > Сбрасывает поток каталога в начало директории
//   > Под потоком каталога подразумевается то, куда указывает нейкий виртуальный
//     указатель - на какой файл в каталоге (как в папке windows если нажать TAB)
// > Для работы этой функции перед ней должна быть запущена opendir()
// > Если $dir_handle не указан, подразумевается последний дескриптор, который был открыт с помощью opendir()
    $r = opendir($path);
    rewinddir($r);
    closedir($r);

// string readdir([resource $dir_handle])
// > Возвращает имя следующего по порядку элемента каталога.
//   Элементы возвращаются в том порядке, в котором они хранятся в файловой системе.
                            $handle = opendir($path);

    // Вывести список всех элементов каталога
    if($handle) {
        echo '<br>Дескриптор каталога: ' . $handle;
        echo '<br>Содержимое этого каталога: ';
        while(FALSE !== ($entry = readdir($handle))) {
            echo '<br>' . $entry;
        }
    }

    // Вывести список всех элементов каталога - кроме '.' и '..'
    rewinddir($handle); echo '<br><br>';  // перемотать поток в начало
    if($handle) {
        while(FALSE !== ($entry = readdir($handle))) {
            if($entry != '.' && $entry != '..') {
                echo '<br>' . $entry;
            }
        }
    }

// Читать директорию и все ее поддиректории, и вывести все на экран
    echo '<br><br>----> Директории (жирным) и их поддиректории:';
    function readAllDirs($dir_path) {
        $handle = opendir($dir_path);
        while(FALSE !== ($entry = readdir($handle))) {
            // отсекам ссылки на текущую '.' и родительскую '..' директории
            if($entry == '.' || $entry == '..') {
                continue;
            }

            // Если это директория
            if(is_dir($dir_path.'/'.$entry)) {
                echo "<br><b>$entry</b>\n";
                readAllDirs($dir_path.'/'.$entry);  // рекурсисный запуск функции
            }

            // Если это НЕ директория
            if(!is_dir($dir_path.'/'.$entry)) {
                echo "<br>$entry\n";
            }

        }
        closedir($handle);
    }
    readAllDirs($path);

                            closedir($handle);

// array scandir( string $directory [, int $sorting_order = SCANDIR_SORT_ASCENDING [, resource $context ]])
// > Возвращает массив с именами файлов и каталогов по переданному пути
//   > Во вложенные каталоги не заглядывает, возвращает только то, что непосредственно в этом
// > $directory - путь к сканируемому каталогу.
//   > В кач. $directory можно использовать URL, если была включена функция  fopen wrappers
// > $sorting_order - порядок сортировки (по умолчанию: в алфавитном порядке по возрастанию). Возможные значения:
//   > Все константы сортировки можно посмотреть здесь: http://www.php.net/manual/ru/dir.constants.php
// > Возвращает array с именами файлов и каталогов в этой папке;
//   либо FALSE в случае ошибки, в т.ч. если $directory - не каталог.
    $arr = scandir($path);
    /*
    echo "<br><pre>";
    print_r($arr);         // посмотреть содержимое массива
    echo "<br></pre>";
    */

// Directory dir( string $directory [, resource $context ])
// > Псевдо-объектно-ориентированный механизм для чтения каталога
// > $directory - путь к каталогу для открытия
// > Возвращает объект класса Directory, или NULL при неверных параметрах, или FALSE в случае ошибки
    echo '<br><br><b>Тест Dir -  псевдо-объектно-ориентированного механизма для чтения каталога</b>';
    $d = dir($path);
    echo '<br>Дескриптор: ' . $d->handle;
    echo '<br>Путь: ' . $d->path;
    while(FALSE !== ($entry = $d->read())) {
        echo '<br>' . $entry;
    }
    $d->close();

// string getcwd( void )
// > Возвращает путь к текущей рабочей директории
    $r = getcwd();
    echo '<br><br>Current Wokring Directory = ' . $r;  // C:\Users\Administrator\Desktop\Practice\3. PHP Library\PHP - base

// bool chdir( string $directory )
// > Меняет текущаю директорию PHP на указанную
// > $directory - путь к директории, на которую нужно поменять текущую
// > Возвращает TRUE в случае успеха; иначе false
    $curdir  = getcwd();
    $root = chdir($curdir.'/some_files/test_dir2');
    $r = getcwd();  // C:\Users\Administrator\Desktop\Practice\3. PHP Library\PHP - base\test_dir2
    $root = chdir($curdir);
    $r = getcwd();  // C:\Users\Administrator\Desktop\Practice\3. PHP Library\PHP - base



// ------------------> Файлы <------------------ //



// mixed pathinfo( string $path [, int $options])
// > если $options не указан, возвращает массив с разложенным на составляющие путем к файлу со следующими элементами:
//   > dirname                | путь к директории
//   > basename               | имя файла с расширением
//   > extension              | расширение файла
//   > filename               | имя файла без расширения
// > в options можно указать 1 из 4 констант, тогда pathinfo вернет не массив, а только указанную составляющую пути:
//   > PATHINFO_DIRNAME
//   > PATHINFO_BASENAME
//   > PATHINFO_EXTENSION
//   > PATHINFO_FILENAME
    $path = 'C:\Users\Administrator\Desktop\Practice\3. PHP Library\PHP  -  base\test_dir2\Element 1.txt';
    $arr = pathinfo($path);
    $dirname = $arr['dirname'];      // 'C:/Users/Administrator/Desktop/Practice/3. PHP Library/PHP - base'
    $basename = $arr['basename'];    // 'Element 1.txt'
    $extension = $arr['extension'];  // 'txt'
    $filename = $arr['filename'];    // 'Element 1'

// resource fopen( string $filename, string $mode [, bool $use_include_path = false [, resource $context ]] )
// > открывает файл или URL
// > $filename
//   > Если $filename передан в форме "scheme://...", он считается URL'ом, и PHP проведет
//     поиск обработчика для этого протокола (их называют "обертки"). Если обертка не найдена,
//     PHP выдаст notice, и продолжит выполнение так, как будто передан обычный файл.
//   > Если $filename указывает на локальный файл, PHP пытается открыть поток к этому файлу.
//     Файл должен быть доступен для PHP.
//   > Есди PHP установил, что $filename указывает на удаленный файл через сетевой
//     URL протокол, то PHP выполняет проверку директивы allow_url_fopen (1 | 0),
//     если она == 0, PHP выдаст предупреждение, и вызов файла окончется неудачей.
//   > Список поддерживаемых обработчиков: http://www.php.net/manual/ru/wrappers.php
//   > На платформе windows необходимо экранировать все обратные слэши вот так: '\\'
// > $mode - указывает тип доступа, который ты запрашиваешь у потока.
//   > Все доступные варианты здесь: http://www.php.net/manual/ru/function.fopen.php
// > Если $use_include_path == 1, то поиск файла также будет проведен в include_path
// > Возвращает указатель на файл в случае успеха; иначе FALSE + warning
    $handle = fopen('/test_files', 'w+');  // Resource id #12

// bool fclose( resource $handle )
// > закрывает файл, на который указывает дескриптор $handle
// > возвращает TRUE в случае успеха; иначе FALSE
$r = fclose($handle);


// int fseek( resource $handle, int $offset [, int $whence = SEEK_SET] )
// > перемещает курсор в файле в указанное место.
// > !!! Может перемещать курсор только слева направо. В обратную сторону - только
//   через смещение в начало - и по новой.
// > Не в каждом потоке можно применить fseek
// > Для fseek файл надо открывать в режиме 'r+'. Остальные не годятся:
//   у некоторых курсов в конец перемещается, а некоторые стирают все данные из файла.
// > $handle - указатель на файл
// > $offset - на сколько байт сместить курсор слева направо
// > $whence - важный флаг, от которого зависит, как отработает функция:
//   > SEEK_SET (по умолчанию)  | устанавливает смещение в offset байт от начала файла.
//   > SEEK_CUR                 | устанавливает смещение в offset байт от текущего положения курсора.
//   > SEEK_END                 | устанавливает смещение в offset байт от конца файла (можно использовать отрицательные значения)
// > Возвращает 0 в случае успеха; иначе -1

    // Создаю файл 'test_file1' в папке 'test_files'
    $handle = fopen('some_files/test_files/test_file1.txt', 'w+');
    fwrite($handle,'Кто 1-й парень на деревне');  // записываю в файл строку ' Один '
    $r = fclose($handle);

// > Мотаю указатель на начало файла
// > Затем на 7 байт вперед, где находится '1' в фразе 'Кто 1-й парень на деревне'
// > Функцией fwrite записываем '2' поверх '2'
// > Получаем в результате 'Кто 2-й парень на деревне'
    $handle = fopen('some_files/test_files/test_file1.txt', 'r+');  // открываю в режиме 'r+'
    if( !fseek($handle, 7, SEEK_SET) ) {
        fwrite($handle,'2');  // записываю цифру '2' в это место
    }
    $r = fclose($handle);

// int fwrite( resource $handle, string $string [, int $length] )
// > бинарно-безопасная запись в файл
// > Пишет прямо поверх попадающейся информации - как каток.
// > $handle - указатель на файл
// > $string - строка, которую надо записать
// > $length - если задан, запись остановится после записи $length байт (или в конце файла). По умолчанию == 0, что значит Без Ограничений.
// > Возвращает false в случае ошибки

    // см. выше

// string fread( resource $handle, int $length )
// > бинарно-безопасное чтение из файла
// > $handle - указатель на файл
// > $length - читает до $length байт из файла
// > Примечание: не забыть перевести указатель файла в нужное место
    $filepath = 'some_files/test_files/test_file1.txt';
    $handle = fopen($filepath, 'r+');
        $r = fread($handle,filesize($filepath));  // Кто 2-й парень на деревне
    $r = fclose($handle);

// bool copy( string $source, string $dest [, resource $context ])
// > копирует файл из $source в $dest
// > если $dest - это URL, то запись может завершиться с ошибкой, если
//   обертка URL не поддерживает перезаписывание
// > если $dest уже существует, то он будет полностью перезаписан
// > в случае неудачи вернет false
if (!copy('some_files/test_files/test_file1.txt', 'test_files/test_file1_COPY.txt')) {
    echo "не удалось скопировать файл...\n";
}


// bool unlink( string $filename [, resource $context ])
// > удаляет указанный файл
// > возвращает TRUE в случае успеха; иначе FALSE и генерирует warning
    if (!unlink('some_files/test_files/test_file1_COPY2.txt')) {
        echo "не удалось удалить файл...\n";
    }

// bool rename( string $oldname, string $newname [, resource $context ] )
// > переименовывает файл или директорию из $oldname в $newname
// > возвращает TRUE в случае успеха; иначе FALSE
    $r = rename('some_files/test_files/test_file1_COPY.txt', 'test_files/RANAMED_file1_COPY.txt');


// bool file_exists( string $filename )
// > проверяет наличие файла или каталога
// > может возвращть неожиданный результат на 32х платформах для файлов > 2G
// > Возвращает TRUE, если существует; иначе FALSE
    $r = file_exists('some_files/test_files/test_file1.txt');  // 1
    $r = file_exists('abc');                        // 0

// bool is_writable( string $filename )
// > проверяет наличие файла или каталога, и его доступность для записи
// > возвращает true, если существует и доступен для записи; иначе false
    $r = is_writable('some_files/test_files/test_file1.txt');  // 1
    $r = is_writable('abc');                        // 0

// bool is_readable( string $filename )
// > проверяет наличие файла или каталога, и его доступность для чтения
// > возвращает true, если существует и доступен для чтения; иначе false
    $r = is_readable('some_files/test_files/test_file1.txt');  // 1
    $r = is_readable('abc');                        // 0

// is_file
// > проверяет, является ли файл обычным файлом
// > может возвращть неожиданный результат на 32х платформах для файлов > 2G
// > возвращает true, если существует и является обычным файлом; иначе false
    $r = is_file('some_files/test_files/test_file1.txt');  // 1     echo '$r = '.$r;
    $r = is_file('abc');                        // 0

// array file( string $filename [, int $flags = 0 [, resource $context ]] )
// > читает содержимое файла и помещает его в массив
// > если директива fopen wrappers == 1, в качестве $filename можно использовать URL
// > $flags - флаги, всего 3 варианта:
//   > FILE_USE_INCLUDE_PATH    - ищет файл в include_path.
//   > FILE_IGNORE_NEW_LINES    - не добавлять новую строку к концу каждого элемента массива
//   > FILE_SKIP_EMPTY_LINES    - пропускать пустые строки

    // Спарсим страницу яндекса по URL
    $arr = file('http://www.ya.ru/');  // забирает страничку по URL
    /*  // посмотреть, что мы спарсили
    foreach ($arr as $line_num => $line) {
        echo "Строка #<b>{$line_num}</b> : " . htmlspecialchars($line) . "<br />\n";
    }
    */

    // Спарсим локальный файл
    $arr = file('some_files/test_files/test_file1.txt');  // забирает локальный файл
    // посмотреть, что мы спарсили
    foreach ($arr as $line_num => $line) {     // Строка #0 : Кто 2-й парень на деревне
        echo "Строка #<b>{$line_num}</b> : " . htmlspecialchars($line) . "<br />\n";
    }


// string file_get_contents( string $filename [, bool $use_include_path = false [,
//        resource $context [, int $offset = -1 [, int $maxlen ]]]] )
// > читает содержимое файла в строку
// > если ты открываешь URL, содержащий пробел и др. спецсимволы, то надо
//   закодировать его функцией urlencode()
// > $filename - имя читаемого файла
// > $use_include_path - искать ли файл среди инклюдов
// > $context - ресурс контекста, созданный с помощью stream_context_create().
//   Можно пропустить, вписав NULL
// > $offset - смещение, с которого начентся чтение оригинального потока.
//   Не поддерживается при работе с удаленными файлами.
// > $maxlen - максимальная длина строки в байтах, которая будет прочитана;
//   чтение прекратится по достижении $maxlen или конца файла. Применяется также и
//   к потоку с фильтрами.
// > Возвращает прочитанную строку или FALSE в случае ошибки warning.

    // Получить и вывести исходный код главной страницы яндекса
    $r = file_get_contents('http://ya.ru/');
    /*
    echo "<br><pre>";
    print_r($r);         // отобразить главную страницу яндекса прямо здесь
    echo "<br></pre>";
    */

    // Чтение секции файла c 7 индекса, длиной 23 байта
    // > Файл содержит строку: 'Кто 2-й парень на деревне'
    $r = file_get_contents('some_files/test_files/test_file1.txt',NULL,NULL, 7, 23);  // '2-й парень на'

    // Использование потокового контекста

        // Создаем поток
        $opts = [
            'http' => [
                'method' => 'GET',
                'header' => 'Accept-language: en\r\n' . 'Cookie: foo=bar\r\n'
                ]
        ];
        $context = stream_context_create($opts);

        // Открываем файл с помощью установленных выше HTTP-заголовков
        $r = file_get_contents('http://ya.ru/', false, $context);
        echo $r;  // вывести спарсенную страницу яндекса на экран

// string fgets( resource $handle [, int $length] )
// > читает содержимое файла в строку
// > старый вариант, лучше использовать file_get_contents
// > $handle - указатель на файл, получаемый обычно с помощью fopen()
// > функция должна идти после fopen() - т.е. должен быть открытый поток к файлу
// > возвращает строку длиной $length - 1 байт
// > чтение начинает с того места, где установлен дескриптор
//   > а если читать нечего, или в случае ошибки, возвращает false
    $handle = fopen('some_files/test_files/test_file1.txt', 'r+');
    $res = fgets($handle, 12);  // 'Кто 2-й' - прочитали 12 байт с начала файла, а в файле лежит фраза: 'Кто 2-й парень на деревне'
    $r = fclose($handle);

// array stat( string $filename )
// > возвращает массив с информацией о файле
// если $filename - это символическая ссылка, то все равно возвращает инфу о файле
// > что означают ключи возвращаемого массива можно посмотреть здесь:
//   http://www.php.net/manual/ru/function.stat.php
    $arr = stat('some_files/test_files/test_file1.txt');
    /*
    echo "<br><pre>";
    print_r($arr);           // посмотреть на содержание массива
    echo "<br></pre>";
    */

// array lstat( string $filename )
// > возвращает массив с информацией о файле или символической ссылке
// > идентична stat, но только если $filename - символическая ссылка, то
//   возвращает инфу именно о ссылке, а не о файле
// > что означают ключи возвращаемого массива можно посмотреть здесь:
//   http://www.php.net/manual/ru/function.stat.php
    $arr = lstat('some_files/test_files/test_file1.txt');
    /*
    echo "<br><pre>";
    print_r($arr);           // посмотреть на содержание массива
    echo "<br></pre>";
    */

// bool is_executable( string $filename )
// > определяет, является ли файл исполняемым
    $r = is_executable('some_files/test_files/test_file1.txt');  // 0

// int filesize( string $filename )
// > возвращает размер указанного файла в байтах
    $r = filesize('some_files/test_files/test_file1.txt');       // 44   (байта)

// string filetype( string $filename )
// > возвращает тип указанного файла (1 из нескольких фиксированных)
//   > один из:  fifo, char, dir, block, link, file, socket и unknown
// > вернет FALSE и ошибку notice, если:
//   > тип файла неизвестен, или системный вызов stat() завершился ошибкой
    $r = filetype('some_files/test_files/test_file1.txt');  // 'file'

// float disk_free_space( string $directory )
// > возвращает количество свободного места на диске в байтах
    $r = disk_free_space('C:/');  // 71353167872 байт = 69677912 КБ = 68046.125 МБ = 66.45 ГБ


// float disk_total_space( string $directory )
// > возвращает общий размер диска в байтах
    $r = disk_total_space('C:/');  // 702967443456 байт = 686491644 КБ = 670402 МБ = 654.65 ГБ

// bool feof( resource $handle )
// > проверяет, указывает ли указатель на конец файла
// > можно запускать только после fopen()
// > если указатель указывает на EOF (end of file), возвращает TRUE; иначе FALSE
    $r = '';
    $h = fopen('some_files/test_files/test_file1.txt', 'r+');
    while(!feof($h)) {    // пока не будет достигнут EOF ...
        $r .= fgetc($h);  // ... считаем по очереди все символы в файле.
    }
    echo '$r = '.$r;   // Кто 2-й парень на деревне
    $r = fclose($h);

// string fgetc( resource $handle )
// > считывает символ на котором указатель
// > сдвигает его вправо на 1
// > возвращает FALSE, если указатель указывает на EOF (end of file)
// > с русским языком и 2-байтовыми кодировками работает нормально
    $r = '';
    $h = fopen('some_files/test_files/test_file1.txt', 'r+');
    while(($char = fgetc($h)) !== false) {  // считаем по очереди все символы в файле.
        $r .= $char;
    }
    echo '$r = '.$r;   // Кто 2-й парень на деревне
    $r = fclose($h);

// bool fflush( resource $handle )

$h = fopen('some_files/test_files/test_fflush.txt', 'w+');
fwrite($h,'строка');
fflush($h);
$r = fclose($h);


// bool rewind( resource $handle )
// > сбрасывает курсор файлового указателя в начало файла
// > аналог fseek($fd, 0, SEEK_SET)
// > работает только при открытии файла в режиме 'r+'
    $h = fopen('some_files/test_files/test_fflush.txt', 'r+');  // указатель в конце
    $r = rewind($h);                                 // TRUE    перемотал указатель в начало
    fwrite($h, 'Сор');  // заменяю 'Стр' -> 'Сор', так что получается 'Строка' -> 'Сорока'
    $r = rewind($h);
    echo '<br>$r = '.fread($h,filesize('some_files/test_files/test_fflush.txt'));
    $r = fclose($h);

// int ftell( resource $handle )
// > возвращает текущую позицию файлового указателя
// > может возвращть неожиданный результат на 32х платформах для файлов > 2G
    $h = fopen('some_files/test_files/test_fflush.txt', 'r+');
    fseek($h,6,SEEK_SET);
    $r = ftell($h);      // 6
    fclose($h);

// string fgetss( resource $handle [, int $length [, string allowable_tags]] )
// > прочитать строку из файла и отбросить все HTML и PHP теги
// > аналог fgets(), но последний не отбрасывает теги
// > $handle - указатель на файл, получаемый обычно с помощью fopen()
// > функция должна идти после fopen() - т.е. должен быть открытый поток к файлу
// > $allowable_tags - указать теги, которые не надо вырезать
// > возвращает строку длиной $length байт
// > чтение начинает с того место, где установлен дескриптор
//   > а если читать нечего, или в случае ошибки, возвращает false
// > !!! Проблемы с русскими и 2-байтовыми символами!!
    $path = 'some_files/test_files/fgetss_test.txt';
    $h = fopen($path, 'r+');
    $r = fgetss($h, 19);  echo $r;
    fclose($h);

// bool ftruncate( resource $handle, int $size )
// > урезает файл до указанной длинны
// > $size - размер в байтах
//   > Если $size > текущего размера, то файл будет дополнен нулевыми байтами
// > Файловый указатель НЕ меняется.
// > возвращает TRUE в случае успеха; иначе FALSE
    $h = fopen('some_files/test_files/ftruncate_test.txt', 'r+');  // 'Иван'
    $r = ftruncate($h, 2);  // 1      'Ив'
    fclose($h);

// int fputcsv( resource $handle, array $fields [, string $delimiter = ',' [,
//              string $enclosure = '"' ]] )
// > записывает массив в файл в формате CSV
// > $delimiter - разделитель в CSV файле
// > $enclosure - символ ограничения поля
// > возвращает длину записанной строки в байтах; или FALSE в случае неудачи
    $arrays = [
        [100,200,300],
        ['Олег','Борис','Иван'],
        [1,2,3]
    ];
    $h = fopen('some_files/test_files/fputcsv_test.txt', 'w+');
    foreach ($arrays as $fields) {
        fputcsv($h, $fields, ',');
    }
    fclose($h);

    /* Результат (что записалось в файл):
        100,200,300
        Олег,Борис,Иван
        1,2,3
    */

// array fgetcsv( resource $handle [, int $lenght = 0 [, string $delimiter = ',' [,
//                string $enclosure = '"' [, string $escape = '\\' ]]]] )
// > читает строку из файла в формате CSV в массив
// > $length - необязательный параметр с PHP >= 5. Должен быть немного больше самой длинной строки в CSV файле. Указав такую длину, можно выиграть скорость.
// > $delimiter - разделитель в CSV файле
// > $enclosure - символ ограничения поля
// > $escape - экранирующий символ
// > Возвращает индексированный массив с полями из CSV-файла
//   > Либо NULL, если передается неверный параметр handle
//   > Либо FALSE при других ошибках.
    $h = fopen('some_files/test_files/fputcsv_test.txt', 'r+');
    $arrays = []; $n = 0;
    while(($data = fgetcsv($h, 1000, ",")) !== FALSE) {
        $arrays[$n] = $data;
        $n++;
    }
    fclose($h);
    /*
    echo "<br><pre>";
    print_r($arrays);     // посмотреть массивы
    echo "<br></pre>";
    */

// -------> Реальный путь (realpath) и его кэширование <------- //



// string realpath( string $path )
// > возвращает канонизированный абсолютный путь к файлу
// > может возвращть неожиданный результат на 32х платформах для файлов > 2G
// > $path может быть == '' или NULL, тогда $path == путь к этому скрипту
// > Возвращает FALSE при неудаче
    $r = realpath('some_files/test_files/test_file1.txt');  //  'C:\Users\Administrator\Desktop\Practice\3. PHP Library\PHP - base\test_files\test_file1.txt'

// int realpath_cache_size( void )
// > возвращает размер кэша в байтах, выделенный под кэширование realpath
$r = realpath_cache_size();  // 1163

// array realpath_cache_get( void )
// > возвращает массив с содержимым кэша realpath
$arr = realpath_cache_get();  // 1163
    /*
    echo "<br><pre>";
    print_r($arr);     // посмотреть содержимое массива
    echo "<br></pre>";
    */

// void clearstatcache([ bool $clear_realpath_cache = false [, string $filename ]] )
// > очистить кэш состояния файлов
// > $clear_realpath_cache - очищать кэш realcache или нет
// > $filename (только если $clear_realpath_cache == TRUE) - очистить кэш realcache только для указанного файла
    clearstatcache(TRUE, 'some_files/test_files/test_file1.txt');

// int fpassthru( resource $handle )
// > Читает с текущего положения курсора до EOF и выводит результат на экран
// > Например, может вывести картинку (в бинароном виде из $_FILES) на экран
  # Открыть файл-картинку в бинарном режиме
  $name = './some_files/Kolbasov_copy.jpg';
  $fp = fopen($name, 'rb');

  # Отправить веб серверу Content Type этой картинки
  header("Content-Type: image/jpeg");

  # Вывести содержимое этого файла на экран
  // fpassthru($fp);  #здесь не выйдет вывести, т.к. все заголовки к этому моменту уже были отправлены


/* --------------------------------------------------
---------------- И Н Ф О Р М А Ц И Я ----------------

> Здесь можно посмотреть описание всех функций для работы с файловой системой и директориями:
  > http://www.php.net/manual/ru/ref.filesystem.php
  > http://www.php.net/manual/en/ref.dir.php

> Расширения для работы с файловой системой находятся здесь:
  > http://www.php.net/manual/ru/refs.fileprocess.file.php

> Режимы открытия файла:
  > Их можно посмотреть также здесь: http://www.php.net/manual/ru/function.fopen.php
  > Кроме указанных ниже есть еще 2 флага: 't' и 'b'. Последний установлен по умолчанию с PHP > 4.3.2.
    Эти 2 флага можно последней буковой параметра $mode, что-то вроде: 'rb' или 'rt'

> Режимы 't' и 'b', проблема портируемости
  > В разных системах в качестве конца строки используются разные сочетания символов:
    > UNIX:     '\n'
    > MAC:      '\r\n'
    > WINDOWS:  '\r'
  > 't' - автоматом переводит '\n' в '\r\n'. Т.е. если файл был создан в UNIX
    с использованием '\n', а открывается в windows, то 't' - самое оно для этого случая.
  > 'b' - (по умолчанию с PHP > 4.3.2) Бинарный режим. Правило: если не 't', то 'b'.

> Описание режимов открытия файла (параметр $mode у функции fopen() )
  > r    | > Открывает файл только для чтения;
           > Перемещает указатель в начало файла.
  --------
  > r+   | > Открывает файл для чтения и записи.
           > Помещает указатель в начало.
  --------
  > w    | > Открывает файл только для записи.
           > Помещает указатель в начало.
           > Обрезает файл до 0 длины.
           > Если файл не существует - пытается его создать.
  --------
  > w+   | > Открывает файл для чтения и записи.
           > Помещает указатель в начало.
           > Обрезает файл до 0 длины
           > Если файл не существует - пытается его создать.
  --------
  > a    | > Открывает файл только для записи.
           > Помещает указатель в конец.
           > Если файл не существует - пытается его создать.
  --------
  > a+   | > Открывает файл для чтения и записи.
           > Помещает указатель в конец.
           > Если файл не существует - пытается его создать.
  --------
  > x    | > Создает и открывает файл только для записи.
           > Помещает указатель в начало.
           > Если такой файл уже существует, вызов fopen() вернет FALSE и вызовет warning
  --------
  > x+   | > Создает и открывает файл для чтения и записи. Поведение тоже, что у x.
  --------
  > c    | > Открывает файл только для записи.
           > Если файл не существует, то он создается.
           > Если файл существует, то он не обрезается (как c 'w'), и вызов
             этой функции не вызывает ошибку (как с 'x').
           > Помещает указатель в начало.
  --------
  > c+   | > Открывает файл для чтения и записи. Поведение тоже, что у c.


Реальный путь (realpath) и его кэширование
> Реальный путь (realpath) - канонизированный абсолютный путь к файлу
  > Например (windows): 'C:\WINDOWS\System32'
> PHP кэширует realpath пути к файлам
  > Когда ты в коде обращается к какому-нибудь файлу, например с помощью include,
    и делаешь это с помощью относительного relative пути, PHP должен бы бы искать этот
    файл на самом деле находится относительно корня сайта.
    > Вместо этого PHP кэширует realpath пути к файлам, чтобы каждый
      раз их не вычислять.
  > Если в приложении используется много обращений по относительным путям к
    файлам, то возможно стоит увеличить размер кэша
> Массив с кэшем принципиально выглядит так:
[
   [ 'путь/к/файлу/1' => [           | относительный relative путь
       [key] =>                      | ID кэша
       [is_dir] =>                   | директория ли это
       [realpath] =>                 | абсолютный realpath путь к файлу
       [expires] =>                  | дата и время, когда кэш будет удален (UNIX-метка)
       [is_rvalid] =>                | ?
       [is_wvalid] =>                | ?
       [is_readable] =>              | читаемый ли этот файл или каталог
       [is_writable] =>              | можно ли записывать в этот файл или каталог
                         ]
   ]

   [ 'путь/к/файлу/2' => [
            ...
                         ]
   ]
]


-------------------------------------------------- */
?> 


















