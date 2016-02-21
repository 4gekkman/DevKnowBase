<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Цикл "Для каждого"</title>
</head>

<body>
<h1>Цикл "Для каждого"</h1>
<?php
// Индексный массив
$arr = array("Январь", "Февраль", "Март", "Апрель");
foreach ($arr as $i) {
	print $i . "<br>";
}

// Ассоциативный массив
$a2 = array("Саша" => 5, "Даша" => "Привет");
foreach ($a2 as $key => $value) {
	print "$key: $value <br>";
}
 ?>

</body>
</html>
