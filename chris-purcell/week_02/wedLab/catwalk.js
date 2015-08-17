var cat = document.getElementsByTagName('img')[0];
var y;
cat.style.left = "0px";
cat.style.right = "0px";



var catWalkRight = function() {
	var oldPos = parseInt(cat.style.left);
	var newPos = oldPos + 10;
	cat.style.left = newPos + 'px';
	if (parseInt(cat.style.left) >= (window.innerWidth - 26)){
		clearInterval(x);
		y = window.setInterval(catWalkLeft, 100);
	}
};

var catWalkLeft = function() {
	var oldPos = parseInt(cat.style.left);
	var newPos = oldPos - 10;
	cat.style.left = newPos + 'px';
	if (parseInt(cat.style.left) <= -150){
		clearInterval(y);
		x = window.setInterval(catWalkRight, 100);		
	}
};


var x = window.setInterval(catWalkRight, 100);

