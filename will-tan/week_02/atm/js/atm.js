$(document).ready(function(){

	var checkingAccount = {
		balance: $('#checking-balance').text(),
		temp: '$0',
		formInput: function(){
			checkingAccount.temp = '$' + $('#checking-amount').val();
		},
		withdraw: function(){
			var currentBalance = parseInt(checkingAccount.balance.slice(1));
			var amountToWithdraw = parseInt(checkingAccount.temp.slice(1));
			var totalBalance = currentBalance - amountToWithdraw;
			if( totalBalance >= 0 ) {
				$('#checking-balance').text('$' +totalBalance);
				checkingAccount.balance = $('#checking-balance').text();
			} 
			if ( totalBalance === 0 ) {
				$('#checking-balance').css('background-color', 'red');
				console.log('hello');
			}
		},
		deposit: function(){
			var currentBalance = parseInt(checkingAccount.balance.slice(1));
			var amountToDeposit = parseInt(checkingAccount.temp.slice(1));
			var totalBalance = currentBalance + amountToDeposit;
			if( currentBalance === 0 ) {
				$('#checking-balance').text('$'+amountToDeposit);
				checkingAccount.balance = '$' + amountToDeposit;
			} else {
				$('#checking-balance').text('$'+ totalBalance);
				checkingAccount.balance = $('#checking-balance').text();
			}
			if ( totalBalance > 0 ) {
				$('#checking-balance').css('background-color', '#E3E3E3');
			}
		}
	};

	$('#checking-amount').on('keyup', checkingAccount.formInput);
	$('#checking-deposit').on('click', checkingAccount.deposit);
	$('#checking-withdraw').on('click', checkingAccount.withdraw);

	console.log(checkingAccount.temp);



});