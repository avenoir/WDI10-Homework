// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
// There is no need to write a user interface. Make sure functions return values - you may also have your functions console.log() values to help you see your code working.
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
// Tips
// Don't overthink this. Shorter code is probably the answer.

// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.


var bank = {
	accounts : [],
	totalSum : function() {
			var total = 0;
			for (var i = 0; i < bank.accounts.length; i++) {
				total += bank.accounts[i].currentBalance;
			};
			console.log("The total sum of money in all accounts is: " + total);
			return total;
	},
	addAccount : function(name, balance) {
			var newAccount = { 
				userName : name,
				currentBalance : balance
			};
			bank.accounts.push(newAccount);	
	},
	deposit : function(name, deposit) {
			for (var i = 0; i < bank.accounts.length; i++){
				var account = bank.accounts[i];
				if (account.userName === name) {
					account.currentBalance += deposit;
					console.log("New balance: " + account.currentBalance);
					return account.currentBalance;
					};
				};
	},
	withdrawal : function(name, withdrawal) {
			for (var i = 0; i < bank.accounts.length; i++){
				var account = bank.accounts[i];
				if (account.userName === name) {
					if (account.currentBalance - withdrawal < 0){
						console.log("Sorry, you have insufficient funds.")
					} else {
					account.currentBalance -= withdrawal;
					console.log("New balance: " + account.currentBalance);
					return account.currentBalance
					};
				};
			};
	},

	transfer : function(from, to, amount){ //realised this was much easier
		bank.withdrawal(from, amount);
		bank.deposit(to, amount);
			console.log(from + " has transferred $" + amount + " to " + to);		
	}
};


// Additional

// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

// transferBad : function(from, to, amount){ //first version of transfer
// 			for (var i = 0; i < bank.accounts.length; i++){
// 				var fromAccount = bank.accounts[i];
// 				if (fromAccount.userName === from) {
// 					for (var j = 0; j < bank.accounts.length; i++) {
// 						var toAccount = bank.accounts[j];
// 						fromAccount.currentBalance -= amount;
// 						toAccount.currentBalance += amount;
// 						console.log("Transfer from: " + fromAccount.userName + " to: " + toAccount.userName + " of $" + amount + " complete.");
// 						return;
// 						};
// 					}
// 				};
	
// };