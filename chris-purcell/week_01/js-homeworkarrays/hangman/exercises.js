var answer = ['b', 'a', 'r', 't'];
var guesses = ['_', '_', '_', '_'];
var reward = 0;
var allGuesses = [];
var guessLetter = function(letter){
	for (i = 0; i < answer.length; i++){ //created to iterate through the letter options
		if (letter === answer[i]) {
			guesses[i] = letter;
			console.log(guesses);
			reward = reward + 20;
			allGuesses.push(letter);
		} else if (!(letter === answer[i]){
			reward = reward - 10;
		}
	}
	return "$" + reward;
} 

/// guesses[i] = letter; this should work to print the current correct guesses

