$(document).ready(function () {

	var checkingBalance = 0;
	var savingsBalance = 0;

	$('#checking-deposit').on('click', function() {

		var $value = parseInt($('#checking-amount').val());

		if (!($value) || $value <= 0){
			$("#checking-amount").val("");
			return;

		} else {
		checkingBalance += $value;
		$('#checking-balance').html("$" + checkingBalance);
		var check = $('#checking-balance').html;
		$("#checking-amount").val("");
		inTheRed();
		return checkingBalance;
		}
	}); 

	$('#checking-withdraw').on('click', function() {
		var $value = $('#checking-amount').val();
		$value = parseInt($value);

		if (!($value) || $value <= 0){
			$("#checking-amount").val("");
			return;
		}
		else {

		if (checkingBalance + savingsBalance - $value < 0){
			return;
		}
		else if (checkingBalance - $value > 0 ) {
			checkingBalance -= $value;
			$('#checking-balance').html("$" + checkingBalance);
			$("#checking-amount").val("");		

		} else {
			var remainder = $value - checkingBalance;
			savingsBalance = savingsBalance - remainder;
			checkingBalance = 0;
			$('#checking-balance').html("$" + checkingBalance);
			$("#checking-amount").val("");
			$('#savings-balance').html("$" + savingsBalance);	
		} inTheRed();
	}
		return checkingBalance;

	}); 


	$('#savings-deposit').on('click', function() {
		var $value = parseInt($('#savings-amount').val());

		if (!($value) || $value <= 0){
			$("#savings-amount").val("");
			return;
		}
		else {
		savingsBalance += $value;
		$('#savings-balance').html("$" + savingsBalance);
		var check = $('#savings-balance').html;
		$("#savings-amount").val("");
		inTheRed();
	}
		return savingsBalance;
	}); 

	$('#savings-withdraw').on('click', function() {
		var $value = $('#savings-amount').val();
		$value = parseInt($value);

		if (!($value) || $value <= 0){
			$("#savings-amount").val("");
			return;
		}
		else {
			if (savingsBalance + checkingBalance - $value < 0){
			return;
		}
		else if (savingsBalance - $value > 0 ) {
			savingsBalance -= $value;
			$('#savings-balance').html("$" + savingsBalance);
			$("#savings-amount").val("");		

		} else {
			var remainder = $value - savingsBalance;
			checkingBalance = checkingBalance - remainder;
			savingsBalance = 0;
			$('#savings-balance').html("$" + savingsBalance);
			$("#savings-amount").val("");
			$('#checking-balance').html("$" + checkingBalance);	
		} inTheRed();
	}
		return checkingBalance;
	}); 

	var inTheRed = function () {
		var current = $('.account').children().filter($("div[id$='balance']"))
		current.each(function() {
			if ($(this).html() === "$0"){
				$(this).css('background-color', '#F52F4F');
			} else {
				$(this).css('background-color', '#E3E3E3');
			}
		})
	};

	inTheRed();

});

