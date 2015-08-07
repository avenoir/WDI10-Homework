//CALCULATOR PART 1

/*Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."*/

var squareNumber = function (num){
	var square = num * num;
	return "The result of squaring the number " + num + " is " + square;
};
console.log(squareNumber(5));

/*Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".*/

var halfNumber = function (num) {
	var result = num / 2;
	return "Half of " + num + " is " + result;
};
console.log(halfNumber(5));

/*Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."*/

var percentOf = function (num1, num2){
var percent = num1/num2 * 100;
return num1 + " is " + percent + "% of " + num2; 
};
console.log(percentOf(2, 4));

//!!!!!!

/*Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."*/

var areaOfCircle = function (radius){
	var area = Math.PI * radius * radius;
	var roundedArea = Math.round(area * 100) / 100
	return "The area for a circle with radius " + radius + " is " + roundedArea;
};
console.log(areaOfCircle(5));


/*Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).*/

var masterFunction = function (number){
	var newHalf = halfNumber(number);
	var newSquare = squareNumber(newHalf);
	var newArea = Math.PI * newSquare * newSquare;
	var newPercentage = percentOf(newArea, newSquare);
};


/*Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)*/


var drEvil = function(amount){
	if (amount===1000000){
		return "Dr Evil (" + amount + "): " + amount + " dollars (pinky)";
	}
	else {
		return "Dr Evil (" + amount + "): " + amount + " dollars";
	}
};


console.log(drEvil(1000000));
console.log(drEvil(10));


/*Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!*/



var mixUp = function(string1, string2){


	/*(var string1Sliced1 = string2.slice(0,2);
	var string1Sliced2 = string1.slice(2, string1.length);

	var string2Sliced1 = string1.slice(0,2);
	var string2Sliced2 = string2.slice(2, string2.length);

	return string1Sliced1 + string1Sliced2 + " " + string2Sliced1 + string2Sliced2;
};*/

  return string2.slice(0, 2) + string1.slice(2) + " " + string1.slice(0, 2) + string2.slice(2);
};

console.log(mixUp("Roses", "Violets"));


/*Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:*/
//word.length        slice(-3)

var verbing = function (word) {
  if (word.length < 3) {
  	return word;
  }
 else if (word.slice(-3) === 'ing') {
    return word + 'ly';
  } else {
    return word + 'ing';
  }
};

console.log(verbing('rocket'));


