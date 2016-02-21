<?php
	function getMenu($menu, $vertical=true){
		if(!$vertical){
			$style = "display:inline";
		}
		echo '<ul style="list-style-type:none">';
		
			foreach ($menu as $link=>$href){
				echo "<li style='$style'><a href=\"$href\">", $link, '</a></li>';
			}
		
		echo '</ul>';
	}
	function getTable($cols=10, $rows=10, $color="yellow"){
		static $count = 0;
		echo '<table border="1">';
		for($tr=1; $tr<=$rows; $tr++){
			echo "<tr>";
			for($td=1; $td<=$cols; $td++){
				if($td==1 or $tr==1){
					echo "<th style='background-color:$color'>", $tr * $td, "</th>";
				}else{
					echo "<td>", $tr * $td, "</td>";
				}
			}	
			echo "</tr>";
		}
		echo '</table>';
		$count++;
		$GLOBALS["count"] = $count;
	}
?>