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


// Calculates the sum of money of all accounts in bank
var bankReserves = function(bank){
	var sum = 0;

	for (var i = 0, n = bank.accounts.length; i < n; i++) {
		sum = sum + bank.accounts[i].balance;
	}
	
	return sum;
};

// Appending new account to array of bank accounts
var addNewAccount = function(account, bank){
	bank.accounts.push(account);
};

// Update bank account balance when a deposit is made
var deposit = function(depositAmount){
	this.balance = this.balance + depositAmount;
};

// Update bank account balance when a withdrawal is made
var withdraw = function(withdrawAmount){
	if(withdrawAmount > this.balance) { // does nothing if account has zero balance
		console.log("Not enough funds to complete this transaction");
		return false;
	} else {
	this.balance = this.balance - withdrawAmount;
	return true;
	}
};

// Transfer funds from Account A to Account B and update their balances
var fundsTransfer = function(transferAmount, accountA, accountB){
	if(this.accounts[accountA].balance < transferAmount){
		console.log("Not enough funds to complete this transaction");
	} else {
		this.accounts[accountA].withdraw(transferAmount);
		this.accounts[accountB].deposit(transferAmount);
	}
};

// Bank Object with 4 key-value pairs
var bank = {
	accounts: [ { name: "Will", balance: 1000, deposit, withdraw }, { name: "Nico", balance: 5000, deposit, withdraw } ],
	totalSum: bankReserves,
	addAccount: addNewAccount,
	transfer: fundsTransfer
};

console.log("There are two accounts in a new bank, Bank ABC. They are held by customers called Will and Nico.");

console.log(bank.accounts[0].name + " has $" + bank.accounts[0].balance + " in the bank");
console.log(bank.accounts[1].name + " has $" + bank.accounts[1].balance + " in the bank");

console.log("Will makes a $2500 deposit into his account");
bank.accounts[0].deposit(2500);

console.log("Nico withdraws $400 from his account");
bank.accounts[1].withdraw(400);

console.log("Now, Will's account has balance of " + bank.accounts[0].balance);
console.log("Now, Nico's account has balance of " + bank.accounts[1].balance);

console.log("Nico decides to transfer $100 to Will because Will is poor");
bank.transfer(100, 1, 0);

console.log("Now, Will and Nico's account balances are as follows:");
console.log(bank.accounts[0].balance);
console.log(bank.accounts[1].balance);

console.log("Joel, a new customer joins the bank");
bank.addAccount({ name: "Joe", balance: 100000000, deposit, withdraw }, bank);
console.log(bank.accounts[2]);

console.log("The bank now has an influx of cash reserves");
console.log(bank.totalSum(bank));

console.log("Joel decides to transfer $200,000,000 to help Will's dying cat.");
bank.transfer(200000000, 2, 0);

console.log("Joel decides to try again and transfer only $99,999,999 to help Will's dying cat.");
bank.transfer(99999999, 2, 0);
console.log("Now, Will, Nico and Joe's account balances are as follows:");
console.log(bank.accounts[0].balance);
console.log(bank.accounts[1].balance);
console.log(bank.accounts[2].balance);

console.log("Thanks, Joel");

//bank.accounts[0].deposit(5, bank.accounts[0]); //ignore this line, this is just a reminder of my logic
