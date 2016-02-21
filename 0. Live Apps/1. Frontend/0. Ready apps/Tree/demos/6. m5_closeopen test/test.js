

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
				closeopen: {
					enable: true,
					animation: 1000
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



		// Включить функционал модуля m5_closeopen у дерева
		tree1.closeopen.on();

		tree1.closeopen.close('nodeUID2');
		tree1.closeopen.open('nodeUID2');


		// Вывести в конец пару пробелов (чтобы отделить 2 дерева друг от друга)
		document.body.appendChild(document.createElement('BR'));
		document.body.appendChild(document.createElement('BR'));


		// Вывести текущую скорость анимации
		document.getElementById('speedStatus').innerHTML = tree1.components.closeopen.animation.toString();

		// Добавить кнопке speedButton функцию-обработчик, которая устанавливает
		// новую скорость анимации
		document.getElementById('speedButton').onclick = function() {

			tree1.closeopen.setAnimationspeed(
					document.getElementById('speedText').value
			);
			document.getElementById('speedStatus').innerHTML = tree1.components.closeopen.animation.toString();

		};

		// Добавить кнопке on обработчик, включающий фукнционал m5_closeopen
		// у дерева tree1:
		document.getElementById('on').onclick = function() {
			tree1.closeopen.on();
			document.getElementById('status').innerHTML = 'Включен';
		};

		// Добавить кнопке off, выключающий фукнционал m5_closeopen
		// у дерева tree1:
		document.getElementById('off').onclick = function() {
			tree1.closeopen.off();
			document.getElementById('status').innerHTML = 'Выключен';
		};


/*


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
				tree.node.create({id:"nodeUID3",parent:"nodeUID1",text:"Узел 3"})
			]

		});

		// Вывести его в конец document
		document.body.appendChild(tree1.treemakedom());

		// Включить возможность выделения у дерева
		tree1.selection.on();


		// Подключить кнопку "выключить"
		document.getElementById('on').onclick = function() {
			tree1.selection.on();

			var status = document.getElementById('status');
			status.innerHTML = 'Включено';
			status.style.backgroundColor = '#afdf9e'
		};

		// Подключить кнопку "включить"
		document.getElementById('off').onclick = function() {
			tree1.selection.off();

			var status = document.getElementById('status');
			status.innerHTML = 'Выключено';
			status.style.backgroundColor = '#d98c8f';
		};




	// Создать и опубликовать в документе дерево №2

		// Создать новый объект-дерево
		var tree2 = tree.create({

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

		// Вывести в конец пару пробелов (чтобы отделить 2 дерева друг от друга)
		document.body.appendChild(document.createElement('BR'));
		document.body.appendChild(document.createElement('BR'));

		// Вывести его в конец document
		document.body.appendChild(tree2.treemakedom());

		// Включить возможность выделения у дерева
		tree2.selection.on();



	// Тест функции getSelected - она получает все выделенные узлы дерева
	// в виде массива

		// Создать новый параграф и написать в нём описание функции getSelected
		var p = document.createElement('P');
		p.innerHTML = 'Выдели в ближайшем дереве сверху несколько элементов и нажми на кнопку' +
				' ниже. Массив с результатом ищи в консоли.';
		document.body.appendChild(p);

		// Создать новую кнопку, на которую надо нажать. При нажатии должна
		// выполнятсья функция getSelected, а результат должен попадать в консоль.
		var b = document.createElement('BUTTON');
		b.innerHTML = 'Получить массив выделенных элементов дерева';
		b.onclick = function() {
			console.log(tree2.selection.getSelected());
		};
		document.body.appendChild(b);

		// Создать новую кнопку, на которую надо нажать. При нажатии должна
		// выполнятсья функция getUnselected, а результат должен попадать в консоль.
		b = document.createElement('BUTTON');
		b.innerHTML = 'Получить массив НЕ выделенных элементов дерева';
		b.onclick = function() {
			console.log(tree2.selection.getUnselected());
		};
		document.body.appendChild(b);

*/

});




