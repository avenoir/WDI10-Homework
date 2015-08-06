console.log("-- Thursday's Homework ---");


/* Part 1, Rectangle

USING SEPRATE FUNCTIONS OUTSIDE OF THE OBJECT

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};
*/

var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function(r) {
	if (r.length = r.width) {
		return true;
	} else {
		return false;	
	};
};

var area = function(r) {
	return r.length * r.width;
};

var perimeter = function(r) {
	return (r.length + r.width) * 2;
};

console.log("Is it a square? :" + isSquare(rectangle));
console.log("It's area is :" + area(rectangle));
console.log("It's perimeter is :" + perimeter(rectangle));


/* Part 2, Triangle

USING SEPRATE FUNCTIONS OUTSIDE OF THE OBJECT

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function(t) {
	// The three sides of any equilateral triangle are equal.
	if ( ( t.sideA === t.sideB) && ( t.sideA === t.sideC ) ) {
		return true;
	} else {
		return false;
	};
};

var isIsosceles = function(t) {
	// A triangle with two equal sides
	if ( ( t.sideA === t.sideB) || ( t.sideA === t.sideC ) || ( t.sideB === t.sideC ) ) {
		return true;
	} else {
		return false;	
	};
};

var area  = function(t) {
	// Best Answer:  1. Read three sides (a,b,c) 
	// 2. calculate s=(a+b+c)/2 
	// 3. calculate area=sqrt(s*(s-a)*(s-b)*(s-c)) 
	// 4.print area 
	var s = ( t.sideA + t.sideB + t.sideC ) / 2;
	var area = Math.sqrt( s * ( s - t.sideA ) * ( s - t.sideB ) * ( s - t.sideC ) );
	return area;
};

var isObtuse = function(t) {
	// An obtuse triangle is one with one obtuse angle (greater than 90°) and two acute angles. 
	// Since a triangle's angles must sum to 180°, no triangle can have more than one obtuse angle.
	//
	// So in we want to :
	// Take the 2 shortest sides. Let us assume they are X and Y. 
	// Now if Z^2 > (X^2+ Y^2) then the triangle is obtuse!

	var Short1,short2,longSide; 
	if ( (t.sideA > t.sideB ) && (t.sideA > t.sideC) ) {
		short1 = t.sideB;
		short2 = t.sideC;
		longSide = t.sideA;
	} else if ( (t.sideB > t.sideA ) && (t.sideB > t.sideC) ) {
		short1 = t.sideA;
		short2 = t.sideC;
		longSide = t.sideB;
	} else {
		short1 = t.sideA;
		short2 = t.sideB;
		longSide = t.sideC;
	}

	if (longSide * longSide > (short1 * short1 + short2 * short2)) {
		return true;
	} else{
		return false;	
	}

};

console.log("The triangle is equilateral : " + isEquilateral(triangle));
console.log("The triangle is isosceles : " + isIsosceles(triangle));
console.log("The area is : " + area(triangle));
console.log("The triangle is obtuse : " + isObtuse(triangle));


/*

USING FUNCTIONS INSIDE AN OBJECT

JavaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

Tips

Don't overthink this. Shorter code is probably the answer.

Bonus

Ensure that the accounts cannot have negative values.
Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

*/


var bank = {  
	accounts: [],
	returnBalance: function(a) 	{ return bank.accounts[a].balance },
	addAccount: function(a) 	{ return bank.accounts.push(a) - 1 },     // Adds an account and returns account number
 	deposit: function(a, amt)	{ bank.accounts[a].balance += amt  },
 	withdraw: function(a, amt)	{ bank.accounts[a].balance -= amt }
}

// Setup Guy's account and do a deposit and withdrawal
var newAccountnum = bank.addAccount( { ownersName:"Guy", balance:5 } );
console.log( bank.accounts[newAccountnum].ownersName + " currently has " + bank.returnBalance(newAccountnum) + " dollars." );

bank.deposit(newAccountnum,2);
console.log( bank.accounts[newAccountnum].ownersName + " currently has " + bank.returnBalance(newAccountnum) + " dollars." );

bank.withdraw(newAccountnum,3);
console.log( bank.accounts[newAccountnum].ownersName + " currently has " + bank.returnBalance(newAccountnum) + " dollars." );

// Setup Aili's account and do a deposit and withdrawal
var newAccountnum = bank.addAccount( { ownersName:"Aili", balance:10 } );
console.log( bank.accounts[newAccountnum].ownersName + " currently has " + bank.returnBalance(newAccountnum) + " dollars." );

bank.deposit(newAccountnum,2);
console.log( bank.accounts[newAccountnum].ownersName + " currently has " + bank.returnBalance(newAccountnum) + " dollars." );

bank.withdraw(newAccountnum,3);
console.log( bank.accounts[newAccountnum].ownersName + " currently has " + bank.returnBalance(newAccountnum) + " dollars." );






