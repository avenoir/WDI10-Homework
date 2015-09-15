
var pageNumber = 1;
var loadMore = true;
var endOfResults = false;
var query;


var displayResults = function(photos) {
	for (var i = 0; i < photos.length; i++) {
		displayPhoto(photos[i]);
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
		'_m.jpg'
	].join('');

	var $img = $('<img>').attr('src', url);
	$img.appendTo('#results');
};



var searchFlickr = function (query) {
  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json',
    per_page: 100,
    page: pageNumber++	
  }).done(function(result) {
		loadMore = true;
  	
		var photos = result.photos.photo; // This API gives us a weird nested object of results
		displayResults(photos);

		if (result.photos.pages === pageNumber) {
			endOfResults = true;
		}
	});
};



$(document).ready(function() {
	$('#search').on('submit', function(event) {

		event.preventDefault();

		pageNumber = 1;

		// clear the exising images
		$('#results').html('');
		endOfResults = false;

		query = $('#query').val(); 	
		searchFlickr(query);
	});


	$(window).on('scroll', function() {
		if ($(window).height() + $(window).scrollTop() >= 0.8 * $(document).height()) {	
			if (loadMore && !endOfResults) {
				searchFlickr(query);
				loadMore = false;
			}
		}
	});
});






