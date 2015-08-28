// add youtube thumbnail images to each of the youtube likks on the page
var links = document.querySelectorAll('a');

for ( var i = 0; i < links.length; i++ ) {
	var link = links[i];

	// the video URL
	var video = link.getAttribute('href');

	// the URL thunbnail
	var thumbnailURL = youtube.generateThumbnailUrl(video);
	
	// placing the thumbnail
	var thumbnail = document.createElement('img');
	thumbnail.setAttribute('src', thumbnailURL);
	link.appendChild(thumbnail);
}