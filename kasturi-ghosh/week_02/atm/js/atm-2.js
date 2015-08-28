$(document).ready(function () {

	$('#checking-balance').addClass('zero');
	$('#savings-balance').addClass('zero');
	var $checkingBalance = 0;
	var $savingsBalance = 0;
	var $checkingAmount, $savingsAmount, $totalBalance;
			
	$('#checking-deposit').on('click', function() {
		$checkingAmount = $('#checking-amount').val();
		if ($checkingAmount > 0) {
			$checkingBalance += parseInt($checkingAmount);
			$('#checking-balance').text('$' + $checkingBalance);
			$('#checking-balance').removeClass('zero');
		}
	});
	
	$('#savings-deposit').on('click', function() {
		$savingsAmount = $('#savings-amount').val();
		if ($savingsAmount > 0) {
			$savingsBalance += parseInt($savingsAmount);
			$('#savings-balance').text('$' + $savingsBalance);
			$('#savings-balance').removeClass('zero');
		}
	});

	$('#checking-withdraw').on('click', function() {
		$checkingAmount = $('#checking-amount').val();
		$checkingAmount = parseInt($checkingAmount);

		$checkingBalance = $('#checking-balance').text();
		$checkingBalance = parseInt($checkingBalance.slice(1));

		$savingsBalance = $('#savings-balance').text();
		$savingsBalance = parseInt($savingsBalance.slice(1));

		$totalBalance = $checkingBalance + $savingsBalance;

		if ($checkingAmount <= $totalBalance) {
			
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
			
		} else {
			console.log("Not enough balance");
		}
	});

	$('#savings-withdraw').on('click', function() {
		$savingsAmount = $('#savings-amount').val();
		$savingsAmount = parseInt($savingsAmount);

		$checkingBalance = $('#checking-balance').text();
		$checkingBalance = parseInt($checkingBalance.slice(1));

		$savingsBalance = $('#savings-balance').text();
		$savingsBalance = parseInt($savingsBalance.slice(1));

		$totalBalance = $checkingBalance + $savingsBalance;

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
	
});
