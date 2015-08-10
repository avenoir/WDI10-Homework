// Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').

var letters = ["F","O","X"];
var currentGuess = ["_","_","_"];

// Write a function called guessLetter that will take one argument, the guessed letter.
var guessLetter = function(guessedLetter) {
	console.log("Letter guessed: " + guessedLetter);

	// Iterate through the word letters and see if the guessed letter is in there.
	for (var i = 0; i < letters.length; i++) {
		if ( guessedLetter === letters[i] ) { // If the guessed letter matches a word letter,
			currentGuess[i] = guessedLetter;  // change the guessed letters array to reflect that
			console.log(currentGuess); 	// When it's done iterating log the current guessed letters 
			console.log("Congratulations! You found a letter!"); //congratulate the user if they found a new letter
		}
	}
	//Figure out if there are any more letters that need to be guessed, and if not, congratulate the user for winning the game.
 	var lettersRemaining = currentGuess.length;
 	for (var i = 0; i < currentGuess.length; i++) {
 		if (currentGuess[i] !== "_") {
 			lettersRemaining-- ;
 		} 
 	}
 	if (lettersRemaining === 0) {
 		console.log("YOU WIN!")
 	}
 	

}
guessLetter("A");
guessLetter("O");
guessLetter("B");
guessLetter("F");
guessLetter("X");








