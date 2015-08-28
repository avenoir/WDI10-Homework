$(document).ready(function(){	

	// constructor: creates either checkingAccount or savingsAccount
	var Account = function( name ) {
		var that = this; // to store the object to be created
		this.balance = $('#' + name + '-balance').text(); 
		this.temp = '$0'; // initializing '$0' to be user input
		(this).formInput = function(){
			that.temp = '$' + $('#' + name + '-amount').val();
		}; // update user input
		(this).deposit = function(){ // deposit function that takes user's input and update balance
			var currentBalance = parseInt(that.balance.slice(1));
			var amountToDeposit = parseInt(that.temp.slice(1));
			var totalBalance = currentBalance + amountToDeposit;
			if( currentBalance === 0 ) {
				$('#' + name+ '-balance').text('$'+ amountToDeposit);
				that.balance = '$' + amountToDeposit;
			} else {
				$('#' + name + '-balance').text('$'+ totalBalance);
				that.balance = $('#' + name + '-balance').text();
			}
			if ( totalBalance > 0 ) {
				$('#' + name +'-balance').css('background-color', '#E3E3E3');
			}
		};
		(this).withdraw = function(){ // withdraw function that takes user's input and update balance
			var currentBalance = parseInt(that.balance.slice(1));
			var amountToWithdraw = parseInt(that.temp.slice(1));
			var totalBalance = currentBalance - amountToWithdraw;
			if( totalBalance >= 0 ) {
				$('#'+name+'-balance').text('$' +totalBalance);
				that.balance = $('#'+name+'-balance').text();
			} 
			if ( totalBalance === 0 ) {
				$('#'+name+'-balance').css('background-color', 'red');
			}
		};
	};

	var checkingAccount = new Account( 'checking' ); // create checkingAccount object
	var savingsAccount = new Account( 'savings' ); // create savingsAccount object

	$('#checking-amount').on('keyup', checkingAccount.formInput);
	$('#checking-deposit').on('click', checkingAccount.deposit);
	$('#savings-amount').on('keyup', savingsAccount.formInput);
	$('#savings-deposit').on('click', savingsAccount.deposit);

	var overdraft = function(){ // overdraft function that withdraws money from another account should the withdrawal amount is more than current account balance but less than sum of two accounts
		var name = this.id.slice(0,-9);
		if ( name === 'checking' ) {
			var accountA = checkingAccount;
			var accountB = savingsAccount;
			var balanceA = $('#checking-balance');
			var balanceB = $('#savings-balance');
		} else {
			var accountA = savingsAccount;
			var accountB = checkingAccount;
			var balanceA = $('#savings-balance');
			var balanceB = $('#checking-balance');
		}
		if ( ( parseInt(accountA.balance.slice(1)) < parseInt(accountA.temp.slice(1)) ) && ( parseInt(accountA.balance.slice(1)) + parseInt(accountB.balance.slice(1))) >= parseInt(accountA.temp.slice(1))) {
			// take all money from accountA.balance and reduce accountB.balance accordingly
			balanceA.text('$0');
			balanceB.text('$' + (parseInt(accountB.balance.slice(1)) - parseInt(accountA.temp.slice(1)) + parseInt(accountA.balance.slice(1))));
			balanceA.css('background-color', 'red');
			accountA.balance = balanceA.text();
			accountB.balance = balanceB.text();
			if ( accountB.balance === '$0') {
				balanceB.css('background-color', 'red');
			}
		} else {
			accountA.withdraw();
		}
	};

	$('#checking-withdraw').on('click', overdraft);
	$('#savings-withdraw').on('click', overdraft);
});
