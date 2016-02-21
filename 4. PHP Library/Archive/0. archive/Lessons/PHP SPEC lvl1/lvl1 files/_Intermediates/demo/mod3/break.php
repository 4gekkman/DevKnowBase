<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Операторы break и continue</title>
</head>

<body>
<h1>Операторы break и continue</h1>
<?php
	for ($i=0; $i<32; $i+=2) {
		if ($i == 8) 
			continue;
		echo $i, "<br>";
		if ($i == 30) 
			break;
	}

?>

</body>
</html>
