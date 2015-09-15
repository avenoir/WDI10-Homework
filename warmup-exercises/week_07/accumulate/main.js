console.log( "%cmain.js - using individual functions.\n", "font-size: 20px; color: hotpink; font-weight: bold;" );

var squareElements = function ( arr ) {
  var squares = [];
  for ( var i = 0; i < arr.length; i++ ) {
    squares.push( arr[i] * arr[i] );
  }
  return squares;
}

var cubeElements = function ( arr ) {
  var cubes = [];
  for ( var i = 0; i < arr.length; i++ ) {
    cubes.push( arr[i] * arr[i] * arr[i] );
  }
  return cubes;
}

var squareRootsOfElements = function ( arr ) {
  var squareRoots = [];
  for ( var i = 0; i < arr.length; i++ ) {
    squareRoots.push( Math.sqrt( arr[i] ) );
  }
  return squareRoots;
}

var evenAndOddElements = function ( arr ) {
  var evensAndOdds = [];
  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i] % 2 === 0 ) {
      evensAndOdds.push( true );
    } else {
      evensAndOdds.push( false );
    }
    // OR
    // evensAndOdds.push( arr[i] % 2 === 0 );
  }
  return evensAndOdds;
}


var coll = [1, 2, 3, 4, 5];

console.log( "\n\tSquares: ", squareElements( coll ) );
console.log( "\tCubes: ", cubeElements( coll ) );
console.log( "\tSquare Roots: ", squareRootsOfElements( coll ) );
console.log( "\tEven and Odds: ", evenAndOddElements( coll ) );

console.log( "\n\n\n" );