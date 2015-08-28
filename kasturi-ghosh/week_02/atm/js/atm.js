$(document).ready(function () {

	$('#checking-balance').addClass('zero');
	$('#savings-balance').addClass('zero');

	//bank();
//});

	//var bank = {

		//depositChecking: function() {
			var $checkingBalance = 0;
			$('#checking-deposit').on('click', function() {
				var $checkingAmount = $('#checking-amount').val();
				if ($checkingAmount > 0) {
					$checkingBalance += parseInt($checkingAmount);
					$('#checking-balance').text('$' + $checkingBalance);
					$('#checking-balance').removeClass('zero');
				}
			});
		// },

		// depositSavings: function() {
			var $savingsBalance = 0;
			$('#savings-deposit').on('click', function() {
				var $savingsAmount = $('#savings-amount').val();
				if ($savingsAmount > 0) {
					$savingsBalance += parseInt($savingsAmount);
					$('#savings-balance').text('$' + $savingsBalance);
					$('#savings-balance').removeClass('zero');
				}
			});
		// },

		// withdrawChecking: function() {
			var $checkingBalance = $('#checking-balance').text();
			$checkingBalance = parseInt($checkingBalance.slice(1));

			var $savingsBalance = $('#savings-balance').text();
			$savingsBalance = parseInt($savingsBalance.slice(1));

			var $totalBalance = $checkingBalance + $savingsBalance;
			debugger;

			$('#checking-withdraw').on('click', function() {
				var $checkingAmount = $('#checking-amount').val();
				$checkingAmount = parseInt($checkingAmount);
				debugger;

				if ($checkingAmount <= $totalBalance) {
					debugger;
					if ($checkingBalance >= $checkingAmount) {
						$checkingBalance -= $checkingAmount;
						$('#checking-balance').text('$' + $checkingBalance);

						if ($checkingBalance <= 0) {
							$('#checking-balance').addClass('zero');
						} else {
							$('#checking-balance').removeClass('zero');
						}
						
					} else if (($savingsBalance >= $checkingAmount) && ( $checkingBalance )) {
						$savingsReduced = $checkingAmount - $checkingBalance;
						$savingsBalance -= $savingsReduced;
						$('#savings-balance').text('$' + $savingsBalance);
						$checkingBalance = 0;
						$('#checking-balance').addClass('zero');
						$('#checking-balance').text('$' + $checkingBalance);

						if ($savingsBalance <= 0) {
							$('#savings-balance').addClass('zero');
						} else {
							$('#savings-balance').removeClass('zero');
						}

					} else {
						console.log("Not enough balance fail");
					}
					
				} else {debugger;
					console.log("Not enough balance");
				}
			});
		// },

		// withdrawSavings: function() {
			// var $checkingBalance = $('#checking-balance').text();
			// $checkingBalance = parseInt($checkingBalance.slice(1));

			// var $savingsBalance = $('#savings-balance').text();
			// $savingsBalance = parseInt($savingsBalance.slice(1));

			// var $totalBalance = $checkingBalance + $savingsBalance;

			$('#savings-withdraw').on('click', function() {
				var $savingsAmount = $('#savings-amount').val();
				$savingsAmount = parseInt($savingsAmount);

				if ($savingsAmount <= $totalBalance) {

					if ($savingsBalance >= $savingsAmount) {
						$savingsBalance -= $savingsAmount;
						$('#savings-balance').text('$' + $savingsBalance);

						if ($savingsBalance <= 0) {
							$('#savings-balance').addClass('zero');
						} else {
							$('#savings-balance').removeClass('zero');
						}

					} else if (($checkingBalance >= $savingsAmount) && ( $savingsBalance )) {
						$checkingReduced = $savingsAmount - $savingsBalance;
						$checkingBalance -= $checkingReduced;
						$('#checking-balance').text('$' + $checkingBalance);
						$savingsBalance = 0;
						$('#savings-balance').addClass('zero');
						$('#savings-balance').text('$' + $savingsBalance);

						if ($checkingBalance <= 0) {
							$('#checking-balance').addClass('zero');
						} else {
							$('#checking-balance').removeClass('zero');
						}

					} else {
						console.log("Not enough balance fail");
					}
					
				} else {
					console.log("Not enough balance");
				}
			});
		// }

	// };
});
