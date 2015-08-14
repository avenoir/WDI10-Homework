//Homework - The word guesser - Guess the word "fox"

var wordToGuess = ['f', 'o', 'x'];
var wordGuessed = [];
var wrongGuess = [];

var lenGuess = 0;
var reward = 0;
var numGuess = 0;
var hangman = 0;

var guessLetter = function(letter) {

	//for ( var i = 0; i < wordToGuess.length; i++ ) {

		if ((( wordToGuess[0] === letter ) || ( wordToGuess[1] === letter ) || ( wordToGuess[2] === letter )) && ((letter !== wordGuessed[0] ) && ( letter !== wordGuessed[1] ))) {

			wordGuessed.push(letter);

			console.log( "Congrats! You guessed the correct letter " + letter );
			lenGuess = wordGuessed.length;

			reward += Math.floor(Math.random() * 50);
			numGuess++;
			hangman++;
		} 
		else {
			wrongGuess.push(letter);
			reward -= Math.floor(Math.random() * 10);
			numGuess++;
			hangman--;
		}

	//}
};

do {
	var letter = prompt("Guess a letter: ");
	guessLetter(letter);

} while ((lenGuess < 3 ) && (numGuess < 6));

if (( lenGuess === 3 ) && ( numGuess < 6 )) {

	console.log( "You win! The word is: " + wordToGuess );
	console.log( "Reward is $" + reward );
	console.log( "Total guesses: " + numGuess);
	console.log( "Incorrect guesses: " + wrongGuess);
}
else {

	console.log( "You lost. You reached the maximum trial of 6." );
	console.log( "Total guesses: " + numGuess);
	console.log( "Incorrect guesses: " + wrongGuess);
	console.log( "Hangman: " + hangman);
	console.log("-----");
	console.log("|  |");
	console.log("|  0");
	console.log("|  \\/");
	console.log("|  |");
	console.log("|  |");
	console.log("|  /\\");
	console.log("---");

}
