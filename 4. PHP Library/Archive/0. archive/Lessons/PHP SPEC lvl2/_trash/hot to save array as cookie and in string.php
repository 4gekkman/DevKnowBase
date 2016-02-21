<?php
setcookie("name","John");
if(isset($_COOKIE["name"]))
    echo $_COOKIE["name"];



$arr = array(
    "one" => 1,
    2 => "two",
    3 => true
);

$str = serialize($arr);  // сохранить массив в строку
echo $str;

$arr = unserialize($str);  // получить массив обратно, ранее
                           //  сохраненный в строку

?>