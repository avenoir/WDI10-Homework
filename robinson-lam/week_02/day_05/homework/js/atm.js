var atm = {
  	checkingBalance: 10,
  	savingsBalance: 10,
  	totalBalance: this.checkingBalance + this.savingsBalance,

   	depositInChecking: function() {
    	var amountToDeposit = parseInt($('#checking-amount').val());
    	atm.checkingBalance += amountToDeposit;
    	atm.updateBalance();
    },

    depositInSavings: function() {
    	var amountToDeposit = parseInt($('#savings-amount').val());
    	atm.savingsBalance += amountToDeposit;
    	atm.updateBalance();
    },

    checkBalance: function() {
    	if ( atm.checkingBalance <= 0 || atm.savingsBalance <= 0 ) {
    		$("#checking-balance").css("background-color", "red");
    	} else {
    		$("#checking-balance").css("background-color", "#E3E3E3");
    	}
    },

    updateBalance: function() {
		$('#checking-balance').html("$" + atm.checkingBalance);
    	$('#savings-balance').html("$" + atm.savingsBalance);
    	atm.checkBalance();
    },

    withdrawFromChecking: function() {
    	var amountToWithdraw = parseInt($('#checking-amount').val());

		if ( amountToWithdraw <= (atm.checkingBalance + atm.savingsBalance) ) {

    		var amountWithdrawn = atm.checkingBalance;
    		atm.checkingBalance -= amountWithdrawn;
    		amountToWithdraw -= amountWithdrawn;
    		atm.savingsBalance -= amountToWithdraw;
    		amountWithdrawn += amountToWithdraw;

    		atm.updateBalance();

    	} else if (amountToWithdraw <= atm.checkingBalance) {
	    	atm.checkingBalance -= amountToWithdraw;
	    	atm.updateBalance();  	
    	}
    },

    withdrawFromSavings: function() {
    	var amountToWithdraw = parseInt($('#savings-amount').val());
    	if ( amountToWithdraw <= (atm.checkingBalance + atm.savingsBalance) ) {

    		var amountWithdrawn = atm.savingsBalance;
    		atm.savingsBalance -= amountWithdrawn;
    		amountToWithdraw -= amountWithdrawn;
    		atm.checkingBalance -= amountToWithdraw;
    		amountWithdrawn += amountToWithdraw;

    		atm.updateBalance();

    	} else if (amountToWithdraw <= atm.savingsBalance) {
	    	atm.savingsBalance -= amountToWithdraw;
	    	atm.updateBalance();
	    } 
    },

  	init: function () {  
    	$('#checking-deposit').on('click', this.depositInChecking);
    	$('#savings-deposit').on('click', this.depositInSavings);
    	$('#checking-withdraw').on('click', this.withdrawFromChecking);
    	$('#savings-withdraw').on('click', this.withdrawFromSavings);
    	atm.updateBalance();
  	}
}

$(document).ready(function () {
    atm.init();
});



/* TODO:
- Fix NaN when value is EMPTY.


*/