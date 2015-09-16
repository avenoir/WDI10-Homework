var searchOMDB = function() {
	event.preventDefault(); // What let's you stay on the same page

	var searchTitle = $('#search_title').val();
	$('#search_title').val('').focus(); // Focus input

	var $title = $('#title');
	var $poster = $('#poster');
	var $plot = $('#plot');
	var $bg = $('#bg');

	$.ajax({
		url: 'http://omdbapi.com/?t=' + encodeURIComponent(searchTitle)
	}).done();
};

var displayResults = function(result) {
	if (!result['Poster']) {
		// display error message
		$title.text('Poster not found').addClass('error');
		$plot.empty();
		$poster.removeAttr('src');
		$bg.css('background-image', '')
	} else {
		// display poster
		$title.text(result['Poster']).removeClass('error');
		$plot.text(result['Plot']);
		$poster.attr('src', result['Poster']);
		$bg.css('background-image', ['url(', result['Poster'], ')'].join(''));
	};
};

$(document).ready(function() {
	$('#search').on('submit', searchOMDB)
});
