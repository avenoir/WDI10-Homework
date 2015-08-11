var Scrabble = {
	score: function ( word ) {
		var sum = 0;
		word = word.toLowerCase();
		var length = word.length;

		for (i = 0; i < word.length; i++) {
			var currentLetter = word[i];
			var currentScore = this.letterScores[currentLetter] || 0;
			sum += sum + currentScore
		}
		return sum;
	},

	letterScores : {
		//all letter keys for number score values ie "a": 1
	}


}