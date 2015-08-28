var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
var meow = document.getElementById("meow");
meow.style.right = '0px';

var watchKittyWalkRight = function() {
  var oldleft = parseFloat(img.style.left);
  var newleft = oldleft + 0.5;
  img.style.left = newleft + 'px';
  
if (newleft >= (window.innerWidth - 296)) {
	window.clearInterval(walkRightTimer);
}
};


var walkRightTimer = window.setInterval(watchKittyWalkRight, 9);



var watchKittyWalkLeft = function() {
  var oldright = parseFloat(meow.style.right);
  var newright = oldright + 0.5;
  meow.style.right = newright + 'px';
  console.log(newright);
  if (newright >= (window.innerWidth - 296)) {
	window.clearInterval(walkLeftTimer);
}



};
var walkLeftTimer = window.setInterval(watchKittyWalkLeft, 9);