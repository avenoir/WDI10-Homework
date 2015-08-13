// var books = [
//   {title: 'The Design of EveryDay Things',
//    author: 'Don Norman',
//    alreadyRead: false,
//    link:"http://fillmurray.com/50/50"
//   },
//   {title: 'The Most Human Human',
//   author: 'Brian Christian',
//   alreadyRead: true,
//   link:"http://fillmurray.com/50/50"
//   }];

// var pageNode = document.getElementsByTagName('body')[0];

// var newultag=document.createElement("ul");

// pageNode.appendChild(newultag);

// for(var i = 0 ; i<books.length ; i++){
// 	var newlitag=document.createElement("li");
// 	var newimg=document.createElement("img");
// 	newimg.src=books[i].link;
// 	newlitag.innerHTML= books[i].title + " By " + books[i].author;
// 	newultag.appendChild(newlitag);
// 	newlitag.appendChild(newimg);

// 	if(books[i].alreadyRead){
// 		newlitag.style.color = "green";
// 	}
// 	else
// 	{
// 		newlitag.style.color = "red";
// 	}
// }

var img= document.getElementsByTagName("img")[0];
img.style.position="relative";
img.style.top='0px';
var droplet = function(){
	var oldtop=parseFloat(img.style.top);
	var newtop=oldtop + 1;
	img.style.top= newtop + "px";
	if(parseFloat(img.style.top)>window.innerHeight){
		window.clearInterval(bob);
	}
};

var bob = window.setInterval(droplet,10);
