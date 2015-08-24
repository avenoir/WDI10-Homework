var cat = document.querySelector('#cat');
var bodyWidth = window.innerWidth;


cat.style.left = '0px';
var walkRight = function() {

  var oldLeft = parseInt(cat.style.left);
  var newLeft = oldLeft + 4;
  cat.style.left = newLeft + 'px';
if (parseInt(cat.style.left) >= (window.innerWidth - 296)) {
  	  	window.clearInterval(walkTimer);
  	  	var transform = cat.style.transform = "scale(-1, 1)";
  	  	walkTimerTwo = window.setInterval(walkLeft, 1);
  	  	debugger;
  }
};

var walkLeft = function() {
	var oldRight = parseInt(cat.style.left);
	var newRight = oldRight - 4;
	cat.style.left = newRight + 'px';
	if (parseInt(cat.style.left) <= 0){
		window.clearInterval(walkTimerTwo);
		var transform = cat.style.transform = "scale(1, 1)";
		walkTimer = window.setInterval(walkRight, 1);
	} 
};

// var walkLeft = function () {
// 	var oldRight = parseFloat(cat.style.right);
// 	var newRight = oldRight + 1
// 	cat.style.right = newRight + 'px';
// 	if ( parseFloat(cat.style.right) >= window.innerWidth ) {
// 		debugger;
// 		window.clearInterval(walkTimer);
// 	}
// }
var walkTimerTwo;
var walkTimer = window.setInterval(walkRight, 10);


