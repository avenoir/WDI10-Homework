var bank = 
	[{name: 'Chris Perkey', 
	acntbal: 10000}, 
	{name: 'Percival Jones', 
	acntbal: 23000}];

var totalHeld = 0;

var accountMan = {
	calcTotal: function() {
		for (var i=0; i < bank.length; i++) {
			totalHeld = (totalHeld + (bank[i].acntbal));
			console.log(totalHeld + ' in the bank currently.');
		}	
	},
	withdrawAmount: function (accountName, withdraw){
		for (var i = 0; i < bank.length; i++){
			if (bank[i].name === accountName){
				return bank[i].acntbal -= withdraw;
			}
		}
	},
	depositAmount: function(accountName, deposit){
		for (var i = 0; i < bank.length; i++){
			if (bank[i].name === accountName){
				return bank[i].acntbal += deposit;
			}
		}
	}
}

console.log(accountMan.calcTotal())
console.log(accountMan.depositAmount('Chris Perkey', 400) + '. Chris Perkey now has an additional 400')

//too update & calculate a new balance based on input would need me to store the current balance held by a particular person & add the new balance to that stored balance(stored in accounts[].acntbal).

// too add a new account i need to take an input for the new information of the account holder including name & acnt balance. this needs to then be pushed into the current array in correct format. unsure how to do this. i understand this is meant to be a done with a method within a object. this means to begin the process for this i would include within the newaccounts object a function which requires two inputs, a name & an account balance. once these are given the code needs to push these details in correct format to the original accounts array. ask for help with this.

//	addAccount: function(newName, newBal){
//		var newAccountHolder = "name:" + newName;
//		var newAccountBalance = "acntbal:" + newBal;
//		var newPushToAccounts = newAccountHolder + ''
//	





