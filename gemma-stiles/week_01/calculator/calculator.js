console.log('TEST TEST TEST');

// The Calculator
// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function(number) {
	var multiple = (number * number);	
	console.log("The result of squaring the number "+ number + " is " + multiple);
	return multiple;
}

squareNumber(2);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function(number) {
	var half = (number / 2);
	console.log("Half of " + number + " is " + half);
	return half;
 }

halfNumber(20);


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function(a, b) { 
	var percent = ((a / b) * 100);
	console.log((a + " is " + percent + "% of " + b));
	return percent;
}

percentOf(5, 10);


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

var areaOfCircle = function(radius) {
	var area = Math.PI * radius * radius;
	console.log("The area for a cirlce with a radius of " + radius + " is " + area);
	return area;
}

areaOfCircle(12);


// Bonus: Round the result so there are only two digits after the decimal.

var twoDecimalPlace = function(areaOfCircle) {
	var result = areaOfCircle.toFixed(2);
	console.log(result);
}

twoDecimalPlace(452.3893421169302);

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


var multiFunction = function(number) {
	var halfMe = halfNumber(number);
	var squareMe = squareNumber(halfMe);
	var areaCircMe = areaOfCircle(squareMe);
	var percentMe = percentOf(squareMe, areaCircMe);
	return percentMe;
}	

multiFunction(20);

// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function(amount) {
	if (amount ===1000000) {
		console.log(amount + " dollars (pinky) ");
	}
	else {
		console.log(amount + " dollars");
	}
}

DrEvil(1000000);


// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!


// var mixUp = function(wordOne, wordTwo) {
// 	var = string! = b.slice(0, 2) + a.slice(2, (a.length));
	
// }




// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// fixStart('babble'): 'ba**le'



// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'


// var verbing = function (string) {
// 	var str;

// 	if (string === 1) {
// 		console.log 
// 		return string
// 	}
// 	else if {
// 		str = count + ' ' + noun + 's'; // 2 dogs
// 	}

// 	return str;
// };

// console.log(pluralise());
// console.log(pluralise(');
// console.log(pluralise());

// Not Bad
// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'






































