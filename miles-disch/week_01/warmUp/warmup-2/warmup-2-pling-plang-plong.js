/*
# Pling Plang Plong

Write a program that converts a number to a string per the following rules:

If the number contains 3 as a prime factor, output 'Pling'.
If the number contains 5 as a prime factor, output 'Plang'.
If the number contains 7 as a prime factor, output 'Plong'.

If the number does not contain 3, 5, or 7 as a prime factor, simply return the
string representation of the number itself.

E.g.

The prime factors of 28 are [2, 2, 7].

```# => "Plong"
*/

var converter = function (number) {
	var result = "";

	if (number % 3 === 0) {
		result += 'Pling'
	}
	if (number % 5 === 0) {
		result += 'Plang'
	}
	else if (number % 7 === 0) {
		result += 'Plong'
	}

	if ( result.length === 0 ) {
		return number + "";
	}

}


console.log(converter(15))
console.log(converter(34))