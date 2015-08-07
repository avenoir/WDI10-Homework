// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


var maxOfTwoNumbers = function(a, b){
	if (a > b){
		return a;
	} else {
		return b;
	}
};

console.log(maxOfTwoNumbers(5,4));


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function(a, b, c){
	if (a >= b && a >= c){
		return a;
	} else if (b >= a && b >= c){
		return b;
	} else {
		return c;
	}
};

console.log(maxOfThree(1, 2, 3));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var isVowel = function(singleChar){
	var vowels = ['a', 'e', 'i', 'o', 'u'];

	for (var i = 0, n = vowels.length; i < n; i++){
		if (singleChar.toLowerCase() === vowels[i]){
			return true;
		} 
	}
	return false;
};

console.log(isVowel('i'));
console.log(isVowel('b'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var sumArray = function(array){
	var sum = 0;
	for (var i = 0, n = array.length; i < n; i++){
		sum = sum + array[i];
	}
	return sum;
};

var multiplyArray = function(array){
	var sum = 1;
	for (var i = 0, n = array.length; i < n; i++){
		sum = sum * array[i];
	}
	return sum;
};

console.log(sumArray([1,2,3,4]));
console.log(multiplyArray([1,2,3,4]));

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function(str){
	newArray = str.split("");
	var temp = [];
	for (var i = 0, n = newArray.length; i < n; i++){
		temp[i] = newArray[n - i - 1];
	}
	return(temp.join(""));
};

console.log(reverseString("jag testar"));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

var findLongestWord = function(array){
	var max = 0;
	var index = 0;
	
	for (var i = 0, n = array.length; i < n; i++){
		if (array[i].length > max){
			index = i;
			max = array[i].length;
		}
	}
	return array[index].length;
};

console.log(findLongestWord(["ajfi", "abcdef", "abcdefghi", "dfa", "qwejioqejwoqwjeioqjweijqwioej", "a"]));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

var filterLongWords = function(array, num){
	var newArray = [];

	for (var i = 0, n = array.length; i< n; i++){
		if (array[i].length > num){
			newArray.push(array[i]);
		}
	}
	return newArray;
};

console.log(filterLongWords(["aeifjeoajfi", "eifjoejif", "fefjfw"], 9));

