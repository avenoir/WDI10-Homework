// The Calculator

//Write a function called squareNumber that will take one argument (a number), 
//square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

squareNumber = function(num) {
	var result = num * num;
	var message("The result of squaring the number " + num + " is " + result)
	console.log(message);
}

squareNumber(3)

// Write a function called halfNumber that will take one argument (a number), 
// divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

halfNumber = function(num) {
	var result = num / 2;
	var message ("Half of " + num + " is " + result);
	console.log(message);
}

halfNumber(10)

// Write a function called percentOf that will take two numbers, 
// figure out what percent the first number represents of the second number, and return the result. 
// It should also log a string like "2 is 50% of 4."

percentOf = function(num1, num2) {
	var result = (num1 / num2) * 100;
	var message(num1 + " is " + result + "% of " + num2);
	console.log(message);
}

percentOf(6, 8);

// Write a function called areaOfCircle that will take one argument (the radius), 
// calculate the area based on that, and return the result. It should also log a string 
// like "The area for a circle with radius 2 is 12.566370614359172."

areaOfCircle = function(radius) {
	var result = (Math.PI * (radius * radius));
	var message("The area for a circle with radius " + radius + " is " + result)
	console.log(message);
}

areaOfCircle(3);

// Write a function that will take one argument (a number) and perform the following operations, 
// using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var shoe = halfNumber(10)



// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
