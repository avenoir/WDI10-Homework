// an object called nucleotide
// that needs to be able to take a string
// and it needs to be able to compare to another string
//   go through each character, and if they are equal, that's all good

var Nucleotide = function ( nucleotide ) {
  this.nucleotide = nucleotide;

  this.hammingDistance = function ( other_nucleotide ) {
    var difference = 0;
    var nucleotide = this.nucleotide;

    for ( var i = 0; i < nucleotide.length; i++ ) {
      if ( nucleotide[i] !== other_nucleotide[i] ) {
        difference += 1;
      }
    }
    console.log( difference );
    return difference;
  }
}

var nucleotide_one = new Nucleotide( "ATCGAGTA" );
var nucleotide_two = new Nucleotide( "ASGASGTA" );

nucleotide_one.hammingDistance( nucleotide_two.nucleotide );




var hammingDistance = function ( first_nucleotide, second_nucleotide ) {
  var diff = 0;

  for ( var i = 0; i < first_nucleotide.length; i++ ) {
    if ( first_nucleotide[i] !== second_nucleotide[i] ) {
      diff += 1;
    }
  }

  console.log( diff );
}

hammingDistance( "ATCGAGTA", "ASGASGTA" );