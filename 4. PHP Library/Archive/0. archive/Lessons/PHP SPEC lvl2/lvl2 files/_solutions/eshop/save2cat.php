<?php
	// подключение библиотек
	require "eshop_db.inc.php";
	require "eshop_lib.inc.php";
	// Получение данных из формы
	$author = addslashes(trim($_POST["author"]));
	$title = addslashes(trim($_POST["title"]));
	$pubyear = addslashes(trim($_POST["pubyear"]));
	$price = addslashes(trim($_POST["price"]));

	// Сохранение товара в базу
	save($author, $title, $pubyear, $price);
	
	// Возвращение на форму
	header("Location: add2cat.php");
?>