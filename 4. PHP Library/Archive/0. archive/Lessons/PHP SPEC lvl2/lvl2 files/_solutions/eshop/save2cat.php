<?php
	// ����������� ���������
	require "eshop_db.inc.php";
	require "eshop_lib.inc.php";
	// ��������� ������ �� �����
	$author = addslashes(trim($_POST["author"]));
	$title = addslashes(trim($_POST["title"]));
	$pubyear = addslashes(trim($_POST["pubyear"]));
	$price = addslashes(trim($_POST["price"]));

	// ���������� ������ � ����
	save($author, $title, $pubyear, $price);
	
	// ����������� �� �����
	header("Location: add2cat.php");
?>