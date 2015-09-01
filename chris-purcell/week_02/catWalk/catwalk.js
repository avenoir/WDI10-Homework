/*cat walk global*/

var cat = document.getElementsByClassName('catwalk')[0];
var catLeft;

cat.style.left = "0px";
var danceCat;
var movementR;


/*make it rain */

//var rain = document.getElementsByClassName('rain');//

//var rainFall = function() {
//	for (var i = 0; i<rain.length; i++) {
//		rain = rain[i];
//		var oldPos = rain.style.top;
//		var newPos = oldPos + "10px";
//		
//	}
//}//

//var rainsFall = window.setInterval(rainFall, 100);



/*cat walk local*/
var catWalkRight = function() {
	cat.className = "turnRight";
	var oldPos = parseInt(cat.style.left);
	var newPos = oldPos + 10;
	cat.style.left = newPos + 'px';
//	if ((window.innerWidth / 2) - 75 === parseInt(cat.style.left)) {
//		movementR = true;
//		clearInterval(x);
//		danceTime();
//	};
	if (parseInt(cat.style.left) >= (window.innerWidth - 26)){
		clearInterval(catRight);
		catLeft = window.setInterval(catWalkLeft, 100);
	}
};

var catWalkLeft = function() {
	cat.className = "turnLeft";
	var oldPos = parseInt(cat.style.left);
	var newPos = oldPos - 10;
	cat.style.left = newPos + 'px';
//	if ((window.innerWidth / 2) + 75 === parseInt(cat.style.left)) {
//		movementR = false;
//		clearInterval(y);
//		danceTime();
//	}
	if (parseInt(cat.style.left) <= -296){
		clearInterval(catLeft);
		catRight = window.setInterval(catWalkRight, 100);		
	}
};


/*.
.______      ___      .______     .___________.____    ____ 
|   _  \    /   \     |   _  \    |           |\   \  /   / 
|  |_)  |  /  ^  \    |  |_)  |   `---|  |----` \   \/   /  
|   ___/  /  /_\  \   |      /        |  |       \_    _/   
|  |     /  _____  \  |  |\  \----.   |  |         |  |     
| _|    /__/     \__\ | _| `._____|   |__|         |__|     
                                                            
.___________. __  .___  ___.  _______  __   __   __  
|           ||  | |   \/   | |   ____||  | |  | |  | 
`---|  |----`|  | |  \  /  | |  |__   |  | |  | |  | 
    |  |     |  | |  |\/|  | |   __|  |  | |  | |  | 
    |  |     |  | |  |  |  | |  |____ |__| |__| |__| 
    |__|     |__| |__|  |__| |_______|(__) (__) (__) 
*/                                                   

//var catDance = function() {
//		cat.src="dancecat.gif";
//		setTimeout(catDance, 500);
//		if (movementR === true) {
//			x = window.setInterval(catWalkRight, 100);
//		} else {
//			y = window.setInterval(catWalkLeft, 100);
//		}
//};
//var danceTime = function () {
//	danceCat = setInterval(danceTimer, 500);
//};
//var danceTimer = function () {
//	cat.src="dancecat.gif";
//	if (movementR) {
//		clearInterval(danceCat);
//		cat.src = "cat-walk.gif";
//		x = window.setInterval(catWalkRight, 100);
//	} else {
//		clearInterval(danceCat);
//		cat.src = "cat-walk.gif";
//		y = window.setInterval(catWalkLeft, 100);
//	}
//};


var catRight = window.setInterval(catWalkRight, 100);

/*-------------MAKE IT RAIN--------------*/

 /* <img class="rain" style="position:absolute;" src="rain1.jpg">   
  <img class="rain" style="position:absolute;" src="rain2.jpg">
  <img class="rain" style="position:absolute;" src="rain3.jpg">
  <img class="rain" style="position:absolute;" src="rain4.jpg">
  <img class="rain" style="position:absolute;" src="rain5.jpg">
  <img class="rain" style="position:absolute;" src="rain6.jpg">
  <img class="rain" style="position:absolute;" src="rain7.jpg">
  <img class="rain" style="position:absolute;" src="rain8.jpg">
  <img class="rain" style="position:absolute;" src="rain9.jpg">
  <img class="rain" style="position:absolute;" src="rain10.jpg">*/