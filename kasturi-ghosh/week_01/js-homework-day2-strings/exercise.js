//DrEvil
var drEvil = function(amount) {
	var result;
	if (amount === 1000000) {
		result = amount + " dollars (pinky)";
	}
	else {
		result = amount + " dollars";
	}
	return result;
};

console.log(drEvil(10));
console.log(drEvil(1000000));


//MixUp
var mixUp = function(stringOne, stringTwo) {

	var a1 = stringOne.charAt(0);
    var a2 = stringOne.charAt(1);
    
    var b1 = stringTwo.charAt(0);
    var b2 = stringTwo.charAt(1);

    var newOne = b1 + b2 + stringOne.slice(2, stringOne.length);
    var newTwo = a1 + a2 + stringTwo.slice(2, stringTwo.length);
    
    console.log(newOne + " " + newTwo);

};

mixUp("Hello", "World");


//FixStart
var fixStart = function(str) {
	
	var firstOne = str.charAt(0);
	var result = str;
	for (var i=1; i < str.length; i++) {
	    if (str[i] === firstOne) {
	        result = result.substring(0,i) + '*' + result.substring(i+1);
	    }
	}
	console.log(result);
};

fixStart('babble');


//Verbing
var verbing = function(str) {

	if( str.length > 2 ) {
		var last = str.substring(str.length-3, str.length);
		if ( last == 'ing') {
			
			str = str + 'ly';
		}
		else {
			str = str + 'ing';
		}
	}
	console.log(str);
};

verbing('going');
verbing('go');
verbing('got');

//NotBad
var notBad = function(str) {
	
	var notIndex = 0; var badIndex = 0;

	notIndex = str.indexOf("not");
	badIndex = str.indexOf("bad");

	if (( notIndex > 0) && (badIndex > 0)) {
		if (badIndex - notIndex > 0) {
			var len = str.length - notIndex;
			var firstPart = str.substr(0, len+1);
			str  = firstPart + " good!";
		}
	}
	console.log(str);
};

notBad('This dinner is not that bad!');
notBad('This dinner is bad!');

