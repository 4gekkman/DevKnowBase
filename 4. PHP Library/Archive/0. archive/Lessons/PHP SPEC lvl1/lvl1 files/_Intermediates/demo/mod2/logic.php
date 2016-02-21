<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Логические операторы</title>
</head>

<body>
<h1>Логические операторы</h1>
<?php
$a = true;
$b = false;

$c = $a && $b;		// Логическое И
$c = $a || $b;		// Логическое ИЛИ
$c = !$a;			// Логическое НЕ

$c = ($a and $b);		// Логическое И
$c = ($a or $b);		// Логическое ИЛИ

print $a;

$a = "0" && $b;

?>
</body>
</html>
