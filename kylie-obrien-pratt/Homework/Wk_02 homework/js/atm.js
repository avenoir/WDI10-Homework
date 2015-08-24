/* Title: ATM App

 Type:
 - Lab 

 Summary
 - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
 - You'll be selecting elements, manipulating HTML, and manipulating style along
 with building out the logic using JavaScript.

 Objectives:
 - DOM selection, appending, removal, updating

 Specification:

 * Keep track of the checking and savings balances somewhere
 * Add functionality so that a user can deposit money into one of the bank accounts.
 * Make sure you are updating the display and manipulating the HTML of the page
 so a user can see the change.
 * Add functionality so that a user can withdraw money from one of the bank accounts.
 * Make sure you are updating the display and manipulating the HTML of the page
 so a user can see the change.
 * Make sure the balance in an account can't go negative. If a user tries to
 withdraw more money than exists in the account, ignore the transaction.
 * When the balance of the bank account is $0 the background of that bank account
 should be red. It should be gray when there is money in the account.
 * What happens when the user wants to withdraw more money from the checking
 account than is in the account? These accounts have overdraft protection, so if
 a withdrawal can be covered by the balances in both accounts, take the checking
 balance down to $0 and take the rest of the withdrawal from the savings account.
 If the withdrawal amount is more than the combined account balance, ignore it.
 * Make sure there is overdraft protection going both ways.
 * Are there ways to refactor your code to make it DRYer? */


 // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.


// to access account?  bank.accounts[0].checkingBalance

document.ready 




var savingsDeposit = function(event){

}

var checkingDeposit = function(event){

}

var savingsWithdrawal = function(event){

}

var checkingWithdrawal = function(event){

}

var checkBalance = function(event){

}




var bank = {
  accounts: 1
  Account No: 1,
  checkingBalance: ,
  savingsBalance: ,
  };,

  //calculates the checking account balance
  checkingAccountBalance: function() {
    
    alert("The total amount in your checking account: " + bank.accounts[0].checkingBalance); 
  },


  //calculates the savings account balance
  checkingAccountBalance: function() {
    
    alert("The total amount in your savings account: " + bank.accounts[0].savingsBalance); 
  },

    //make deposits
  depositAmount: function(accNo, amount) {
    //to check if account no exists or not
    var success = false;
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].accountNo === accNo) {
        bank.accounts[i].currentBalance += amount;
        console.log("A deposit of " + amount + " has been made to " + bank.accounts[i].ownerName + "'s account. Total amount: " + bank.accounts[i].currentBalance);
        success = true;
      }
    }
    if (!(success)) {
      console.log("The account: " + accNo + " does not exist.");
    } 
  },

  //withdraw amount
  withdrawlAmount: function(accNo, amount) {
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].accountNo === accNo) {
        //cannot withdraw if you withdrawl amount exceeds amount in your account
        if (bank.accounts[i].currentBalance >= amount) {
          bank.accounts[i].currentBalance -= amount;
          console.log("A withdrawl of " + amount + " has been made from " + bank.accounts[i].ownerName + "'s account. Remaining amount: " + bank.accounts[i].currentBalance);
        } else {
          console.log("Withdrawl amount exceeds total amount in your account. Your current balance is: " + bank.accounts[i].currentBalance + ". Please withdraw a lesser amount.");
        }
      }
    } 
  },

  //make transfer from checking account to savings account
  transferAmount: function(fromAccount, toAccount, transferAmount) {
    //cannot transfer if transfer amount exceeds amount in the account
    var transferFlag = true;
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].checkingBalance === savingsBalance) {
        if (bank.accounts[i].currentBalance >= transferAmount) {
          bank.accounts[i].currentBalance -= transferAmount;
        } else {
          console.log("You donot have enough amount in your account to make the transfer.");
          transferFlag = false;
        }
      }
    }


  //make transfer from savings account to checking account
  transferAmount: function(fromAccount, toAccount, transferAmount) {
    //cannot transfer if transfer amount exceeds amount in the account
    var transferFlag = true;
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].checkingBalance === savingsBalance) {
        if (bank.accounts[i].currentBalance >= transferAmount) {
          bank.accounts[i].currentBalance -= transferAmount;
        } else {
          console.log("You donot have enough amount in your account to make the transfer.");
          transferFlag = false;
        }
      }
    }

    //if transfer is allowed it calls the depositAmount function
    if (transferFlag) {
     bank.depositAmount(toAccount, transferAmount);
     console.log("Transfer successful from " + fromAccount + " to " + toAccount);
    }
 }
};


