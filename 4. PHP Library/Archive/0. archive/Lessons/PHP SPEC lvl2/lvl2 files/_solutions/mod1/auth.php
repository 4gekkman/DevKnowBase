<?php
// � ���� ������� ������ ���������� �������� ����� ������������ � md5-���� ������ (p@$$w0rd)
define('login','admin');
define('pass','b7463760284fd06773ac2a48e29b0acf');

// �������������� ���������� ��� �������� ������ � ������, ������� ������ ������������
// ���� ������������ ���� �����-���� ������, ��������� �� � ��� ����������
$login = '';
$pass = '';
if(isset($_SERVER['PHP_AUTH_USER'])) $login = $_SERVER['PHP_AUTH_USER'];
if(isset($_SERVER['PHP_AUTH_PW'])) $pass = $_SERVER['PHP_AUTH_PW'];

// ��������� ��������� ������
if($login != login || md5($pass) != pass){
	// ������ ������ ��������, ���� ������������ ���� �������� ������
	// ���������� ��������������� ���������
	header('HTTP/1.0 401 Unauthorized');
	header('WWW-Authenticate: _trash realm="��� ��������� ����"');
	// ������� ���������� ��� ����� ������������ ������
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>������ ��������</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>

<h1>������ ��������</h1>

<p>�� ��������� �������� ������ � �������� ����� �����. ��� ����� ����� ����� ����� � ������.</p>

</body>
</html>


<?
}else{
	// ������������ ���� ���������� ������
	// ������� ��������� ����������
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>������� ��������������</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>

<h1>������� �������������� RFC-2617</h1>

<p>
��� �����: <?php echo $login; ?><br />
��� ������: <?php echo $pass; ?>
</p>

</body>
</html>

<?php
}
?>