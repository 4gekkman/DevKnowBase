<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Возврат значений</title>
</head>

<body>
<h1>Возврат значений</h1>
<?php
function foo($name) {
	return "<h1>Hello, $name!</h1>";
}


$result = foo("John");
echo $result;

echo foo("Mike");

?>

</body>
</html>
