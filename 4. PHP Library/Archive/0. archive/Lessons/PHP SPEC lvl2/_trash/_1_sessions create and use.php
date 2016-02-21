<?php
// начало или продолжение сессии
session_start();

// для работы с сессиями есть глобальный массив $_SESSION
$_SESSION['user'] = "John";
echo $_SESSION['user'];
?>