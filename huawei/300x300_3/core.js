var banner = document.getElementById('banner'),
    girl = document.getElementById('girl'),
	range = document.getElementById('range');

var App = {
	transformElement: function (element, transformCmd) {
		element.style.MozTransform = transformCmd;
		element.style.WebkitTransform = transformCmd;
		element.style.OTransform = transformCmd;
		element.style.MsTransform = transformCmd;
		element.style.transform = transformCmd;
	},
	zoom: function (size) {
		App.transformElement(girl, 'scale(' + (1 + (1 - size/100)/2) + ')');
		range.value = size;
	},
	init: function () {

		banner.addEventListener("mouseover", function (e) {
			App.zoom(60);
		}, false);
		banner.addEventListener("mouseout", function (e) {
			App.zoom(80);
		}, false);

		range.addEventListener('input', function (e) {
			App.zoom(range.value);
		}, false);

	}
};
App.init();