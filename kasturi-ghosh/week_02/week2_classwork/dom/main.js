document.getElementsByTagName('body')[0].style.fontFamily = "Arial, sans-serif";
var bodyNode = document.getElementsByTagName('body')[0];
//bodyNode.style.fontFamily = "Arial, sans-serif";

document.getElementById('nickname').innerText = 'Dona';
document.getElementById('favorites').innerHTML = 'Toffee';
document.getElementsByTagName('span')[2].innerText = 'India';

var listItems = document.getElementsByTagName('li');
for ( var i = 0; i < listItems.length; i++ ) {
	listItems[i].setAttribute("class", "listitem");
	//listItems[i].className = 'listitem';
}

var image = document.createElement('img');
image.src = "http://fillmurray.com/400/400";

bodyNode.appendChild(image);