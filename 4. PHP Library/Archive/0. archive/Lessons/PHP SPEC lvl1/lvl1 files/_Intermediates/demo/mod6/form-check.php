<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>�������� ������� ������</title>
</head>

<body>
<h1>�������� ������� ������</h1>
<form action="<?=$_SERVER["PHP_SELF"]?>" 
		method="post">
	���� ���:
	<input type="text" name="name"><br>
	��� �������:
	<input type="text" name="age"><br>
	<input type="submit" value="��������">
</form>
<?php
$name = strip_tags($_POST["name"]);
$age = $_POST["age"] * 1;

if ($name) {
	echo "<h1>������, $name</h1>";
	echo "<h3>���� $age ���</h3>";
}
?>
</body>
</html>
