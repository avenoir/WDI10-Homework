
// Daddy Cat //
///////////////

var cat = document.querySelector('#daddyCat');
cat.src = "images/cat-walk.gif"
cat.style.left = "0px";
cat.style.width = "100px";

var leClub = document.querySelector("#leClub");
leClub.style.width = "720px";

var bodyWidth = window.innerWidth;
var walkTimerLeft;
var walkTimerRight;
var discoBallTimer;
var walkingLeft;
var walkingRight;
var catDancing = false;
var discoInitiated = false;

var walkRight = function() {
	walkingRight = true;
	walkingLeft = false;
  	var oldLeft = parseInt(cat.style.left);
  	var newLeft = oldLeft + 10;
  	cat.style.left = newLeft + 'px';

	checkCatForTransform();
  

	 if (parseInt(cat.style.left) >= (parseInt(leClub.style.width) - parseInt(cat.style.width))) {
	    window.clearInterval(walkTimerRight);
	 	walkTimerLeft = window.setInterval(walkLeft, 100);
	    cat.style.transform = "scaleX(-1)";
	 }
};

var walkLeft = function() {
	walkingLeft = true;
	walkingRight = false;
    var oldRight = parseInt(cat.style.left);
    var newRight = oldRight - 10;
    cat.style.left = newRight + 'px';
    checkCatForTransform();

    if (parseInt(cat.style.left) <= 0) {
        window.clearInterval(walkTimerLeft);
        walkTimerRight = window.setInterval(walkRight, 100);
        cat.style.transform = "scaleX(1)";
    } 
};

// DaddyCat Transform //
///////////////////////

var checkCatForTransform = function() {
	if (!(catDancing) && (discoInitiated)) {
		if ( parseInt(cat.style.left) === 300) {
			transformCat();

			if (walkingRight) {
				window.clearInterval(walkTimerRight);
				window.setTimeout( function() {
					walkTimerRight = window.setInterval(walkRight, 100);
				}, 3000);
			} else if (walkingLeft) {
				window.clearInterval(walkTimerLeft);
				window.setTimeout( function() {
					walkTimerLeft = window.setInterval(walkLeft, 100);
				}, 3000);		
			}			
		}
	}
}

var transformCat = function() {
		cat.src = "images/shakingcat.gif";
		cat.style.width = "150px";
		catDancing = true;
}


// Discoball Fever //
/////////////////////

var discoBall = document.querySelector("#discoBall");
discoBall.style.width = "100px";
discoBall.style.left = "310px";
discoBall.style.top = "-120px";

var dropDownDiscoBall = function() {
	var oldTop = parseInt(discoBall.style.top);
 	var newTop = oldTop + 1;
 	discoBall.style.top = newTop + 'px';

 	if ( parseInt(discoBall.style.top) >= 0) {
 		window.clearInterval(discoBallTimer);
 	}
};

var initiateDiscoBallFever = function() {
	discoBallTimer = window.setInterval(dropDownDiscoBall, 100);
}

// Alpha Cats //
////////////////

		// Alpha

var alphaCat = document.querySelector("#alphaCat");
alphaCat.style.opacity = "0";

var alphaCatEntry = document.querySelector("#alphaCatEntry");
alphaCatEntry.style.bottom = "60px";
alphaCatEntry.style.left = "-60px";

var entryAlphaCat = function() {
	window.setTimeout( function(){alphaCat.style.opacity = "1"}, 100);
	alphaCatEntry.src = "images/smoke.gif";
	window.setTimeout( function(){alphaCatEntry.style.opacity = "0"}, 600);
}

		// Beta

var betaCat = document.querySelector("#betaCat");
betaCat.style.opacity = "0";

var betaCatEntry = document.querySelector("#betaCatEntry");
betaCatEntry.style.bottom = "70px";
betaCatEntry.style.left = "45px";

var entryBetaCat = function() {
	window.setTimeout( function(){betaCat.style.opacity = "1"}, 100);
	betaCatEntry.src = "images/smoke.gif";
	window.setTimeout( function(){betaCatEntry.style.opacity = "0"}, 600);
}

		// Charlie

var charlieCat = document.querySelector("#charlieCat");
charlieCat.style.opacity = "0";

var charlieCatEntry = document.querySelector("#charlieCatEntry");
charlieCatEntry.style.bottom = "65px";
charlieCatEntry.style.right = "90px";

var entryCharlieCat = function() {
	window.setTimeout( function(){charlieCat.style.opacity = "1"}, 100);
	charlieCatEntry.src = "images/smoke.gif";
	window.setTimeout( function(){charlieCatEntry.style.opacity = "0"}, 600);
}

		// Delta

var deltaCat = document.querySelector("#deltaCat");
deltaCat.style.opacity = "0";

var deltaCatEntry = document.querySelector("#deltaCatEntry");
deltaCatEntry.style.bottom = "60px";
deltaCatEntry.style.right = "-70px";

var entryDeltaCat = function() {
	window.setTimeout( function(){deltaCat.style.opacity = "1"}, 100);
	deltaCatEntry.src = "images/smoke.gif";
	window.setTimeout( function(){deltaCatEntry.style.opacity = "0"}, 600);
	discoInitiated = true;
}

// Smoke & Confetti Effects //
//////////////////////////////

var smoke = document.getElementById("smokeEffects");
smoke.style.opacity = 0;
var confetti = document.getElementById("confetti");
confetti.style.opacity = 0;
confetti.style.height = "100%";


var letOutTheSmoke = function() {
	smokeTimer = window.setInterval(smokeRise, 100);
}

var smokeRise = function() {
	if ( parseInt(smoke.style.opacity) < 1 ) {
		var oldOpacity = parseFloat(smoke.style.opacity);
    	smoke.style.opacity = oldOpacity + 0.05;
	} else { 
		window.clearInterval(smokeTimer);
	}
}

var letTheConfettiFall = function() {
	confettiTimer = window.setInterval(confettiFall, 100);
}

var confettiFall = function() {
	if ( parseInt(confetti.style.opacity) < 0.6 ) {
		var oldOpacity = parseFloat(confetti.style.opacity);
    	confetti.style.opacity = oldOpacity + 0.02;
	} else { 
		window.clearInterval(confettiTimer);
	}
}

// Audience Cats //
///////////////////

var leadCat = document.getElementById("leadCat");
leadCat.style.position = "absolute";
leadCat.style.opacity = 0;
leadCat.style.top = "260px";
leadCat.style.left = "160px";
leadCat.style.width = "50px";

var leadCatStart = function() {
	leadCatTimer = window.setInterval(leadCatAppear, 50);
}
var leadCatAppear = function() {
  	if ( parseInt(leadCat.style.opacity) < 0.5 ) {
		var oldOpacity = parseFloat(leadCat.style.opacity);
    	leadCat.style.opacity = oldOpacity + 0.02;
	} else { 
		window.clearInterval(leadCatTimer);
	}
}

// Initiate Cat Disco //
////////////////////////

var initiateCatDisco = function() {
	initiateDiscoBallFever();
	walkTimerRight = window.setInterval(walkRight, 100);
	window.setTimeout( entryAlphaCat, 11500 );
	window.setTimeout( entryBetaCat, 13200 );
	window.setTimeout( entryCharlieCat, 11500 );
	window.setTimeout( entryDeltaCat, 14400 );
	window.setTimeout( letOutTheSmoke, 11000 );
	window.setTimeout( letTheConfettiFall, 13000 );
	window.setTimeout( leadCatStart, 15000 );
}

    
initiateCatDisco();

