var nucleotides = {
	DNA: ['A', 'C', 'G', 'T'],
	RNA: ['A', 'C', 'G', 'U'],
	
	findNucleotides: function(str) {

		var message = {}; var status = false; var count = 0;
		str = str.toUpperCase(); var dna = 0; var rna = 0;

		for (var i = 0; i < str.length; i++) {
			letter = str[i];

			for (var j = 0; j <= 3; j++) {
				if (letter === this.DNA[j] || letter === this.RNA[j]) {
					status = true;
					count++;
				}
				if (letter === this.DNA[j]) {
					dna++
				}
				if (letter === this.RNA[j]) {
					rna++
				}
			}
			
		}
		message = "Nucleotides present: " + status + ". No. of nucleotides: " + count + ".\nDNA: " + dna + ". RNA: " + rna;

		return message;
	}

};

var input = prompt("Enter a string");
alert(nucleotides.findNucleotides(input));