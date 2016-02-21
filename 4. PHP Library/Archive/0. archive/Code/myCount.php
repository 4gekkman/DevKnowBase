<!DOCTYPE html>
<html lang="ru">
 <head>
  <meta charset="utf-8" />
  <title>  </title>
  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  <style>
   article,aside,details,figcaption,figure,
   footer,header,hgroup,menu,nav,section { 
   display:block; 
   }

   
   
  </style>   
 </head>
 <body>

<?php

$menu = array("Home" => "home.php",
    "About" => "about.php",
    "Contacts" => "contacts.html");


/**
 * Counts number of array elements. If array is multidimensional,
 * and needs to count all elements, $mode must be true
 *
 * @author 4gekkman@gmail.com
 * @param array $arr any array
 * @param integer $mode any array
 * @return integer
 * num of cells if param is array,
 * 0 if param is null,
 * 1 if param is any another type
 */
function myCount($arr, $mode=0) {
    $checktype = gettype($arr);
    switch($checktype) {
        case "NULL" :  return 0;
        case "array" : break;
        default: return 1;
    }
    $counter = 0;
    foreach($arr as $v) {
        if($mode===1 && is_array($v)) {
            $counter += myCount($v,1);
        }
        $counter++;
    }
    return $counter;
}
$nul = null;
echo "В массиве ".myCount($menu)." элемент(а/ов)";
?> 

 </body>
</html>
