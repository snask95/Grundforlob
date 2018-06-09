var placering = 0;

function slideInd() {
	var element = document.getElementById('menuWrapper');
	if (placering > -200) {
		placering = placering - 4;
		element.style.left = placering + "px";
		setTimeout('slideInd()', 20);
	}
	else {
		var ind = document.getElementById('ind');
		var ud = document.getElementById('ud');
		ud.style.display = "inline";
		ind.style.display = "none";
	}
}

function slideUd() {
	var element = document.getElementById('menuWrapper');
	if (placering < 0) {
		placering = placering + 4;
		element.style.left = placering + "px";
		setTimeout('slideud()', 20);
	}
	else {
		var ind = document.getElementById('ind');
		var ud = document.getElementById('ud');
		ud.style.display = "none";
		ind.style.display = "inline";
	}
}

function showImage(name) {
	var element = document.getElementById("bigImg");
	element.src = "SliderImages/Images/Big/" + name;
}