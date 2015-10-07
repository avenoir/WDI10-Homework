var query;

$(document).ready(function() {
	$('#search').on('submit', function(event) {
		console.log('Searching...')

		event.preventDefault();
		// pageNumber = 1;

		// $('.results').html('');
		// query = $('#query').val();
		// searchMarvel(query);

		$('#query').val('');
	});
});
