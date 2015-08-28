//IF STATMENTS - ONE FUNCTION
console.log('CatWalk')


var w = window.innerWidth;
var h = window.innerHeight;
var cat = document.getElementById('catOne');
var catTwo = document.getElementById('catTwo');
var catThree = document.getElementById('catThree');
catThree.style.right = '100px';
cat.style.position = 'absolute';
cat.style.left = '0px';
cat.style.top = '200px';
//cat.style.border = '2px solid black';





//AUDIO
var soundFile = document.createElement("audio");
soundFile.preload = "auto";
//Load the sound file (using a source element for expandability)
var src = document.createElement("source");
src.src = "../StarWars.mp3";
soundFile.appendChild(src);

//Load the audio
soundFile.load();


//DIRECTION
var goingRight = true

//STOPPING CAT
var stopCat = function() {
    return clearInterval(walk);
}

var playAudio = function() {
    //Create the audio tag

    soundFile.play();

}

var watchKittyWalk = function() {

    var catSpeed = 5 //Math.random() * 5;
    var direction = (goingRight === true) ? 4 : -4;
    var catLocation = parseInt(cat.style.left);
    var newMove = catLocation + direction;
    cat.style.left = newMove + 'px';
    
    //When cat hits middle
    if (parseInt(cat.style.left) === 400) {
        midway = true;
        
            playAudio();
            window.clearInterval(walk);
            catTwo.src = 'http://stream1.gifsoup.com/view5/3716857/cat-with-lightsaber-vs-d-o-g-o.gif';
            catThree.src = 'http://media.giphy.com/media/13EI77MpEwowgw/giphy.gif'
            cat.src = "img/litterSpaceCat.png";
            window.setTimeout(continueCat, 8000);
        
    }
    //When cat hits Right Edge
    if (catLocation >= w) {

        
        goingRight = false;
        direction = (goingRight === true) ? 8 : -8;
        newMove = catLocation + direction;
        cat.style.left = newMove + 'px';
        cat.style.transform = 'scaleX(-1)';
        console.log('hello');
    }
    //When Cat hits left edge
    if (parseInt(cat.style.left) <= -300) {
        goingRight = true;
        cat.style.transform = 'scaleX(1)';
        direction = (goingRight === true) ? 5 : -5;

    }
    //console.log(catLocation, goingRight, midway, direction, newMove);


}

var continueCat = function() {

    //window.clearInterval(walk);
    cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    catTwo.src = "";
    catThree.src = "";
    midway = false;
    soundFile.pause()
    walk = window.setInterval(watchKittyWalk, 10);
}

walk = window.setInterval(watchKittyWalk, 10);