$(document).on('ready', function(){

	function atm() {
			var choice = function (prompt)
			(parseInt(prompt('Please select from the following options: 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); //prompt user for choice.
			if (choice === 1 {
				checkBalance();
			} else if (choice === 2) {
				make_deposit();
			} else if (choice === 3) {
				make_withdrawal();
			} else if (choice === 4) {
				exit();
			} else {
				error();
			}
		}
		atm();

deposit

balance

withdrawlAmount

exit message




//



 
  	var checkingBalance = 0;
  	var savingsBalance = 0;

	var changeCheckingBackground = function() {
    	if (checkingBalance === 0) {
      	document.getElementById("checking-balance").style.background = "red";
    	} else {
      	document.getElementById("checking-balance").style.background = "#E3E3E3";
    	};
  	}; // changes background colour to red if balance is $0.

	var changeSavingsBackground = function() {
    	if (savingsBalance === 0) {
      	document.getElementById("savings-balance").style.background = "red";
    	} else {
      	document.getElementById("savings-balance").style.background = "#E3E3E3";
    	};
  	}); // changes background colour to red if balance is $0.

  changeCheckingBackground();
  changeSavingsBackground();

document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
    var checkingAmountValue = parseInt(document.getElementById("checkingAmount").value);
    checkingBalance += checkingAmountValue;
    document.getElementById("checkingBalance").innerText = ("$" + checkingBalance);
    updateCheckingBackgroundColor();
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    var savingsAmountValue = parseInt(document.getElementById("savingsAmount").value);
    savingsBalance += savingsAmountValue;
    document.getElementById("savingsBalance").innerText = ("$" + savingsBalance);
    updateSavingsBackgroundColor();
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
    var checkingAmountValue = parseInt(document.getElementById("checkingAmount").value);
    if (checkingAmountValue <= checkingBalance) {
      checkingBalance -= checkingAmountValue;
    } else if (checkingAmountValue <= (checkingBalance + savingsBalance)) {
      savingsBalance = (checkingBalance + savingsBalance) - checkingAmountValue;
      checkingBalance = 0;
    };
    document.getElementById("checkingBalance").innerText = ("$" + checkingBalance);
    document.getElementById("savingsBalance").innerText = ("$" + savingsBalance);
    updateCheckingBackgroundColor();
    updateSavingsBackgroundColor();
  };





// var Account = function(name){
	console.log(this); // what is this?
	this.balance = $('#whatevs').text();

	this.deposit = function(){
		console.log(this); // what is this?
	};
};

var checkingAccount = new Account('checking');


if currentBalance<= $0 make screen ren










window.onload = function(){

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.
  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
  };

});




//

window.onload = function(){
  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  var checkingBalance = 0;
  var savingsBalance = 0;

  function updateCheckingBackgroundColor() {
    if (checkingBalance === 0) {
      document.getElementById("checkingBalance").style.background = "#FF0000";
    } else {
      document.getElementById("checkingBalance").style.background = "#E3E3E3";
    };
  };

  function updateSavingsBackgroundColor() {
    if (savingsBalance === 0) {
      document.getElementById("savingsBalance").style.background = "#FF0000";
    } else {
      document.getElementById("savingsBalance").style.background = "#E3E3E3";
    };
  };

  updateCheckingBackgroundColor();
  updateSavingsBackgroundColor();
  // To retrieve value in html form:
  // var checkingAmountValue = document.getElementById("checkingAmount").value;
  // var savingsAmountValue = document.getElementById("savingsAmount").value;
  // To Update balance in html file:
  // document.getElementById("checkingBalance").innerText = "$" + 100000000;
  // document.getElementById("savingsBalance").innerText = "$" + 99;

  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
    var checkingAmountValue = parseInt(document.getElementById("checkingAmount").value);
    checkingBalance += checkingAmountValue;
    document.getElementById("checkingBalance").innerText = ("$" + checkingBalance);
    updateCheckingBackgroundColor();
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    var savingsAmountValue = parseInt(document.getElementById("savingsAmount").value);
    savingsBalance += savingsAmountValue;
    document.getElementById("savingsBalance").innerText = ("$" + savingsBalance);
    updateSavingsBackgroundColor();
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
    var checkingAmountValue = parseInt(document.getElementById("checkingAmount").value);
    if (checkingAmountValue <= checkingBalance) {
      checkingBalance -= checkingAmountValue;
    } else if (checkingAmountValue <= (checkingBalance + savingsBalance)) {
      savingsBalance = (checkingBalance + savingsBalance) - checkingAmountValue;
      checkingBalance = 0;
    };
    document.getElementById("checkingBalance").innerText = ("$" + checkingBalance);
    document.getElementById("savingsBalance").innerText = ("$" + savingsBalance);
    updateCheckingBackgroundColor();
    updateSavingsBackgroundColor();
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
    var savingsAmountValue = parseInt(document.getElementById("savingsAmount").value);
    if (savingsAmountValue <= savingsBalance) {
      savingsBalance -= savingsAmountValue;
    } else if (savingsAmountValue <= (checkingBalance + savingsBalance)) {
      checkingBalance = (checkingBalance + savingsBalance) - savingsAmountValue;
      savingsBalance = 0;
    };
    document.getElementById("checkingBalance").innerText = ("$" + checkingBalance);
    document.getElementById("savingsBalance").innerText = ("$" + savingsBalance);
    updateCheckingBackgroundColor();
    updateSavingsBackgroundColor();
  };

};

