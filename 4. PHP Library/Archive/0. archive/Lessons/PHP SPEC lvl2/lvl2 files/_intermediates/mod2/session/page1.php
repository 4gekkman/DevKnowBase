<?php
// Открываем сессию
session_start();

// Подключаем код для сохранения информации о странице в сессии
include('savepage.inc.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>Страница 1</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>

<h1>Страница 1</h1>

<?php
// Подключаем меню
include('menu.inc.php');

// Подключаем код для вывода информации обо всех посещенных страницах
include('visited.inc.php');
?>

</body>
</html>