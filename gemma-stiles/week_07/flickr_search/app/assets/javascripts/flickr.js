var query;
var pageNumber = 1;
var loadMore = false;
var endOfResults = false;

var searchFlickr = function (query) {
	// Function Purpose:
	// This function processes an AJAX request to the flickr servers using the query that's passed in. It will return all the photos as part of the .done() method, the photo information that is returned is then passed to the displayResults method.
	
  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: 'e61ca3df67c52ba4d1d19d5bd28b37b7',
    text: query,
    format: 'json',
    per_page: 100,
    page: pageNumber++
  }).done(function (result) {
  	setTimeout(function() {
  		loadMore = true;
  	}, 2000);
  	var photos = result.photos.photo; 
  	displayResults(photos);

  	if (result.photos.pages === pageNumber) {
  		endOfResults = true;
  	}
  });
};

var displayResults = function (photos) {
	// Function Purpose:
	// This function passes in each individual photo to the displayPhoto method.
	for (var i = 0; i < photos.length; i++) {
		displayPhoto( photos[i] );
	}
};

var displayPhoto = function (photo) {
	// Function Purpose:
	// This photo creates a string from the components of the photo that is passed in to make a URL which directly references an image URL address. After the URL address has been constructed, an img tag is appended to the #results div.
	var url = [
		'https://farm',
		photo.farm,
		'.staticflickr.com/',
		photo.server,
		'/',
		photo.id,
		'_',
		photo.secret,
		'_q.jpg'
		].join('');
	
		var $img = $('<img>').attr('src', url);

		$img.appendTo('#results');
};


$(document).ready(function () {

	$('#search').on('submit', function (event) {

		event.preventDefault();
		pageNumber = 1;
		$('#results').html(''); //Empties the current results from the page.
		endOfResults = false;
		query = $('#query').val();
		searchFlickr(query);

	});


	$(window).on('scroll', function () {

		if ( $(window).height() + $(window).scrollTop() >= 0.8 * $(document).height() ){

			if (loadMore && !endOfResults) {

			searchFlickr(query);
			loadMore = false;
		}
		}
	});

});
