<!DOCTYPE html>
<html lang="ru">
 <head>
  <meta charset="utf-8" />
  <title>  </title>
  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <style>
   article,aside,details,figcaption,figure,
   footer,header,hgroup,menu,nav,section {
   display:block;
   }



  </style>
 </head>
 <body>

<?php

// Загрузить файл на сервер в массив $_FILES (проверка на ошибки опущена)

  # Вывести максимальный размер файла, который может принять сервер PHP
  echo 'Максимальный размер файла, который примет сервер == ' . get_maxFileSizeToDownloadInBytes() . ' байт';

  # Определить имя загружаемого файла в массиве $_FILES
  $filename = 'filename_1';

  # Вывести HTML форму для загрузки файла
?>
    <form enctype='multipart/form-data'
          action="<?=$_SERVER['PHP_SELF']?>"
          method='POST'>

      <!-- (скрытое поле) Проверка на привышение MAX размера файла на стороне клиента -->
      <input type='hidden'
             name='MAX_FILE_SIZE'
             value=<?= get_maxFileSizeToDownloadInBytes(); ?> />

      <!-- Кнопка загрузки. Здесь $filename - это имя файла в массиве $_FILES -->
      <input name=<?=$filename; ?> type="file" />

      <!-- Кнопка отправки данных -->
      <input type='submit'
             value='Загрузить файл' />   <!-- Надпись на кнопке -->
    </form>
<?php

  # Проверка на наличие ошибок загруженного файла
  if(!isset($_FILES[$filename]) && $_SERVER['REQUEST_METHOD'] == 'POST') {
    $err_arr = error_get_last();
    echo '<br><b>Ошибка! </b> Файл не загрузился!';
    echo '<br>Имя файла: ' . $filename;
    echo '<br>Тип ошибки: ' . $err_arr['type'];
    echo '<br>Сообщение об ошибке: ' . $err_arr['message'];
    // ... здесь можно обработать возможные ошибки ...
    exit;  // раз файла нет, то завершить.
}

  #

  #





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











 </body>
</html>
