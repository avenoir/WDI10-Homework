// DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

// Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.


// So back to nucleotides.

// There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.

// There are no other nucleotides.

// Make sure that you validate it has nucleotides!

// Find how many of each nucleotides are in a string that you pass in to a function

var nucleotides = ["A","C","G","T","U"];

var findNucl = function ( string ){
	var arr = [];
	var A = 0;
	var C = 0;
	var G = 0; 
	var T = 0;
	var U = 0;
	string = string.toUpperCase();
	for (var i = 0; i < string.length; i++ ) {
		if (nucleotides.indexOf(string[i]) !== - 1)  {
			arr.push(string[i]);
		} 
	}

	for (var j = 0; j < arr.length; j++) {

		switch (arr[j]) {
			case "A":
				A++;
				break;
			case "C":
				C++;
				break;
			case "G":
				G++;
				break;
			case "T":
				T++;
				break;
			case "U":
				U++;
				break;
		}
	}

	console.log("Occurrence of nucleotides in " + string +" is as follows: ");
	console.log("A: " + A + " C: " + C + " G: " + G + " T: " + T + " U: " + U);
}

//findNucl(prompt("String to test for nucleotides: "));

//solution

var NucleotideSolution = {

	countIndividualNucleotide: function( string, char ) {
		var nucleotides = 0;
		for ( var i = 0; i < string.length; i++ ) {
			if ( string[i] === char ) {
			nucleotides++;
			}
		}
		return nucleotides;
	},

	returnNucleotideCount: function( string ) {
		var nucleotideTotals = {
			"A": this.countIndividualNucleotide( string, 'A'),
			"C": this.countIndividualNucleotide( string, 'C'),
			"G": this.countIndividualNucleotide( string, 'G'),
			"T": this.countIndividualNucleotide( string, 'T'),
			"U": this.countIndividualNucleotide( string, 'U'),

		}
		return nucleotideTotals;
	}
}

//console.log(NucleotideSolution.returnNucleotideCount("ASDLHFLKASDLHAS"));
