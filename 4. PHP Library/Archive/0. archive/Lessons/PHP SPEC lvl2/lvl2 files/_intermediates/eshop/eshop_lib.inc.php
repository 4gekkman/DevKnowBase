<?php
	/*
	������� 1
	- ������� ������� save(), ����������� ����� ����� � ������� catalog
	- ������� ������ ��������� ��������� ��������:
			author
			title
			pubyear
			price

	*/
	
	/*
	������� 2
	- ������� ������� selectAll(), ������������ ��� ���������� �������� �������
	*/
	
	/*
	������� 3
	- ������� ������� add2basket(), ������� ����� ��������� ������ � ������� ������������
	- ������� ������ ��������� ��������� ��������:
			customer
			goodsid
			quantity
			datetime
	*/
	
	/*
	������� 4
	- ������� ������� myBasket(), ������� ����� ���������� ��� ���������������� �������
	*/
	
	/*
	������� 5
	- ������� ������� basketDel(), ������� ����� ������� ����� �� ������� ������������
	- ������� ������ ��������� ��������� ��������:
			id
	*/
	
	/*
	������� 6
	- ������� ������� resave() ��� �������������� ������� �� ������� (������� _trash) � ������ (������� orders)
	- ������� ������ ��������� ��������� ��������:
			datetime � ���� ������ 
	- ��� ��������� ����������� ������� � ���� ������� �������������� �������� myBasket()
	- ������� � ������� resave() SQL-��������, ������� ����� ��������� ������ �� ������� � ������� orders � ��������� ���
	- ������� SQL-�������� ��� �������� ������ � ������� �������� ���������� �� ������� _trash
	*/
	
	/*
	������� 7
	- ������� ������� getOrders() ��� ��������� ���������� � �������
	- �������� � ���� ������� $orders ������ � ������������� �� ����� "orders.log"
	- �������� ������ $allorders ��� �������� ���������� ��� ���� �������
	- � ����� foreach ���������� ��� ������
	- ������ ����� foreach �������� ������������� ������ $orderinfo ��� �������� ���������� � ������ ���������� ������
	- ��������� ���������� � ������������ �� ������� $orders(name, email, phone, address, customer, date) � ������� $orderinfo
	- ������� SQL-�������� ��� ������� �� ������� ������� ���� ������� ��� ����������� ����������
	- �������� ���� ��������� ���� �������
	- ��������� ���������� � ���������� ������ ��������� ��� ��������
		����� "goods" � ������� $orderinfo
	- �������� �������������� ������ $orderinfo � ���� �������� ���������� ����� ������� $allorders
	- ������� getOrders() ������ ���������� ������ $allorders � ����������� � ���� �����������
		� ��������� ��� �������
	*/

?>