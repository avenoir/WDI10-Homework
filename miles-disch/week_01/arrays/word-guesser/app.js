/*
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
*/

var letters = ['f','o','x'];
var lettersGuessed = ['_','_','_'];

var guessLetter = function ( plyrLetter ) {
	var goodGuess = false;
	var moreToGuess = false;
	for (i = 0; i < letters.length; i++) {
		if ( letters[i] === plyrLetter ) {
			lettersGuessed[i] = plyrLetter;
			goodGuess = true;			

		} else if ( lettersGuessed[i] === '_' ){
			moreToGuess = true;

		} 
	}
	if (goodGuess) {
		console.log('you got one right!');
		console.log(lettersGuessed.join(''));
		if(!moreToGuess){
			console.log('you won!')
		} 
	}
	else {
		console.log("that not correct!")
	}
 	
}

/*
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

var maxOfTwoNumbers = function ( a, b ) {
	if ( a > b ) {
		return a;
	}
	else {
		return b;
	}
}

console.log(maxOfTwoNumbers(2,3))

var maxOfThree = function ( a, b ,c ) {
	if (a > b && a > c) {
		return a;
	}
	else if (b > c && b > a) {
		return b;
	}
	else {
		return c;
	}
}
console.log(maxOfThree(5,5,5))

var vowel = function (char) {
	if ( char == 'a' || 'e' || 'i' || 'o' || 'u' || 'y') {
		return char + " is a vowel" 
	} 
	else {
		console.log('that not a vowel')
	}
}

console.log(vowel('a'))

/*
Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

var reverString = function ( s ) {
	var rev;
	for (var i = s.length -1; i >= 0; i-- )
		rev == s[i]
	return rev;
}

var arrayN = [1,2,3,4,5,6,7]

var sumArray = function (array) {
	var result = 0;
	for (var i = 0; i < arrayN.length; i++){
		result = array[i] + result
		console.log( result ); 
	}
	return result;
}

var multiplyArray = function () {
	var result = 1;
	for (var i = 0; i < arrayN.length; i++)
		result = array[i] * result;
		console.log( result );
}

var findLongestWord = function (wArr) {
	var longerst = wArr[0];
	for(var i = wArr.length - 1; i >= 0; i--)

}
