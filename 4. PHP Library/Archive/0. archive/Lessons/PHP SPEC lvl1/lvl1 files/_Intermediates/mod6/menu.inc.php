<?php
	/*
	ЗАДАНИЕ 1
	- Измените значения во всех ячейках массива на index.php
	- Добавьте к значению "index.php" параметр id, передаваемый методом GET
	- Добавьте к параметру id уникальные значения.
	ПРИМЕР: index.php?id=page1
	*/
	$menu = array(
		"Номе"=>"index.php", 
		"Page1"=>"page1.php", 
		"Page2"=>"page2.php", 
		"Page3"=>"page3.php", 
		"Table"=>"table.php");

?>	
<table width="100%">
	<tr>
		<td>
			<p>Меню</p>
			<?php
				getMenu($menu);
			?>
		</td>
	</tr>
</table>