<?php
	// ������ ������
	session_start();
	// ����������� ���������
	require "eshop_db.inc.php";
	require "eshop_lib.inc.php";
	
	// ID ���������� ������
	$id = $_GET['id'];
	

	// �������� ������ �� �������
	basketDel($id);
	
	header('Location: _trash.php');
?>