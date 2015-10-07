
var displayResults = function(photos) {
	for ( var i = 0; i < photos.length; i++ ) {
		displayPhoto( photos[i] );
	}
};

var currentPage = 0;
var maxPages = 0;
var requesting = false;

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
	'_q.jpg'].join('');

	var $img = $('<img>').attr('src', url);
	$img.appendTo($('#results'));
};

var searchFlickr = function (query, page) {
  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';
  console.log("Passed in page: ", page);
  requesting = true;
  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json',
    page: page
  }).done(function (result) {
  	var photos = result.photos.photo; // THIS API GIVES US A WEIRD NESTED OBJECT OF RESULTS.
  	currentPage = parseInt(result.photos.page);
  	maxPages = parseInt(result.photos.pages);
  	requesting = false;

  	displayResults(photos);

  }).fail(function () {
  	$('body').css('background-color', 'red');
  });
};

var searchNextPage = function () {
	var searchItem = $('#query').val();
	if ( currentPage < maxPages ) {
		var nextPage = (parseInt(currentPage) + 1) + '';
		searchFlickr(searchItem, nextPage);
	}
};

var checkScroll = function() {
		$(window).on('scroll', function() {
		// Check for scrolltop, infinite scroll, stop at the end. THROTTLE SO YOU DONT MAKE 1000000 REQUESTS FLICKR API FOR PAGINATION
		if( $(window).scrollTop() >= $(document).height() - $(window).height() ) {
			if( requesting === false ) {
				searchNextPage();
			}
		}
	});
};	

//////////////////////////////

$(document).ready(function() {
	$('#search').on('submit', function() {
		event.preventDefault();
		$('#results').empty();
		var searchItem = $('#query').val();
		searchFlickr(searchItem, '1');
	});

	checkScroll();
});