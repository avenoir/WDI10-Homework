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

	var Scrabble = {
	// all functions related to Scrabble in here
		score: function (word) {
			// Make a starting point
			console.log(word);
			var sum = 0;

			word = word.toLowerCase();

			var wordLength = word.length;

			// go through each letter and add to the sum

			for (var i = 0; i < wordLength; i++) {
				console.log(word[i]); // for loop prints string one letter at a time
				var currentLetter = word[i]; 
				var currentScore = this.letterScores[currentLetter] || 0; 
				// num = undefined || 0 can be used to return first true number.
				//this refers to current object, good in case someone changes name of Scrabble
				var sum += currentScore;

				console.log("Current letter:", currentLetter);
			}
		},

		console.log("The score for the word " + word + " is " + sum);


		letterScores: {
		'a': 1,
		'e':
		'i':
		'o':
		'u':
		'l':
		'n':
		'r':
		's':
		't':
		'd':
		'g':
		'b':
		'c':
		'm':
		'p':
		}

	}

// Scrabble.leterScores[letterToGet]
// when to type ; after }?