//



// Bank program

var bank = {
  //the accounts
  accounts: [
  {accountNo: 1, ownerName: 'Tom', currentBalance: 10000}, 
  {accountNo: 2, ownerName: 'Lizzie', currentBalance: 12000}, 
  {accountNo: 3, ownerName: 'Tina', currentBalance: 2000},
  {accountNo: 4, ownerName: 'Jack', currentBalance: 200}
  ],

  //calculates total amount
  totalSum: function() {
    var sumTotal = 0;
    for (var i = 0; i < bank.accounts.length; i++) {
      sumTotal += bank.accounts[i].currentBalance; 
    }
    return sumTotal;
  },

  //creating new account
  addAccount: function(name, balance) {
    //cannot create accounts with amount negative
    if (balance > 0) {
      //generating account no.
      var i = bank.accounts.length;
      bank.accounts.push({accountNo: i+1, ownerName: name, currentBalance: balance});
      console.log("Congrats! Account for " + name + " has been created. Account number: " + (i + 1));
    }
    else {
      console.log("The account for " + name + " cannot be created. Amount is negative.")
    }
  },

  //make deposits
  depositAmount: function(accNo, amount) {
    //to check if account no exists or not
    var success = false;
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].accountNo === accNo) {
        bank.accounts[i].currentBalance += amount;
        console.log("A deposit of " + amount + " has been made to " + bank.accounts[i].ownerName + "'s account. Total amount: " + bank.accounts[i].currentBalance);
        success = true;
      }
    }
    if (!(success)) {
      console.log("The account: " + accNo + " does not exist.");
    } 
  },

  //withdraw amount
  withdrawlAmount: function(accNo, amount) {
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].accountNo === accNo) {
        //cannot withdraw if you withdrawl amount exceeds amount in your account
        if (bank.accounts[i].currentBalance >= amount) {
          bank.accounts[i].currentBalance -= amount;
          console.log("A withdrawl of " + amount + " has been made from " + bank.accounts[i].ownerName + "'s account. Remaining amount: " + bank.accounts[i].currentBalance);
        } else {
          console.log("Withdrawl amount exceeds total amount in your account. Your current balance is: " + bank.accounts[i].currentBalance + ". Please withdraw a lesser amount.");
        }
      }
    } 
  },

  //make internal transfers
  transferAmount: function(fromAccount, toAccount, transferAmount) {
    //cannot transfer if transfer amount exceeds amount in your account
    var transferFlag = true;
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].accountNo === fromAccount) {
        if (bank.accounts[i].currentBalance >= transferAmount) {
          bank.accounts[i].currentBalance -= transferAmount;
        } else {
          console.log("You donot have enough amount in your account to make the transfer.");
          transferFlag = false;
        }
      }
    }
    //if transfer is allowed it calls the depositAmount function
    if (transferFlag) {
     bank.depositAmount(toAccount, transferAmount);
     console.log("Transfer successful from " + fromAccount + " to " + toAccount);
    }
 }
};

//statements to validate working of code
console.log("Total amount: " + bank.totalSum());

bank.addAccount('Aiden', 5000);
bank.addAccount('Dina', -4000);
bank.addAccount('Anita', 500);

console.log("Total amount in bank: " + bank.totalSum());

bank.depositAmount(1, 200);
bank.depositAmount(10, 100);
console.log("Total amount in bank: " + bank.totalSum());

bank.withdrawlAmount(2, 300);
bank.withdrawlAmount(4, 300);
console.log("Total amount in bank: " + bank.totalSum());

bank.transferAmount(3, 1, 50);
bank.transferAmount(4, 2, 5000);
console.log("Total amount in bank: " + bank.totalSum());

console.log(bank);


//

<script>
  var balance = 100.0; //set initial balance.
	function get_balance() {
		alert('Your current balance is: '+balance);
		atm();
	}
	function make_deposit() {
		var deposit = parseFloat(prompt('How much would you like to deposit?'));
		if (isNaN(deposit) || deposit === '') {
			alert('Error: please enter a number!');
			make_deposit();
		} else {
			balance += deposit;
			get_balance();
		}
	}
	function make_withdrawal() {
		var withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
		if (isNaN(withdrawal) || withdrawal === '') {
			alert('Error: please enter a number!');
			make_withdrawal();
		} else {
			balance -= withdrawal;
			get_balance();
		}
	}
	function error() {
		alert('Error: accepted numbers are 1 through 4.');
		atm();
	}
	function exit() {
		var confirm_leave = confirm('You have selected exit.');
		if (confirm_leave) {
			window.close();
		} else {
			atm();
		}
	}
	function atm() {
		var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); //prompt user for choice.
		if (choice === 1) {
			get_balance();
		} else if (choice === 2) {
			make_deposit();
		} else if (choice === 3) {
			make_withdrawal();
		} else if (choice === 4) {
			exit();
		} else {
			error();
		}
	}
	atm();
</script>


//


