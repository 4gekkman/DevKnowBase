<?php
	// запуск сессии
	session_start();
	// подключение библиотек
	require "eshop_db.inc.php";
	require "eshop_lib.inc.php";
?>
<html>
<head>
	<title>Поступившие заказы</title>
</head>
<body>
<h2>Поступившие заказы:</h2>
<?php
	$result = getOrders();
	foreach ($result as $order) {
?>
<hr>
<p><b>Заказчик</b>: <?php echo $order["name"] ?></p>
<p><b>Email</b>: <?php echo $order["email"] ?></p>
<p><b>Телефон</b>: <?php echo $order["phone"] ?></p>
<p><b>Адрес доставки</b>: <?php echo $order["address"] ?></p>
<p><b>Дата размещения заказа</b>: <?php echo date("d.m.y H:i", $order["date"]) ?></p>
<h3>Купленные товары:</h3>
<table border="1" cellpadding="5" cellspacing="0" width="90%">
<tr>
	<th>N п/п</th>
	<th>Автор</th>
	<th>Название</th>
	<th>Год издания</th>
	<th>Цена, руб.</th>
	<th>Количество</th>
</tr>
<?php
	$i = 0;
	$sum = 0;
	while($row = mysql_fetch_assoc($order["goods"])){
	$sum += $row["price"] * $row["quantity"];
?>
	<tr>
		<td align="center"><?php echo ++$i ?></td>
		<td><?php echo $row["author"] ?></td>
		<td><?php echo $row["title"] ?></td>
		<td align="center"><?php echo $row["pubyear"] ?></td>
		<td align="center"><?php echo $row["price"] ?></td>
		<td align="center"><?php echo $row["quantity"] ?></td>
	</tr>
<?php
	}
?>
	</table>
	<p>Всего товаров в корзине на сумму: <?php echo $sum ?> руб.
<?php
	}
?>
</body>
</html>