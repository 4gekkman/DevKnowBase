<?php
	// ������ ������
	session_start();
	// ����������� ���������
	require "eshop_db.inc.php";
	require "eshop_lib.inc.php";
?>
<html>
<head>
	<title>����������� ������</title>
</head>
<body>
<h2>����������� ������:</h2>
<?php
	$result = getOrders();
	foreach ($result as $order) {
?>
<hr>
<p><b>��������</b>: <?php echo $order["name"] ?></p>
<p><b>Email</b>: <?php echo $order["email"] ?></p>
<p><b>�������</b>: <?php echo $order["phone"] ?></p>
<p><b>����� ��������</b>: <?php echo $order["address"] ?></p>
<p><b>���� ���������� ������</b>: <?php echo date("d.m.y H:i", $order["date"]) ?></p>
<h3>��������� ������:</h3>
<table border="1" cellpadding="5" cellspacing="0" width="90%">
<tr>
	<th>N �/�</th>
	<th>�����</th>
	<th>��������</th>
	<th>��� �������</th>
	<th>����, ���.</th>
	<th>����������</th>
</tr>
<?php
	$i = 0;
	$sum = 0;
	while($row = mysql_fetch_assoc($order["goods"])){
	$sum += $row["price"] * $row["quantity"];
?>
	<tr>
		<td align="center"><?php echo ++$i ?></td>
		<td><?php echo $row["author"] ?></td>
		<td><?php echo $row["title"] ?></td>
		<td align="center"><?php echo $row["pubyear"] ?></td>
		<td align="center"><?php echo $row["price"] ?></td>
		<td align="center"><?php echo $row["quantity"] ?></td>
	</tr>
<?php
	}
?>
	</table>
	<p>����� ������� � ������� �� �����: <?php echo $sum ?> ���.
<?php
	}
?>
</body>
</html>