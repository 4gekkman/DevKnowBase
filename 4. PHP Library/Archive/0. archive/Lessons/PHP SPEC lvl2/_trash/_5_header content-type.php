<?php
header("Content-type: applycation/rtf; charset=utf-8");
header("Content-disposition: attachment; filename=\"mydoc.rtf\"");

// хередоком записываем содержимое rtf файла в строку
$file_content = <<<METKA
HELLO USER
METKA;

// проверим куки
$user_name = strip_tags($_COOKIE["userName"]);

// если кук нет, то пришел незнакомец
if(!$user_name) {
    $user_name = "Незнакомец";
}

// присовокупим к имени пользователя его ip адрес
$user_name .= " Ты работаешь с IP " . $_SERVER["REMOTE_ADDR"];

// заменим в нашем rtf файле слово "USER" на имя пользователя из кук
$file_content = str_replace("USER",$user_name,$file_content);

// отдадим файл
echo $file_content;

?>