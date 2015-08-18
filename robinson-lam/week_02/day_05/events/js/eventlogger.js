var $links = $("a");

$links.each(function () {
	var $link = $( this );

	var video = $this.attr("href");
	var thumbnailURL = youtube.generateThumbnailUrl(video);

	var $thumbnail = $("<img>");
	$thumbnail.attr("src", thumbnailURL);

 // $("<img>").attr("src", thumbnailURL).appendTo($link);

	$link.append($thumbnail);
});