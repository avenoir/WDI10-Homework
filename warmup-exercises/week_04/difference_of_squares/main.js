/*
  I am going to structure this like I always do.
  We are going to have an object and within that we need a couple of functions.
  - Something that returns the sum of all the squares between 1 and a given maximum number
  Method Name: sumOfSquares
  - Something that returns the sum of all of the numbers between 1 and a given maximum number, squared.
  Method Name: squareOfSum
  - Something that will return the difference.
  Method Name: differenceOfSquares
*/

var Squares = {

  sumOfSquares: function( max ) {
    var sum = 0;
    for ( var i = 1; i <= max; i++ ) {
      sum += (i * i);
    }
    return sum;
  },

  squareOfSum: function( max ) {
    var sum = 0;
    for ( var i = 1; i <= max; i++ ) {
      sum += i;
    }
    return sum * sum;
  },

  differenceOfSquares: function( max ) {
    return this.squareOfSum( max ) - this.sumOfSquares( max );
  }

};

console.log(Squares.differenceOfSquares(10));