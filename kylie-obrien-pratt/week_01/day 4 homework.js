// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
	length: 4,
	width: 4
};

var badRectangle = {
	length: 5,
	width: 5
};

var isSquare = function (shape) {
	if (shape.length === shape.width) {
		return true;
	} else {
		return false;
	}
};

console.log("We passed in: ", rectangle, ". It should be true!", isSquare(rectangle));

// Area of rectangle


var rectangle = {
	length: 4,
	width: 4
};

var area = function(shape){
	return shape.length * shape.width;
}


console.log("We passed in rectangle, ", rectangle, " the area should be 16 ", area(rectangle));
console.log("We passed in rectangle, ", badRectangle, " the area should be 16 ", area(badRectangle));


// Perimeter - returns the perimeter of the rectangle
// 0. What type of data - function that 
// 1. Inside function I need to work out perimeter of rectangle
	// add the width times 2 and the height times 2
// Return perimeter



var perimeter = function (shape) {
		return (shape.length * 2) + (shape.width * 2);
};

console.log("We passed in rectangle, ", rectangle, " the perimeter should be 16 ", area(rectangle));
console.log("We passed in rectangle, ", badRectangle, " the perimeter should be 18 ", area(badRectangle));


// Part 2: The Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
// sideA: 3,
// sideB: 4,
// sideC: 4
// };

// isEquilateral - Returns whether the triangle is equilateral or not

var triangle = {
	sideA: 4,
	sideB: 4,
	sideC: 4
	};

var badTriangle = {
	sideA: 3,
	sideB: 4;
	side: 4;
};

var isEquilateral = function (shape) {
	if (shape.sideA === shape.sideB) && (shape.sideB === shape.sideC) {
		return true;
	} 
		return false;
};

console.log("We passed in: ", triangle, ". It should return true.", isEquilateral(triangle));
console.log("We passed in: ", badTriangle, ". It should return false.", isEquilateral(badTriangle));

// isIsosceles - Returns whether the triangle is isosceles or not

var isIsosceles = function(shape) {
	if (!isEquilateral(shape) && (shape.sideA === shape.sideB || shape.sideA === shape.sideC || shape.sideB ==== shape.sideC)) {
		return true;
	}
	return false;
}

// Area

// Use herons formula?

	// (height * base) / 2

var triangle = {
	length: 4,
	width: 4
};

var height = function() {

}

var area = function(shape){
	return (shape.length * shape.width) / 2;
}


console.log("We passed in rectangle, ", rectangle, " the area should be 16 ", area(rectangle));
console.log("We passed in rectangle, ", badRectangle, " the area should be 16 ", area(badRectangle));

// isObtuse - Returns whether the triangle is obtuse or not


// Javascript Bank

var accounts = [
	{accountNo: 1, balance: 200, ownerName: "Joseph Heller"},
	{accountNo: 2, balance: 3000, ownerName: "John Brown"},
	{accountNo: 3, balance: 100000, ownerName: "John Smith"}
	];

for (var = 0; i < accounts.length; i++) {
	var totalBalance = accounts[i];
	// if (totalBalance.alreadyRead === true) {
	// console.log("You've already read " book.title + " by " + book.author);
	} else {
	// console.log("You still need to read " book.title + " by " + book.author);
	}
}



// if bank.accounts(i).currentBalance >= currentBalance {
// bank.accounts[].currentBalance += transferAmount;
// }
// } else { 
// console.log don't have enough money
// transferFlag = false}
// depositCanProceed === true or false
// transferCanProceed === true or false



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
