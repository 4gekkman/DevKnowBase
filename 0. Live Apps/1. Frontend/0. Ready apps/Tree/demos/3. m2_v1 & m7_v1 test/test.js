

require.config({
	baseUrl: '../../modules'
});

require(["m2_nodeproto/m2_nodeproto_v1"], function(node) {

	// Вывести в консоль объект-прототип
	console.log(node);

	// Создать новый узел-объект и вывести его в консоль
	var node1 = node.create({
		id        : "nodeUID1",
		parent    : "nodeUID2",
		text			: "That's my nigga!"
	});
	console.log(node1);

	// Получить и вывести в консоль DOM-элемент LI созданного узла функцией nodemakedom
	var li = node1.nodemakedom();
	console.log(li);

});



