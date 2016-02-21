<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Функция GetDate()</title>
</head>

<body>
<h1>Функция GetDate()</h1>
<?php
$today = getdate();
echo '<pre>';
print_r($today);
echo '</pre>';
?>
</body>
</html>
