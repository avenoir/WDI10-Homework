// Exercise: jQuery Events & Animation
// In this exercise, you'll add code to the so that you can actually watch the videos on the page.

// Start with your code from the jQuery workshop.

// In the body of your HTML, create a <div> to hold the video player, either below or to the side of the list, and give it an id.
// In the script tag that you were working in before, create a thumbnailify() function that takes a single argument.
// Move the code that is currently inside your for loop into that thumbnailify() function.
// Change the contents of your function so that it uses a single argument, which is a jQuery object that represents an , rather than an array of elements.
// Move the for loop so that it occurs after you define thumbnailify()
// Call thumbnailify() from inside your for loop.
// Make sure your player first works like it did before. Hint: you should only reference an array index from inside of the for loop.
// Now, in the thumbnailify() function, add a click listener to the link. We recommend using an anonymous function for the callback (not a named function). Put a console.log inside the callback to make sure it works.
// In the click listener callback, you will be using the "create and store, manipulate, inject" pattern to display an embedded video in the DIV you created.
// To find out what the code for an embedded Youtube video looks like, go to Youtube.com and find any embed code for a video.
// You can use youtube.generateEmbedUrl() from the youtube.js library to generate an embed URL.
// Use string concatenation, .html(), or other jQuery method of your choice to assemble and insert the embedded video element.
// Check your work! Try all your video links. Is there anything you need to change?
// As a bonus, try to make the video watcher <div> fade in using jQuery.
// Make sure that you use your browser developer tools to make debugging easier while working on this. Check for errors, and use console.log() to figure out how far your code makes it, and what the values of your variables are along the way.

//jQuery way:

$(document).ready(function () {


	$('h2').funText(250, 'candy');
	$('.span3').funText(33, 'candy');

	var $allLinks = $('a');

	var thumbnailify = function(link){
		var $href = $( $allLinks[i] ); //or use $links.eq(i)
		var $link = $href.attr('href');
		var thumb = youtube.generateThumbnailUrl($link);
		var $img = $('<img>');
		$img.attr('src', thumb);
		$($allLinks[i]).append($img);

		$($allLinks[i]).on('click', function(e) {
			e.preventDefault(); //Don't follow the link
			var embedUrl = youtube.generateEmbedUrl($link);
			console.log(embedUrl);
			var iframe = $('<iframe width="420" height="315" frameborder="0" allowfullscreen></iframe>');
			iframe.attr('src', embedUrl);
			$('#video').html(iframe);

		})
	}

	for ( var i = 0; i < $allLinks.length; i++ ) {
		thumbnailify($allLinks[i]);

	}

});

