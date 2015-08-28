/*
Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

var DrEvil = function (amount){
	if(amount === 1000000){
		return amount + " " + "dollars" + "(pinky)"
	}
	else {
		return amount + " " + "dollars"
	}
}

console.log(DrEvil(10000))

/*
Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

var mixUp = function(a, b){
	var strA = a.substring(0,2);//takes first two char of a
	var strB = b.substring(0,2);//^^^^^^^^^^^^^^^^^^^^ of b 
	var endA = a.substring(2, a.length);
	var endB = b.substring(2, b.length);
	
	var aNewStr = strA + endB;
	var bNewStr = strB + endA;

	return aNewStr + " and " + bNewStr;
};

console.log(mixUp("apple","pear"))

/*
Create a function called fixStart. It should take a single argument, a string, 
and return a version where all occurences of its first character have been replaced with '*', 
except for the first character itself. You can assume that the string is at least one character long. 

For example:
fixStart('babble'): 'ba**le'
*/
var fixStart = function(string) {
    var firstChar = string.slice(0,1);
    var endString = string.slice(1,string.length);
    var replace = endString.replace(new RegExp(firstChar, 'g'), "*");
    var newString = firstChar.concat(replace);
    console.log(newString);
}

fixStart('babble');

/* 
Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
*/

var verbing = function(verb){
	if (verb.length >= 3 && verb.endsWith("ing") === false){ //endsWith is a ES6 function only works in chrome.
		var newStrNg = verb.concat('ing')
		return newStrNg;
	} else if (verb.endsWith('ing') === true) {
		var newStrLy = verb.concat('ly')
		return newStrLy
	} else {
		return verb;
	}
}

console.log(verbing('run'))

/*
Not Bad

Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
  */

  var notBad = function (word){
  	var not = word.indexOf[0]
  	var bad =  


  }


