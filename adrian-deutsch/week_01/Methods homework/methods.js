// Geometry Function Lab
// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not
//0. what type of data? - we need a function that works with an object
//1. inside function I need to check whether the length and width of the rectangle are equivalent
//2. return true or false


var rectangle = {
  	length: 4,
  	width: 4
};

var badRectangle = {
	length: 5,
	width: 4
};



var isSquare = function (shape) {
	if (shape.length === shape.width) {
		return true;
	} else {
		return false;
	}
};

console.log("We passed in: ", rectangle, ".  It should be true!",  isSquare(rectangle));
console.log("We passed in: ", badRectangle, ".  It should be false!",  isSquare(badRectangle));


// area - Returns the area of the rectangle
//0. what type of data? - we need a function that works with an object 
//1. inside function I need to multiply length by width
//2. return the area

var area = function (shape) {
	return shape.length * shape.width;
}

console.log("We passed in: ", rectangle, ".  the area should be 16", area(rectangle));
console.log("We passed in: ", badRectangle, ". the area should be 20", area(badRectangle));



// perimeter - Returns the perimeter of the rectangle
//0. what type of data? - we need a function that works with an object 
//1. inside function I need to work out the perimeter of rectangle
	// add the width x 2  and the height x 2
//2. return perimter

var perimeter = function (shape) {
	return (shape.length * 2) + (shape.width * 2);
};


console.log("We passed in: ", rectangle, ".  the perimeter should be 16", perimeter(rectangle));
console.log("We passed in: ", badRectangle, ". the perimeter should be 18", perimeter(badRectangle));




// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

var triangle = {
  	sideA: 4,
  	sideB: 4,
  	sideC: 4
};

var badTriangle = {
	sideA: 3,
	sideB: 4,
	sideC: 4
};

var crazyTriangle = {
	sideA: 10,
	sideB: 5,
	sideC: 4,
};

// isEquilateral - Returns whether the triangle is equilateral or not
//0. what type of data? - we need a function that works with an object 
//1. need to work out whether all 3 sides are the same length
	// are sides A, B and C equal?
//2. return true or false 


var isEquilateral = function (shape) {
	if (shape.sideA === shape.sideB && shape.sideB === shape.sideC) {
		return true;
	}
	return false;
};

console.log("We passed in: ", triangle, ". It should return true", isEquilateral(triangle));

console.log("We passed in: ", badTriangle, ". It should return false", isEquilateral(badTriangle));


// isIsosceles - Returns whether the triangle is isosceles or not
//0. what type of data? - we need a function that works with an object 
//1. need to find out if 2 sides and 2 sides only are equal
	// using the isEquilateral function 
	// we need to check whether sideA is equal to sideB or sideB is equal to sideC or sideA is equal to sideC
//2. return true or false


var isIsosceles	= function (shape){
	if (!isEquilateral(shape) && (shape.sideA === shape.sideB || shape.sideA === shape.sideC || shape.sideB === shape.sideC)){
		return true;
	}
	return false;
};

console.log("We passed in: ", triangle, ". It should return false", isIsosceles(triangle));

console.log("We passed in: ", badTriangle, ". It should return true", isIsosceles(badTriangle));


// area - Returns the area of the Triangle
//0. what type of data? - we need a function that works with an object 
//1. need to work out area of triangle
	//we need to work out the semi perimiter of shape
	// apply Heron's formula to shape
//2. return the area



var triangleArea = function (shape) {

	var s = ((shape.sideA + shape.sideB + shape.sideC) / 2);

	return Math.sqrt(s *(s- shape.sideA)*(s - shape.sideB)*(s- shape.sideC));
};


console.log("We passed in: ", triangle, ". It should return an area of", triangleArea(triangle));
console.log("We passed in: ", badTriangle, ". It should return an area of", triangleArea(badTriangle));

// isObtuse - Returns whether the triangle is obtuse or not
//0. what type of data? - we need a function that works with an object 
//1. need to work out how to find whether obtuse or not
	//obtuse triangle has one angle greater then 90 degrees
//2. need to find two angles of a triangle
	//use Math.cos()
//3. return true or false




var isObtuse = function (shape) {

	// var angleA = Math.acos(((shape.sideB * shape.sideB) + (shape.sideC * shape.sideC) − (shape.sideA * shape.sideA)) / (shape.sideB * shape.sideC * 2));

	// var angleB = Math.acos(((shape.sideC * shape.sideC) + (shape.sideA * shape.sideA) − (shape.sideB * shape.sideB)) / (shape.sideA * shape.sideC * 2));

	// var angleC = 180 - angleA - angleB;

	var angleA = Math.acos( ( ( shape.sideB * shape.sideB ) + ( shape.sideC * shape.sideC ) - ( shape.sideA * shape.sideA ) ) / 2 * shape.sideB * shape.sideC );

    var angleB = Math.acos( ( ( shape.sideA * shape.sideA ) + ( shape.sideC * shape.sideC ) - ( shape.sideB * shape.sideB ) ) / 2 * shape.sideA * shape.sideC );

    var angleC = 180 - angleA - angleB;


	if (angleA > 90) {
		return "angleA is obtuse";
	}
	else if (angleB > 90) {
		return "angleB is obtuse";
	}
	else if (angleC > 90) {
		return "angleC is obtuse";
	}
	else {
		return "This is not an obtuse triangle!";
	}

}; 

console.log("We passed in: ", triangle, ". ", isObtuse(triangle));
console.log("We passed in: ", badTriangle, ". ", isObtuse(badTriangle));
console.log("We passed in: ", crazyTriangle, ". ", isObtuse(crazyTriangle));



// Raw  js-homework-5.md
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.


//0. we know there is one bank and many accounts
//3. accounts need owner's name and balance
//2. we also need a method to add new accounts to the Bank
//1. we will need a method that returns total sum of all account balances


//4. we need a way to change account balances

//5. comment our code clearly to show workings
//6. test our functions

var bank = [

	{name: "Gemma",
	balance: 1000
	},

	{name: "Vivienne",
	balance: 999
	},

	{name: "Adrian",
	balance: 998
	},

	{name: "Vivian",
	balance: 997
	},

	{name: "Daniel",
	balance: 1001
	},

];

var newAccount = function (nam, bal){
	bank.push({ name: nam, balance: bal });
	};


var totalBalance = function(accounts){
    var total = 0; 
     for (var i = 0; i <accounts.length; i++){
    total += accounts[i].balance;
     } 
     return console.log(total);
}

// we want to add to an existing balance

var depositAmount = function (accountName, deposit){
	//loop through bank, for loop i less than bank array, if the current elements name is equal to name when depositing 
	for (var i = 0; i < bank.length; i ++){
		if (bank[i].name === accountName) {
			return bank[i].balance += deposit;
		}
	}
};


var withdrawlAmount = function (accountName, withdrawl){
	//loop through bank, for loop i less than bank array, if the current elements name is equal to name when depositing 
	for (var i = 0; i < bank.length; i ++){
		if (bank[i].name === accountName) {
			return bank[i].balance -= withdrawl;
		}
	}
};



console.log(bank);
console.log(totalBalance(bank));

newAccount("Joe", 17);
newAccount("Ricky", 2000);

console.log(bank);
console.log(totalBalance(bank));

console.log(bank[0]);
console.log(depositAmount("Gemma", 10));

console.log(bank[0]);
console.log(withdrawlAmount("Gemma", 10));




// Tips

// Don't overthink this. Shorter code is probably the answer.

// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional

// Begin exploring the JavaScript Koans. Fork, clone and start trying them.