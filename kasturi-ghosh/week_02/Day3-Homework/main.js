// for the black cat
var img1 = document.getElementsByTagName('img')[0];
img1.style.position = 'absolute';

var pageWidth = document.documentElement.clientWidth;
var pageHeight = document.documentElement.clientHeight;

img1.style.left = '0px';
img1.style.top = '0px';

var catWalk = function() {
	
	var oldLeft = parseFloat(img1.style.left);
	var oldTop = parseFloat(img1.style.top);

	if ((pageWidth > oldLeft) && (pageHeight > oldTop)) {
		img1.style.transform = "rotateY(0deg)";
	  	var newLeft = oldLeft + 10;
	  	var newTop = oldTop + 10;
	  	img1.style.left = newLeft + 'px';
	  	img1.style.top = newTop + 'px';
	  }
	  else {
	  	img1.style.transform = "rotateY(180deg)";
	  	var newLeft = 0;
	  	var newTop = 0;
	  	img1.style.left = newLeft + 'px';
	  	img1.style.top = newTop + 'px';

	  // img1.style.transform = "rotateY(180deg)";
	  //       img1.style.left = parseInt(img1.style.left) - 10 + "px";
	  //       img1.style.top = parseInt(img1.style.top) - 10 + "px";
	  //       pageWidth -= 10;
	  //       pageHeight -=10;
	  }

	// if ((parseInt(img1.style.left)) < -50){
	 //        img1.style.transform = "rotateY(0deg)";
	 //        img1.style.left = "-50px";
	 //        window.innerWidth = 1219;
  //    }
	// else if (parseInt(img1.style.left) > (window.innerWidth - 240)) {
	 //        img1.style.transform = "rotateY(180deg)";
	 //        img1.style.left = parseInt(img1.style.left) - 10 + "px";
	 //        window.innerWidth -= 10;
  //    }

};
window.setInterval(catWalk, 100);

// for the white cat
var img2 = document.getElementsByTagName('img')[1];
img2.style.position = 'absolute';

var pageWidth = document.documentElement.clientWidth;
var pageHeight = document.documentElement.clientHeight;

img2.style.right = '0px';
img2.style.bottom = '0px';

var whiteCat = function() {
	
	var oldRight = parseFloat(img2.style.right);
	var oldBottom = parseFloat(img2.style.bottom);

	if ((pageWidth > oldRight) && (pageHeight > oldBottom)) {
	  	var newRight = oldRight + 10;
	  	var newBottom = oldBottom + 10;
	  	img2.style.right = newRight + 'px';
	  	img2.style.bottom = newBottom + 'px';
	  	
	  }
	  else {
	  	var newRight = 0;
	  	var newBottom = 0;
	  	img2.style.right = newRight + 'px';
	  	img2.style.bottom = newBottom + 'px';
	  }
};
window.setInterval(whiteCat, 200);

//for the disco light
var img3 = document.getElementsByTagName('img')[2];
img3.style.position = 'absolute';
img3.style.left = '470px';

img3.style.opacity = 1.0;

var fadeAway = function() {  
  img3.style.opacity = img3.style.opacity - 0.05;
  if (img3.style.opacity < 0.4) {
    window.clearInterval(fadeTimer);
  }
};
var fadeTimer = window.setInterval(fadeAway, 1000);

// for the red ballon
var img4 = document.getElementsByTagName('img')[3];
img4.style.position = 'absolute';
img4.style.top = '0px';
img4.style.right = '0px';
var fall = function() {
  var oldTop = parseFloat(img4.style.top);
  var newTop = oldTop + 0.5;
  img4.style.top = newTop + 'px';
};
window.setInterval(fall, 40);

