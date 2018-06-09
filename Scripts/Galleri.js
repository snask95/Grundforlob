function loadImages(images) {
	var arrImages = images.split(",");
	var html = "";
	for (var i = 0; i < arrImages.length; i++) {
		html +=
			"<a onClick=\"javascript:ShowImage('" + arrImages[i] + "'); \"> <img src=\"GalleryImages/thumb/" + arrImages[i] + "\" class=\"images\" alt=\"Vis billede\" title=\"Vis billede\" /></a>";
	}
	imgPreloader(arrImages, "GalleryImages/Big/");
	document.getElementById('imgHolder').innerHTML = html;
}

function ShowImage(image) {
	if (image == 'none') {
		document.getElementById('myImg').innerHTML = '';
	}
	else {
		document.getElementById('myImg').innerHTML = '<img src="bigImg" width="720" alt="Luk billede" title="Luk billede" />';
	}
}

function imgPreloader(arrImages, folder) {
	var preImg = new Image();
	for(var i = 0; i < arrImages.length; i++) {
		preImg.src = folder + arrImages[i];
	}
}