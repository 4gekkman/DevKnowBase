
define(['module1/module1'],function(module1){

	var module2 = {};
	module2.x = module1.x;
	module2.y = 20;
	module2.module1 = module1;

	return module2;

});