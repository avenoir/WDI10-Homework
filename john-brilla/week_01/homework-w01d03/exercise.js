var word = ['F', 'O', 'X',];
var correctGuesses = ['_', '_', '_'];
var letterStore = new Array();
var score = 0;
var amount = 0; 

var guessLetter = function(letter) {
	var guessStatus = false;
	var x = letter.toUpperCase(); 										//make input letter upper case.
	
	if (letterStore.indexOf(x) === -1) {
		for (var i = 0; i < word.length; i++) { 						//Loop through letters.
			if (word[i] === x && letterStore.indexOf(x) === -1) { 		//check if letter is found.							
				correctGuesses[i] = x; 									//add to correct location - score + 1
				guessStatus = true; 									//Guess Status is true with guess.
				score += 1;
				amount += Math.round(Math.random() * 100);
			}	
		}

		letterStore.push(x)
	} else {
		console.log('The letter ' + letterStore + ' has been choosen already.');
		guessStatus = true;
	}

	if (guessStatus) {
		console.log('You guessed a correct letter.');
		if (score === word.length) { 									//Check if all letters found.
			console.log('YOU WON');
		}
	} else {															//Subtracts money for bad guess.
		console.log('Please try again!');
		amount -= Math.round(Math.random() * 100);
	}

	if (score > 1) { 													//ADD BONUS
		amount += Math.round(Math.random() * correctGuesses.length);
		console.log('Multipul letters have been found - BONUS ADDED.')
	}

	if (amount < 0) {													//Money Status
		var message = console.log('You have negative money.' + amount + ' dollars in cash.');
	} else {
		var message = console.log('You have ' + amount + ' dollars in cash.');
	}
	
	return message, letterStore, correctGuesses;

}