
	require.config({
		baseUrl: '.'
	});

	require(["module3/module3"], function(module3) {

			console.log(module3);
			console.log(module3.module2);
			console.log(module3.module2.module1);

	});
