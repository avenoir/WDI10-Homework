// console.log("hello");

// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function(amount) {
	if (amount === 1000000) {
		return amount + " dollars (pinky)";
	} else {
		return amount + " dollars";
	}
}
console.log(DrEvil(1000000));
console.log(DrEvil(50));

// MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(s1, s2) {
	//var s1Len = s1.length
	//var s2Len = s2.length
	var newString1 = s2.slice(0,2) ;
	var newString2 = s1.slice(2,s1.length)
	var newString3 = s1.slice(0,2) ;
	var newString4 = s2.slice(2, s2.length);
	return newString1 + newString2 + " " + newString3 + newString4;
	
}

console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"))


// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

var fixStart = function(string) {
	var firstChar = string.slice(0,1);
	var endString = string.slice(1,string.length);
	var replace = endString.replace(new RegExp(firstChar, 'g'), "*");
	var newString = firstChar.concat(replace);
	console.log(newString);
}

fixStart('babble');


// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

var verbing = function(str){
	if ((str.length >= 3) && (str.lastIndexOf("ing") === (str.length - 3))) {
		str = str.concat("ly");

	} else if (str.length >=3) {

		str = str.concat("ing");
	} 
		return str;
	}


   console.log(verbing('swim'))
   console.log(verbing('swimming'))
   console.log(verbing('go'))



// Not Bad

// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:


var notBad = function(str){
	var not = str.indexOf("not");
	var bad = str.indexOf("bad");
	var lengthNotBad = bad + 3 - not;

	if ((not === -1 || bad  === -1) || (bad - not) > 13) {
		console.log(str);
		return str;
	}

	if (bad >= (not + 4)) {
		var newStart = str.substring(0, not);
		var newEnd = str.substring(not + lengthNotBad, str.length);
		var newString = newStart.concat("good",newEnd);
		console.log(newString);
		return newString;
	} 
}

notBad('This dinner is not that bad!'); //: 'This dinner is good!'
notBad('This movie is not so bad!');// : 'This movie is good!'
notBad('This dinner is bad!'); //: 'This dinner is bad!'
notBad("I'm not so sure this dinner is bad!");
