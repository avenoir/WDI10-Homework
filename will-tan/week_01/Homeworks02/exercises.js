// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function(num)
{
	return num * num;
};

console.log("The result of squaring the number 3 is " + squareNumber(3));




// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function(num)
{
	return num / 2;
};

console.log("Half of 5 is " + halfNumber(5));




// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function(num1, num2)
{
	return ( num1 / num2 ) * 100;
};

console.log("2 is " + percentOf(2, 4) + "% of 4");




// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var areaOfCircle = function(radius)
{
	return (Math.PI * radius * radius).toFixed(2);
};

console.log("The area for a circle with radius 2 is " + areaOfCircle(2));;

// Tips: 
// var number = 1.511;

// number = +number.toFixed(2);
// console.log(number);


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var combinedFunction = function(num)
{
	var result1 = halfNumber(num);
	console.log("Half of " + num + " is " + result1);

	var result2 = squareNumber(result1);
	console.log("Squaring " + result1 + " is " + result2);

	var result3 = areaOfCircle(result2);
	console.log("Area of a circle with radius " + result2 + " is " + result3);

	var result4 = percentOf(result3, squareNumber(result3));
	console.log(result3 + " is " + result4 + "% of " + "squared of " + result3);
};

combinedFunction(3);