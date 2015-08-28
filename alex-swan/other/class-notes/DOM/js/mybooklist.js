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

var pageNode = document.getElementsByTagName('body')[0];


  // for (var i = 0; i < books.length; i++) {
  // 	var newP = document.createElement('p');
  // 	var pText = document.createTextNode(books[i].title);
  // 	newP.appendChild(pText);
  // 	pageNode.appendChild(newP);
  // }

var list = document.createElement('ul');
pageNode.appendChild(list);

  for (var i = 0; i < books.length; i++) {
  	var book = books[i];
  	var listItem = document.createElement('li');
  	listItem.innerHTML = [book.title, 'by', book.author].join(' ');

  	list.appendChild(listItem);
  }