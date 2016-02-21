/**
 * Задача
 * > Сделать слайдер, который показывает одновременно по 3 картинки.
 * > Картинки должны быть пронумерованы
 * > У слайдера должно быть 2 кнопки - вправо и влево.
 * > При нажатии на кнопку вправо - текущия картинка должны плавно отъехать
 * 	 влево за поле видимости, а следующие плавно въехать справа-налево.
 *
 *
 *
 * Архитектура решения
 *
 * 1. Картинки оформить в виде списка.
 * 2. Стрелки для кнопок оформить в виде острых скобок < >
 * 3. Плавные перемещения картинок оформить в с помощью CSS3-transition
 *    > Чтобы не париться с префиксами, применить prefix free.
 * 4. Текущую позицию галереи сохранять с помощью пользовательского
 * 		атрибута data-shift.
 * 5. Обязательно поставить left: 0 в стилях элемента ul (галереи).
 * 		Иначе в FF и IE не будет в 1-й раз срабатывать transition.
 *
 */



var e,
		arrowLeft,
		arrowRight;

e = document.getElementById('images');
arrowLeft = document.getElementsByClassName('arrow-left')[0];
arrowRight = document.getElementsByClassName('arrow-right')[0];

arrowRight.onclick = function() {
	// Вычислить кол-во картинок в галерее (ширина всех картинок 130px)
	var imagesNum = e.querySelectorAll('li').length;

	// Вычислить маx. смещение влево в зависимости от кол-ва картинок
	var maxShift = imagesNum * 130;

	// Узнать текущее смещение влево
	var curShift = e.getAttribute('data-shift');

	// Вычислить значение, которое требуется прибавить к curShift
	// > Оно не может быть больши maxShift и меньше 0.
	// > Max. смещение при 1 нажатии 390px.
	// > Смещение возможно с шагом в 130px.
	var toShift;
	if((maxShift - curShift)/130 >= 6) toShift = 390;
	else if((maxShift - curShift)/130 >= 5) toShift = 260;
	else if((maxShift - curShift)/130 >= 4) toShift = 130;
	else return;


	// Вычислить число, которое надо поместить в атрибут data-shift,
	// поместить его туда. Это будет новое текущее смещение галереи.
	var result;
	result = (parseInt(curShift) + parseInt(toShift));
	e.setAttribute('data-shift',result.toString());

	// Вычислить число, которое надо поместить в в CSS-свойство left
	// галереи. Оно должно быть:
	// - Отрицательным
	// - В виде строки
	// - С суффиксом 'px' на конце
	e.style.left = -result + 'px';

};


arrowLeft.onclick = function() {
	// Вычислить кол-во картинок в галерее (ширина всех картинок 130px)
	var imagesNum = e.querySelectorAll('li').length;

	// Вычислить маx. смещение влево в зависимости от кол-ва картинок
	var maxShift = imagesNum * 130;

	// Узнать текущее смещение влево
	var curShift = e.getAttribute('data-shift');

	// Вычислить значение, которое требуется отнять от curShift
	// > Оно не может быть больши maxShift и меньше 0.
	// > Max. смещение при 1 нажатии 390px.
	// > Смещение возможно с шагом в 130px.
	var toShift;
	if(curShift/130 >= 3) toShift = 390;
	else if(curShift/130 >= 2) toShift = 260;
	else if(curShift/130 >= 1) toShift = 130;
	else return;


	// Вычислить число, которое надо поместить в атрибут data-shift,
	// поместить его туда. Это будет новое текущее смещение галереи.
	var result;
	result = (parseInt(curShift) - parseInt(toShift));
	e.setAttribute('data-shift',result.toString());

	// Вычислить число, которое надо поместить в в CSS-свойство left
	// галереи. Оно должно быть:
	// - Отрицательным
	// - В виде строки
	// - С суффиксом 'px' на конце
	e.style.left = -result + 'px';

};


//Этот код помечает картинки цифрами, для удобства разработки
var lis = document.getElementsByTagName('li');
for(var i=0; i<lis.length; i++) {
  lis[i].style.position='relative';
  var span = document.createElement('span');
  span.style.cssText='position:absolute;left:0;top:0';
  span.innerHTML = i+1;
  lis[i].appendChild(span);
}