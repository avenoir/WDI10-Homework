// Scrabble Score
// Write a JS function that, given a word, computes the scrabble score for that word.

// It should look like the following:

// Scrabble.score("cabbage")
// # => 14
// Letter Values

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10

// Extensions (we won't tell you how to implement this!)

// You can play a :double or a :triple letter.
// You can play a :double or a :triple word.


var scrabble = {

	score: function(word){
		var pointScore = 0;
		word = word.toUpperCase();
			for (var i = 0; i < word.length; i++){
				for (var j = 0; j < this.points.length; j++) {
					if (this.points[j].letters.indexOf(word[i]) != -1) {
					pointScore = pointScore + this.points[j].value; 					
				}
			}
		}
		console.log("Your score for " + word + " is: " + pointScore);
		return pointScore;
	},
	points: [{value: 1, letters: ["A","E","I","O","U","L","N","R","S","T"]}, 
			{value: 2, letters: ["D","G"]},
			{value: 3, letters: ["B","C","M","P"]},
			{value: 4, letters: ["F", "H", "V", "W"]}, 
			{value: 5, letters: ["K"]},
			{value: 6, letters: ["J","X"]},
			{value: 7, letters: ["Q","Z"]}]
}

scrabble.score("algebra")