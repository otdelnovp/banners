$(function() {

	var predictions = [
		"Праздник",
		"Открытие",
		"Счастье",
		"Удача",
		"Достижение",
		"Гармония",
		"Рост",
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
	var random = 1;
	var total = predictions.length;

	////////////

	function toggleBanner() {
		clicked = false;

		if(small) {
			parent.postMessage('canvas:expand:240', '*');
			parent.postMessage('footerevent:expand', '*');
		} else {
			parent.postMessage('canvas:collapse:70', '*');
			parent.postMessage('footerevent:collapse', '*');
		}
		small = !small;

		$('#html_banner').toggleClass('small');

		$('#html_banner .banner').removeClass('clicked');
		$('#html_banner .banner_box_item').removeClass('active');

		random = Math.floor(Math.random() * (total + 1));
		if(random < 0) random = 0;
		if(random >= total) random = total - 1;

		$('#html_banner .banner_prediction .value').text(predictions[random]);
		$('#html_banner .banner_box_item_cap').css({'backgroundImage' : 'url(./img/pics/' + (random + 1) + '.png)'});

		$('.share').unbind().ShareLink({
			title: 'Я знаю, что ждёт меня в 2018 году. А ты?',
			text: ' ',
			image: ('https://megafon2018.mail.ru/shering/' + (random + 1) + '.png'),
			url: ('https://megafon2018.mail.ru/?share=' + (random + 1)),
			width: 600,
			height: 700
		}).click(function(){
			parent.postMessage('footerevent:share_' + $(this).attr("name"), '*');
		});
	}

	$('#html_banner .toggle, #html_banner .preview').click(function(){ toggleBanner(); });
	window.addEventListener('message', function(e) { if(e.data === 'footerlabel:click') toggleBanner(); });

	////////////

	$('#html_banner .banner_box_item').click(function(){
		if(!clicked) {
			$(this).addClass('active');
			$(this).parent().parent().addClass('clicked');
			parent.postMessage('footerevent:pechen_' + $(this).attr("count"), '*');
		}
		clicked = true;
	});

	////////////

	$('#html_banner .close').click(function(){
		if(small) {
			parent.postMessage('footerevent:close_preview', '*');
		} else {
			parent.postMessage('footerevent:close_full', '*');
		}
		parent.postMessage('canvas:closefooter', '*');
	});

	////////////

	$('#html_banner .preview').hover(function() {
		parent.postMessage('footerevent:hover_preview', '*');
	}, function() { return false; });

});
