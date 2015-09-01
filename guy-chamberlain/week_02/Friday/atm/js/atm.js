$(document).ready( function () {

var Bank = {

	getBal: function(element) {
		var bal = $(element).html();
		return parseFloat(bal.substr(1,bal.length));  // Trim the $ sign
 	},

	checkingDeposit: function () {
		var amt = parseFloat($("#checking-amount").val());
		bal = Bank.getBal("#checking-balance");
		bal += amt;
		bal = bal.toFixed(2);
		$("#checking-balance").html( "$" + bal);
	},

	savingsDeposit: function () {
		var amt = parseFloat($("#savings-amount").val());
		bal = Bank.getBal("#savings-balance");
		bal += amt;
		bal = bal.toFixed(2);
		$("#savings-balance").html( "$" + bal);
	},

	checkingWithdraw: function () {
		var amt = parseFloat($("#checking-amount").val());
		bal = Bank.getBal("#checking-balance");
		if ( bal - amt  < 0 ) {
			var savingsBal = Bank.getBal("#savings-balance");
			if (  (bal - amt) * -1 <=  savingsBal ) {
				// Take some out of savings
				savingsBal -= (bal - amt) * -1;
				savingsBal = savingsBal.toFixed(2);
				$("#savings-balance").html( "$" + savingsBal);
				$("#checking-balance").html( "$0" );
			}	else {
				alert("Insufficent funds");
			}
		} else {
			bal -= amt;
			bal = bal.toFixed(2);
			$("#checking-balance").html( "$" + bal);
	  }
	},

	savingsWithdraw: function () {
		var amt = parseFloat($("#savings-amount").val());
		bal = Bank.getBal("#savings-balance");
		if ( bal - amt < 0 ) {
			var checkingBal = Bank.getBal("#checking-balance");
			if (  (bal - amt) * -1 <=  checkingBal ) {
				// Take some out of checking
				checkingBal -= (bal - amt) * -1;
				checkingBal = checkingBal.toFixed(2);
				$("#checking-balance").html( "$" + checkingBal);
				$("#savings-balance").html( "$0" );
			}	else {
				alert("Insufficent funds");
			}
		} else {
			bal -= amt;
			bal = bal.toFixed(2);
			$("#savings-balance").html( "$" + bal);
	  }
	}

}

$("#checking-deposit").on("click", Bank.checkingDeposit)
$("#checking-withdraw").on("click", Bank.checkingWithdraw);
$("#savings-withdraw").on("click", Bank.savingsWithdraw);
$("#savings-deposit").on("click", Bank.savingsDeposit)

})