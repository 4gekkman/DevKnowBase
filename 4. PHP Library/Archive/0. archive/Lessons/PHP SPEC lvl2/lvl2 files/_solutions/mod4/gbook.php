<?php
// ������������ � ������� �� � �������� ����������� ���� ������
mysql_connect('localhost','root','password');
mysql_select_db('gbook');

// ���������, ���� �� ���������� ������� ���������� �����
if(
	isset($_POST['name']) && !empty($_POST['name']) &&
	isset($_POST['email']) && !empty($_POST['email']) &&
	isset($_POST['msg']) && !empty($_POST['msg'])
){
	// ��������� ���������� ������
	$name = stripslashes(trim(htmlspecialchars($_POST['name'],ENT_QUOTES)));
	$email = stripslashes(trim(htmlspecialchars($_POST['email'],ENT_QUOTES)));
	$msg = stripslashes(trim(htmlspecialchars($_POST['msg'],ENT_QUOTES)));
	
	// ��������� SQL-�������� �� ������� ������ � ��������� ���
	$sql = "
	INSERT INTO
		msgs (name, email, msg)
	VALUES
		('$name','$email','$msg')
	";
	mysql_query($sql);
	
	// ��������������� ��������, ����� ���������� �� ����������, ���������� ����� �����
	header('Location: ' . $_SERVER['PHP_SELF']);
	exit;
}

// ���������, ��� �� ������ �� �������� ������
if(isset($_GET['del']) && is_numeric($_GET['del'])){
	// ��������� ���������� ������
	$del = $_GET['del'] * 1;
	
	// ��������� SQL-�������� �� �������� ������ � ��������� ���
	$sql = "DELETE FROM msgs WHERE id=$del";
	mysql_query($sql);
	
	// ��������������� ��������, ����� ���������� �� ����������, ���������� ������� GET
	header('Location: ' . $_SERVER['PHP_SELF']);
	exit;
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>�������� �����</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>

<h1>�������� �����</h1>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">

���� ���:<br />
<input type="text" name="name" /><br />
��� E-mail:<br />
<input type="text" name="email" /><br />
���������:<br />
<textarea name="msg" cols="50" rows="5"></textarea><br />
<br />
<input type="submit" value="��������!" />

</form>

<?php
// ��������� SQL-�������� �� ������� ������ �� �� � ��������� ���
$sql = "SELECT * FROM msgs ORDER BY id DESC";
$res = mysql_query($sql);

// ��������� ���������� � ��
mysql_close();

// �������� ���������� ����� ���������� ������� � ������� ���
$rows = mysql_num_rows($res);
print "<p>������� � �������� �����: $rows</p>";

// � ����� ������� ��� ���������
while($row = mysql_fetch_assoc($res)){
	$id = $row['id'];
	$name = $row['name'];
	$email = $row['email'];
	$msg = nl2br($row['msg']);
	
	print <<<HTML
	
	<hr>
	<p><b><a href="mailto:$email">$name</a></b><br />$msg</p>
	<p align="right"><a href="{$_SERVER['PHP_SELF']}?del=$id">�������</a></p>
HTML;
	
}
?>

</body>
</html>