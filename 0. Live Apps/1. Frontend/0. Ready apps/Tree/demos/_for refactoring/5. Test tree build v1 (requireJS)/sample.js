
var tree;
var node;





/* Создать тестовый массив объектов-узлов
================================*/


	// Создать массив
	var nodes = [];
	var nodes2 = [];

	// Добавить в массив несколько узлов

		// Поддерево 1:
		// 									nodeUID1
		// 								/ 		 		\
		// 			nodeUID2  						nodeUID3
		// 			/				\							/				\
		// nodeUID4		nodeUID5		nodeUID6		nodeUID7
		//

			// Добавить узел nodeUID1
				nodes.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID1",parent:"#",text: 'Узел 1'
				}));

			// Добавить узел nodeUID2
				nodes.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID2",parent:"nodeUID1",text: 'Узел 2'
				}));

			// Добавить узел nodeUID3
				nodes.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID3",parent:"nodeUID1",text: 'Узел 3'
				}));

			// Добавить узел nodeUID4
				nodes.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID4",parent:"nodeUID2",text: 'Узел 4'
				}));

			// Добавить узел nodeUID5
				nodes.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID5",parent:"nodeUID2",text: 'Узел 5'
				}));

			// Добавить узел nodeUID6
				nodes.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID6",parent:"nodeUID3",text: 'Узел 6'
				}));

			// Добавить узел nodeUID7
				nodes.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID7",parent:"nodeUID3",text: 'Узел 7'
				}));

		// Поддерево 2:
		// 									nodeUID10
		// 								/ 		 		\
		// 			nodeUID20  						nodeUID30
		// 			/				\							/				\
		// nodeUID40	nodeUID50		nodeUID60		nodeUID70
		//

			// Добавить узел nodeUID10
				nodes2.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID10",parent:"#",text: 'Узел 10'
				}));

			// Добавить узел nodeUID20
				nodes2.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID20",parent:"nodeUID10",text: 'Узел 20'
				}));

			// Добавить узел nodeUID30
				nodes2.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID30",parent:"nodeUID10",text: 'Узел 30'
				}));

			// Добавить узел nodeUID40
				nodes2.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID40",parent:"nodeUID20",text: 'Узел 40'
				}));

			// Добавить узел nodeUID50
				nodes2.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID50",parent:"nodeUID20",text: 'Узел 50'
				}));

			// Добавить узел nodeUID60
				nodes2.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID60",parent:"nodeUID30",text: 'Узел 60'
				}));

			// Добавить узел nodeUID70
				nodes2.push(Object.create(treeNodeProto).constructor({
					id:"nodeUID70",parent:"nodeUID30",text: 'Узел 70'
				}));



/* Создать конфигурационный объект для создания дерева
================================*/
var config = {

	id : 'treeUID1',
	description : '<b>Моё заботливо выращенное дерево</b>',
	rootNodeIDs : ['#'],
	components : {
		selection : {
			enable : true
		},
		closeopen: {
			enable : true,
			animation : 500
		},
		unselect : {
			enable : true
		}
	},
	data : nodes,
	theme : {
		dots : false,
		strips : true
	}

};






/* Тест: если не передать конфигурационный объект
================================*/

var tree1 = Object.create(treeProto).constructor();
console.log(tree1);



/* Тест: если передать конфигурационный объект
================================*/

var tree2 = Object.create(treeProto).constructor(config);
console.log(tree2);




/* Тест: получение HTML-структуры дерева
================================*/

var div = tree2.getTreeHTML();
console.log(div);
document.getElementById('forTree').appendChild(div);


		/* Результирующая разметка дерева

		<div id="treeUID2" data-tree="{&quot;animation&quot;:500}" class="tree-nodes-selectable tree-nodes-close_open tree-dblclick-unselectable">
			<ul class="tree-container-root-ul">
				<li id="treeUID2-nodeUID1" class="tree-node tree-last tree-node-opened">
					<i class="tree-icon  tree-icon-opened"></i>
					<a class="tree-anchor">
						<i class="tree-icon tree-icon-theme"></i>
					Узел 1</a>
					<ul class="tree-container-subtree-ul" style="height: auto;">
						<li id="treeUID2-nodeUID2" class="tree-node  tree-node-opened">
							<i class="tree-icon  tree-icon-opened"></i>
							<a class="tree-anchor">
								<i class="tree-icon tree-icon-theme"></i>
							Узел 2</a>
							<ul class="tree-container-subtree-ul" style="height: auto;">
								<li id="treeUID2-nodeUID4" class="tree-node tree-node-closed">
									<i class="tree-icon tree-icon-closed tree-icon-without-children"></i>
									<a class="tree-anchor">
										<i class="tree-icon tree-icon-theme"></i>
									Узел 4</a>
									<ul class="tree-container-subtree-ul"></ul>
								</li>
								<li id="treeUID2-nodeUID5" class="tree-node tree-node-closed tree-last">
									<i class="tree-icon tree-icon-closed tree-icon-without-children"></i>
									<a class="tree-anchor">
										<i class="tree-icon tree-icon-theme"></i>
									Узел 5</a>
									<ul class="tree-container-subtree-ul"></ul>
								</li>
							</ul>
						</li>
						<li id="treeUID2-nodeUID3" class="tree-node tree-last tree-node-opened">
							<i class="tree-icon  tree-icon-opened"></i>
							<a class="tree-anchor">
								<i class="tree-icon tree-icon-theme"></i>
							Узел 3</a>
							<ul class="tree-container-subtree-ul" style="height: auto;">
								<li id="treeUID2-nodeUID6" class="tree-node tree-node-closed">
									<i class="tree-icon tree-icon-closed tree-icon-without-children"></i>
									<a class="tree-anchor">
										<i class="tree-icon tree-icon-theme"></i>
									Узел 6</a>
									<ul class="tree-container-subtree-ul"></ul>
								</li>
								<li id="treeUID2-nodeUID7" class="tree-node tree-node-closed tree-last">
									<i class="tree-icon tree-icon-closed tree-icon-without-children"></i>
									<a class="tree-anchor">
										<i class="tree-icon tree-icon-theme"></i>
									Узел 7</a>
									<ul class="tree-container-subtree-ul"></ul>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>

		*/




