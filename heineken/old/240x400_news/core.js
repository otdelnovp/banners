(function(){
	addContent_333457();
	bannerFontsize_333457();
}());

// loadpixel
function bannerLoadPixel_333457() {
	var html_banner_heineken_333457_pixelurl = document.getElementById('html_banner_heineken_333457_pixelurl').innerHTML;
	var html_banner_heineken_333457_pixel = new Image();
	html_banner_heineken_333457_pixel.addEventListener('load', function() { html_banner_heineken_333457_pixel.style = 'width:0;height:0;position:absolute;visibility:hidden' });
	html_banner_heineken_333457_pixel.src = html_banner_heineken_333457_pixelurl;
	console.log(html_banner_heineken_333457_pixel.src);
}

// add content
function addContent_333457() {
	var html_banner_heineken_333457_addurl = document.getElementById('html_banner_heineken_333457_addurl').innerHTML;
	    html_banner_heineken_333457_addtitle = document.getElementById('html_banner_heineken_333457_addtitle').innerHTML;
	if(html_banner_heineken_333457_addurl !== "{{url}}")
		document.getElementById('html_banner_heineken_333457_link').href = html_banner_heineken_333457_addurl;
	if(html_banner_heineken_333457_addtitle !== "{{title}}")
		document.getElementById('html_banner_heineken_333457_title').innerHTML = html_banner_heineken_333457_addtitle;
}

// fontsize
function bannerFontsize_333457() {
	document.getElementsByClassName('html_banner_heineken_333457_title').forEach(function(el) {
		fancyTextFill.fillParentContainer(el, {
			minFontSize: 1,
			maxFontSize: 23
		});
	});
}
