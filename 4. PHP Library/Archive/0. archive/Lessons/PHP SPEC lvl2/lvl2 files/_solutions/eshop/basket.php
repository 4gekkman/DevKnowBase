<?php
	// ������ ������
	session_start();
	// ����������� ���������
	require "eshop_db.inc.php";
	require "eshop_lib.inc.php";
?>
<html>
<head>
	<title>������� ������������</title>
</head>
<body>
<?php
	if ($count == 0) {
		echo "<p>������� �����! ������� � <a href=\"catalog.php\">�������</a> �������.</p>";
	} else {
?>
<table border="0" cellpadding="5" cellspacing="0" width="100%">
<tr>
	<th>N �/�</th>
	<th>�����</th>
	<th>��������</th>
	<th>��� �������</th>
	<th>����, ���.</th>
	<th>����������</th>
	<th>�������</th>
</tr>
<?php
	$result = myBasket();
	$i = 0;
	$sum = 0;
	while ($row = mysql_fetch_assoc($result)) {
	$sum += $row["price"] * $row["quantity"];
?>
	<tr>
		<td align="center"><?php echo ++$i ?></td>
		<td><?php echo $row["author"] ?></td>
		<td><?php echo $row["title"] ?></td>
		<td align="center"><?php echo $row["pubyear"] ?></td>
		<td align="center"><?php echo $row["price"] ?></td>
		<td align="center"><?php echo $row["quantity"] ?></td>
		<td align="center">
		    <a href="delete_from_basket.php?id=<?php echo $row["id"] ?>">
		    �������</a></td>
	</tr>
<?php
	}
?>
</table>

<p>����� ������� � ������� �� �����:
<?php echo $sum ?>
���.

<div align="center">
	<input type="button" value="�������� �����!"
                      onClick="location.href='orderform.php'">
</div>
<?php
}
?>
</body>
</html>







