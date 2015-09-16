var query;
var displayResult = function (theUrl, description) {

	$('#heading').empty().append(query.toUpperCase());
	$('#description').empty().append(description.toUpperCase());
	$('#results').attr('src', theUrl);

	$('#img_link').html( "View " + query + " in new window" ).attr( { href: theUrl, target: '_blank' } );

	$('#results').hover( function () {
	    $(this).addClass('hover');
	    $('#bg').css('background-image', ['url(', theUrl, ')'].join(''));
	}, function () {
	    $(this).removeClass('hover');
	    $('#bg').css('background-image', '');
	});
};

var searchComic = function (comicId) {
  var comicUrl =  [ 'http://gateway.marvel.com:80/v1/public/characters/', comicId ].join('');
 
  $.getJSON(comicUrl, {
    apikey: 'c199f3f980787979a3713164f1aa82db'
    
  }).done(function (results) {

  	var theUrl = results.data.results[0].thumbnail.path;
  	var extension = results.data.results[0].thumbnail.extension;
  	var description = results.data.results[0].description;
  	theUrl = theUrl + "." + extension;
  	displayResult(theUrl, description);

  });
};

var searchMarvel = function (query) {
  var marvelUrl =  "http://gateway.marvel.com:80/v1/public/characters";
 
  $.getJSON(marvelUrl, {
  	name: query,
    apikey: 'c199f3f980787979a3713164f1aa82db'
    
  }).done(function (result) {
  	if ( ! result ) {
  		$('#heading').empty();
		$('#description').text( "Character not present in Marvel database" );
		$('#results').removeAttr('src');
		$('#img_link').removeAttr('href');
  	} else {
  		var comicId = result.data.results[0].id;	
  		searchComic(comicId);
  	}
  	
  });
  event.preventDefault();
};

$( document ).ready( function () {
	$('#search').on('submit', function( event ) {
		event.preventDefault();

		query = $('#query').val();
		$('#query').val('').focus();
		searchMarvel(query);
	});
});