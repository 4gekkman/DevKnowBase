<?php
	// ������� save (��������� � ���� ����� �����)
	function save($author, $title, $pubyear, $price) {
		$sql = "INSERT INTO catalog(
						author,
						title,
						pubyear,
						price
					) VALUES(
						'$author',
						'$title',
						$pubyear,
						$price					
					)";
		mysql_query($sql) or die(mysql_error());
	}
	
	// ����� ����� �� ��������
	function selectAll() {
		$sql = "SELECT * FROM catalog";
		$result = mysql_query($sql) or die(mysql_error());
		return $result;
	}
	
	// ���������� ������� � �������
	function add2basket($customer, $goodsid, $quantity, $datetime) {
		$sql = "INSERT INTO _trash(
					customer,
					goodsid,
					quantity,
					datetime
				) VALUES(
					'$customer',
					$goodsid,
					$quantity,
					$datetime				
				)";
		$result = mysql_query($sql) or die(mysql_error());
	}
	
	// ����� ������� ������������
	function myBasket() {
		$sql = "SELECT * FROM catalog, _trash
			WHERE customer='".session_id()."' 
			and catalog.id=_trash.goodsid";
		$result = mysql_query($sql) or die(mysql_error());
		return $result;
	}
	
	// �������� ������ �� �������
	function basketDel($id){
		$sql = "DELETE FROM _trash WHERE id = $id";
		$result = mysql_query($sql) or die(mysql_error());
	}
	
	// �������������� ������� �� ������� � ������
	function resave($datetime) {
		$goods = myBasket();
		while ($good = mysql_fetch_assoc($goods)) {
			$sql = "INSERT INTO orders(
						author,
						title,
						pubyear,
						price,
						customer,
						quantity,
						datetime
					) VALUES(
						'" . $good["author"] . "',
						'" . $good["title"] . "',
						" . $good["pubyear"] . ",
						" . $good["price"] . ",
						'" . $good["customer"] . "',
						" . $good["quantity"] . ", $datetime)";
				mysql_query($sql) or die(mysql_error());
				
		}
		// �������� ������ �� ������� _trash
		$sql = "DELETE FROM _trash WHERE customer='" . session_id() . "'";
		mysql_query($sql) or die(mysql_error());
	}
	
	// ��������� ���������� � �������
	function getOrders() {
		// ��������� ���������� �� log-����� 
		$orders = file(ORDERS_LOG);
		
		$allorders = array();
		
		foreach ($orders as $order) {
			list($name, $email, $phone, $address, $customer, $date) = explode("|", $order);
			
			$orderinfo = array();
			
			$orderinfo["name"] = $name;	
			$orderinfo["email"] = $email;	
			$orderinfo["phone"] = $phone;	
			$orderinfo["address"] = $address;	
			$orderinfo["customer"] = $customer;	
			$orderinfo["date"] = $date;	
			// ������ �� �������:
			$sql = "SELECT * FROM orders 
				WHERE customer='".$orderinfo["customer"]."' AND datetime=".$orderinfo["date"];
			$result = mysql_query($sql) or die(mysql_error());
			$orderinfo["goods"] = $result;
			$allorders[] = $orderinfo;
		}
		return $allorders;
	}

?>