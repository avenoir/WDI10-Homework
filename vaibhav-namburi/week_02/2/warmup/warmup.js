
var Nucleotide={

	numOfNumcleotides: function(string,charec){

		var total = 0;

		for(var i=0 ; i<string.length; i++){
			if(string[i]===charec){

				total++;
			}
		}
		return total;
	},

	diffNucleotides: function(string1){

		var varNucleotides={

		"A":this.numOfNumcleotides(string1,"A"),
		"C":this.numOfNumcleotides(string1,"C"),
		"T":this.numOfNumcleotides(string1,"T"),
		"G":this.numOfNumcleotides(string1,"G"),
		"U":this.numOfNumcleotides(string1,"U")
	}
	return varNucleotides;
	}

}

console.log(Nucleotide.diffNucleotides("ACTGUGHUS"));