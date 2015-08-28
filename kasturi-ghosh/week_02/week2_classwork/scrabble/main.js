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


var scrabble = function(word) {
	var newArray = []; var score = 0;
	word = word.toUpperCase();

	newArray = word.split("");
	for (var i = 0; i < newArray.length; i++) {
		if(newArray[i] === 'Q' || newArray[i] === 'Z') {
			score += 10;
		} else if (newArray[i] === 'J' || newArray[i] === 'X') {
			score += 8;
		} else if (newArray[i] === 'K') {
			score += 5;
		} else if (newArray[i] === 'B' || newArray[i] === 'C' || newArray[i] === 'M' || newArray[i] === 'P') {
			score += 3;
		} else if (newArray[i] === 'F' || newArray[i] === 'H' || newArray[i] === 'V' || newArray[i] === 'W' || newArray[i] === 'Y') {
			score += 4;
		} else if (newArray[i] === 'D' || newArray[i] === 'G') {
			score += 2;
		} else if (newArray[i] === 'A' || newArray[i] === 'E' || newArray[i] === 'I' || newArray[i] === 'O' || newArray[i] === 'U' || newArray[i] === 'L' || newArray[i] === 'N' || newArray[i] === 'R' || newArray[i] === 'S' || newArray[i] === 'T') {
			score += 1;
		} else {
			score += 0;
		}
	}
	return score;
};

var word = prompt("Enter a word");
alert("Your score: " + (scrabble(word)));