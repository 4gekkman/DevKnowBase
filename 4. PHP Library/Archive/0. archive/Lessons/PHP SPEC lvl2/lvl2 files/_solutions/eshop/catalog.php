<?php
	// ������ ������
	session_start();
	// ����������� ���������
	require "eshop_db.inc.php";
	require "eshop_lib.inc.php";
?>
<html>
<head>
	<title>������� �������</title>
</head>
<body>
<p>������� � <a href="basket.php">�������</a>:
<?php
	echo $count;
?>
</p>
<table border="0" cellpadding="5" cellspacing="0" width="100%">
<tr>
	<th>�����</th>
	<th>��������</th>
	<th>��� �������</th>
	<th>����, ���.</th>
	<th>� �������</th>
</tr>
<?php
	$result = selectAll();
	while ($row = mysql_fetch_assoc($result)) {
?>
	<tr>
		<td><?php echo $row["author"] ?></td>
		<td><?php echo $row["title"] ?></td>
		<td align="center"><?php echo $row["pubyear"] ?></td>
		<td align="center"><?php echo $row["price"] ?></td>
		<td align="center">
		    <a href="add2basket.php?id=<?php echo $row["id"] ?>">
		    ��������</a></td>
	</tr>
<?php
	}
?>
</table>
</body>
</html>