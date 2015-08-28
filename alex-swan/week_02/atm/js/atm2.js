var balance = {
	checking: 0, savings: 0
}

$(document).ready(function () {

	var $checking = $('#checking');
	var $savings = $('#savings');
	var $balance = $("div[id$='balance']");
	var $amount = $("input[id$='amount']");
	var $deposit = $("input[id$='deposit']");
	var $withdraw = $("input[id$='withdraw']");
debugger;
	$checking.find($deposit).on('click', function(){

		balance.checking = deposit($checking.find($amount), $checking.find($balance), balance.checking);
		inTheRed();
	}); 

	$checking.find($withdraw).on('click', function(){

		balance.checking = withdraw($checking.find($amount), $checking.find($balance), balance.checking, balance.savings);
		inTheRed();
	}); 

	$savings.find($deposit).on('click', function(){

		balance.savings = deposit($savings.find($amount), $savings.find($balance), balance.savings);
		inTheRed();
	}); 

	$savings.find($withdraw).on('click', function(){

		balance.savings = withdraw($savings.find($amount), $savings.find($balance), balance.savings, balance.checking);
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

var withdraw = function ( amount, balance, current, other) {

		var $value = parseInt($amount.val());

		if (!($value) || $value <= 0){
			$amount.val("");
			return;
		} else if (current + other - $value < 0) {
				return;
		
		} else if (current - $value >= 0 ) {
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
		} 

		inTheRed();
	
		return current;
	}; 

var inTheRed = function () {
		var current = $('.account').children().filter($("div[id$='balance']"))
		current.each(function() {
			if ($(this).html() === "$0"){
				$(this).removeClass('account').addClass('zero');
			} else {
				$(this).removeClass('zero').addClass('account');
			}
		})
	};
	inTheRed();
});
