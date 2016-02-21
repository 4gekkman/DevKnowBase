<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Цикл while</title>
</head>

<body>
<h1>Цикл с while</h1>

<?php
$a = 1;

while ($a < 1000) {
	print $a . ", ";
	$a *= 2;
}

print "<br>";

$a = 1;
while ($a < 1000):
	print $a . ", ";
	$a *= 3;
endwhile;



?>


</body>
</html>
