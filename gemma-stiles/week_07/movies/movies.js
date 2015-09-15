var getMovie = function() {
	var client = new XMLHttpRequest();

	client.onreadystatechange = function() {
		if ( client.readyState !== 4 ) {
			return;
		}
		var info = JSON.parse(client.responseText);

		document.getElementById('title').innerHTML = info.Title;
		document.getElementById('poster').src = info.Poster;
	};
		var movieTitle = document.getElementById('search-bar').value;
		client.open('GET', 'http://www.omdbapi.com/?t=' + movieTitle)
		client.send();
};

var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getMovie);