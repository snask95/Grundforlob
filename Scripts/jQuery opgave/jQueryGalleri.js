function loadImages(images) {
	arrImages = images.split(',');
	// alert('Image array: ' + arrImages)

	var html = '';
	for (var i = 0; i < arrImages.length; i++) {
		html += 
			"<a onclick=\"javascript:ShowImage('" + arrImages[i] + "') \"><img src=\"../GalleryImages/Thumb/" + arrImages[i] + "\" class=\"images\" alt=\"Vis billede\" title =\"Vis billede\" onmouseover=\"mouseOver(this)\" onmouseout=\"mouseOut(this)\" /></a>";
	}
	imgPreloader(arrImages, '../GalleryImages/Big/');
	document.getElementById('imgHolder').innerHTML = html
}

function ShowImage(image) {
	$('#imgBox').fadeTo(700, 0, function () {
		if (image == 'none') {
			$('#myImg').html('');
		}
		else {
			$('#myImg').html('<img src="../GalleryImages/Big/' 
				+ image + 
				'" id="bigImg" width="720" alt="Luk billede" title="Luk billede" />');
		}
		$('#imgBox').fadeTo(700, 1, function () { });
	});
}

function imgPreloader(arrImages, folder) {
	var preImg = new Image();
	for (var i = 0; i < arrImages.length; i++) {
		preImg.src = folder + arrImages[i];
	}
}

function mouseOver(object) {
	object.className = 'thumpPop';
}

function mouseOut(object) {
	object.className = 'images';
}