// Create an array of every link on the page using document.querySelectorAll(cssSelector)
// Iterate through the array. In each iteration of the loop:

// Find the current href using element.getAttribute(name), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using element.setAttribute(name, value)
// Append the IMG to the link using element.appendChild(element)
// Quick Tip: If you need a refresher on the DOM API, check out slides 1-12 from the DOM Review here

//DOM way: 

// var allLinks = document.querySelectorAll('a');

// for ( var i = 0; i < allLinks.length; i++ ) {
// 	var href = allLinks[i].getAttribute('href');
// 	var thumb = youtube.generateThumbnailUrl(href);
// 	var img = document.createElement('img');
// 	img.setAttribute('src', thumb);
// 	allLinks[i] = allLinks[i].appendChild(img);
// }

//jQuery way:
var $allLinks = $('a');

// for ( var i = 0; i < $allLinks.length; i++ ) {
//	var $href = $( $allLinks[i] ); //or use $links.eq(i)
// 	var $link = $href.attr('href');
// 	var thumb = youtube.generateThumbnailUrl($link);
// 	var $img = $('<img>');
// 	$img.attr('src', thumb);
// 	$($allLinks[i]).append($img);

// }

$allLinks.each(function () {
	var $link = $( this );
	var $video = $link.attr('href');
	var thumb = youtube.generateThumbnailUrl($video);
	$('<img>').attr('src', thumb).appendTo($link);
});

// First, download the jQuery library from jquery.com and save it into the same directory as your exercise files. Then, add a <script> tag to the page which loads in the jQuery library you just downloaded. The script tag will look something like this:

//   <script type="text/javascript" src="PUT THE FILENAME HERE"></script>
// Next, replace the existing code with jQuery - any DOM manipulation can be done with jQuery instead. If you're not sure how to do something with jQuery, google for "X with jQuery" and you will likely find the jQuery docs or StackOverflow questions.

// Make sure that you use your browser developer tools to make debugging easier while working on this. Check for errors, and use console.log() to figure out how far your code makes it, and what the values of your variables are along the way.