/* Тест: получение HTML-структуры поддерева
================================*/


// Создать новое дерево

var tree3 = Object.create(treeProto).constructor({
	data: nodes2
});

// Получить HTML-структуру дерева в формате поддерева
// - При этом подписать узлы префиксом "treeUID2"
var ul = tree2.getTreeHTML('treeUID2', true);

// Посмотреть результат
console.log(ul);

// Получить ссылку на DOM-элемент узла 7 построенного ранее дерева
var node7 = document.getElementById('treeUID2-nodeUID7');

// Добавить в конец node7 полученное выше поддерево
// (пока просто тест HTML-результата для UL, а вообще добавление
// узлов - это отдельная функция).
node7.appendChild(ul);


		/* Результирующая разметка поддерева

			<ul class="tree-container-subtree-ul" style="height: auto;">
				<li id="treeUID2-nodeUID1" class="tree-node tree-last  tree-node-closed">
					<i class="tree-icon  tree-icon-closed"></i>
					<a class="tree-anchor">
						<i class="tree-icon tree-icon-theme"></i>
					Узел 1</a>
					<ul class="tree-container-subtree-ul" style="height: auto;">
						<li id="treeUID2-nodeUID2" class="tree-node  tree-node-opened">
							<i class="tree-icon  tree-icon-opened"></i>
							<a class="tree-anchor">
								<i class="tree-icon tree-icon-theme"></i>
							Узел 2</a>
							<ul class="tree-container-subtree-ul" style="height: auto;">
								<li id="treeUID2-nodeUID4" class="tree-node tree-node-closed">
									<i class="tree-icon tree-icon-closed tree-icon-without-children"></i>
									<a class="tree-anchor">
										<i class="tree-icon tree-icon-theme"></i>
									Узел 4</a>
								</li>
								<li id="treeUID2-nodeUID5" class="tree-node tree-node-closed tree-last">
									<i class="tree-icon tree-icon-closed tree-icon-without-children"></i>
									<a class="tree-anchor">
										<i class="tree-icon tree-icon-theme"></i>
									Узел 5</a>
								</li>
							</ul>
						</li>
						<li id="treeUID2-nodeUID3" class="tree-node tree-last tree-node-opened">
							<i class="tree-icon  tree-icon-opened"></i>
							<a class="tree-anchor">
								<i class="tree-icon tree-icon-theme"></i>
							Узел 3</a>
							<ul class="tree-container-subtree-ul" style="height: auto;">
								<li id="treeUID2-nodeUID6" class="tree-node tree-node-closed">
									<i class="tree-icon tree-icon-closed tree-icon-without-children"></i>
									<a class="tree-anchor">
										<i class="tree-icon tree-icon-theme"></i>
									Узел 6</a>
								</li>
								<li id="treeUID2-nodeUID7" class="tree-node tree-node-closed tree-last">
									<i class="tree-icon tree-icon-closed tree-icon-without-children"></i>
									<a class="tree-anchor">
										<i class="tree-icon tree-icon-theme"></i>
									Узел 7</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>

		*/








/* Тест: если не передать конфигурационный объект
================================*/

//tree = Object.create(treeProto).constructor();
//console.log(node);		// false




/* Тест: если передать конфиг.объект со всеми свойствами
================================*/

//// Создать конфигурационный объект
//var config = {
//
//	id        : "nodeUID2",
//	parent    : "nodeUID1",
//	text     	: 'Привет, узел!',
//	state     : {
//		opened   : true,
//		selected : true
//	}
//
//};


// Создать новый объект-узел из прототипа
//var node = Object.create(treeNodeProto).constructor(config);
//
//	// Просмотреть его содержимое
//	console.log(node);

				/* Результат достигнут

					<li id="nodeUID2" class="tree-node tree-node-opened">
					<i class="tree-icon tree-icon-opened"></i>
					<a class="tree-anchor tree-selected">
						<i class="tree-icon tree-icon-theme"></i>
						Привет, узел!
					</a>
					</li>

				 */


// Добавить в элемент UL созданный узел
//var ul = document.getElementById('ul');
//ul.appendChild(node.getNodeHTML());




