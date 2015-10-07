var atm = {
  checkingBalance: 0,
  savingsBalance: 0,

  // .. other code here..

  init: function () {

    $('#checking-deposit').on('click', function() {
		// Making user input box a variable
		var amount = $('#checking-amount').val();

		// convert the amount from a string to a number so we can add it
		amount = parseInt(amount);

		// If input is a number - follow with function OR ELSE do nothing
          if (!isNaN(amount)) {

		// add the deposit to the balance
		atm.checkingBalance = atm.checkingBalance + amount;

		// Change #checking-balance
		$('#checking-balance').text('$' + atm.checkingBalance);

		// Clear out the input with ".val('')" and then refocus cursor where it was with ".focus()"
		$('#checking-amount').val('').focus();

			console.log('You have deposited $' + amount);
			console.log('Total is $' + atm.checkingBalance);
		} else {
			console.log('Incorrect input');
		}
	})

	$('#checking-withdraw').on('click', function() {
		var amount = $('#checking-amount').val();
		amount = parseInt(amount);

		// If input is a number AND less than checkingBalance or equal to - follow with being able to withdraw down to $0 OR ELSE do nothing
		  if (!isNaN(amount) && amount <= atm.checkingBalance) {
		atm.checkingBalance = atm.checkingBalance - amount;
		$('#checking-balance').text('$' + atm.checkingBalance);
		$('#checking-amount').val('').focus();

			console.log('You have withdrawn $' + amount);
			console.log('Total is $' + atm.checkingBalance);
		} else {
			console.log('Cannot withdraw at this time');
		}
	})
  	
    $('#savings-deposit').on('click', function() {
		var amount = $('#savings-amount').val();
		amount = parseInt(amount);
          if (!isNaN(amount)) {
		atm.savingsBalance = atm.savingsBalance + amount;
		$('#savings-balance').text('$' + atm.savingsBalance);
		$('#savings-amount').val('').focus();

			console.log('You have deposited $' + amount);
			console.log('Total is $' + atm.savingsBalance);
		} else {
			console.log('Incorrect input');
		}
	})
  	
    $('#savings-withdraw').on('click', function() {
    	var amount = $('#savings-amount').val();
    	amount = parseInt(amount);
    	  if (!isNaN(amount) && amount <= atm.savingsBalance) {
    	atm.savingsBalance = atm.savingsBalance - amount;
    	$('#savings-balance').text('$' + atm.savingsBalance);
    	$('#savings-amount').val('').focus();

			console.log('You have withdrawn $' + amount);
			console.log('Total is $' + atm.savingsBalance);
		} else {
			console.log('Cannot withdraw at this time');
		}
    })

    $('#transferChecking').on('click', function() {
    	$('.transfer').text(atm.checkingBalance = atm.checkingBalance + atm.savingsBalance);
    	$('.transfer').focus('');
    })

    $('#transferSavings').on('click', function() {
    	$('.transfer').text(atm.savingsBalance = atm.savingsBalance + atm.checkingBalance);
    	$('.transfer').focus();
    })
  } // init
}; //var atm

// then a minimal document ready:

$(document).ready(function () {
    atm.init();
});

// that way you'll still be able to access the atm object even after the document is ready