<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Рекурсия</title>
</head>

<body>
<h1>Рекурсия</h1>

<pre style="font-size:16pt">

Факториал

	0! = 1
	
	n! = n * (n-1)!

</pre>
<?php

function factorial($n) {
	if ($n == 0) return 1;
	return $n * factorial($n-1);
}

print factorial(5);

?>

</body>
</html>
