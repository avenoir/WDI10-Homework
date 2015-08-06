// Bonus: Make it more like Wheel of Fortune:

// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

var letters = ["F","O","X","O","F","F"];
var currentGuess = ["_","_","_","_","_","_"];
var rewardAmount = 0; // Start with a reward amount of $0

// Write a function called guessLetter that will: // Take one argument, the guessed letter.
var guessLetter = function(guessedLetter) {
	
	console.log("Letter guessed: " + guessedLetter);
	console.log("Your current reward is: $" + rewardAmount);
	var randomAmount = Math.floor((Math.random() * 100) + 1); // Generate a random amount 
	console.log("Amount at stake is: $" + randomAmount); 
	
	// Iterate through the word letters and see if the guessed letter is in there.
	var lettersFound = 0; //Keep track of letters found
	for (var i = 0; i < letters.length; i++) {
		if ( guessedLetter === letters[i] ) { // If the guessed letter matches a word letter,
			currentGuess[i] = guessedLetter;  // change the guessed letters array to reflect that.
			lettersFound++;
		}
	}
	console.log(currentGuess);
	//	Reward the user if they found a letter(multiply the reward if multiple letters found), otherwise subtract from their reward.
	if (lettersFound > 0){
		console.log("Congratulations, your letter is correct!");
		rewardAmount = rewardAmount + randomAmount * lettersFound;
	} else if (lettersFound === 0) {
		console.log("Wrong, you lose.")
		rewardAmount = rewardAmount - randomAmount;
	}

	//Figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
 	var lettersRemaining = currentGuess.length;
 	for (var i = 0; i < currentGuess.length; i++) {
 		if (currentGuess[i] !== "_") {
 			lettersRemaining-- ;
 		} 
 	}
 	// When they guess the word, log their final reward amount.
 	if (lettersRemaining === 0) {
 		console.log("YOU WIN!")
 		console.log("Your final reward is: $" + rewardAmount)	
 	}
}

guessLetter("A");
guessLetter("O");
guessLetter("B");
guessLetter("F");
guessLetter("X");
