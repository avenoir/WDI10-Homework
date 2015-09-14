
var getMovie = function() {
	var client = new XMLHttpRequest();

	var title = document.getElementById("title").value;
	var url = "http://omdbapi.com/?t=" + title;

	console.log( url );

	client.onreadystatechange = function() {
		if (client.readyState !== 4) {
			return;
		}
		debugger;
		var info = JSON.parse(client.responseText);

		var poster = document.getElementById("poster");
		poster.src = info["Poster"];
	};

	client.open("GET", url);
	client.send();
};

var button = document.getElementById("search_button");
button.addEventListener("click", getMovie);
