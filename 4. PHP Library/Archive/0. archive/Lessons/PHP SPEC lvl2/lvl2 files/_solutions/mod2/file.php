<?php
// ��������� ��������� ��� �������� ����� �����
define('filename', 'users.txt');

// ��������, ���� �� ��������� ���������� ������ �� �����
if(
	isset($_POST['fname']) && !empty($_POST['fname']) &&
	isset($_POST['lname']) && !empty($_POST['lname'])
){
	// ����������� ���������� ������
	$fname = stripslashes(trim(htmlspecialchars($_POST['fname'],ENT_QUOTES)));
	$lname = stripslashes(trim(htmlspecialchars($_POST['lname'],ENT_QUOTES)));
	
	// ���������� ������ ��� ������ � ����
	$str = $fname . ' ' . $lname . "\r\n";
	// ������� ���������� � ������
	$f = fopen(filename, 'a');
	if(is_resource($f)){
		// ������� ������ � ���� � ������� ����������
		fputs($f, $str);
		fclose($f);
	}
	
	// ���������� ��������
	header('Location: ' . $_SERVER['PHP_SELF']);
	exit;
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>������ � �������</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>

<h1>��������� �����</h1>

<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">

���: <input type="text" name="fname" /><br />
�������: <input type="text" name="lname" /><br />

<br />

<input type="submit" value="���������!" />

</form>

<?php
// ��������, ���������� �� ����
if(file_exists(filename)){
	// ������� ��� ���������� ����� � ���� �������
	$lines = file(filename);
	
	if(is_array($lines)){
		echo '<hr /><pre>';
		
		// � ����� ������� ��� ������ �����
		$i = 1;
		foreach($lines as $line){
			echo $i, ' ', $line, '<br />';
			$i++;
		}
		
		echo '</pre>';
	}
	
	// ������� ������ �����
	echo '<p>������ �����: ', filesize(filename), ' ����</p>';
}
?>

</body>
</html>