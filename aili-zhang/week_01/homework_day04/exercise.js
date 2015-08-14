//====================Geometry Function Lab============================

// Part 1, Rectangle

var rectangle = {
	length : 4,
	width : 4 
};


// check if the length and width are equal
var isSquare = function(rec){
	if (rec.length === rec.width){
		return true;
	} else {
		return false;
	}
};
console.log(isSquare(rectangle));


var area = function(rec){
	return rec.length * rec.width;
};
console.log(area(rectangle));


var perimeter = function(rec){
	var result = rec.length * 2 + rec.width * 2;
	return result;
};
console.log(perimeter(rectangle));



// Triangle

var triangle = {
	sideA : 3,
	sideB : 4,
	sideC : 4
};


// only when all three sides are equal, it is an equilateral triangle
var isEquilateral = function(tria){
	if ((tria.sideA === tria.sideB) && (tria.sideB === tria.sideC)){
		return true;
	} else {
		return false;
	}
};
console.log(isEquilateral(triangle));


var isIsosceles = function(tria){

	// if it is an equilateral triangle, it is definitely an isosceles triangle as well.
	if(isEquilateral(tria)){ 
		return true;

	// if it is not an equilateral triangle, check if it is isosceles (two sides are equal)
	} else {
		if ((tria.sideA === tria.sideB) || (tria.sideA === tria.sideC) || tria.sideB === tria.sideC){
			return true;
		}else{
			return false;
		}
	}
};

console.log(isIsosceles(triangle));



//===========================Homework==================================

// Javascript Bank

var bank = {

	// array to store new object account, empty by default
	accounts : [],

	// function that takes a number as an argument, return the balance of the account which has the index of that number.
	showBalance : function(acc){ 
		return bank.accounts[acc].balance;
	},

	// function that add the amount to the specific account
	deposit : function(acc, amount){
		return (bank.accounts[acc].balance += amount);
	},

	// function that withdraw the amount from the specific account
	withdraw : function(acc, amount){

		// check if the user is trying to withdraw more than the available balance
		if (bank.accounts[acc].balance - amount >= 0){
			return (bank.accounts[acc].balance -= amount);
		} else {
			return "Sorry! You cannot withdraw more than your balance";
		}
	},

	// function to add a new account, it returns the index of the the new account in the array
	addAccount : function(specificAcc){

		// when add an element to an array, it returns the new length of the array. If we want the index of that new element, we need to return that number minus 1
		return (bank.accounts.push(specificAcc) - 1);
	},

	// function to get the total amount of all accounts' balance
	getSum : function(){
		var sum = 0;
		for(var i = 0; i < bank.accounts.length; i++){
			sum += bank.accounts[i].balance;
		}
		return sum;
	}
};

// create an account object
var newAccount = {
	owner : "Aili",
	balance : 100
};

// get the position of the newAccount in the array
var index = bank.addAccount(newAccount); 


console.log("The account holder: " + bank.accounts[index].owner + " has balance of " + bank.accounts[index].balance + " in the bank.");

bank.deposit(index, 50);

console.log("The account holder: " + bank.accounts[index].owner + " has balance of " + bank.accounts[index].balance + " in the bank.");

bank.withdraw(index, 80);

console.log("The account holder: " + bank.accounts[index].owner + " has balance of " + bank.accounts[index].balance + " in the bank.");

console.log("The bank has the total balance of " + bank.getSum());


console.log(bank.withdraw(index, 80));






