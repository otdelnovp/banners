// video
var gebi = function(id) { return document.getElementById(id) };
window.onload = function() {
	var vid = gebi('vid');
	var vidPlay = gebi('vid_play');
	var vidMute = gebi('vid_mute');
	var onClickPlay = function(e) {
		e.preventDefault();
		if (vid.paused) {
			vid.play();
			vidPlay.classList.remove('video__play');
			vidPlay.classList.add('video__pause');
		} else {
			vid.pause();
			vidPlay.classList.add('video__play');
			vidPlay.classList.remove('video__pause');
		}
	};
	vidPlay.addEventListener('click', onClickPlay);
	vid.addEventListener('click', onClickPlay);
	vidMute.addEventListener('click', function(e) {
		e.preventDefault();
		if (vid.muted) {
			vid.muted = false;
			vidMute.classList.remove('video__mute');
			vidMute.classList.add('video__mute-off');
		} else {
			vid.muted = true;
			vidMute.classList.add('video__mute');
			vidMute.classList.remove('video__mute-off');
		}
	});

	vid.play();
	vidPlay.classList.remove('video__play');
	vidPlay.classList.add('video__pause');
};


// auto size
function remCalibrate() {
	var maxRem = 13,
		minRem = 3;
	var w = window.innerWidth,
		h = window.innerHeight;
	var sizeWidth = w / 150,
		sizeHeight = h / 108;
	var remSize = (sizeWidth < sizeHeight) ? sizeWidth : sizeHeight;
	remSize = (remSize > maxRem) ? maxRem :
		(remSize < minRem) ? minRem : remSize;
	document.documentElement.style.fontSize = remSize + 'px';
}
remCalibrate();
window.addEventListener('resize', remCalibrate, false);