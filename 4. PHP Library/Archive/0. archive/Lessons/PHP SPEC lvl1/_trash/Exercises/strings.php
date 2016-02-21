<?php
	/*
	ЗАДАНИЕ 1
	- Создайте строковую переменную $login и присвойте ей значение "root"
	- Создайте строковую переменную $password и присвойте ей значение "megaP@ssw0rd"
	- Создайте строковую переменную $email и присвойте ей значение "ivan@petrov.ru"
	*/
$login = "root";
$password = "megaP@ssw0rd";
$email = "ivan@petrov.ru";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>Использование функций обработки строк</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>
	<?php
	/*
	ЗАДАНИЕ 2
	- Используя строковые функции, сделайте первый символ значения переменной $login прописной(большой)
	- Используя строковые функции, сделайте первый символ значения переменной $password прописной(большой)
	- Используя строковые функции проверьте, имеет ли значение переменной $email символ "@"
	*/
    $login = ucfirst($login); echo "$login <br>";
    $password = ucfirst($password); echo "$password <br>";
    if(strpbrk($email,"@"))
        echo "Строка $email включает в себя символ @";
    else
        echo "Строка $email не включает в себя символ @";

	?>
</body>
</html>
