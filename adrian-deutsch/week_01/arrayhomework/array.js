// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


var maxOfTwoNumbers = function (num1, num2){
 if (num1 > num2){
 	console.log(num1 + " is bigger than " + num2);
 }	
 else {
 	console.log(num2 + " is bigger than " + num1);
 }
}

maxOfTwoNumbers(10,5);
maxOfTwoNumbers(2,5);
maxOfTwoNumbers(20, 100);



// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var array = [500, 9, 50];
var maxOfThree = function (array){
	return Math.max.apply(Math, array);
};

console.log("The biggest number is " + maxOfThree(array));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.



var findVowel = function (x) {

   	if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
    return x + " is a vowel";
	}
	else {
		return x + " is not a vowel";
	}
};

console.log(findVowel("e"));
console.log(findVowel("b"));
console.log(findVowel("u"));
console.log(findVowel("c"));



/*
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

*/



var sumArray = function (array1){
	var result = 0;  // why not array1[0]?
	for (var i = 0; i < array1.length; i++) {
	
     result += array1[i]; 
} 
	return result;
}
console.log(sumArray([1,2,3,4]));


var multiplyArray = function (array2){
	var process = array2[0];
	for (var i = 0; i < array2.length; i++) {
	
     process *= array2[i]; 
} 
	return process;
}
console.log(multiplyArray([1,2,3,4]));



// Bonus


//Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var arr = ["j", "a", "g", " ", "t", "e", "s", "t", "a", "r"];
var reverseString = function(arr){
    console.log(arr.reverse());
}
reverseString(arr);


// testing out .reverse() again! Pretty cool.
var arrPlay = [1,2,3,4];
var reverseArrPlay = function (arrPlay){
	console.log(arrPlay.reverse());
}

reverseArrPlay(arrPlay);

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

//Played around with this but don't think I'm on the right track

// var longWords = ["Long", "Longer", "Longest"];
// var findLongestWord = function (longWords){
// 	for (var i = 0; i < longWords.length; i++){
// 		if (longWords[0] > longWords[1] && longWords[2]){
// 			console.log(longWords[0]);
// 		}
// 		else if (longWords[1] > longWords[0] && longWords[2]){
// 			console.log(longWords[1]);
// 		}
// 		else {
// 			console.log(longWords[2]);
// 		}
// 	}
// };

// findLongestWord(longWords);




// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.





// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.

// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.

// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


//////I get an error message saying goodGuess is not defined. Am I at least warm on this one??//////

var theWord = ["F", "O", "X"];
var guessedLetters = ["_", "_", "_"];

var guessLetter = function (letter){
	var goodGuess;
	var moreToGuess;
	for (var i = 0; i < theWord.length; i++){
		if (guessedLetter === theWord[0]){
			guessedLetters[0] = guessedLetter;
			goodGuess = true;
		}
		else if (guessedLetter === theWord[1]){
			guessedLetters[1] = guessedLetter;
			goodGuess = true;
		}
		else if (guessedLetter === theWord[2]){
			guessedLetters[2] = guessedLetter;
			goodGuess = true;
		}
		else {
			moreToGuess = true;
              console.log('Try again!');
          }
		
	}
};
		  if (goodGuess) {
              console.log('Yes, you found a letter!');
              console.log(guessedLetters);
              if (!moreToGuess) {
                  console.log('YOU WON!');
              } 
          } 
      


guessLetter("F");
guessLetter("I");
guessLetter("O");
guessLetter("X");




//Notes from Guy
// var theWord = ["C", "O", "D", "I", "N", "G"];
// var guessedLetters = ["", "", "", "", "", ""];

// var guessLetter = function (guessedLetter){
// 	var foundLetter = false;
// 	var finishedGame = true;
// 	for (var i = 0; i < theWord.length; i++){
// 		if (guessedLetter === theWord[i]){
// 			theWord[i] = "*";  //* is a marker that the letter has been guessed
// 			foundLetter = true;
// 		}
// 		else if (theWord[i] != "*"){  //there is no star. star === false it would equal a number so no good
// 			finishedGame = false;
// 		}
// 	}

// 	guessedLetters.push(guessedLetter);
// 		if (foundLetter) {
// 			console.log("Yay, you found a letter");
// 		}
// 		else {
// 			console.log ("That letter is not in the word");
// 		}
// 		if (finishedGame) {
// 			console.log("Good on you, you finished the game");
// 		}

// }

// guessLetter("C");
// guessLetter("Z");
// guessLetter("O");
// guessLetter("D");
// guessLetter("I");
// guessLetter("N");
// guessLetter("G");