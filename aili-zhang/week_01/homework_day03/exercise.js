// Array and Functions Bonus Material
// #1 - find the max number between two numbers
var maxOfTwoNumbers = function(num1, num2){
	if (num1 > num2){
		return num1;
	}
	return num2;
};

var num1 = 2;
var num2 = 9;
console.log("The max number between " + num1 + " and " + num2 + " is: " + maxOfTwoNumbers(num1, num2));



//==============================================================


// #2 - find the max number among three numbers
var maxOfThree = function(num1, num2, num3){
	var arr = [num1, num2, num3];
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] >= max){
			max = arr[i];
		}
	}
	return max;
};

var num1 = 2;
var num2 = 0;
var num3 = 3.9;
console.log("The max number between " + num1 + ", " + num2 + " and " + num3 + " is: " + maxOfThree(num1, num2, num3));



//==============================================================


// #3 - a function that returns true if it is a vowel
var isVowel = function(char){
	if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
		return true;
	}
	return false;
};
var myChar = "a";
console.log("Is '" + myChar + "' a vowel? - " + isVowel(myChar));



//==============================================================


// #4
var sumArray = function(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum;
};
console.log("sum is: " + sumArray([1, 2, 3, 4]));


var multipleArray = function(arr){
	var result = 1;
	for(var j = 0; j < arr.length; j++){
		result *= arr[j];
	}
	return result;
};
console.log("result of multiplication is: " + multipleArray([1, 2, 3, 4]));



//==============================================================


// Bonus
// #1 - reverse the given string
var reverseString = function(str){
	var newString = "";
	for(var i = str.length-1; i >= 0; i--){
		newString += str.charAt(i);
	}
	return newString;
};
var tempStr = "jag testar";
console.log("After reversing '" + tempStr + "' is: " + reverseString(tempStr));



//==============================================================



// #2 - return the longest word in an array
var findLongestWord = function(arr){
	var maxLengthWord = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i].length >= maxLengthWord.length){
			maxLengthWord = arr[i];
		}
	}

	return maxLengthWord;
};
var myArray = ["My", "Name", "Is", "HelloWorld", "U"];
console.log("The longest word is '" + findLongestWord(myArray) + "' with the length of " + findLongestWord(myArray).length);



//==============================================================


// #3 - return the array of words that are longer than the given number
var filterLongWords = function(arr, num){
	var newArray = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i].length > num){
			newArray.push(arr[i]);
		}
	}
	return newArray;
};
var myArr = ["My", "Name", "Is", "HelloWorld", "U"];
var myNum = 3;
console.log("The words that are longer than " + myNum + " is " + filterLongWords(myArr, myNum));



//======================HOMEWORK=============================


// The Word Guesser

var currentWord = ['F', 'O', 'X']; // global array to store letters of current word
var guessedLetters = []; // global array to store guessed letters, empty by default
var numOfCorrectLetter = 0; // global variable to store the number of letters that are correctly guessed.
var rewards = 0; // global variable to store the reward amount
var hangman = 0; // global variable to store the hangman number

var guessLetter = function(char){

	// if the guessed letter is not in the current word
	if(currentWord.indexOf(char) === -1){
		rewards--; // decrement rewards
		hangman++; // increment hangman
	}

	// go through each letter in the current word
	for(var i = 0; i < currentWord.length; i++){

		// if any of letter matches the guessed letter
		if(currentWord[i] === char){
			guessedLetters.push(char); // add the letter to the guessedLetters array
			numOfCorrectLetter++; // increment the number of letters that has been correctly guessed by 1.
			rewards++; // increment the rewards
		}
	}
	console.log("You have guessed: '" + char + "'");

	// if hangman reaches 6
	if(hangman === 6){
		console.log("Sorry you have lost as the hangman has reached 6.");
		console.log(" o");
		console.log("-|-");
		console.log("/ \\");
	}
};

// calling the function
guessLetter('U');
guessLetter('F');
guessLetter('X');
guessLetter('A');
guessLetter('B');
guessLetter('C');
guessLetter('D');
guessLetter('E');


// if we have guessed at least one letter correctly
if(numOfCorrectLetter >= 1){
	console.log("Congratulations! You have correctly guessed " + numOfCorrectLetter + " letters - '" + guessedLetters + "'");

	// the following if/else statement shows how many more letters need to be guessed by comparing the number of letters that have been guessed correctly with the length of the original current word
	if(numOfCorrectLetter < currentWord.length){
		console.log("There are still " + (currentWord.length - numOfCorrectLetter) + " letters need to be guessed.");
	}else if(numOfCorrectLetter === currentWord.length){
		console.log("Awesome! You have guessed all the letters correctly!");
		console.log("Your final rewards is $" + rewards);
	}

// if the number of letters that have been guessed correctly is 0, which means we did not guess any letters correctly, print out the message
}else{
	console.log("Sorry! You did not guess any of the letters correctly :(");
};


