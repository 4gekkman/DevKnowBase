
define(['module2/module2'],function(module2){

	var module3 = {};
	module3.x = module2.x;
	module3.y = module2.y;
	module3.z = 30;
	module3.module2 = module2;

	return module3;

});