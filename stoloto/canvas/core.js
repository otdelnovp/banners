// auto size
function remCalibrate() {
	var maxRem = 13, minRem = 5
	var w = window.innerWidth,
		h = window.innerHeight
	var sizeWidth = w/108,
		sizeHeight = h/80
	var remSize = (sizeWidth < sizeHeight) ? sizeWidth : sizeHeight
	remSize = (remSize > maxRem) ? maxRem :
		(remSize < minRem) ? minRem : remSize
	document.documentElement.style.fontSize = remSize + 'px'
}
remCalibrate()
window.addEventListener('resize', remCalibrate, false)


// pulse
var map = document.querySelector('.map');
var city = document.querySelectorAll('.city');
console.log(city);
for (var i = 0; i < city.length; ++i) {
	city[i].onmouseover = function(event) {
	  map.className = 'map'
	};
	city[i].onmouseout = function(event) {
	  map.className = 'map animate'
	};
}
