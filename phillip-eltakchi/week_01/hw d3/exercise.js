// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// var garray1 = ["F", "O", "X"];
// var garray2 = ["_", "_" , "_"];

// var numleft = garray1.length;




var garray1 = ["F", "O", "X"];
var garray2 = ["_", "_" , "_"];

var numleft = garray1.length;


var guessLetter = function(guess){
	
	for (i = 0; (i < garray1.length); i++){
		if (guess === garray1[i]){
			garray2[i] = guess;
			console.log("Congratulations you found a letter!" + garray2);
			numleft = numleft - 1; 

			
			if (numleft > 0) { 
				console.log("You have " + numleft + " letters remaining.")
			  } else {
				console.log("You have won the game!");
			} 
		}
	}
}



console.log(guessLetter("X"));
console.log(guessLetter("F"));
console.log(guessLetter("L")); // I am unsure where to put the else console.log("This letter is not in the word"); <-- this seems to bug my code where ever i put it.
console.log(guessLetter("O"));





// Bonus: Make it more like Wheel of Fortune:

// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

var garray1 = ["F", "O", "X"];
var garray2 = ["_", "_" , "_"];

var numleft = garray1.length;
var reward = 0;


var guessLetter = function(guess){ 
	// var wrongcount = 0;
	for (i = 0; (i < garray1.length); i++){ 
		
		if (guess === garray1[i]){  // ** open IF 1
			garray2[i] = guess;
			console.log("Congratulations you found a letter!" + garray2);
			numleft = numleft - 1; 
			
			var lilreward = (Math.round(Math.random() * 100));
			reward = reward + lilreward;
			console.log("You get awarded " + lilreward + " points.");
			// wrongcount += 1
			// if (wrongcount === garray1.length){
			// 	reward = reward - (Math.round(Math.random() * 100))
			// }
			
			if (numleft > 0) {  
				console.log("You have " + numleft + " letters remaining.")
			} else {
				console.log("You have won the game!");
				console.log("You finished on " + reward + " points");
			}  

		} // ** CLOSE IF 1 (This is where the first IF's else statement will go)
	} /
} 



console.log(guessLetter("X"));
console.log(guessLetter("F"));
console.log(guessLetter("L")); // I am unsure where to put the else console.log("This letter is not in the word"); <-- this seems to bug my code where ever i put it.
console.log(guessLetter("O"));

/***** THIS IS TO SEE IF I STRUCTURED MY TWO IF's CORRECTLY ABOVE

var phill2 = "me2"
var phill = "me";
if (phill === "me"){
	console.log("This is the first condition");

	if (phill2 === "me2"){
		console.log("This is a condition within a condition.");
	} else {
		console.log("this the secod condition within a condition");
	}

} else {
	console.log("This isnt me");
}
*/




// Bonus: Make it like Hangman:

// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.