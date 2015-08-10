console.log('TEST TEST TEST');

// Geometry Function Lab
// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:

// isSquare - Returns whether the rectangle is a square or not

	//0 - what type of data? - we need a function that works with an object
	//1 - inside function i need to check whether the length and width of the rectangle are equivelant
	//2 - return true or false




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
}

console.log(isSquare (rectangle));

console.log("we passed in: ", rectangle, ". It should be true!", isSquare(rectangle));
console.log("we passed in: ", badRectangle, ". It should be false!", isSquare(rectangle));



//area - Returns the area of the rectangle


	//0 - what type of data? we need a function that works with an object
	//1 - inside function I need to mutiply length by width
	//2 - return the are

var area = function (shape) {
	return shape.length * shape.width;
}

console.log("We passed in: ", rectangle, ". the area should be 16", area(rectangle));
console.log("We passed in: ", badRectangle, ". the area should be 20", area(badRectangle));

// perimeter - Returns the perimeter of the rectangle

	//0 - what type of data? we need a function that works with an object
	//1 - inside function I to work out the perimeter of rectangle
		// - add the width x 2 and the height x 2
	//2 - return the perimter

var perimeter = function (shape) {
	return (shape.length * 2) + (shape.width * 2)
}	

console.log("We passed in: ", rectangle, ". the perimeter should be 16", area(rectangle));
console.log("We passed in: ", badRectangle, ". the perimeter should be 20", area(badRectangle));



// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not

	//WHAT DOES EQUILATERAL MEAN - all sides the same length
	//0 - what type of data? we need a function that works with an object
	//1 - need to work out whether all three functions are the same length 
		// - add the width x 2 and the height x 2
			// - are sides, a, b and c all the same
	//2 - return true or false


var triangle = {
 	sideA: 4,
  	sideB: 4,
  	sideC: 4
};

var badTriangle = {
	sideA: 4,
	sideB: 4,
	sideC: 3,	
}

var crazyTriangle = {
	sideA: 10,
	sideB: 5,
	sideC: 4,
}

var isEquilateral = function (shape) {
	if (shape.sideA === shape.sideB && shape.sideA === shape.sideC) {
		return true
	} 
	return false;
}	

console.log("We passed in: ", triangle, ", this should be equilateral", isEquilateral(triangle));
console.log("We passed in: ", badTriangle, ", this should not be equilateral", isEquilateral(badTriangle));


// isIsosceles - Returns whether the triangle is isosceles or not

	//WHAT DOES ISOSCELES MEAN - only two sides are equal
	//0 - what type of data? we need a function that works with an object
	//1 - need to work out whether two sides the same length 
		// - using isEquilateral function 
			// - we need to check whether side a is equal to side b or side b is equal to side c, or side a is equal to side c
	//2 - return true or false

var isIsosceles = function (shape) {
	if (!isEquilateral(shape) && (shape.sideA === shape.sideB || shape.sideA === shape.sideC || shape.sideB === shape.sideC)) {
	return true;
	}
	return false;
}

console.log("We passed in: ", triangle, ", this should be an isosceles", isIsosceles(triangle));
console.log("We passed in: ", badTriangle, ", this should not be an isosceles", isIsosceles(badTriangle));


// area - Returns the area of the Triangle

	//HOW DO WE WORK OUT THE HEIGHT? 
	//0 - what type of data? we need a function that works with an object
	//1 - need to work out what the heigh is? 
			// - we need to check whether side a is equal to side b or side b is equal to side c, or side a is equal to side c
	//2 - return true or false


var areaTriangle = function(shape) {
	var s = ((shape.sideA + shape.sideB + shape.sideC) / 2);
	 return Math.sqrt(s * (s - shape.sideA) * (s - shape.sideB) * (s - shape.sideC));
};

console.log("We passed in: ", triangle, ", this should return an area of ", areaTriangle(triangle));
console.log("We passed in: ", badTriangle, ", this should return an area of", areaTriangle(badTriangle));



// isObtuse - Returns whether the triangle is obtuse or not

	//WHAT IS OBTUSE? An obtuse triangle has one angle greater than 90 degress
		//0 - what type of data? we need a function that works with an object
		//1 - need to work out if obtuse or not
			// - need to find to angles or a triangle - then work out the third?
				// - use Math.cos()
		//2 - return true or false

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


	// JavaScript Bank
	// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

	// Bank
	// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
	// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

	// Accounts
	// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
	// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
	// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

	// Tips
	// Don't overthink this. Shorter code is probably the answer.

	// Bonus
	// Ensure that the accounts cannot have negative values.
	// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.



	//1 - One bank and many accounts
	//2 - We know that we will need a method that returns total sum of all acount balances
	//3 - We will also need a method to new accounts to the bank
	//4 - Accouns have to be objects in an array
	//5 - Accounts need name and balance
	//6 - Accounts can be deposited into
	//7 - Accounts can be withdrawn from
	//6 - Lots of comments to show working
	//7 - Test our functions


var bank = [{
    accountName: "Daniel",
    balance: 20
}, {
    accountName: "Adrian",
    balance: 1000
}, {
    accountName: "Vivian",
    balance: 2000
}, {
    accountName: "Gemma",
    balance: 1500
}, {
    accountName: "Vivienne",
    balance: 1300
}];

var totalBalance = function(accounts){
    var total = 0; 
     for (var i = 0; i <accounts.length; i++){
    total += accounts[i].balance;
     } 
     return total;
}
console.log("The total bank balance is currently $", totalBalance(bank) + ".");


var depositAmount = function (person, deposit) {} 
	for (var i =0, i < bank.length; i++) {
		if (bank[i].name === accountName) {
			bank[i].balance += amount
		}
		return balance;
	}
//console.log()	



var newAccount = function(nam, bal) {
    bank.push({
        name: nam,
        balance: bal
    });
};

newAccount("Joe", 17);
newAccount("Ricky", 2000);




















