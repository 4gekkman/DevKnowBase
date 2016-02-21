<html>
<head>
	<title>Форма оформления заказа</title>
</head>
<body>
	<form action="saveorder.php" method="post">
		<p>Заказчик: <input type="text" name="name" size="50">
		<p>Email заказчика: <input type="text" name="email" 
					size="50">
		<p>Телефон для связи: <input type="text" name="phone" 
						size="50">
		<p>Адрес доставки: <br><textarea name="address" 
                                     cols="50" rows="5"></textarea>
		<p><input type="submit" value="Заказать">
	</form>
</body>
</html>