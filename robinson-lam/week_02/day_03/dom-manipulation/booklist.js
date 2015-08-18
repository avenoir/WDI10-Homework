var books = [
  {
  	title: 'The Design of EveryDay Things',
  	author: 'Don Norman',
  	alreadyRead: false
  }, {
  	title: 'The Most Human Human',
  	author: 'Brian Christian',
  	alreadyRead: true
}];

var body = document.getElementsByTagName("body")[0];

for ( var x = 0; x < books.length; x++) {
	var paragraph = document.createElement("p");
	paragraph.innerHTML += "'" + books[x].title + "' by: " + books[x].author + ".";
	body.appendChild(paragraph); 
}

