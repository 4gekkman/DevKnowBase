<?php
/*
������� 1
- �������� ������ $bmw � ��������:
	"model"
	"speed"
	"doors"
	"year"
- ��������� ������ ����������: "X5", 120, 5, "2006"	
- �������� ������� $toyota � $opel ����������� ������� $bmw.
- ��������� ������ $toyota ����������: "Carina", 130, 4, "2007"
- ��������� ������ $opel ����������: "Corsa", 140, 5, "2007"		
*/

$bmw = array(
    "model"=>"X5",
	"speed"=>"120",
	"doors"=>"5",
	"year"=>"2006"
            );
$toyota[] = "Carina";
$toyota[] = "130";
$toyota[] = "4";
$toyota[] = "2007";


?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>�������</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>
	<h1>�������</h1>
	<?php
	/*
	������� 2
	- �������� �������� ���� ��� �������� � ����: name - model - speed - doors - year,  ��������: bmw - 120 - 5 - 2006
	*/
	echo "<pre>";
	echo var_dump($bmw);
	echo "</pre>";
	echo "<pre>";
	echo var_dump($toyota);
	echo "</pre>";
	
	echo "<p>";
	echo "bmw - ".$bmw["model"]." - ".$bmw["speed"]." - ".$bmw["doors"]." - ".$bmw["year"];
	echo "<br>bmw - $bmw[model] - $bmw[speed] - $bmw[doors] - $bmw[year]";
	echo "</p>";
	
	?>
</body>
</html>
