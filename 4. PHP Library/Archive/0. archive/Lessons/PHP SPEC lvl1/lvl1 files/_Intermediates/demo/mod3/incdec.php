<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Операторы инкремента и декремента</title>
</head>

<body>
<h1>Операторы инкремента и декремента</h1>
<?php
	$a = 1;
	echo $a++, '<br>';
	echo $a;
	echo '<hr>';
	$a = 1;
	echo ++$a, '<br>';
	echo $a;
	/*
	echo $a++ то же, что и
	echo $a; $a = $a + 1;
	
	echo ++$a то же, что и
	$a = $a + 1; echo $a; 
	*/
?>

</body>
</html>
