<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Прием информации методом GET</title>
</head>

<body>
<h1>Прием информации методом GET</h1>
<form action="<?=$_SERVER["PHP_SELF"]?>" method="get">
	Ваше имя:
	<input type="text" name="name"><br>
	Ваш возраст:
	<input type="text" name="age"><br>
	<input type="submit" value="Передать">
</form>
<?php
$name = $_GET["name"];
$age = $_GET["age"];

if ($name) {
	echo "<h1>Привет, $name</h1>";
	echo "<h3>Тебе $age лет</h3>";
}
?>
</body>
</html>
