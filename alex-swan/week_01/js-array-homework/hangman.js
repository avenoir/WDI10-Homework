// Bonus: Make it like Hangman:

// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

var letters = ["F","O","X","O","F","F"];
var currentGuess = ["_","_","_","_","_","_"];
var allLettersGuessed = []; 
var hangman = 0;

var guessLetter = function(guessedLetter) {
	// Refuse to play if hangman reached
	if (hangman >= 6) {
		console.log("Sorry, game over")
		return;
	}

	console.log("Letter guessed: " + guessedLetter);
	// Do nothing if letter already guessed
	for (var i = 0; i < allLettersGuessed.length; i++){
		if (allLettersGuessed[i] === guessedLetter) {
			return;
		}
	}
	// Add guessed letter to guesserLetters array
	allLettersGuessed.push(guessedLetter);
	
	// Iterate through the word letters and see if the guessed letter is in there.
	var lettersFound = 0;
	for (var i = 0; i < letters.length; i++) {
		if ( guessedLetter === letters[i] ) { // If the guessed letter matches a word letter,
			currentGuess[i] = guessedLetter;  // change the guessed letters array to reflect that.
			lettersFound++;
		}
	}

	// Log the current guessed letters ('F__') and congratulate the user if they found a new letter.
	console.log(currentGuess);
	if (lettersFound > 0){
		console.log("Congratulations, you found a letter!");

	//increment hangman if no letters founc
	} else { // if (lettersFound === 0) {
		console.log("Wrong.");
		hangman += 1;
		console.log("Hangman score: " + hangman)
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

 	//check if hangman up
 	if (hangman === 6){
 		console.log("HANGMAN. GAME OVER.")
 	}
}

guessLetter("A");
guessLetter("O");
guessLetter("O");
guessLetter("B");
guessLetter("E");
guessLetter("C");
guessLetter("P");
guessLetter("D");
guessLetter("B");
guessLetter("F");
guessLetter("X");
