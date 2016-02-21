<?php
	// запуск сессии
	session_start();
	// подключение библиотек
	require "eshop_db.inc.php";
	require "eshop_lib.inc.php";
	// Покупатель
	$customer = session_id();
	// Получить id товара, добавляемого в корзину
	$goodsid = $_GET["id"];
	// Количество товара
	$quantity = 1;
	// Дата добавления товара в корзину
	$datetime = time();
	
	add2basket($customer, $goodsid, $quantity, $datetime);
	
	header("Location: catalog.php");
?>