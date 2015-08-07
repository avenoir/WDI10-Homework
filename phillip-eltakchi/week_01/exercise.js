// The Calculator
// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var squareNumber = function(numb){
	var square = numb * numb;
	return square;
}

console.log(squareNumber(4));

var halfNumber = function(numb){
	var half = numb / 2;
	return half;
}

console.log(halfNumber(10));

var percentOf = function(num1, num2){
	var perc = (num1 / num2) * 100;
	perc = Math.round(perc);
	return num1 + " is " + perc + "% of " + num2;
}

console.log(percentOf(40,120));

var areaOfCircle = function(radius){
	var area = Math.PI * (radius * radius);
	area = area.toFixed(2);
	return area;
}

console.log(areaOfCircle(10));


// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var calcy = function(numb){
	
	var halfMe = halfNumber(numb);
	var squareMe = squareNumber(halfMe);
	var areaC = areaOfCircle(squareMe);
	var percI = percentOf(squareMe, areaC);
	return percI;
}


console.log(calcy(10));



// Strings
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function(amt){
	if (amt < 1000000) {
		return amt + " dollars";
	}  else {
		return amt + " dollars (pinky)"; }
}

console.log(DrEvil(50));
console.log(DrEvil(1000000));


// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(str1, str2){
	var word1 = str1.slice(0,2);
	var word1last = str1.slice(2, str1.length);
	var word2 = str2.slice(0,2);
	var word2last = str2.slice(2, str2.length);
	return word1 + word2last + " " + word2 + word1last;
}


console.log(mixUp("mix","pod"));
console.log(mixUp("dog", "dinner"));
console.log(mixUp("xxoooo", "ooxxxxx"));


// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// fixStart('babble'): 'ba**le'


var fixStart = function(name){

var slicename = name.slice(1);
var firstLetter = name[0];
var repname = slicename.replace( new RegExp(firstLetter, 'g'), '*');

return (firstLetter + repname)
}

console.log(fixStart("babble"));





// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function(str){
	if (str.length > 3 && str.slice(-3) != "ing") {
		return str + "ing";} else if 
		(str.length > 3 && str.slice(-3) === "ing") {
		return str + "ly"; } else if 
		(str,length < 3) {
		return str;
	    }
}

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));



// Not Bad
// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

var notBad = function(str){
	var nots = str.search("not");
	var bads = str.search("bad");
	if (nots < bads && nots > 0){
		word1 = str.substring(nots, (nots+3));
		word2 = "good"
		sentence = str.slice(0, nots);
		return sentence + word2 + "!";
	} else {
		str = str;
		return str;
	}
}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
console.log(notBad('This train journey is not very bad!'));








