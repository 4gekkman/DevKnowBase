

require.config({
	baseUrl: '../../modules'
});

require(["m3_treeproto/m3_treeproto_v1"], function(tree) {

	// Вывести в консоль объект-прототип
	console.log(tree);

	// Тест №1:
	// - Создать объект-дерево. Вывести объект в консоль.
	// - Создать из этого объекта DOM-элемент DIV дерева.
	// 	 - ID каждого узла подписать префиксом в виде ID данного экземпляра дерева.
	//	 - Вывести ссылку на DIV в консоль.
	// - Вывести созданный DOM-элемент дерева DIV в документ.

		// Создать новый объект-дерево и вывести его в консоль
		var tree1 = tree.create({

			data: [
				tree.node.create({id:"nodeUID1",parent:"#",text:"Узел 1",state:{opened:"true"}}),
				tree.node.create({id:"nodeUID2",parent:"#",text:"Узел 2",state:{opened:"true"}}),
				tree.node.create({id:"nodeUID3",parent:"nodeUID1",text:"Узел 3"})
			]

		});
		console.log(tree1);

		// - Создать из этого объекта DOM-элемент DIV дерева.
		// 	 - ID каждого узла подписать префиксом в виде ID данного экземпляра дерева.
		//	 - Вывести ссылку на DIV в консоль.
		var div1 = tree1.treemakedom();
		console.log(div1);

		// Вывести созданный DOM-элемент дерева DIV в документ.
		document.body.appendChild(div1);


	// Тест №2:
	// - Создать объект-дерево. Вывести объект в консоль.
	// - Создать из этого объекта DOM-элемент DIV дерева.
	// 	 - ID каждого узла подписать префиксом "treeUID77"
	//	 - Вывести ссылку на DIV в консоль.

		// Создать новый объект-дерево и вывести его в консоль
		var tree2 = tree.create({

			data: [
				tree.node.create({id:"nodeUID1",parent:"#",text:"Узел 1",state:{opened:"true"}}),
				tree.node.create({id:"nodeUID2",parent:"#",text:"Узел 2"}),
				tree.node.create({id:"nodeUID3",parent:"nodeUID1",text:"Узел 3"})
			]

		});
		console.log(tree2);

		// - Создать из этого объекта DOM-элемент DIV дерева.
		// 	 - ID каждого узла подписать префиксом в виде ID данного экземпляра дерева.
		//	 - Вывести ссылку на DIV в консоль.
		var div2 = tree2.treemakedom('treeUID77');
		console.log(div2);


	// Тест №3:
	// - Создать объект-дерево. Вывести объект в консоль.
	// - Создать из этого объекта DOM-элемент UL поддерева.
	// 	 - ID каждого узла подписать префиксом "treeUID1"
	//	 - Вывести ссылку на DIV в консоль.
	// - Добавить созданное поддерево в конец узла nodeUID2

		// Создать новый объект-дерево и вывести его в консоль
		var tree3 = tree.create({

			data: [
				tree.node.create({id:"nodeUID4",parent:"#",text:"Узел 1",state:{opened:"true"}}),
				tree.node.create({id:"nodeUID5",parent:"#",text:"Узел 2"}),
				tree.node.create({id:"nodeUID6",parent:"nodeUID1",text:"Узел 3"})
			]

		});
		console.log(tree3);

		// - Создать из этого объекта DOM-элемент DIV дерева.
		// 	 - ID каждого узла подписать префиксом в виде ID данного экземпляра дерева.
		//	 - Вывести ссылку на DIV в консоль.
		var div3 = tree3.treemakedom('treeUID1', true);
		console.log(div3);

		// Добавить созданное поддерево в конец узла nodeUID2

		document.getElementById('treeUID1-nodeUID2').appendChild(div3);




});



