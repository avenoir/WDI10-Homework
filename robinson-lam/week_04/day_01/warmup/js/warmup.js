console.log("Warm up forever");

var sumOfSquares = function(amount) {
	var sum = 0;
	var squareOfSum = 0;
	var result = 0;
	for ( var x = 1; x <= amount; x++ ) {
		sum += Math.pow(x, 2);
		squareOfSum += x;
	}
	result = sum - Math.pow(squareOfSum, 2);

	return Math.abs(result);
}

console.log(sumOfSquares(10));