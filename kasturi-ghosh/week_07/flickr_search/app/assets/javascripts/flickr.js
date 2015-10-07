var pageNumber = 1;
var loadMore = true;
var endOfResults = false;
var query;

var displayResults = function (photos) {
	for (var i = 0; i < photos.length; i++) {
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

	$('#heading').empty().append(query.toUpperCase());

	var $img = $('<img>').attr('src', url);
	$img.prependTo('#results');

	$img.hover( function () {
	    $(this).addClass('hover');
	    $('#bg').css('background-image', ['url(', url, ')'].join(''));
	}, function () {
	    $(this).removeClass('hover');
	    $('#bg').css('background-image', '');
	});

	console.log( "Next page number: " + pageNumber );
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
  }).done(function (result) {

  	loadMore = true;	
  	var photos = result.photos.photo;
  	displayResults(photos);

  	if ( result.photos.pages === pageNumber ) {
  		endOfResults = true;
  		console.log( "You have reached the end of search pages!" )
  	}

  });
};

$(document).ready(function () {
	
	$('#search').on('submit', function( event ) {
		event.preventDefault();
		
		//clears the search and resets end of results
		$('#results').html('');
		endOfResults = false;
		pageNumber = 1;

		query = $('#query').val();
		$('#query').val('').focus();
		searchFlickr(query);
	});

	$(window).on('scroll', function () {

		if ( $(window).height() + $(window).scrollTop() >= 0.8 * $(document).height() ) {
			if ( loadMore && !endOfResults ) {
				searchFlickr( query );
				loadMore = false;
			};	
		};
	});
});

