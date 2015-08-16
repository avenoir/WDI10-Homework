$(document).ready(function () {

	var balance = {
		checking: 0, savings: 0
	}

	var $checking = $('#checking').children();
	var $savings = $('#savings').children();
	var $balance = $("div[id$='balance']");
	var $amount = $("input[id$='amount']");
	var $deposit = $("input[id$='deposit']");
	var $withdraw = $("input[id$='withdraw']");

	$checking.filter($deposit).on('click', function(){

		balance.checking = deposit($checking.filter($amount), $checking.filter($balance), balance.checking);
		inTheRed();
	}); 

	$checking.filter($withdraw).on('click', function(){

		balance = withdraw($checking.filter($amount), $checking.filter($balance), balance.checking, balance.savings);
		inTheRed();
	}); 

	$savings.filter($deposit).on('click', function(){

		balance.savings = deposit($savings.filter($amount), $savings.filter($balance), balance.savings);
		inTheRed();
	}); 

	$savings.filter($withdraw).on('click', function(){

		balance = withdraw($savings.filter($amount), $savings.filter($balance), balance.savings, balance.checking);
		inTheRed();
	}); 


var deposit = function ( amount, balance, currentBalance ) {

	var $value = parseInt(amount.val());

		if (!($value) || $value <= 0){
			amount.val("");
			return;

		} else {

		currentBalance += $value;
		balance.html("$" + currentBalance);
		amount.val("");

	} return currentBalance;
};

var withdraw = function ( amount, balance, current, other)

		var $value = parseInt($amount.val());

		if (!($value) || $value <= 0){
			$amount.val("");
			return;
		}

		else {

		if (current + other - $value < 0){
			return;
		}

		else if (current - $value > 0 ) {
			current -= $value;
			$balance.html("$" + current);
			$amount.val("");		

		} else {
			var remainder = $value - current;
			other = other - remainder;
			current = 0;
			$balance.html("$" + current);
			$amount.val("");
			$balance.html("$" + other);	
		} inTheRed();
	}
		return ;
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


		// $accountAmount = $(this).siblings().filter($amount);
		// $accountBalance = $(this).siblings().filter($balance);
