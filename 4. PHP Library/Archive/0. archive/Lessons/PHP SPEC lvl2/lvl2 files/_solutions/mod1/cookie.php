<?php
// �������������� ���������� ��� �������� ���������� ���������
// ���� ��������������� ������ ������������ ����� ����
// ��������� �� � ��� ����������
$visit_counter = 0;
if(isset($_COOKIE['visitCounter']) && is_numeric($_COOKIE['visitCounter'])){
	$visit_counter = $_COOKIE['visitCounter'] * 1;
}
// ����������� ������� ���������
$visit_counter++;

// �������������� ���������� ��� �������� �������� ���������� ��������� ��������
// ���� ��������������� ������ ������������ �� ����, ��������� �� � ��� ����������
$last_visit = '';
if(isset($_COOKIE['lastVisit'])){
	$last_visit = stripslashes(trim(htmlspecialchars($_COOKIE['lastVisit'],ENT_QUOTES)));
}

// ������������� ����
setcookie('visitCounter', $visit_counter, 0x7FFFFFFF);
setcookie('lastVisit', date('d/m/Y H:i:s'), 0x7FFFFFFF);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
	<title>��������� �����</title>
	<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
</head>
<body>

<h1>��������� �����</h1>

<?php
// ������� ���������� � ���������� ��������� � ���� ���������� ���������
if($visit_counter == 1){
	print '<h2>����� ����������!</h2>';
}else{
	print <<<HTML
	<h2>�� ����� ��� $visit_counter ���</h2>
	<p>��������� ���������: $last_visit</p>
HTML;
}
?>

</body>
</html>