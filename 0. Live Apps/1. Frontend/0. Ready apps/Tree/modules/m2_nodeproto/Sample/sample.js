
var node;



/* Тест: если не передать конфигурационный объект
================================*/

node = Object.create(treeNodeProto).constructor();
console.log(node);		// false




/* Тест: если передать конфиг.объект со всеми свойствами
================================*/

// Создать конфигурационный объект
var config = {

	id        : "nodeUID2",
	parent    : "nodeUID1",
	text     	: 'Привет, узел!',
	state     : {
		opened   : true,
		selected : true
	}

};


// Создать новый объект-узел из прототипа
var node = Object.create(treeNodeProto).constructor(config);

	// Просмотреть его содержимое
	console.log(node);

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
var ul = document.getElementById('ul');
ul.appendChild(node.getNodeHTML());




