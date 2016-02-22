/**
 * Задача
 *
 * > Сделать сортировку таблицы при клике на заголовок
 *
 * > Код не должен меняться при увеличении кол-ва столбцов/строк.
 *
 * > Тип столбца задан пользовательским атрибутом data-type в эл-тах th.
 *
 *
 *
 *
 * Алгоритм решения
 *
 * 1. Назначить функцию-обработчик событий onclick для таблицы. Эта фу-ия
 * 		будет перехватывать все клики ЛК мыши по таблице и её дочерним эл-там.
 *
 * 2. Кроссбраузерно получить ссылки на объект-событие event, а также
 * 		на целевой объект target, в котором изначально произошло событие.
 *
 * 3. Если имя тега элемента target не равно TH, завершить работу функции-
 * 		перехватчика.
 *
 * 4. Записать в отдельную переменную номер найденного в п.3 TH в ряду TR.
 *
 * 5. Извлечь из TH атрибут data-type, который содержит информацию о типе
 * 		данных в столбце. Каждому типу - своя функция сортировки.
 *
 * 6. Скопировать все строки таблицы из tbody в JS-массив.
 *
 * 7. Применить к массиву из п.6, в соответствии с типом данных, найденным
 * 		в п.5, соответствующую функцию сортировки.
 *
 * 8. Записать строки из отсортированного в п.7 массива в таблицу, внутрь
 * 		нового элемента tbody, который должен идти после thead (здесь надо
 * 		будет еще получить ссылку на элемент thead).
 *
 *
 *
 */



var target,		// целевой элемент, в котором изначально произошло событие
		table,		// ссылка на таблицу
		th,				// ссылка на найденный th
		thNum,		// номер найденного th в ряду tr
		dataTypeInTH,		// значение польз. атрибута data-type найденного th
		arrayOfRows,		// строки таблицы из tbody
		tbody,					// ссылка на элемент tbody №0 таблицы
		funcForNumSort,	// Callback функция для сортировки чисел по возрастанию
		tbodyNew;				// новый элемент tbody, отсортированный, для вставки в таблицу

//1. Назначить функцию-обработчик событий onclick для таблицы. Эта фу-ия
//		будет перехватывать все клики ЛК мыши по таблице и её дочерним эл-там.
table = document.getElementById('grid');
table.addEventListener('click',function(event){



	//2. 	Кроссбраузерно получить ссылки на объект-событие event, а также
	//		на целевой объект target, в котором изначально произошло событие.

		// Кроссбраузерно получить событие
		event = event || window.event;

		// Кроссбраузерно получить target-элемент
		target = 	event && event.target ||
									event.srcElement;



	//3.	 Если имя тега элемента target не равно TH, завершить работу функции-
	//		перехватчика.
	if(target.tagName !== 'TH') return;



	//4. Записать в отдельную переменную номер найденного в п.3 TH в ряду TR.
	thNum = target.cellIndex;



	//5. Извлечь из TH атрибут data-type, который содержит информацию о типе
	//		данных в столбце. Каждому типу - своя функция сортировки.
	dataTypeInTH = target.getAttribute('data-type');



	//6. Скопировать все строки таблицы из tbody в JS-массив.


		// Скопировать все данные из таблицы в 2d массив
		arrayOfRows = [];
		tbody = table.tBodies[0];
		for(var i = 0; i<tbody.rows.length; i++) {

			// создать новый [] в ячейке i - это будет строка №i из таблицы
			arrayOfRows[i] = [];

			// записать в созданный выше массив значения под номерами j из ячейки
			// №i таблицы
			for(var j = 0; j<tbody.rows[i].cells.length; j++) {
				arrayOfRows[i][j] = tbody.rows[i].cells[j].innerHTML;
			}

		}



	//7. 	Применить к массиву из п.6, в соответствии с типом данных, найденным
	//		в п.5, соответствующую функцию сортировки.


		if(dataTypeInTH === 'number') {

			// Callback функция для сортировки 2d массива по числовому столбцу,
			// по возрастанию
			// > Сортировка производится по столбцу № thNum
			funcForNumSort = function(a,b) {

					// Обязательно привести их к числам, иначе он будет их сравнивать
					// как строки. Для этого перед ними стоят знаки +  :
					var aArr = +a[thNum],	// ячейка номер thNum в 1d подмассиве A сортируемого массива
							bArr = +b[thNum];	// ячейка номер thNum в 1d подмассиве B сортируемого массива

					if(aArr > bArr) return 1;
					if(aArr < bArr) return -1;
					return 0;
		};

		} else if(dataTypeInTH === 'string') {

				// Callback функция для сортировки 2d массива по строковому столбцу,
				// по возрастанию
				// > Сортировка производится по столбцу № thNum
				funcForNumSort = function(a,b) {

						// Здесь будут сравниваться строки:
						var aArr = a[thNum],	// ячейка номер thNum в 1d подмассиве A сортируемого массива
								bArr = b[thNum];	// ячейка номер thNum в 1d подмассиве B сортируемого массива

						if(aArr > bArr) return 1;
						if(aArr < bArr) return -1;
						return 0;
				};
		}

		// Применить сортировку к массиву arrayOfRows
		arrayOfRows.sort(funcForNumSort);




	//8. Записать строки из отсортированного в п.7 массива в таблицу, внутрь
	//		нового элемента tbody, который должен идти после thead (здесь надо
	//		будет еще получить ссылку на элемент thead).

		// Создать новый элемент tbody
		tbodyNew = document.createElement('tbody');

		// Воссоздать в этом tbody структуру строк tr и ячеек td,
		// и наполнить её данными из отсортированной таблицы arrayOfRows
		for(var i = 0; i<tbody.rows.length; i++) {

			// Создать новый элемент TR и вставить его как последний
			// дочерний эл-т в tbody
			var newTR = document.createElement('tr');
			tbodyNew.appendChild(newTR);


			for(var j = 0; j<tbody.rows[i].cells.length; j++) {

				// Создать новый элемент TD и вставить его как последний
				// дочерний эл-т TR, только что созданный выше:
				var newTD = document.createElement('td');
				newTR.appendChild(newTD);

				// Вставить в свежесозданный элемент TD соответствующее ему
				// значение из отсортированной таблицы arrayOfRows
				newTD.innerHTML = arrayOfRows[i][j];

			}
		}


		// Заменить старый элемент tbody на новый tbodyNew
		table.replaceChild(tbodyNew,tbody);


});











