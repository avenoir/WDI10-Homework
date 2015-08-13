console.log("Warmupify");

var Anagram = {
	sortAlphabetically: function() {
		return word.split("").sort().join("");	
	},

	theEqualizer: function(setWord, guessWord) {
		setWord = setWord.toLowerCase();
		guessWord = guessWord.toLowerCase();
		return this.sortAlphabetically( setWord ) === sortAlphabetically( guessWord );
	},

	areAnagrams: function(setWord, guessWord) {
		return setWord !== guessWord && this.theEqualizer (setWord, guessWord);
	},

	matches: function(word, potentialAnagrams) {
		var anagrams = [];

		for ( var i =0; i < potentialAnagrams.length; i++) {
			var currentWord = potentialAnagrams[i];
			if (this.areAnagrams(word, currentWord)) {
				anagrams.push( currentWord );
			}
		}
		return anagrams;
	}
}