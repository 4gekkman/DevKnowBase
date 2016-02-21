<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Цикл for</title>
</head>

<body>
<h1>Цикл for</h1>
<?php
	for ($i=0; $i<10; $i++){
		echo $i, "<br>";
	}	
	echo '<hr>';

	$a[0] = "Привет";
	$a[1] = "Еще";
	$a[2] = "Привет";
	$a[3] = "И еще";
	for ($i=0; $i < count($a); $i++){
		echo $a[$i], "<br>";
	}
?>

</body>
</html>
