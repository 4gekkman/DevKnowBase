<?php
	// запуск сессии
	session_start();
	// подключение библиотек
	require "eshop_db.inc.php";
	require "eshop_lib.inc.php";
?>
<html>
<head>
	<title>Корзина пользователя</title>
</head>
<body>
<?php
	if ($count == 0) {
		echo "<p>Корзина пуста! Перейти в <a href=\"catalog.php\">каталог</a> товаров.</p>";
	} else {
?>
<table border="0" cellpadding="5" cellspacing="0" width="100%">
<tr>
	<th>N п/п</th>
	<th>Автор</th>
	<th>Название</th>
	<th>Год издания</th>
	<th>Цена, руб.</th>
	<th>Количество</th>
	<th>Удалить</th>
</tr>
<?php
	$result = myBasket();
	$i = 0;
	$sum = 0;
	while ($row = mysql_fetch_assoc($result)) {
	$sum += $row["price"] * $row["quantity"];
?>
	<tr>
		<td align="center"><?php echo ++$i ?></td>
		<td><?php echo $row["author"] ?></td>
		<td><?php echo $row["title"] ?></td>
		<td align="center"><?php echo $row["pubyear"] ?></td>
		<td align="center"><?php echo $row["price"] ?></td>
		<td align="center"><?php echo $row["quantity"] ?></td>
		<td align="center">
		    <a href="delete_from_basket.php?id=<?php echo $row["id"] ?>">
		    удалить</a></td>
	</tr>
<?php
	}
?>
</table>

<p>Всего товаров в корзине на сумму:
<?php echo $sum ?>
руб.

<div align="center">
	<input type="button" value="Оформить заказ!"
                      onClick="location.href='orderform.php'">
</div>
<?php
}
?>
</body>
</html>







