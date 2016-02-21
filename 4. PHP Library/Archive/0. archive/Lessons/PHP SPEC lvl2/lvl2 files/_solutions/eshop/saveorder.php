<?php
	// запуск сессии
	session_start();
	// подключение библиотек
	require "eshop_db.inc.php";
	require "eshop_lib.inc.php";
	// Получение данных о заказе
	$name = strip_tags(addslashes(trim($_POST["name"])));
	$email = strip_tags(addslashes(trim($_POST["email"])));
	$phone = strip_tags(addslashes(trim($_POST["phone"])));
	$address = strip_tags(addslashes(trim($_POST["address"])));
	$customer = session_id();
	$datetime = time();
	//создание строки из полученных данных
	$data = "$name|$email|$phone|$address|$customer|$datetime\r\n";
	//сохранение данных в файл
	file_put_contents(ORDERS_LOG, $data, FILE_APPEND);	
	
	// Пересохранение купленных товаров из корзины в таблицу orders
	resave();
?>
	
<html>
<head>
	<title>Сохранение данных заказа</title>
</head>
<body>
	<p>Ваш заказ принят.</p>
	<p><a href="catalog.php">Каталог товаров</a></p>
</body>
</html>