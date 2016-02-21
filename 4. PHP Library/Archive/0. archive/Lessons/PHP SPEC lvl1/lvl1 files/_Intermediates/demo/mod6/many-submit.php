<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Несколько кнопок Submit</title>
</head>

<body>
<h1>Несколько кнопок Submit</h1>
<form action="">
	Ваше имя:
	<input type="text" name="name"><br>
	<input type="submit" name="b1" value="Кнопка 1">
	<input type="submit" name="b2" value="Кнопка 2">
</form>
<?php
$name = $_GET["name"];
$b1 = $_GET["b1"];
$b2 = $_GET["b2"];

if ($b1 or $b2) {
	echo "Имя: ", $name, "<br>";
	if ($b1) {
		echo "Нажата кнопка 1";
	}
	else {
		echo "Нажата кнопка 2";
	}
}
?>
</body>
</html>
