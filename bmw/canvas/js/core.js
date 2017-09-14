$(document).ready(function() {

	// slider
	$('.slider').owlCarousel({
		loop: false,
		rewind: true,
		margin: 0,
		nav: true,
		navText: [ '', '' ],
		dots: false,
		animateOut: 'fadeOut',
		items: 1
	});

	// space
	// document.onkeydown = function checkKeycode(e) {
	// 	if (e.which == 32) {
	// 		$('.owl-item.active .item').addClass('revert');
	// 	}
	// };
	document.onkeyup = function checkKeycode(e) {
		if (e.which == 32) {
			$('.owl-item.active .item').toggleClass('revert');
		}
	};

});

// auto size
function remCalibrate() {
	var maxRem = 13,
		minRem = 5;
	var w = window.innerWidth,
		h = window.innerHeight;
	var sizeWidth = w / 96,
		sizeHeight = h / 68;
	var remSize = (sizeWidth < sizeHeight) ? sizeWidth : sizeHeight;
	remSize = (remSize > maxRem) ? maxRem :
		(remSize < minRem) ? minRem : remSize;
	document.documentElement.style.fontSize = remSize + 'px';
}
remCalibrate();
window.addEventListener('resize', remCalibrate, false);
