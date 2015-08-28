console.log("Is this thing on");

/*
Scrabble Score
Write a JS function that, given a word, computes the scrabble score for that word.

It should look like the following:

Scrabble.score("cabbage")
# => 14
Letter Values

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
*/

var letters = {
  	1: "AEIOULNRST",
  	2: "DG",	
  	3: "BCMP",
  	4: "FHVWY",
  	5: "K",
  	8: "JX",
  	10: "QZ"
}



var scrableScore = function (word) {

	word = word.toUpperCase();
	var score = 0;
	for ( var i=0; i < word.length; i++ ) {
		// Find the score for this letter
		for (var key in letters) {
			if (letters[key].indexOf(word[i]) > -1) {
				score += parseInt(key);
				break;
			}
		}
		
	}
	return score;
}

console.log(scrableScore("cabbage"));

