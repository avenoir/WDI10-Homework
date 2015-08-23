// Sum of Squares and Squares of Sums
// The sum of the squares of the first ten natural numbers is,

// 1**2 + 2**2 + ... + 10**2 = 385

// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)**2 = 55**2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

// Make it so that it doesn't just work for the number 10.

var findDiffObject = {

	sumOfSquares: function(num) {
		var total = 0;
		for (i = 1; i <= num; i++) {
			total += i*i;
			}
		return total;
	},

	squareOfSums: function(num) {
		var total = 0;
		for (i = 1; i <=num; i++) {
			total += i;
		}
		total *= total;
		return total;
	},

	difference: function(num) {
		return this.squareOfSums(num) - this.sumOfSquares(num);
	}
}

var findDiffFunction = function(num) {
	var sum = 0;
	var square = 0;
	for (i = 1; i <=num; i++) {
		sum += i*i;
		square += i;
	}
	square *=square;
	return square - sum;
}