<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>����� ���������� ������� GET</title>
</head>

<body>
<h1>����� ���������� ������� GET</h1>
<form action="<?=$_SERVER["PHP_SELF"]?>" method="get">
	���� ���:
	<input type="text" name="name"><br>
	��� �������:
	<input type="text" name="age"><br>
	<input type="submit" value="��������">
</form>
<?php
$name = $_GET["name"];
$age = $_GET["age"];

if ($name) {
	echo "<h1>������, $name</h1>";
	echo "<h3>���� $age ���</h3>";
}
?>
</body>
</html>
