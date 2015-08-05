// Array and Functions Bonus Material

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
var maxOfTwoNumbers = function(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
}
//console.log(maxOfTwoNumbers(3,3));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
var maxOfThreeNumbers = function(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1;
	} else if (num2 > num3) {
		return num2;
	} else {
		return num3;
	}
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
var vowels = ['a', 'e', 'i', 'o', 'u'];
var vowelCheck = function(character) {
	for (var i = 0; i < vowels.length; i++) {
		if (character === vowels[i]){
			return true;
		}
	}
	return false;	
}
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
var sumArray = function(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total = total + array[i];
	}
	return total;	
}
//console.log(sumArray([1,2,3,4]));

var multiplyArray = function(array) {
	var total = 1;
	for (var i = 0; i < array.length; i++) {
		total = total * array[i];
	}
	return total;	
}

console.log(multiplyArray([1,2,3,4]));

// Bonus

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var reverseString1 = function(string) {
     return string.split("").reverse().join("");
}

var reverseString2 = function(string) {
     var array = string.split("");
     var newArray = [];
     for  (var i = array.length - 1; i >= 0; i--) {
     	var push = array[i];
     	newArray.push(push);
     }
    return newArray;
}
console.log(reverseString2("It's opposite day"));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
var findLongestWord = function(wordArray){
	words = wordArray.split(" ");
	var longestLen = 0; 
	for ( var i = 0; i < words.length ; i++) {
		if (words[i].length > longestLen){
			longestLen = words[i].length;
		}
 	}
 	return longestLen;
}
console.log(findLongestWord("One of these words is not like the other supercalifragilistic"));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
var filterLongWords = function(wordArray, i) {
	var words = wordArray.split(" ");
	var newArray = []
	for (var j = 0; j < words.length; j++) {
		if (words[j].length > i) {
			newArray.push(words[j]);
		}
	}
	return newArray;
}
console.log(filterLongWords("One of these words is not like the other supercalifragilistic", 3))



