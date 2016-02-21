<?php
	// запуск сессии
	session_start();
	// подключение библиотек
	require "eshop_db.inc.php";
	require "eshop_lib.inc.php";
?>
<html>
<head>
	<title>Каталог товаров</title>
</head>
<body>
<p>Товаров в <a href="basket.php">корзине</a>:
<?php
	echo $count;
?>
</p>
<table border="0" cellpadding="5" cellspacing="0" width="100%">
<tr>
	<th>Автор</th>
	<th>Название</th>
	<th>Год издания</th>
	<th>Цена, руб.</th>
	<th>В корзину</th>
</tr>
<?php
	$result = selectAll();
	while ($row = mysql_fetch_assoc($result)) {
?>
	<tr>
		<td><?php echo $row["author"] ?></td>
		<td><?php echo $row["title"] ?></td>
		<td align="center"><?php echo $row["pubyear"] ?></td>
		<td align="center"><?php echo $row["price"] ?></td>
		<td align="center">
		    <a href="add2basket.php?id=<?php echo $row["id"] ?>">
		    положить</a></td>
	</tr>
<?php
	}
?>
</table>
</body>
</html>