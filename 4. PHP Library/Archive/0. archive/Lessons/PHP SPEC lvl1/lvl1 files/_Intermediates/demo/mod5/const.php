<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>��������������� ���������</title>
</head>

<body>
<h1>��������������� ���������</h1>
<?php
function getFuncName(){
	echo '������� ������� �� ����� '.__FUNCTION__.'<br>';
}
echo '��� ������ ����� '.__LINE__.'<br>';
echo '��� ���� '.__FILE__.'<br>';
getFuncName();
?>
<hr>
�� ���������� ��� ������ <?= PHP_VERSION?>
</body>
</html>
