var thumbnailify = function (link) {
	var $link = $(link);

	var video = $link.attr('href');
	var thumbnailURL = youtube.generateThumbnailUrl(video);

	$('<img>').attr('src', thumbnailURL).appendTo($link);

	$link.on('click', function (e) {
		e.preventDefault();

		var embedURL = youtube.generateEmbedUrl(video);
		var iframe = $('<iframe width="420" height="315" frameborder="0" allowfullscreen></iframe>');
		iframe.attr('src', embedURL);

		//$('video').hide().html(iframe).fadeIn(10000);
		$('#video').html(iframe);
	});
};

var $links = $('a');

$links.each(function () {
	thumbnailify(this);
});
