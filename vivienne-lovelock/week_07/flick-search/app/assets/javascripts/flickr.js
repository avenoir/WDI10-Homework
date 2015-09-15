var pageNumber = 1; 
var loadMore = false;
var endOfResults = false;
var query;

var displayResults = function (photos) {
	for (var i = 0; i < photos.length; i++ ) {
		displayPhoto( photos[i] );
	}
};

var displayPhoto = function (photo) {
    var url = [
        'https://farm',
        photo.farm,
        '.staticflickr.com/',
        photo.server,
        '/',
        photo.id,
        '_',
        photo.secret,
        '_m.jpg'
        ].join('');
    
       var $img = $('<img>').attr('src', url);

    $img.appendTo('#results');
};


var searchFlickr = function (query) {
  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: 'e61ca3df67c52ba4d1d19d5bd28b37b7',
    text: query,
    format: 'json',
    // per_page: 200,
    page: pageNumber++  
  }).done(function (result) {

  	loadMore = true;
  	// Allows the page to load more results afte the request has completed
  	var photos = result.photos.photo   //from api, we checked in console
  	displayResults(photos);

  	if (result.photos.pages === pageNumber ) {
  		endOfResults = true;
  		console.log('You have reached the end');
  	}
  });
};

$(document).ready(function () {
	$('#search').on('submit', function (event) {

		event.preventDefault();
		pageNumber = 1;

		$('#results').html('');
		//empty the results out.
		endOfResults = false;
		// empties out the current results and resets the endOfResults global variable 
		query = $( '#query' ).val();
		searchFlickr(query);
		$('#query').val('')
		// clears search
	});

$(window).on('scroll', function () {
	if ($(window).height() + $(window).scrollTop() >= 0.8 *
         $(document).height() ) {

		if (loadMore && !endOfResults) {
			searchFlickr(query);
			loadMore = false;
		} 
	} 
});

});

