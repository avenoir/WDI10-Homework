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

var bank = { 
	acounts: [{name: "phill", balance: 1},
	{name: "david", balance: 2},
	{name: "alex", balance: 3},
	{name: "mimic", balance: 6}],

	totalMoney: function(acounts){
		var total = 0
		for (var i = 0; i < bank.acounts.length; i++){
			total = total + bank.acounts[i].balance; 
		}	 return "The total money in all acounts is " + total;
    }, 

    addAcount: function(accname, amt){ 
    	bank.acounts.push({name: accname, balance: amt});
    	console.log(bank.acounts);
    	return "New acount added - Name : " + accname + " - Balance : " + amt;
		
	},

    withDraw: function(aname, amt){
    	for (i = 0; i < bank.acounts.length; i++){
    		if (bank.acounts[i].name === aname){
    			bank.acounts[i].balance = bank.acounts[i].balance - amt;
                
                if (bank.acounts[i].balance >= 0){
                return bank.acounts[i].name + ", withdrawing " + amt + ", your remaining balance is " + bank.acounts[i].balance;} else {
                    bank.acounts[i].balance = bank.acounts[i].balance + amt;
                return aname + " I am sorry you have insufficient funds." + " You tried to withdraw " + amt + ", but you only have " + (bank.acounts[i].balance) ;

                }
   			}
    	}
    },

    deposit: function(aname, amt){
    	for (i = 0; i < bank.acounts.length; i++){
    		if (bank.acounts[i].name === aname){
    			bank.acounts[i].balance = bank.acounts[i].balance + amt;
    			return bank.acounts[i].name + ", depositing " + amt + ", your remaining balance is " + bank.acounts[i].balance;
   			}
    	}
    }, 
    
    transFer: function(name1, amt, name2){
        for (var i = 0; i < bank.acounts.length; i++ ) {
            if (name1 === bank.acounts[i].name){
                console.log(name1 + ", your current balance is " + bank.acounts[i].balance + " now withdrawing " + amt);
                bank.withDraw(name1, amt);
                console.log("Your new balance is " + bank.acounts[i].balance);
                
                for (var j = 0; j < bank.acounts.length; j++){
                    if (name2 === bank.acounts[j].name){
                        console.log(name2 + ", your current balance is " + bank.acounts[j].balance);
                        bank.deposit(name2, amt);
                        console.log("Your new balance is " + bank.acounts[j].balance);
                    }
                }
            } 
        }
        return "transaction from " + name1 + " to " + name2 + " for " + amt + " is now complete. ";
    }
}


 
console.log(bank.totalMoney());
console.log(bank.addAcount("george", 17));
console.log(bank.withDraw("mimic", 2));
console.log(bank.deposit("phill", 10));

console.log(bank.transFer("mimic", 1, "phill"));
console.log(bank.transFer("george", 4, "phill"));
console.log(bank.withDraw("phill", 20 ));