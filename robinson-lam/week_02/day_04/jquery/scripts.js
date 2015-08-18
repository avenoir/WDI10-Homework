// var listItems = document.querySelectorAll("a");

// for ( var x = 0; x < listItems.length;  x++) {

// 	var link = listItems[x];
// 	var video = link.getAttribute("href");

// 	var thumbURL = youtube.generateThumbnailUrl(video);

// 	var thumbnail = document.createElement("img");
// 	thumbnail.setAttribute("src", thumbURL);

// 	link.appendChild(thumbnail);
// }

var links = $(".span3 ul li a");

for ( var x = 0; x < links.length; x++) {
	var link = $( links[x] );

	var thumbURL = youtube.generateThumbnailUrl( link.attr("href") );

	var thumbnail = $("<img>");
	thumbnail.attr("src", thumbURL);

	link.append(thumbnail);
}



// Joel's Solution 


// var $links = $("a");

// $links.each(function () {
// 	var $link = $( this );

// 	var video = $this.attr("href");
// 	var thumbnailURL = youtube.generateThumbnailUrl(video);

// 	var $thumbnail = $("<img>");
// 	$thumbnail.attr("src", thumbnailURL);

 // // $("<img>").attr("src", thumbnailURL).appendTo($link);

// 	$link.append($thumbnail);
// });