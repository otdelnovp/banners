$(function() {

	var predictions = [
		"Путешествие",
		"Перспективы",
		"Счастье",
		"Добро",
		"Футбол",
		"Рекорд",
		"Прогресс",
		"Позитив",
		"Здоровье",
		"Веселье",
		"Благополучие",
		"Дружба",
		"Приключение",
		"Вдохновение",
		"ЗОЖ",
		"Открытия",
		"Развлечения",
		"Достижения",
		"Успех",
		"Гармония",
		"Победа",
		"Перемены",
		"Чудо",
		"Удача",
		"Радость",
		"Вечеринка",
		"Любовь",
		"Роман",
		"Единение",
		"Стабильность"
	]

	var clicked = false;

	$('#html_banner .close').click(function(){
		$('#html_banner').toggleClass('closed').postMessage('canvas:closeclick', '*');
	});

	$('#html_banner .toggle').click(function(){
		clicked = false;
		$('#html_banner').toggleClass('small');
		$('#html_banner .banner').removeClass('clicked');
		$('#html_banner .banner_box_item').removeClass('active');
		$('#html_banner .banner_prediction .value').text(predictions[Math.floor(Math.random() * (predictions.length + 1))]);
	});

	$('#html_banner .banner_box_item').click(function(){
		if(!clicked) {
			$(this).addClass('active');
			$(this).parent().parent().addClass('clicked');
		}
		clicked = true;
	});

	$('.share').ShareLink({
		title: 'Мегафон',
		text: 'Получи предсказание от Мегафон',
		image: 'http://via.placeholder.com/350x150',
		url: 'https://mail.ru'
	});

});
