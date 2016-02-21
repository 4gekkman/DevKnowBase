<?php
// #############################
// 18.2. Загрузка массива файлов
// #############################
// Вся информация в файле '18. Working with Files'





// Загрузка массива файлов
    echo '<p><b>Загрузка массива файлов</b></p>';
    ?>
        <form action='' method='POST' enctype='multipart/form-data'>
            <p>Прикрепить изображения:
                <input type='hidden' name='MAX_FILE_SIZE' value=<?= get_maxFileSizeToDownloadInBytes(); ?> />
                <br><input type="file" name="pictures[]" />  <!-- имя массива в $_FILES будет pictures -->
                <br><input type="file" name="pictures[]" />
                <br><input type="file" name="pictures[]" />
                <br><input type="submit" value='Отправить' />
            </p>
        </form>
    <?php
    $filename = 'pictures';  // имя массива в $_FILES, по которому будем искать в нем файлы
    // Проверка на ошибки при загрузке массива файлов
    // > Если метод запроса ресурса - POST
    // > Если в массиве $_FILES файла с таким именем нет
    if(!isset($_FILES[$filename]) && $_SERVER['REQUEST_METHOD'] == 'POST') {
        $err_arr = error_get_last();
        echo '<br><b>Ошибка! </b> Массив файлов не загрузился!';
        echo '<br>Имя массива файлов: ' . $filename;
        echo '<br>Тип ошибки: ' . $err_arr['type'];
        echo '<br>Сообщение об ошибке: ' . $err_arr['message'];
        // ... здесь можно обработать возможные ошибки ...
        exit;  // раз файла нет, то завершить.
    }

    // Обработка загруженного массива файлов
    if(isset($_FILES[$filename]["name"])) {  // проверка, есть ли такая переменная в $_FILES
        foreach ($_FILES['pictures']['error'] as $key => $error) {  // пробежим по всем элементам загруженного массива, которые загрузились без ошибки
            if($error == 0) {
                $tmp_name = $_FILES['pictures']['tmp_name'][$key];
                $name = $_FILES['pictures']['name'][$key];
                $finalDirPath = 'C:\php-5.5.0-Win32-VC11-x64\upload_final\\' . $name;
                move_uploaded_file($tmp_name, $finalDirPath);
            }
        }
    }















// -------------------> Вспомогательные функции <-------------------

/**
 * Возвращает MAX размер файла из php.ini директивы upload_max_filesize в байтах.
 * @author German Manvelov <4gekkman@gmail.com>
 * @version 1.0
 * @return int MAX размер файла, который может принять PHP, в байтах.
 */
function get_maxFileSizeToDownloadInBytes() {
    // Получить MAX размер файла из php.ini директивы upload_max_filesize
    // > Перевести его в байты, и вернуть.
    $filesize = ini_get('upload_max_filesize');   // размер файла
    $filesize = mb_strtolower($filesize);         // перевести в нижний регистр
    $arr = str_split($filesize, 2);               // разбить строку на массив символов по 2 байта на каждый

    // размер мог быть передан либо в байтах, либо в виде вроде: '16K' | '16M' | '16G'
    // > Атрибут value HTML формы принимает значение только в байтах, переведем же его в них
    $multiplier = 1;
    switch($arr[count($arr)-1]) {
        case 'k': $multiplier = 1024; break;
        case 'm': $multiplier = 1024*1024; break;
        case 'g': $multiplier = 1024*1024*1024; break;
    }
    if($multiplier != 1) array_pop($arr);  // если последний символ - буковка, удалить ее из массива
    $result = implode('',$arr);            // склеить массив в строку. Результат: в байтах.
    $result *= $multiplier;                // ... умножить его на полученный множитель
    return $result;                          // вернуть результат: в байтах
}

?>