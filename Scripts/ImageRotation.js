// Pause inden nyt billede vises. Angives i millisekunder.

var pause = 2000;

var img = new Array();
img[0] = 'Guitar_1.jpg';
img[1] = 'Piano_1.jpg';
img[2] = 'Piano_2.jpg';
var imgID = 0;
imgID = Math.round(Math.random() * (img.length - 1));

function rotator() {
	var imgString = "";
	imgString = imgString + '<img src="BannerImages/' + img[imgID] + '" border="0">';
	if (imgID == img.length - 1) {
		imgID = 0;
	}
	else {
		imgID++;
	}
	document.getElementById('banner').innerHTML = imgString;
	setTimeout('rotator()', pause);
}