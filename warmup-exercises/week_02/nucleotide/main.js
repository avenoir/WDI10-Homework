var Nucleotide = {
  countIndividualNucleotide: function( string, char ) {
    var nucleotideCount = 0;
    for ( var i = 0; i < string.length; i++ ) {
        if (string[i] === char ) {
            nucleotideCount++;
        }
    }
    return nucleotideCount;
  },

  returnNucleotideCount: function( string ) {
    var nucleotideTotals = {
        'A': this.countIndividualNucleotide( string, 'A' ),
        'C': this.countIndividualNucleotide( string, 'C' ),
        'G': this.countIndividualNucleotide( string, 'G' ),
        'T': this.countIndividualNucleotide( string, 'T' ),
        'U': this.countIndividualNucleotide( string, 'U' )
    }
    return nucleotideTotals;
  }
}

console.log(Nucleotide.returnNucleotideCount("ACGTADSGASDTUTUEGCTT"));