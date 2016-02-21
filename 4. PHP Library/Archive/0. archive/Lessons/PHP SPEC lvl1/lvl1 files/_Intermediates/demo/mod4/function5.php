<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Статичные переменные</title>
</head>

<body>
<h1>Статичные переменные</h1>
<?php
function foo() {
	static $i;
	$i = $i + 1;
	echo "I=$i<br>";
}

foo();
foo();
foo();
foo();
foo();


echo "I=$i<br>";
?>

</body>
</html>
