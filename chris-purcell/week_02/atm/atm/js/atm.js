var atm = {
  checkingBalance: 0,
  savingsBalance: 0,
  $checkingBalance: $('#checking-balance'),
  putMoneySavings: function(){ 
  	depositMoneySavings = $('#savings-amount').val(); 	
  	atm.savingsBalance = atm.savingsBalance + parseInt(depositMoneySavings);
  	$('#savings-balance').text('$ ' + atm.savingsBalance);
  	if (atm.savingsBalance > 0) {
    	$('.savings-account').css({'background-color': '#6C9A74'});
    };
  },
  putMoneyChecking: function() {
  	depositMoneyChecking = $('#checking-amount').val();
  	atm.checkingBalance = atm.checkingBalance + parseInt(depositMoneyChecking);
  	$('#checking-balance').text('$ ' + atm.checkingBalance);
  	if (atm.checkingBalance > 0) {
    	$('.checking-account').css({'background-color': '#6C9A74'}); // instead of applying a color within javascript, create a class with the values wanted so that others can more easily navigate changes to code.
    };
  },
  takeMoneySavings: function () {
    withdrawMoneySavings = $('#savings-amount').val();
  	if (parseInt(atm.savingsBalance) === 0){
    	$('.savings-account').css({'background-color': 'solid red'});
    };
  	if (parseInt(withdrawMoneySavings) > atm.savingsBalance) {
  		atm.overDraftSavings();
  	} else {
  		atm.savingsBalance = atm.savingsBalance - parseInt(withdrawMoneySavings);
  		$('#savings-balance').text('$ ' + atm.savingsBalance);
  	};
  },
  takeMoneyChecking: function(){
  	withdrawMoneyChecking = $('#checking-amount').val();
    if (parseInt(withdrawMoneyChecking) > atm.checkingBalance) {
  		atm.overDraftChecking();
  	} else {
  		atm.checkingBalance = atm.checkingBalance - parseInt(withdrawMoneyChecking);
  		$('#checking-balance').text('$ ' + atm.checkingBalance);
  	};
  },
  overDraftSavings: function(){
  	withdrawMoneySavings = parseInt($('#savings-amount').val());
  	var masterBalance = atm.savingsBalance + atm.checkingBalance;
  	if (withdrawMoneySavings > masterBalance) {
  		alert('You cannot withdraw that amount.');
  	} else {
		var remainder = withdrawMoneySavings - atm.savingsBalance;
		atm.savingsBalance = atm.savingsBalance - atm.savingsBalance;
		atm.checkingBalance = atm.checkingBalance - remainder;
		$('#savings-balance').text('$ ' + atm.savingsBalance);
  		$('#checking-balance').text('$ ' + atm.checkingBalance);
  	}  	
  },
  overDraftChecking: function(){
  	withdrawMoneyChecking = parseInt($('#checking-amount').val());
  	var masterBalance = atm.savingsBalance + atm.checkingBalance;
  	if (withdrawMoneyChecking > masterBalance) {
  		alert('You cannot withdraw that amount.');
  	} else {
  		var remainder = withdrawMoneyChecking - atm.checkingBalance;
  		atm.checkingBalance = atm.checkingBalance - atm.checkingBalance;
  		atm.savingsBalance = atm.savingsBalance - remainder;
  		$('#checking-balance').text('$ ' + atm.checkingBalance);
  		$('#savings-balance').text('$ ' + atm.savingsBalance);
  	}
  },

  init: function () {
    // jQuery stuff goes here
    $('#savings-deposit').on('click', this.putMoneySavings);
    $('#checking-deposit').on('click', this.putMoneyChecking);
    $('#checking-withdraw').on('click', this.takeMoneyChecking);
    $('#savings-withdraw').on('click', this.takeMoneySavings);
    

  }
};

$('document').ready(function () {
atm.init();
});


// else {
//  		$('.savings-account').css({'background-color': '#6C9A74'});
//  	};

// else {
//    	$('.checking-account').css({'background-color': '#6C9A74'});
//    };

