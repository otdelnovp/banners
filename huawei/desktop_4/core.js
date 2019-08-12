// auto size
function remCalibrate() {
	var maxRem = 13,
		  minRem = 5;
	var w = window.innerWidth,
		  h = window.innerHeight;
	var sizeWidth = w / 135,
		sizeHeight = h / 66;
	var remSize = (sizeWidth < sizeHeight) ? sizeWidth : sizeHeight;
	remSize = (remSize > maxRem) ? maxRem :
		(remSize < minRem) ? minRem : remSize;
	document.documentElement.style.fontSize = remSize + 'px';
}
remCalibrate();
window.addEventListener('resize', remCalibrate, false);