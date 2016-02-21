

// Ждём, пока всё загрузится, и выполняем функцию myfunc
	ymaps.ready(myfunc);

// Определяем функцию myfunc
function myfunc() {

	// Получим объект geolocation
	var geo = ymaps.geolocation;

	// Получим координаты
	var coords = {
		latitude: geo.latitude,
		longitude: geo.longitude
	};

	// Получим страну, субъект, город
	var country = geo.country;
	var region = geo.region;
	var city = geo.city;


	console.log('coords = '+coords);
	console.log('country = '+country);
	console.log('region = '+region);
	console.log('city = '+city);


	// Тест геокодера
	var myGeocoder = ymaps.geocode("Биробиджан", {json: true});
	myGeocoder.then(
		function (res) {
				console.log(res);
		},
		function (err) {
				// обработка ошибки
		}
	);


}



