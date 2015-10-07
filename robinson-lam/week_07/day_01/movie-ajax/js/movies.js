console.log("Movies initialized");

var getMovieInfo = function() {
	var client = new XMLHttpRequest();

	client.onreadystatechange = function() {
		if ( client.readyState !== 4 ) {
			return;
		}

		var info = JSON.parse(client.responseText);

		// I'm too fuckin' lazy
		document.getElementById('title').innerHTML = info.Title;
		document.getElementById('poster').src = info.Poster;
		document.getElementById('description').innerHTML = info.Plot;
	};
		var searchValue = document.getElementById('search-bar').value;
		client.open('GET', 'http://www.omdbapi.com/?t=' + searchValue)
		client.send();
};

var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getMovieInfo);