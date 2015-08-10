//Geometry Function Lab
/*Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle*/

var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function (x) {
	var output;
	if (x.length === x.width) {
		output = true;
	} else {
		output = false;
	}

	return output;
}

var area = function (x) {
	var output = x.length * x.width;

	return output;
}

var perimeter = function (x) {
	var output = (x.length + x.width ) * 2;

	return output;
}

isSquare(rectangle);
area(rectangle);
perimeter(rectangle);


// Part 2, Triangle
/*Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not*/

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function (x) {
	var output;
	if (x.sideA === x.sideB && x.sideB === x.sideC) {
		output = true;
	} else {
		output = false;
	}
	return output;
}


var isIsosceles = function (x) {
	var output;
	if (x.sideA === x.sideB || x.sideA === x.sideC || x.sideB === x.sideC) {
		output = true;
	} else {
		output = false;
	}
	return output;
}

var area = function (x) {
	var output = (x.sideA + x.sideB + x.sideC) / 2;

	return output;
}

var isObtuse = function (x) {
	var output;
	if (!(x.sideA === x.sideB) && !(x.sideB === x.sideC)) {
		output = true;
	} else {
		output = false;
	}
	return output;
}


//JAVASCRIPT BANK
//Creates New Account - 
var createNewAccount = function (accountName, amount) {    
        		this.accounts.push({ 'name': accountName, 'balance': amount, deposit, withdraw});
        		return this.accounts;
				};

//Deposits Money
var deposit = function (x){
	return this.balance += x;
};
//Withdraw Money
var withdraw = function (x){
	return this.balance -= x;
};
//Get Total Sum of all Bank Accounts
var totalSum = function () {
	var sum = 0; 		
	this.accounts.forEach(function(x){ sum += x.balance});
	return sum;
};

// var transfer = function (sender, sAmount, reciever) {
// 	bank.accounts.forEach(function(x) { 
// 		if (x.name === sender){
// 			bank.accounts[x].withdraw(sAmount);
// 		}
// 	});
// }

var bank = {
	accounts: [{'name': 'Banker01', 'balance': 1000, deposit, withdraw},
			   {'name': 'Banker02', 'balance': 1000, deposit, withdraw}],
			   totalBankBalance: totalSum,
			   addAccounts: createNewAccount
};


console.log(bank);
console.log('ADDING ACCOUNT for Mr. Dog: ' + bank.addAccounts('dog', 5000));
console.log('ADDING ACCOUNT for Mr. Duck: ' + bank.addAccounts('duck', 100));
console.log('Total Bank Balance: ' + bank.totalBankBalance());
console.log('Depositing 5 Dollars to: ' + bank.accounts[0] + ' : ' + bank.accounts[0].deposit(5));
console.log('Total Bank Balance: ' + bank.totalBankBalance());
console.log('Withdrawing 200 Dollars from: ' + bank.accounts[1] + ' : ' + bank.accounts[1].withdraw(200));
console.log('Total Bank Balance: ' + bank.totalBankBalance());
console.log('Depositing 44 Dollars to: ' + bank.accounts[3] + ' : ' + bank.accounts[3].deposit(44));
console.log('Total Bank Balance: ' + bank.totalBankBalance());
console.log('Withdrawing 50 Dollars from: ' + bank.accounts[2] + ' : ' + bank.accounts[2].withdraw(50));
console.log('Total Bank Balance: ' + bank.totalBankBalance());
console.log(bank);



