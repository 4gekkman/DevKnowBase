<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Конструкция if</title>
</head>

<body>

<?php
	$shop = false;
	$kiosk = false;
	if($shop)
		echo 'Идём в магазин';
	elseif($kiosk)
		echo 'Идём в ближний киоск';
	else	
		echo 'Идём в дальний киоск';
	echo '<hr>Идём домой'	
?>




</body>
</html>
