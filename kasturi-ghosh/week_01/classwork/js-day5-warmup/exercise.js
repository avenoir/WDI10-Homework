// Pling Plang Plong

// Write a program that converts a number to a string per the following rules:

// If the number contains 3 as a prime factor, output 'Pling'.
// If the number contains 5 as a prime factor, output 'Plang'.
// If the number contains 7 as a prime factor, output 'Plong'.

// If the number does not contain 3, 5, or 7 as a prime factor, simply return the
// string representation of the number itself.

var primeCheck = function(num) {
	var str = [];
	if (num % 3 === 0) {
		str.push('Pling');
	}
	if (num % 5 === 0) {
		str.push('Plang');
	}
	if (num % 7 === 0) {
		str.push('Plong');
	}
	if (str.length > 0) {
		return str.join("");
	} else {
		return num.toString();
	}
};

console.log("Prime check of 28: " + primeCheck(28));
console.log("Prime check of 105: " + primeCheck(105));
console.log("Prime check of 1755: " + primeCheck(1755));
console.log("Prime check of 34: " + primeCheck(34));