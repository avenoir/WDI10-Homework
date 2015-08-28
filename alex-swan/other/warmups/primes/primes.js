var Sieve = {

	generateArray: function(a,b) {
		var min = a;
		var max = b;
		var primeArray = [];

		for (var i = min; i <=max; i++) {
			primeArray.push(i);
		}
		return primeArray;
	},

	splicePrimes: function(a,b) {

		primeArray = this.generateArray(a,b)

		var currentNumber;
		
		for (var i = 0; i < primeArray.length; i++) {

		currentNumber = primeArray[i];
	
			for (var j = currentNumber; j < primeArray.length; j++) {			
				if (primeArray[j] % currentNumber === 0) {
					primeArray.splice(j, 1);
				}
			}
		}
		return(primeArray);
	}
}






// primes: function (startNum, endNum) {
// 	var possibilities = this.createRange( startNum, endNum );
// 	var primesArray = [];

// 	// We need to make a loop that goes through each number in the possibiliies
// 	console.log(possibilities);
// }

// while ( possibilities.length > 0 ) {
// 	var prime = possibilities.shift();
// 	primesArray.push( prime );
// 	possibilities = possibilities.filter( function (num) {

// 	// console.log( "Prime: ", prime);
// 	// console.log("This: ", this)
// 	return num % this !== 0;
// 	}, prime );

// }
// return primesArray;
// }

// var from10to100 = Sieve.primes( 10,100);
// console.log( from10to100 );
