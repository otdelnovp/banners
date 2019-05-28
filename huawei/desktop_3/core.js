// auto size
function remCalibrate() {
	var maxRem = 13,
		minRem = 5;
	var w = window.innerWidth,
		h = window.innerHeight;
	var sizeWidth = w / 115,
		sizeHeight = h / 64;
	var remSize = (sizeWidth < sizeHeight) ? sizeWidth : sizeHeight;
	remSize = (remSize > maxRem) ? maxRem :
		(remSize < minRem) ? minRem : remSize;
	document.documentElement.style.fontSize = remSize + 'px';
}
remCalibrate();
window.addEventListener('resize', remCalibrate, false);

document.getElementById('player').play();
document.getElementById('player').addEventListener('ended', function() {
	document.getElementById('banner').classList.add('final');
}, false);

// setTimeout(function() {
// 	document.getElementById('banner').classList.add('final');
// }, 1000);