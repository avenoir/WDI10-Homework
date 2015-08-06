console.log("Homework for Day 3");

var findMaxNum = function(arr) {
  	// The two numbers are within the input array
  	var max = arr[0];
  	for (var i = 0; i < arr.length; i++) {
  		if (arr[i] > max) {
  			max = arr[i];
  		};
  	};
  	return max;	
}

var maxOfTwoNumbers = function (i, j) {
	return findMaxNum([i,j]);
};

console.log(maxOfTwoNumbers(1,2) );

var maxOfThreeNumbers = function (i, j, k) {
	return findMaxNum([i,j,k]);
}

console.log(maxOfThreeNumbers(1,2,3) );

var isVowel = function(v) {
	if ("ABCDE".indexOf(v.toUpperCase()) > -1) {
 		return true;
	} else {
		return false;		
	}
}

console.log(isVowel("a"));


var sumArray = function(arr) {
  	var result = 0;
  	for (var i = 0; i < arr.length; i++) {
  		result += arr[i];
  	};
  	return result;
}

console.log( sumArray([1,2,3,4]) );

var multiplyArray = function(arr) {
  	var result = arr[0];
  	for (var i = 1; i < arr.length; i++) {
  		result *= arr[i];
  	};
  	return result;
}

console.log( multiplyArray([1,2,3,4]) );

// Bonus Material

var reverseString = function(s) {
  var rev = '';
  for (var i = s.length - 1; i >= 0; i--)
    rev += s[i];
  return rev;
}

console.log( reverseString("hi there") );

var findLongestWord = function(wArr) {
  var longest = wArr[0];
  for (var i = wArr.length - 1; i >= 0; i--)
    if (wArr[i].length > longest.length) {
    	longest = wArr[i];
   	}
  return longest;
}

console.log( findLongestWord(["hi","there"]) );

var filterLongWords = function(wArr, minLength) {
  	var result = [];
  	for (var i = 0; i < wArr.length; i++) {
  		if (wArr[i].length > minLength) {
  			result.push(wArr[i]);
  		}
  	};
  	return result;
}

console.log( filterLongWords(["hi","there","boy"],2));


// HOMEWORK : The word guesser

var theWord = ["F","O","X"];
var guessed = [];

var guessLetter = function(gLetter) {
	var foundLetter = false;
	var finishedGame = true;
	for (var i=0 ; i < theWord.length ;i++) {
		if (theWord[i] === gLetter) {
			theWord[i] += "*";
			foundLetter = true;
		}
	    if (theWord[i].indexOf("*") === -1) {
	    	finishedGame = false;
 		};
	};
	guessed.push(gLetter);
	if (foundLetter) {
		console.log("Congrats, you found a new letter");
	}
	if (finishedGame) {
		console.log("Congrats, you finished!!!!!!");
	};
};

guessLetter("F");
guessLetter("O");
guessLetter("X");




