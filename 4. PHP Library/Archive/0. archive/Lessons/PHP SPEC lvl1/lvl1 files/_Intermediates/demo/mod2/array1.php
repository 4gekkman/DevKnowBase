<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Индексированные массивы</title>
</head>

<body>
<h1>Индексированные массивы</h1>
<?php
$user[] = "John";
$user[] = "root";
$user[] = "1234";
$user[] = 25;
$user[] = true;

echo $user[0];
echo 'Всего ячеек в массиве '. count($user);
?>
</body>
</html>
