<?php
	// ������ ������
	session_start();
	// ����������� ���������
	require "eshop_db.inc.php";
	require "eshop_lib.inc.php";
	// ��������� ������ � ������
	$name = strip_tags(addslashes(trim($_POST["name"])));
	$email = strip_tags(addslashes(trim($_POST["email"])));
	$phone = strip_tags(addslashes(trim($_POST["phone"])));
	$address = strip_tags(addslashes(trim($_POST["address"])));
	$customer = session_id();
	$datetime = time();
	//�������� ������ �� ���������� ������
	$data = "$name|$email|$phone|$address|$customer|$datetime\r\n";
	//���������� ������ � ����
	file_put_contents(ORDERS_LOG, $data, FILE_APPEND);	
	
	// �������������� ��������� ������� �� ������� � ������� orders
	resave();
?>
	
<html>
<head>
	<title>���������� ������ ������</title>
</head>
<body>
	<p>��� ����� ������.</p>
	<p><a href="catalog.php">������� �������</a></p>
</body>
</html>