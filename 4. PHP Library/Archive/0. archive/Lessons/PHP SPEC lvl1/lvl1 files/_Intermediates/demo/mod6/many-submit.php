<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>��������� ������ Submit</title>
</head>

<body>
<h1>��������� ������ Submit</h1>
<form action="">
	���� ���:
	<input type="text" name="name"><br>
	<input type="submit" name="b1" value="������ 1">
	<input type="submit" name="b2" value="������ 2">
</form>
<?php
$name = $_GET["name"];
$b1 = $_GET["b1"];
$b2 = $_GET["b2"];

if ($b1 or $b2) {
	echo "���: ", $name, "<br>";
	if ($b1) {
		echo "������ ������ 1";
	}
	else {
		echo "������ ������ 2";
	}
}
?>
</body>
</html>
