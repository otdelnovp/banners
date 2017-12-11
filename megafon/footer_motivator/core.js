$(function() {

	var predictions = [
		"Праздник",
		"Открытие",
		"Счастье",
		"Удача",
		"Достижение",
		"Гармония",
		"Перемена",
		"Победа",
		"Успех",
		"ЗОЖ",
		"Развлечение",
		"Вдохновение",
		"Приключение",
		"Дружба",
		"Роман",
		"Единение",
		"Любовь",
		"Стабильность",
		"Радость",
		"Добро",
		"Футбол",
		"Рекорд",
		"Прогресс",
		"Позитив",
		"Здоровье",
		"Веселье",
		"Благополучие",
		"Вечеринка",
		"Путешествие",
		"Чудо",
		"Перспектива"
	]

	var clicked = false;
	var small = true;

	$('#html_banner .close').click(function(){
		// $('#html_banner').toggleClass('closed');
		parent.postMessage('canvas:closeclick', '*');
	});

	$('#html_banner .toggle, #html_banner .preview').click(function(){

		clicked = false;

		if(small) {
			parent.postMessage('canvas:expand:259', '*');
		} else {
			parent.postMessage('canvas:collapse:89', '*');
		}
		small = !small;

		$('#html_banner').toggleClass('small');

		$('#html_banner .banner').removeClass('clicked');
		$('#html_banner .banner_box_item').removeClass('active');

		var random = Math.floor(Math.random() * (predictions.length + 1));
		$('#html_banner .banner_prediction .value').text(predictions[random]);
		$('#html_banner .banner_box_item_cap').css({'backgroundImage' : 'url(./img/pics/' + (random + 1) + '.png)'});

	});

	$('#html_banner .banner_box_item').click(function(){
		if(!clicked) {
			$(this).addClass('active');
			$(this).parent().parent().addClass('clicked');
		}
		clicked = true;
	});

	$('.share').ShareLink({
		title: 'Я узнал(а), что ждёт меня в 2018 году / новом году. А ты?',
		text: ' ',
		image: 'https://megafon2018.mail.ru/img/share.jpg',
		url: 'https://megafon2018.mail.ru'
	});

});
