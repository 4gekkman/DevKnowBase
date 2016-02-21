<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Область видимости переменных</title>
</head>

<body>
<h1>Область видимости переменных</h1>
<?php
$salary = 10000;

function foo($name = "незнакомец") {
	global $salary;
	$salary = 1;
	//...
	echo "<h1>Привет $name</h1>";
}

foo();

print $salary;
?>

</body>
</html>
