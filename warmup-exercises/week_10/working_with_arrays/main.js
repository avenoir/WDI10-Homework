var reverse = function ( array ) {
  var result = [];
  for ( var i = array.length - 1; i >= 0; i-- ) {
    result.push( array[i] );
  }
  return result;
};

var flatten = function ( array ) {
  var result = [];
  for ( var i = 0; i < array.length; i++ ) {

    if ( array[i] instanceof Array ) {
      for ( var j = 0; j < array[i].length; j++ ) {
        result.push( array[i][j] );
      }
    } else {
      result.push( array[i] );
    }

  }
  return result;
};