var books = [
  {
   title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {
   title: 'The Most Human Human',
   author: 'Brian Christian',
   alreadyRead: true
  }
];

var bodyNode = document.querySelector("body");
var list = document.createElement('ul');
	bodyNode.appendChild(list);
 for ( i = 0; i < books.length; i++ ) {
 	var book = books[i];
 	var listItem = document.createElement('li');

 	listItem.innerHTML = [book.title, 'by', book.author].join(' ');
 	listItem.appendChild(list);
 }

