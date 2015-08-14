// DONE
// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.


//TODO
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.





//    ____     _       _____                        _       _       _  __    
// U /"___|U  /"\  u  |_ " _|      __        __ U  /"\  u  |"|     |"|/ /    
// \| | u   \/ _ \/     | |        \"\      /"/  \/ _ \/ U | | u   | ' /     
//  | |/__  / ___ \    /| |\       /\ \ /\ / /\  / ___ \  \| |/__U/| . \\u   
//   \____|/_/   \_\  u |_|U      U  \ V  V /  U/_/   \_\  |_____| |_|\_\    
//  _// \\  \\    >>  _// \\_     .-,_\ /\ /_,-. \\    >>  //  \\,-,>> \\,-. 
// (__)(__)(__)  (__)(__) (__)     \_)-'  '-(_/ (__)  (__)(_")("_)\.)   (_/ 


document.body.style.backgroundImage = "url('images/background.jpg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "100% auto"

var catImage = document.getElementById("walking-cat");
catImage.style.left = "0px"; // initial position of the cat image
catImage.style.marginTop = "300px";


// cartoonCat.style.marginLeft = "300px
var dancingCat1 = document.createElement("img");
dancingCat1.src = "http://media.giphy.com/media/67j0Iy0UzvBG8/giphy.gif";
document.getElementsByTagName("body")[0].appendChild(dancingCat1);
dancingCat1.style.marginLeft = "5px";
dancingCat1.style.marginTop = "300px";

var dancingCat2 = document.createElement("img");
dancingCat2.src = "http://media.giphy.com/media/67j0Iy0UzvBG8/giphy.gif";
document.getElementsByTagName("body")[0].appendChild(dancingCat2);
dancingCat2.style.marginLeft = "100px";


var catWalk = function(){

	// if the cat moves out of the left-hand of the screen for more than 50px: 
	// magic number -50; reset the position of the image, so that it won't continue going left
	// magic number 1219, it is the original window width, we can get this number by running window.innerWidth. Reset the window width to it's original.
	if ((parseInt(catImage.style.left)) < -50){
		catImage.style.transform = "rotateY(0deg)";
		catImage.style.left = "-50px";
		window.innerWidth = 1219;

	// if the cat moves out of the right-hand of the screen (if the head touches the screen):
	// magic number 240, roughly gets the width of the image by pixels.
	// move the image 10px less from the left. (going backward)
	// resize the window to 10 pixels less than it used to be.
	} else if (parseInt(catImage.style.left) > (window.innerWidth - 240)) {

		catImage.style.transform = "rotateY(180deg)";

		catImage.style.left = parseInt(catImage.style.left) - 10 + "px";

		window.innerWidth -= 10;
	} 

	// if the cat does not touch the screen, keep moving by 10px.
	else {
		var oldLeft = parseInt(catImage.style.left);
		catImage.style.left = oldLeft + 10 + "px";
	}


	// if the cat is in the middle of the screen
	if ((parseInt(catImage.style.left)) >= 400 && (parseInt(catImage.style.left)) < 600){
		console.log("hiding");

		dancingCat1.style.display = "";
		dancingCat2.style.display = "";
		catImage.style.display = "none";

		// waitSeconds(catImage, 3000);
		// var pauseTime = window.setTimeout(catWalk, 10000);

	} else {
		console.log("walking");
		catImage.style.display = "";
		dancingCat1.style.display = "none";
		dancingCat2.style.display = "none";
	}
};

var catTimer = window.setInterval(catWalk, 100);


var waitSeconds = function (cat, iMilliSeconds) {
    var counter= 0;
    var start = new Date().getTime();
    var end = 0;

    while (counter < iMilliSeconds) {

        end = new Date().getTime();
        counter = end - start;

    	cat.style.display = "none";
    }
};


// function backToNormal(catWalk, catDance){
// 	catWalk.style.display = "";
// 	catDance.style.display = "none";
// }

// var disappear = function (cat, iMilliSeconds){
// 	for (var i = 1; i < iMilliSeconds; i = i * 100){
// 		cat.style.display = "none";
// 	}
// };










