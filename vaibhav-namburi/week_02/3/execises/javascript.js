var pageNode = document.getElementsByTagName('body')[0];
pageNode.style.fontFamily= "Arial, sans-serif" ;

var nickname = document.getElementById('nickname');
nickname.innerHTML="V";

var favorites = document.getElementById('favorites');
favorites.innerHTML="chocolate";

var hometown = document.getElementById('hometown');
hometown.innerHTML="Sydney";

var tag = document.querySelectorAll('ul li');

for(var i = 0 ; i < tag.length ; i++){
	tag[i].className ="listitem";
	tag[i].style.color="red";
}

var newimg = document.createElement("img");
newimg.src = "http://fillmurray.com/50/50";

pageNode.appendChild(newimg);