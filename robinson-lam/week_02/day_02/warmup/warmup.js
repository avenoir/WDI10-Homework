console.log("DNA Thing");

// function findNucleotides(word) {
//   var i = ~~((word.match(/[acgtu]/gi) || []).length / 2);
//   return i + " nucleotides.";
// };

var Nucleotide = {
  countIndividualNucleotides: function (word, nucleotide) {
    var numOfNucleotides = 0 ;
    for (x = 0; x < word.length; x++) {
      if ( word[x] == nucleotide.toLowerCase() ) {
        numOfNucleotides++;
      }
    }
    return numOfNucleotides;
  },

  findTotalNucleotides: function (word) {
    var nucleotideTotals = {
      "A": this.countIndividualNucleotides( word, "A" ),
      "C": this.countIndividualNucleotides( word, "C" ),
      "G": this.countIndividualNucleotides( word, "G" ),
      "T": this.countIndividualNucleotides( word, "T" ),
      "U": this.countIndividualNucleotides( word, "U" )
    };
    return nucleotideTotals;
  }
};

console.log(Nucleotide.findTotalNucleotides("isahfokafjasifkla"));
