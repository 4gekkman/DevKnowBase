<?php
/*
������� 1
- �������� ���������� $name � ��������� �� �������� ���������� ���� ���, �������� "�����"(����������� � ��������!)
- �������� ���������� $age � ��������� �� �������� ���������� ��� �������, �������� 40
*/

$name = '������';
$age = 26;

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>���������� � �����</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>
	<h1>���������� � �����</h1>
	<p>��� ��� <?=$name?></p>
	<p>��� <?=$age?> ���</p>
	
	
	<?php
	/*
	������� 2
	- �������� � ������� echo(��� print) ����� "���� �����: ����_���", ��������: "���� �����: �����"
	- �������� ����� "��� ���_������� ���", ��������: "��� 40 ���"
	- ������� ���������� $age. 
	*/
	
	echo '<p>', '��� ��� ', $name, '</p>';
	echo '��� ', $age, ' ���';
	
	unset($name);
	
	?>
</body>
</html>
