<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Строки</title>
</head>

<body>
<h1>Строки</h1>
<?php
$a = <<<EOF
<pre>
Много текста самого разного
Много текста самого разного
Много текста самого разного $name
Много текста самого разного
Много текста самого разного
Много текста самого разного
</pre>
EOF;

echo $a;

?>

</body>
</html>
