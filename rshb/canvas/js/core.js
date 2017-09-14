$(document).ready(function() {

	$('.skip').click(function() {
		$('.main').addClass('go');
		document.getElementById('video').pause();
		ga('b.send', 'event', 'Пропустить видео')
	});

});

// auto size
function remCalibrate() {
	var maxRem = 13,
		minRem = 5;
	var w = window.innerWidth,
		h = window.innerHeight;
	var sizeWidth = w / 96,
		sizeHeight = h / 77;
	var remSize = (sizeWidth < sizeHeight) ? sizeWidth : sizeHeight;
	remSize = (remSize > maxRem) ? maxRem :
		(remSize < minRem) ? minRem : remSize;
	document.documentElement.style.fontSize = remSize + 'px';
}
remCalibrate();
window.addEventListener('resize', remCalibrate, false);



// video

document.addEventListener('DOMContentLoaded', init, false);
var videoId = document.getElementById('video');
var videoTitle = 'video';

function init () {
	videoId.addEventListener('play', videoPlay, false);
	videoId.addEventListener('pause', videoPause, false);
	videoId.addEventListener('ended', videoEnd, false);
	videoId.addEventListener('timeupdate', videoTimeUpdate, false);
}

function setKeyFrames (duration) {
	var quarter = (duration / 4).toFixed(1);
	sessionStorage.setItem('one', quarter);
	sessionStorage.setItem('two', (quarter * 2).toFixed(1));
	sessionStorage.setItem('three', (quarter * 3).toFixed(1));
}

function videoTimeUpdate () {
	var curTime = videoId.currentTime.toFixed(1);
	switch (curTime) {
		case sessionStorage.getItem('one'):
			ga('b.send', 'event', 'video', '25% video played', videoTitle);
			sessionStorage.setItem('one', null);
		case sessionStorage.getItem('two'):
			ga('b.send', 'event', 'video', '50% video played', videoTitle);
			sessionStorage.setItem('two', null);
		case sessionStorage.getItem('three'):
			ga('b.send', 'event', 'video', '75% video played', videoTitle);
			sessionStorage.setItem('three', null);
	}
}

function videoPlay () {
	ga('b.send', 'event', 'video', 'video played', videoTitle);
	setKeyFrames(this.duration);
}

function videoPause () {
	ga('b.send', 'event', 'video', 'video paused', videoTitle);
}

function videoEnd () {
	ga('b,send', 'event', 'video', '100% video played', videoTitle);
}
