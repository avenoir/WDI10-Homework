// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

// var nounFunc = function () {
// 	var noun = document.querySelector("#noun").value;
// 	story.innerHTML = noun;
// }

// libIt.addEventListener('click', nounFunc)

// var adjFunc = function () {
// 	var adj = document.querySelector('#adjective').value;
// 	story.innerHTML = adj;
// }

// var nameFunc = function () {
// 	var name = document.querySelector('#person').value
// 	story.innerHTML = name;
// }
var libIt = document.querySelector('#lib-button');
var story = document.querySelector('#story');

var storyFunc = function () {
	var noun = document.querySelector("#noun").value;
	var adj = document.querySelector('#adjective').value;
	var name = document.querySelector('#person').value
	story.innerHTML = [name, "really likes", adj, noun].join(' ');
	
}

libIt.addEventListener('click', storyFunc)

// calculator

