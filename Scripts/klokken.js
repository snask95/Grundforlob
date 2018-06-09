function visTid() {
	var updateInteval = 1000;
	var element = document.getElementById('ur');
	var nu = new Date();
	var time = nu.getHours();
	var minut = nu.getMinutes();
	var sekund = nu.getSeconds();
	var klokken = time + ':' + minut + ':' + sekund;
	element.innerHTML = klokken;
	setTimeout('visTid()', updateInteval);
}