// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

var cat = document.getElementsByTagName('img')[0];
var manyCats = document.getElementsByClassName('manycats')[0]
cat.style.left = '-50px';
cat.style.top = '100px';
cat.style.width = '90px';

var catFlip = false;

var catWalk = function() {

	var direction = (catFlip === false ? 10 : -10);
	var oldSize = parseInt(cat.style.width);
	var oldPos = parseInt(cat.style.left);
	var go = oldPos + direction;
	cat.style.left = go + 'px';
	var changeSize = oldSize + 2;
	cat.style.width = changeSize + 'px'


	if (oldSize > 950) {
	cat.style.width = '50px';
	};

	if (oldPos > (window.innerWidth - cat.width)) {
	window.clearInterval(catStop);
	catFlip = true;
    cat.style.filter = 'flipH';
	cat.style.transform = 'scaleX(-1)'; 
	catStop = window.setInterval(catWalk, 100)
	}

	//cat movement
	 if (oldPos === window.innerWidth / 2 - 150 && catFlip === true	) {
	 	window.clearInterval(catStop); 

	 	var song = document.getElementById('mainSong');
	 	oldsrc = song.src;
		song.src = 'music/giveyouup.mp3'; 	
	 	var oldCat = document.getElementsByTagName('img')[0];
	 	var oldCats = document.getElementsByTagName('img')[1];
	 	var body = document.getElementsByTagName('body')[0];
	 	var oldSrc = oldCat.src;
	 	var oldBackg = body.style.backgroundImage;
	 	oldCat.src = "https://s-media-cache-ak0.pinimg.com/originals/8d/14/9e/8d149e1e88e88441d28e4cacfedc4246.gif";
	 	oldCats.style.display = 'none';
	 	body.style.backgroundImage = "url('http://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif')";
	 	body.style.backgroundSize = "auto";
	 	window.setTimeout(function(){oldCat.src = oldSrc; body.style.backgroundImage = oldBackg; body.style.backgroundSize = "cover";  oldCats.style.display = 'initial'; song.src = oldsrc; catStop = window.setInterval(catWalk, 100)
}, 8000);
	 } 

	 //turn cat back
	if (oldPos < -292) {
	window.clearInterval(catStop);
	catFlip = false;
	cat.style.filter = 'flipH';
	cat.style.transform = 'scaleX(1)'
	catStop = window.setInterval(catWalk,100)
	}

	//flip head bobbing cats
	if (oldPos > window.innerWidth / 2 - 100) {
		manyCats.style.filter = 'flipH';
		manyCats.style.transform = 'scaleX(-1)';
	} 
	if (oldPos < window.innerWidth / 2 - 200) {
		manyCats.style.filter = 'flipH';
		manyCats.style.transform = 'scaleX(1)';
	} 

};debugger;

var catStop = window.setInterval(catWalk, 100);



