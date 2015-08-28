// We need a Sieve object
// We need functions...
//  that will create a range (an array of numbers)
//  that will return all primes
//  that will decide whether a number is divisible by something
//  have a look here - http://www.hbmeyer.de/eratosiv.htm (that will try and explain it)


// GO DOWN BENEATH THE CODE SO YOU CAN SEE THE WALKTHROUGH!!!!


var Sieve = {

  createRange: function ( startNumber, endNumber ) {
    // Create a starting point
    var arr = [];

    for ( var i = startNumber; i <= endNumber; i++ ) {
      // Push every value into the array
      arr.push( i );
    }

    // Return it so we can store it
    return arr;
  },

  primes: function ( startNum, endNum ) {
    // Store the array of every number
    var possibilities = this.createRange( startNum, endNum );

    // Have an array to store all the primes
    var primesArray = [];

    while ( possibilities.length > 0 ) {
      // Remove the first element from the possibilities array, and store it as "prime"
      var prime = possibilities.shift();

      // Push the first element into the primesArray
      primesArray.push( prime );

      // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
      // Go through the possibilities array and remove anything that is divisible by the current prime number!
      // The way that the filter method works, is that if you return something that evaluates to true, it will leave it alone. But if you return something falsey, then it will remove that element
      possibilities = possibilities.filter( function ( num ) {
        return num % prime !== 0;
      } );

      // Not a bad description of the filter function
      // [ 8, 10, 200, 1, 15 ].filter( function (num) {
      //   return num > 10;
      // } ); // returns [200, 15]

    }

    console.log( primesArray );
    return primesArray;
  }

}

var from10to100 = Sieve.primes( 2, 100 );
// console.log( from10to100 );


// AN EXAMPLE! If we wanted this to work from 2 to 10.
//
// First thing we do is create an array with the values from 2 till 10. This is called possibilities.
// We then create an empty array called primeArray
//
// We make a while loop, that runs while the amount of possibilities is greater than zero.
// Remember that a while loop will recalculate it's condition each time. So if we reduce the amount of possibilities, it will eventually leave the loop
//
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!Iterations!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// IMPORTANT (At the start)
// prime is 2
// possibilities is [2, 3, 4, 5, 6, 7, 8, 9, 10]
// primeArray is []
//
// IMPORTANT (At the end)
// prime is still 2, but everything divisible by 2 is removed from possibilities
// possibilities is [ 3, 5, 7, 9 ]
// primeArray is [2]
//
// prime is equal to 2 (and 2 has been removed from possibilities)
// We then assume that 2 is a prime number, so we push it into the primeArray
// Finally, we remove anything that is divisible by 2 from the possibilities array
//
//
//
//
// IMPORTANT (At the start)
// prime is 3
// possibilities is [ 3, 5, 7, 9 ]
// primeArray is [2]
//
// IMPORTANT (At the end)
// prime is still 3, but everything divisible by 3 is removed from possibilities
// possibilities is [ 5, 7 ]
// primeArray is [2, 3]
//
// prime is equal to 3 (and 3 has been removed from possibilities)
// We then assume that 3 is a prime number, so we push it into the primeArray
// Finally, we remove anything that is divisible by 3 from the possibilities array
//
//
//
//
// IMPORTANT (At the start)
// prime is 5
// possibilities is [ 5, 7 ]
// primeArray is [2, 3]
//
// IMPORTANT (At the end)
// prime is still 5, but everything divisible by 5 is removed from possibilities (nothing changes!)
// possibilities is [ 7 ]
// primeArray is [2, 3, 5]
//
// prime is equal to 3 (and 3 has been removed from possibilities)
// We then assume that 3 is a prime number, so we push it into the primeArray
// Finally, we remove anything that is divisible by 3 from the possibilities array
//
//
//
//
// IMPORTANT (At the start)
// prime is 7
// possibilities is [ 7 ]
// primeArray is [2, 3, 5]
//
// IMPORTANT (At the end)
// prime is still 7, but everything divisible by 5 is removed from possibilities (nothing changes!)
// possibilities is [ ]
// primeArray is [2, 3, 5, 7]
//
// prime is equal to 7 (and 7 has been removed from possibilities)
// We then assume that 7 is a prime number, so we push it into the primeArray
// Finally, we remove anything that is divisible by 7 from the possibilities array
//
//
//
//
// Possibilities is now [], and the length is no longer greater than zero so we leave the while loop
// At this point - possibilities is an empty array and primeArray is [2, 3, 5, 7].
// primeArray is now everything that is a prime number between 2 and 10!  So we return that, and we are all done