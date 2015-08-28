var Anagram = {

	words: ["enlists", "google", "inlets", "banana"],

	anagramDetector: function(str) {
		var count; var newArray;
		
		for ( var i = 0; i < this.words.length; i++)
		if (str.length === this.words[i].length) {
			debugger;
			for ( var j = 0; j < str.length; j++) {
				for ( var k = 0; k < this.words[i].length; k++) {
					if (str[j] === this.words[i][k]) {
						count++;
					}
				}
			}
			if (count === str.length) {
				newArray.push(this.words[i]);
			}
		}
		return newArray;
	}
};

console.log( "The anagram(s) is/are: " + Anagram.anagramDetector("listen") );