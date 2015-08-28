// var $links = $('a');
// for ( var i = 0; i < $links.length; i++ ) {
// 	var $link = $links.eq(i); //var $link = $( $link[i] );

// 	var video = $link.attr("href");
// 	var thumbnailURL = youtube.generateThumbnailUrl(video);

// 	var $thumbnail = $('<img>');
// 	$thumbnail.attr('src', thumbnailURL);

// 	$link.append($thumbnail);

// }

$('a').funText(33, 'candy');

var $links = $('a');
$links.each(function () {
	var $link = $( this );

	var video = $link.attr('href');
	var thumbnailURL = youtube.generateThumbnailUrl(video);

	$('<img>').attr('src', thumbnailURL).appendTo($link);

});