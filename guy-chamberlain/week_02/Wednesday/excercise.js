/*

The Cat Walk

Who needs Milan when you have JavaScript?

Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>Cat Walk</title>
 </head>
 <body>

  <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">

 </body>
</html>
Create a new Javascript file and link to it with a script tag at the bottom.
Create a variable to store a reference to the img.
Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
DONE

Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
DONE

Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
NOT DONE

setTimeout( function, duration) − This function calls function after duration milliseconds from now.

setInterval(function, duration) − This function calls function after every duration milliseconds.

clearTimeout(setTimeout_variable) − This function calls clears any timer set by the setTimeout() functions.

*/

var img = document.getElementsByTagName('img')[0];

img.style.left = "1px";
img.style.top = "1px";
var moveIncLeft = 4;
var moveIncTop = 1.1;
var dancePos = (window.innerWidth / 2 - 200) / moveIncLeft * moveIncLeft + 1;
var canMoveHandle;  
var audio = new Audio('audio.mp3');


var moveCat = function() {  
  theLeft  = parseFloat(img.style.left);
  theTop  = parseFloat(img.style.top);

  if (theLeft === dancePos) {
    clearInterval(catMoveHandle);
    img.src = "dancing.gif";
    setTimeout(stopDance,10000);
    audio.play();
  }

  if  (theLeft > window.innerWidth - img.width)  {     
    img.style.transform = "scaleX(-1)"                // Flip backwards
    moveIncLeft *= -1;
    moveIncTop *= -1;
  } 
  
  if  (theLeft < 0 )  {                                 
    img.style.transform = "scaleX(1)"                 // Flip forwards
    moveIncLeft *= -1;
    moveIncTop *= -1;
  } 

  img.style.left  = theLeft + moveIncLeft + "px";
  img.style.top = theTop + moveIncTop + "px";


};
catMoveHandle = window.setInterval(moveCat, 50);


var stopDance = function() {
  img.src="http://www.anniemation.com/clip_art/images/cat-walk.gif"
  catMoveHandle = window.setInterval(moveCat, 50);
  audio.pause();
  audio.currentTime = 0;
}









