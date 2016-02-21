<?php



// если пришло имя файла
if(!empty($_POST['filename'])) {
  session_start();
  $_SESSION['filename'] = $_POST['filename'];
  session_write_close();
  echo '<br>Имя файла: '.$_POST['filename'];
}

// если пришел сам файл
if(!empty($HTTP_RAW_POST_DATA) && empty($_POST['filename'])) {

  var_dump($_FILES);

  // Если директории uploaded_files еще нет, создать её
  if(!is_dir('uploaded_files')) mkdir('uploaded_files');

  // Записать файл на диск с правильным именем и расширением, а если имя
  // на русском, то перевести его в транслит:
  session_start();
  $handle = fopen('uploaded_files\\'.rus2translit($_SESSION['filename']), 'w+');

  fwrite($handle,$HTTP_RAW_POST_DATA);
  $r = fclose($handle);
  session_write_close();

  echo '<br>Файл сохранен по адресу: uploaded_files\\'.rus2translit($_SESSION['filename']);
}












// Транслитерация ENG -> RUS
/**
 * Выполняет транслитерацию RUS символов в ENG, и возвращает результирующую строку
 * @author German Manvelov <4gekkman@gmail.com>
 * @param string $string строка для транслитерации
 * @version 1.0
 * @return string результирующая строка с английскими символами
 */
function rus2translit($string) {

    $converter = array(

        'а' => 'a',   'б' => 'b',   'в' => 'v',

        'г' => 'g',   'д' => 'd',   'е' => 'e',

        'ё' => 'e',   'ж' => 'zh',  'з' => 'z',

        'и' => 'i',   'й' => 'y',   'к' => 'k',

        'л' => 'l',   'м' => 'm',   'н' => 'n',

        'о' => 'o',   'п' => 'p',   'р' => 'r',

        'с' => 's',   'т' => 't',   'у' => 'u',

        'ф' => 'f',   'х' => 'h',   'ц' => 'c',

        'ч' => 'ch',  'ш' => 'sh',  'щ' => 'sch',

        'ь' => '\'',  'ы' => 'y',   'ъ' => '\'',

        'э' => 'e',   'ю' => 'yu',  'я' => 'ya',



        'А' => 'A',   'Б' => 'B',   'В' => 'V',

        'Г' => 'G',   'Д' => 'D',   'Е' => 'E',

        'Ё' => 'E',   'Ж' => 'Zh',  'З' => 'Z',

        'И' => 'I',   'Й' => 'Y',   'К' => 'K',

        'Л' => 'L',   'М' => 'M',   'Н' => 'N',

        'О' => 'O',   'П' => 'P',   'Р' => 'R',

        'С' => 'S',   'Т' => 'T',   'У' => 'U',

        'Ф' => 'F',   'Х' => 'H',   'Ц' => 'C',

        'Ч' => 'Ch',  'Ш' => 'Sh',  'Щ' => 'Sch',

        'Ь' => '\'',  'Ы' => 'Y',   'Ъ' => '\'',

        'Э' => 'E',   'Ю' => 'Yu',  'Я' => 'Ya',

    );

    return strtr($string, $converter);

}

?> 
