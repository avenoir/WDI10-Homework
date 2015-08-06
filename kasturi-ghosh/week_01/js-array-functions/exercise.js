// max of two numbers
var maxOfTwoNumbers = function(a, b) {
	if (a >= b) {
		return a;
	} else {
		return b;
	}
};

console.log("The larger number is: " + maxOfTwoNumbers(2,-9));

// max of 3 numbers
var maxOfThree = function(a, b, c) {
	if (a > b && a > c) {
		return a;
	} else if (b > a && b > c) {
		return b;
	} else {
		return c;
	}
};

console.log("The largest among the 3 nos. is :" + maxOfThree(-2, 5, 0));

// search if character is a vowel or not
var isVowel = function(letter) {
	if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
		return true;
	} else { 
		return false;
	}
};

console.log("The character is a vowel: " + isVowel('f'));

// sum of an array
var sumArray = function(anArray) {
	var sum = 0;
	for (var i = 0; i < anArray.length; i++) {
		sum += anArray[i];
	}
	return sum;
};

// multiply nos. of the array
var multiplyArray = function(anArray) {
	var multiply = 1;
	for (var i = 0; i < anArray.length; i++) {
		multiply *= anArray[i];
	}
	return multiply;
};

var theArray = [1, 2, 3, 4];
console.log("The sum of the array is: " + sumArray(theArray));
console.log("The multiplication of the array is: " + multiplyArray(theArray));

// reverse a string
var reverseString = function(aString) {
	var revStr = [];
	for (var i = aString.length-1; i >= 0; i--) {
		revStr.push(aString[i]);
	}
	return revStr.join("");
};

console.log("The reverse of the string is: " + reverseString('kite playing'));

// find the longest word in an array of words
var findLongestWord = function(words) {
	var str = words.split(" ");
	var longest = 0;
	var longestWord;
	for (var i = 0; i < str.length; i++) {
		if (longest < str[i].length) {
			longest = str[i].length;
			longestWord = str[i];
		}
	}
	return ("The longest word is: " + longestWord + "\nIts length is: " + longest);
};

console.log(findLongestWord("Death by chocolate"));

// filter out the long words
var filterLongWords = function(words, i) {
	var str = words.split(" ");
	var longWords = [];
	for (var m = 0; m < str.length; m++) {
		if (i < str[m].length) {
			longWords.push(str[m]);
		}
	}
	return longWords;
};

var wordStr = "Et tu Brute then o fall Caeser";
console.log("The long words are: " + filterLongWords(wordStr, 2));

