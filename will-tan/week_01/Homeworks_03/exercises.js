// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

var wordLetters = ['F', 'O', 'X', 'O', 'F'];
var guessedLetters = ['_', '_', '_', '_', '_'];
var count = 0;

var guessLetter = function(char){
	var bool = false;
	for (var i = 0, n = wordLetters.length; i < n; i++){
		if (char === wordLetters[i]){
			guessedLetters[i] = char;
			count++; 
			bool = true; 
		}
	}
	console.log(guessedLetters.join());

	if(bool){
		console.log("Congratulations! You found a new letter!");
	}
	if(count == wordLetters.length){
		console.log("Congratulations! You won the game!");
	}
};

guessLetter('B');
guessLetter('A');
guessLetter('X');
guessLetter('D');
guessLetter('E');
guessLetter('F');
guessLetter('O');

// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

var wordLetters = ['F', 'O', 'X', 'O', 'F'];
var guessedLetters = ['_', '_', '_', '_', '_'];
var count = 0;
var reward = 0;

var wheelOfFortune = function(char){
	var bool = false;
	var multiple = 0;

	for (var i = 0, n = wordLetters.length; i < n; i++){
		if (char === wordLetters[i]){
			guessedLetters[i] = char;
			count++; 
			multiple++;
			bool = true; 
		}
	}
	console.log(guessedLetters.join());

	if(bool){
		console.log("Congratulations! You found a new letter!");
		reward = reward + multiple * Math.random() * 100;
		console.log(reward);
	} else {
		reward = reward - Math.random() * 100;
		if (reward < 0){
			reward = 0;
		}
		console.log(reward);
	}

	if(count == wordLetters.length){
		console.log("Congratulations! You won the game!");
		console.log("$" + reward);
	}
};

wheelOfFortune('B');
wheelOfFortune('A');
wheelOfFortune('X');
wheelOfFortune('D');
wheelOfFortune('E');
wheelOfFortune('F');
wheelOfFortune('O');

// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

var wordLetters = ['F', 'O', 'X', 'O', 'F'];
var guessedLetters = [];
var wrongCount = 0;
var correctCount = 0;

var hangMan = function(char){
	var bool = false;
	var repeat = true;

	for (var i = 0, n = guessedLetters.length; i < n ; i++){
		if (char === guessedLetters[i]){
			repeat = false;
		}
	}

	if(repeat){
		guessedLetters.push(char);

		for (var i = 0, n = wordLetters.length; i < n; i++){
			if (char === wordLetters[i]){
				correctCount++; 
				bool = true; 
			}
		}
		
		if(bool === false){
			wrongCount++;
		}

		if (wrongCount === 6){
			console.log("You lost!");
		} else if (correctCount === wordLetters.length && wrongCount < 6){
			console.log("You won!");
		}
	}
};

hangMan('B');
hangMan('B');
hangMan('B');
hangMan('B');
hangMan('B');
hangMan('B');
hangMan('B');
hangMan('D');
hangMan('E');
hangMan('F');
hangMan('C');
hangMan('D');
hangMan('E');
hangMan('Z');
hangMan('Y');
hangMan('Q');
hangMan('X');
hangMan('O');
