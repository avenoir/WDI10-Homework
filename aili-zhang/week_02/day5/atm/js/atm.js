
/*							
							 .----------------.  .----------------.  .----------------. 
							| .--------------. || .--------------. || .--------------. |
							| |      __      | || |  _________   | || | ____    ____ | |
							| |     /  \     | || | |  _   _  |  | || ||_   \  /   _|| |
							| |    / /\ \    | || | |_/ | | \_|  | || |  |   \/   |  | |
							| |   / ____ \   | || |     | |      | || |  | |\  /| |  | |
							| | _/ /    \ \_ | || |    _| |_     | || | _| |_\/_| |_ | |
							| ||____|  |____|| || |   |_____|    | || ||_____||_____|| |
							| |              | || |              | || |              | |
							| '--------------' || '--------------' || '--------------' |
							 '----------------'  '----------------'  '----------------'   */


                                                                                 

$(document).ready(function(){


/*
		    ___    _  _     ___     ___    _  __    ___    _  _     ___   
		   / __|  | || |   | __|   / __|  | |/ /   |_ _|  | \| |   / __|  
		  | (__   | __ |   | _|   | (__   | ' <     | |   | .` |  | (_ |  
		   \___|  |_||_|   |___|   \___|  |_|\_\   |___|  |_|\_|   \___|  
		 _|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""| 
		 "`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-' 
*/

	/* when the user clicks 'deposit' button on the checking account */
	$("#checking-deposit").on("click", function(){
		var $amount = $("#checking-amount").val(); 
		$amount = parseInt($amount);

		// get the whole string in checking balance, for example, '$0'
		var $checkingBalance = $("#checking-balance").html();
		
		// we do not need the dollar sign, so we slice it from the second character and parse it into number
		$checkingBalance = parseInt($checkingBalance.slice(1));
		
		// whatever amount the user types, add that amount to the balance
		$checkingBalance += $amount;

		// display the new checking balance 
		$("#checking-balance").html("$" + $checkingBalance);

		// clear the input text after clicking deposit button
		$("#checking-amount").val("");

		// if the checking balance is not $0, change the background colour back to its original
		if ($("#checking-balance").html() !== "$0"){
			$("#checking-balance").css("background-color", "#E3E3E3");
		}
	});


	/* when the user clicks 'withdraw' button on the checking account */
	$("#checking-withdraw").on("click", function(){
		var $amount = $("#checking-amount").val(); 
		$amount = parseInt($amount); 

		// same as the above deposit function, get the checking balance and parse it into number
		var $checkingBalance = $("#checking-balance").html();
		$checkingBalance = parseInt($checkingBalance.slice(1));
		
		// if the user does not withdraw more than the checking account balance.
		if ($amount <= $checkingBalance){
			$checkingBalance -= $amount;
			$("#checking-balance").html("$" + $checkingBalance);
		}

		// if the user tries to withdraw more than the checking balance
		else {

			// get the savings balance and parse it into number
			var savingsExcludeDollar = parseInt($("#savings-balance").html().slice(1));

			// if the amount that user trying to withdraw, is less than the sum of checking balance and savings balance.
			if ($amount <= $checkingBalance + savingsExcludeDollar) {

				// get the difference between the user input and checking balance. And use the original savings balance minus the difference, get the new savings balance.
				var diffBalance = $amount - $checkingBalance;
				var newSavingsBalance = savingsExcludeDollar - diffBalance;

				// change the checking balance to 0 and change the savings balance to the new savings balance
				$("#checking-balance").html("$0");
				$("#savings-balance").html("$" + newSavingsBalance);

			// if the user tries to withdraw more than the total balance, alert the message
			} else {
				alert("Sorry! You are not allowed to withdraw more than the remaining balance.");
			};
		}; 

		// clear the input text after clicking withdraw button
		$("#checking-amount").val("");

		// if either the checking balance or the savings balnce is $0, change the background colour to red.
		if ($("#checking-balance").html() === "$0"){
			$("#checking-balance").css("background-color", "red");
		}
		if ($("#savings-balance").html() === "$0"){
			$("#savings-balance").css("background-color", "red");
		}
	});



/*
			   ___     ___   __   __   ___    _  _     ___     ___   
			  / __|   /   \  \ \ / /  |_ _|  | \| |   / __|   / __|  
			  \__ \   | - |   \ V /    | |   | .` |  | (_ |   \__ \  
			  |___/   |_|_|   _\_/_   |___|  |_|\_|   \___|   |___/  
			_|"""""|_|"""""|_| """"|_|"""""|_|"""""|_|"""""|_|"""""| 
			"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'  */


	/* when the user clicks 'deposit' button on the savings account */
	$("#savings-deposit").on("click", function(){
		var $amount = $("#savings-amount").val(); 
		$amount = parseInt($amount); 	

		var $savingsBalance = $("#savings-balance").html();
		$savingsBalance = parseInt($savingsBalance.slice(1));
		$savingsBalance += $amount;

		$("#savings-balance").html("$" + $savingsBalance);

		// clear the input text after clicking deposit button
		$("#savings-amount").val("");

		// if the savings balance is not $0, change the background colour back to its original
		if ($("#savings-balance").html() !== "$0"){
			$("#savings-balance").css("background-color", "#E3E3E3");
		}
	});


	/* when the user clicks 'withdraw' button on the savings account */
	$("#savings-withdraw").on("click", function(){
		var $amount = $("#savings-amount").val(); 
		$amount = parseInt($amount); 	

		var $savingsBalance = $("#savings-balance").html();
		$savingsBalance = parseInt($savingsBalance.slice(1));

		// if the user does not withdraw more than the savings account balance.
		if ($amount <= $savingsBalance){
			$savingsBalance -= $amount;
			$("#savings-balance").html("$" + $savingsBalance);
		}

		// otherwise, take the same action as above which is withdrawing from checking account, but reversely
		else {
			var checkingExcludeDollar = parseInt($("#checking-balance").html().slice(1));

			if ($amount <= $savingsBalance + checkingExcludeDollar) {
				var diffBalance = $amount - $savingsBalance;
				var newCheckingBalance = checkingExcludeDollar - diffBalance;

				$("#savings-balance").html("$0");
				$("#checking-balance").html("$" + newCheckingBalance);

			} else {
				alert("Sorry! You are not allowed to withdraw more than the remaining balance.");
			};
		};

		// clear the input text after clicking withdraw button
		$("#savings-amount").val("");

		if ($("#savings-balance").html() === "$0"){
			$("#savings-balance").css("background-color", "red");
		}

		if ($("#checking-balance").html() === "$0"){
			$("#checking-balance").css("background-color", "red");
		}
	});


	// Without clicking the buttons, if the balance in either checking balance or savings account is $0, change the background colour to red. 
	if ($("#checking-balance").html() === "$0"){
		$("#checking-balance").css("background-color", "red");
	} 

	if ($("#savings-balance").html() === "$0"){
		$("#savings-balance").css("background-color", "red");
	}
});



/*
		          .-.-. .-.-. .-.-. .-.-. .-.-.      .-.-. .-.-. .-.-.            
		.-.-..-.-.'. T )'. H )'. A )'. N )'. K ).-.-.'. Y )'. O )'. U ).-.-..-.-. 
		'._.''._.'  ).'   ).'   ).'   ).'   ).' '._.'  ).'   ).'   ).' '._.''._.' 
		                                                                           */







