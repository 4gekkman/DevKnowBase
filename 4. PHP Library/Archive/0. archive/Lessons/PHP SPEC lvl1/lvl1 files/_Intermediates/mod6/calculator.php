<?php
/*
������� 1
- ���������, ���� �� ��������� ���������� �����
- ���� ��� ���� ����������, ������������ ���������� ��������
- � ����������� �� ��������� ����������� ��������� �������������� ��������
- � ������ �������, ���������, �������� �� ��������� � ����� (�� ���� ������ ������)
- ��������� ���������� ��������� ���������� � ����������
*/
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>�����������</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>

<h1>�����������</h1>

<?php
/*
������� 2
- ���� ��������� ����������, �������� ���
*/
?>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">

����� 1:<br />
<input type="text" name="num1" /><br /><br />

��������:<br />
<input type="text" name="operator" /><br /><br />

����� 2:<br />
<input type="text" name="num2" /><br /><br />

<input type="submit" value="�������!" />

</form>

</body>
</html>