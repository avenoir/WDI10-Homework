console.log("Is this thing on");

var getPoster = function () {

	var client = new XMLHttpRequest();

	client.onreadystatechange = function () {
		if (client.readyState !== 4) {
			return;
		};

		var info = JSON.parse(client.responseText);

		var img = document.getElementById('poster');
		img.src = info['Poster'];
	};	

	var m = document.getElementById('moviename');

	client.open('GET',"http://omdbapi.com/?t=" + m.value);
	client.send();

}

var p = document.getElementById('getbutton');
p.addEventListener("click", getPoster);
