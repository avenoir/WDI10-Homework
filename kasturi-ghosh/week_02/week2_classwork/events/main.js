
var makeMadLib = function(event) {
	var noun = document.getElementById('noun').value;
	var adj = document.getElementById('adjective').value;
	var person = document.getElementById('person').value;

	debugger;

	console.log(noun, adj, person);

	// var story;
	// var listItems = document.getElementsByTagName('li');
	// for (var i =0; i < listItems.length; i++) {
 	//  	var listItem = listItems[i];
	// 	story += listItem.innerHTML;
	// }
	// return story;
};

var button = document.getElementById('lib-button');

button.addEventListener('click', makeMadLib);
