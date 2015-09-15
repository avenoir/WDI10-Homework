console.log( "%cmain_more.js - using the constructor pattern.\n", "font-size: 20px; color: hotpink; font-weight: bold;" );

var Collection = function ( arr ) {
  this.arr = arr;

  this.squareElements = function () {
    this.squares = [];
    for ( var i = 0; i < this.arr.length; i++ ) {
      this.squares.push( this.arr[i] * this.arr[i] );
    }
    return this.squares;
  };

  this.cubeElements = function () {
    this.cubes = [];
    for ( var i = 0; i < this.arr.length; i++ ) {
      this.cubes.push( this.arr[i] * this.arr[i] * this.arr[i] );
    }
    return this.cubes;
  };

  this.squareRootsOfElements = function () {
    this.squareRoots = [];
    for ( var i = 0; i < this.arr.length; i++ ) {
      this.squareRoots.push( Math.sqrt( this.arr[i] ) );
    }
    return this.squareRoots;
  };

  this.evenAndOddElements = function () {
    this.evensAndOdds = [];
    for ( var i = 0; i < this.arr.length; i++ ) {
      if ( this.arr[i] % 2 === 0 ) {
        this.evensAndOdds.push( true );
      } else {
        this.evensAndOdds.push( false );
      }
      // OR
      // this.evensAndOdds.push( this.arr[i] % 2 === 0 );
    }
    return this.evensAndOdds;
  };
};

var coll_one = new Collection( [1, 2, 3, 4, 5] );
console.log( "\n\tSquares: ", coll_one.squareElements() );
console.log( "\tCubes: ", coll_one.cubeElements() );
console.log( "\tSquare Roots: ", coll_one.squareRootsOfElements() );
console.log( "\tEven and Odds: ", coll_one.evenAndOddElements() );

console.log( "\n\n\n" );