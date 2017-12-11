$(function() {

	var predictions = [
		{
			pic: 1,
			title: "Праздник",
			message: "Лети в Новый год на скорости 4G+<br> Подключи скоростной мобильный интернет",
			link: "http://r.mail.ru/n266188118"
		},
		{
			pic: 2,
			title: "Открытие",
			message: "Теперь в роуминге можно расслабиться<br> Безлимитные мессенджеры на тарифах Включайся!",
			link: "http://r.mail.ru/n266188122"
		},
		{
			pic: 3,
			title: "Счастье",
			message: "Безлимит на соцсети и мессенджеры<br>Включайся! Общайся",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 4,
			title: "Удача",
			message: "Лети в Новый год на скорости 4G+<br> Подключи скоростной мобильный интернет",
			link: "http://r.mail.ru/n266188118"
		},
		{
			pic: 5,
			title: "Достижение",
			message: "Безлимит на соцсети и мессенджеры<br>Включайся! Общайся",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 6,
			title: "Гармония",
			message: "Не ограничивай себя ни в чём с тарифом &laquo;Включайся! Премиум&raquo;",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 7,
			title: "Перемена",
			message: "Лети в Новый год на скорости 4G+<br> Подключи скоростной мобильный интернет",
			link: "http://r.mail.ru/n266188118"
		},
		{
			pic: 8,
			title: "Победа",
			message: "Оплачивай всё по номеру телефона<br> Сервис money.megafon.ru",
			link: "http://r.mail.ru/n266188120"
		},
		{
			pic: 9,
			title: "Успех",
			message: "Безлимит на видео с тарифом &laquo;Вкючайся! Смотри&raquo;",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 10,
			title: "ЗОЖ",
			message: "Не ищи симптомы в интернете<br> Спроси у врача в приложении Мегафон.Здоровье",
			link: "http://r.mail.ru/n266188121"
		},
		{
			pic: 11,
			title: "Развлечение",
			message: "Оплачивай всё по номеру телефона<br> Сервис money.megafon.ru",
			link: "http://r.mail.ru/n266188120"
		},
		{
			pic: 12,
			title: "Вдохновение",
			message: "Безлимит на видео с тарифом &laquo;Вкючайся! Смотри&raquo;",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 13,
			title: "Приключение",
			message: "Теперь в роуминге можно расслабиться<br> Безлимитные мессенджеры на тарифах Включайся!",
			link: "http://r.mail.ru/n266188122"
		},
		{
			pic: 14,
			title: "Дружба",
			message: "Безлимит на соцсети и мессенджеры<br>Включайся! Общайся",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 15,
			title: "Роман",
			message: "Используй возможности всех мессенджеров с тарифом &laquo;Включайся! Пиши&raquo;",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 16,
			title: "Единение",
			message: "Безлимит на соцсети и мессенджеры<br>Включайся! Общайся",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 17,
			title: "Любовь",
			message: "Безлимит на соцсети и мессенджеры<br>Включайся! Общайся",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 18,
			title: "Стабильность",
			message: "Не ограничивай себя ни в чём с тарифом &laquo;Включайся! Премиум&raquo;",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 19,
			title: "Радость",
			message: "Безлимит на соцсети и мессенджеры<br>Включайся! Общайся",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 20,
			title: "Добро",
			message: "Оплачивай всё по номеру телефона<br> Сервис money.megafon.ru",
			link: "http://r.mail.ru/n266188120"
		},
		{
			pic: 21,
			title: "Футбол",
			message: "Безлимит на видео с тарифом &laquo;Вкючайся! Смотри&raquo;",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 22,
			title: "Рекорд",
			message: "Лети в Новый год на скорости 4G+<br> Подключи скоростной мобильный интернет",
			link: "http://r.mail.ru/n266188118"
		},
		{
			pic: 23,
			title: "Прогресс",
			message: "Лети в Новый год на скорости 4G+<br> Подключи скоростной мобильный интернет",
			link: "http://r.mail.ru/n266188118"
		},
		{
			pic: 24,
			title: "Позитив",
			message: "Мегафон.Музыка нон-стоп<br> без рекламы и платы за трафик",
			link: "http://r.mail.ru/n266188119"
		},
		{
			pic: 25,
			title: "Здоровье",
			message: "Не ищи симптомы в интернете<br> Спроси у врача в приложении Мегафон.Здоровье",
			link: "http://r.mail.ru/n266188121"
		},
		{
			pic: 26,
			title: "Веселье",
			message: "Мегафон.Музыка нон-стоп<br> без рекламы и платы за трафик",
			link: "http://r.mail.ru/n266188119"
		},
		{
			pic: 27,
			title: "Благополучие",
			message: "Не ограничивай себя ни в чём с тарифом &laquo;Включайся! Премиум&raquo;",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 28,
			title: "Вечеринка",
			message: "Мегафон.Музыка нон-стоп<br> без рекламы и платы за трафик",
			link: "http://r.mail.ru/n266188119"
		},
		{
			pic: 29,
			title: "Путешествие",
			message: "Теперь в роуминге можно расслабиться<br> Безлимитные мессенджеры на тарифах Включайся!",
			link: "http://r.mail.ru/n266188122"
		},
		{
			pic: 30,
			title: "Чудо",
			message: "Используй возможности всех мессенджеров с тарифом &laquo;Включайся! Пиши&raquo;",
			link: "http://r.mail.ru/n266188117"
		},
		{
			pic: 31,
			title: "Перспектива",
			message: "Не ограничивай себя ни в чём с тарифом &laquo;Включайся! Премиум&raquo;",
			link: "http://r.mail.ru/n266188117"
		}
	];

	var clicked = false;

	var random = Math.floor(Math.random() * (predictions.length + 1));
	$('#html_banner .banner_prediction .value').text(predictions[random].title);
	$('#html_banner .banner_box_item_cap').css({'backgroundImage' : 'url(./img/pics/' + predictions[random].pic + '.png)'});
	$('#html_banner .footer_title').html(predictions[random].message);
	$('#html_banner .footer_btn').attr("href", predictions[random].link);

	$('#html_banner .clear').click(function(){
		$('#html_banner').removeClass('clicked');
		$('#html_banner .banner').removeClass('clicked');
		$('#html_banner .banner_box_item').removeClass('active');
	});

	$('#html_banner .banner_box_item').click(function(){
		if(!clicked) {
			$(this).addClass('active');
			$(this).parent().parent().addClass('clicked');
			$(this).parent().parent().parent().addClass('clicked');
			clicked = true;
		}
	});

	$('.share').ShareLink({
		title: 'Я узнал(а), что ждёт меня в 2018 году / новом году. А ты?',
		text: ' ',
		image: '//megafon2018.mail.ru/img/share.jpg',
		url: '//megafon2018.mail.ru'
	});

});
