

require.config({
	baseUrl: '../../modules'
});

require(["m3_treeproto/m3_treeproto_v1"], function(tree) {

	// Создать глобальную переменную tree и положить в неё ссылку
	// на прототип дерева
	window.tree = tree;

	// Создать и опубликовать в документе дерево №1

		// Создать новый объект-дерево
		var tree1 = tree.create({

			components: {
				selection: {
					enable: false
				}
			},

			data: [
				tree.node.create({id:"nodeUID1",parent:"#",text:"Узел 1",state:{opened:true}}),
				tree.node.create({id:"nodeUID2",parent:"#",text:"Узел 2",state:{opened:true}}),
				tree.node.create({id:"nodeUID3",parent:"nodeUID2",text:"Узел 3"}),
				tree.node.create({id:"nodeUID4",parent:"nodeUID2",text:"Узел 4"}),
				tree.node.create({id:"nodeUID5",parent:"nodeUID2",text:"Узел 5"}),
				tree.node.create({id:"nodeUID6",parent:"nodeUID2",text:"Узел 6",state:{opened:true}}),
				tree.node.create({id:"nodeUID7",parent:"nodeUID2",text:"Узел 7"}),
				tree.node.create({id:"nodeUID8",parent:"nodeUID6",text:"Узел 8"}),
				tree.node.create({id:"nodeUID9",parent:"nodeUID6",text:"Узел 9"}),
				tree.node.create({id:"nodeUID10",parent:"nodeUID6",text:"Узел 10"})
			]

		});

		// Вывести его в конец document
		document.body.appendChild(tree1.treemakedom());

		// Включить возможность выделения у дерева
		tree1.selection.on();

		// Настройка "Вкл/выкл выделение у дерева"

			// Включить:
			document.getElementById('on').onclick = function() {
				tree1.selection.on();

				var status = document.getElementById('status');
				status.innerHTML = 'Включено';
				status.style.backgroundColor = '#afdf9e'
			};

			// Выключить:
			document.getElementById('off').onclick = function() {
				tree1.selection.off();

				var status = document.getElementById('status');
				status.innerHTML = 'Выключено';
				status.style.backgroundColor = '#d98c8f'
			};

		// Настройка "Раскрыть/закрыть все узлы дерева"

			// Выделить все
			document.getElementById('selectAll').onclick = function() {
				tree1.selection.selectAll();
			};

			// Развыделить все
			document.getElementById('unselectAll').onclick = function() {
				tree1.selection.unselectAll();
			};

		// Настройка "Выделить/развыделить узел №6"

			// Выделить
			document.getElementById('select6').onclick = function() {
				tree1.selection.select('nodeUID6');
			};

			// Развыделить
			document.getElementById('unselect6').onclick = function() {
				tree1.selection.unselect('nodeUID6');
			};

		// Настройка "Получить в консоль все выделенные/не выделенные узлы дерева"

			// Получить выделенные
			document.getElementById('getselected').onclick = function() {
				console.log(tree1.selection.getSelected());
			};

			// Получеть не выделенные
			document.getElementById('getunselected').onclick = function() {
				console.log(tree1.selection.getUnselected());
			};


	// Создать и опубликовать в документе дерево №2
	// (чтобы убедитсья, что выделение может работать нормально с несколькими
	//	деревьями в одном документе)

		// Вывести пару <br> между деревьями
		document.body.appendChild(document.createElement("BR"));
		document.body.appendChild(document.createElement("BR"));

		// Создать новый объект-дерево
		var tree2 = tree.create({

			components: {
				selection: {
					enable: true
				}
			},

			data: [
				tree.node.create({id:"nodeUID1",parent:"#",text:"Узел 1",state:{opened:true}}),
				tree.node.create({id:"nodeUID2",parent:"#",text:"Узел 2",state:{opened:true}}),
				tree.node.create({id:"nodeUID3",parent:"nodeUID2",text:"Узел 3"}),
				tree.node.create({id:"nodeUID4",parent:"nodeUID2",text:"Узел 4"}),
				tree.node.create({id:"nodeUID5",parent:"nodeUID2",text:"Узел 5"}),
				tree.node.create({id:"nodeUID6",parent:"nodeUID2",text:"Узел 6",state:{opened:true}}),
				tree.node.create({id:"nodeUID7",parent:"nodeUID2",text:"Узел 7"}),
				tree.node.create({id:"nodeUID8",parent:"nodeUID6",text:"Узел 8"}),
				tree.node.create({id:"nodeUID9",parent:"nodeUID6",text:"Узел 9"}),
				tree.node.create({id:"nodeUID10",parent:"nodeUID6",text:"Узел 10"})
			]

		});

		// Вывести его в конец document
		document.body.appendChild(tree2.treemakedom());

		// Включить возможность выделения у дерева
		tree2.selection.on();





});



