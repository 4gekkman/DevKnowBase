<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Функция GetDate() c временной меткой</title>
</head>

<body>
<h1>Функция GetDate() с временной меткой</h1>
<?php
$somedate = getdate(123456);
echo '<pre>';
print_r($somedate);
echo '</pre>';
?>
</body>
</html>
