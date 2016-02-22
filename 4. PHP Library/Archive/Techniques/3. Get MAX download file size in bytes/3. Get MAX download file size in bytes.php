<?php
/* --------------------------------------------------
---------------- Т Е Х Н И К А ----------------
3. Получить значение в байтах МАХ размера файла, который можно закачать,
   из директивы upload_max_filesize в php.ini

Проблема:
    > ini_get('upload_max_filesize') вернет один из следующих вариантов значения (примеры):
      > '16'      - в байтах
      > '16К'     - в килобайтах
      > '16M'     - в мегабайтах
      > '16G'     - в гигабайтах
    > А мне нужно значение только в байтах. Потому что, например,
      некоторые атрибуты HTML принимают значения только в байтах.

Решение:
    > Функция ниже


-------------------------------------------------- */


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