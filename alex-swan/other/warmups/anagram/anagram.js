// Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the correct one(s).

// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

var Detector = {

	anagram: function(word, array) {
		var solution = [];
		word = word.toLowerCase();

	//iterate through array
		for (var i = 0; i < array.length; i++) {
			array[i] = array[i].toLowerCase();
			//check if right length and if strings match and return 
			
			if (this.rightLength(word, array[i]) && this.stringCheck(word, array[i])) {
				solution.push(array[i]);
				console.log(array[i] + " is an anagram of " + word);
			}
		} return solution;
	},
	
	//check if word the rightLengthght length
	rightLength: function(word1, word2) {
		return (!(word1 === word2) && word1.length === word2.length)
	},
	
	//check if strings match
	stringCheck: function(word1, word2){
		for (var i = 0; i < word1.length; i++) {			
			if (word2.indexOf(word1[i]) === -1) {
				return false;
			};
		} return true;
	}
};

Detector.anagram("lislten", ["enlists","google","Inletls","banana", "Listen"]);

//solution

var Anagram = {
	
	sortAlphabetically: function( word ) {
		return word.split("").sort().join("")
	},

	theEqualizer: function( setWord, guessWord ) {
		setWord = setWord.toLowerCase();
		guessWord = guessWord.toLowerCase();
		return this.sortAlphabetically( setWord ) ===this.sortAlphabetically( guessWord );
	},

	areAnagrams: function( setWord, guessWord ) {
		return setWord !== guessWord && this.theEqualizer(setWord, guessWord);
	},

	matches: function(word, potentialAnagrams) {
		var anagrams = [];
		for (var i = 0; i < potentialAnagrams.length; i++) {
			var currentWord = potentialAnagrams[i];
			if ( this.areAnagrams(word, currentWord)) {
				anagrams.push( currentWord );
			}
		} console.log(anagrams)
		return anagrams;
	}
}

Anagram.matches("listen", ["enlists","google","Inlets","banana", "Listen"]);

//1. check word length
//2. check letters
