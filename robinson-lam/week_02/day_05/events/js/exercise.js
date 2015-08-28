var $links = $("a");

var $videoPlayerDiv = $("#videoPlayer");
$videoPlayerDiv.css( "background", "#111" );
$videoPlayerDiv.css( "width", "560px" );
$videoPlayerDiv.css( "height", "315px" );
$videoPlayerDiv.css( "margin", "0 auto" );
$videoPlayerDiv.css( "display", "none" );


var thumbnailify = function( link ) {
	var $link = $( link );

	var video = $link.attr("href");
	var thumbnailURL = youtube.generateThumbnailUrl(video);

	var $thumbnail = $("<img>");
	$thumbnail.attr("src", thumbnailURL);

	$link.append($thumbnail);

	$link.on("click", function(e) {

		$videoPlayerDiv.fadeIn();

		e.preventDefault();
		console.log("YOU CLICKED THE VIDEO OH FUCK OH FUCK");

		var $videoPlayer = $("<iframe>");
		var videoURL = youtube.generateEmbedUrl(video);
		$videoPlayer.attr("src", videoURL);
		$videoPlayer.css("width", $videoPlayerDiv.css( "width" ));
		$videoPlayer.attr("height", $videoPlayerDiv.css( "height" ));

		$videoPlayerDiv.html($videoPlayer);
	});
}

$links.each(function () {
	thumbnailify(this);
});


$('h1').funText(500, 'candy');
$('h1').css("position", "absolute");
$('h1').css("top", "300px");