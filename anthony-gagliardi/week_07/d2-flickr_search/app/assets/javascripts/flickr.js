var pageNumber = 1;
var loadMore = true;
var endOfResults = false;
var query;

var displayResults = function(photos) {			// Displays photo after photo until end of '.length'
	for (var i = 0; i < photos.photo.length; i++) {
		displayPhoto( photos.photo[i] );
	}
};

var displayPhoto = function(photo) {
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
	$img.appendTo('.results');

};

var searchFlickr = function (query, pageNumber) {

  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?'; // AJAX request (similar to GET req. in routes)

  $.getJSON(flickrUrl, {		// GET using JSON, from link (above), (below) is what we want to access
    method: 'flickr.photos.search',
    api_key: '***',
    text: query,
    format: 'json',
    per_page: 100,
    page: pageNumber++		// Adds to pageNumber variable to print different photos through each run of 'displayResults'
  }).done(function(result) {
  	loadMore = true; // tells the page that it is allowed to load more images because the previous request was completed.

  	var photos = result.photos; // This API gives us a wierd nested object of results.
  	displayResults(photos);

  	if (result.photos.pages === pageNumber) {
  		endOfResults = true; // There are no more pages to load, stops the page from asking flickr for more.
  	};
  });
};

$(document).ready(function() {
	$('#search').on('submit', function(event) {		// Document 'ready' adn all happens when submit button is clicked
		console.log('Searching...')

		event.preventDefault();		// Prevents reloading blank console when button is clicked (what buttons normally do)
		pageNumber = 1;

		$('.results').html(''); // clears out the current results when someone submits a new search.
		// Empties out the current results.
		query = $('#query').val(); // Makes query (input box) have a value of  whatever is still in there
		searchFlickr(query);

		$('#query').val('');		// Makes query (input box) have '' (empty) value after clicked/submitted
	});

	$(window).on('scroll', function() {		// Event/function to happen when 'scroll'ing window
		console.log('Scroll event fired.');

		if ( $(window).height() + $(window).scrollTop() >= 0.8 * $(document).height() ) { // Sets scroll event to happen at 0.8/80% down the page

			if (loadMore && !endOfResults) {
				console.log('Getting more images.'); // Log fires when 0.8 reached and logs that loading of more images is happening
				searchFlickr(query);	// Fires off another AJAX request, from line 30, using the query that was defined in the initial search on line 62.
				loadMore = false;			// Stops loading more (resets to false to halt loading)
			};

			$(window).scrollTop() === 0.5 * $(document).height(); // When window reaches 0.8, resets v.scroll bar to 0.5/halfway up window
		};
	});
});
