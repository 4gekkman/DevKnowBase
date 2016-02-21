<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Аргументы функции по умолчанию</title>
</head>

<body>
<h1>Аргументы функции по умолчанию</h1>
<?php
function foo($name="Guest") {
	echo "<h1>Hello, $name!</h1>";
}


foo("John");
$n = "Mike"
foo($n);
foo();
?>

</body>
</html>
