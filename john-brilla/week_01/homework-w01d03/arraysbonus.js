//Array and Functions Bonus Material

var sumArray = function () {
	var totalSum = 0;
	for(var i=0; i < arguments.length; i++) {			//function automatically creates an array named arguments 
		totalSum += arguments[i];						//to handle unknown amounts.
 	}
 	return totalSum;
}

 var multArray = function () {
 	var totalMult = 1;
 	for (var i = 0; i < arguments.length; i++) {
 		totalMult = totalMult * arguments[i];
 	}
 	return totalMult;
 }

//BONUS
//Reverse String
 var reverseString = function ( x ) {
 	return x.split('').reverse().join('');
 }


//Longest Word
var findLongestWord = function (x) {
	var wordList = x.split(' ');
	var currentWordLength = 0;
	var biggestWord;

	for (var i = 0; i < wordList.length; i++) {
		if (wordList[i].length > currentWordLength) {
			currentWordLength = wordList[i].length
			biggestWord = wordList[i];
		}
	}

	return currentWordLength, biggestWord;
}

//Filter Long Words

var filterLongWords = function (x, y) {
	var wordList = x.split(' ');
	var listBigWord = [];

	for (var i = 0; i < wordList.length; i++) {
		if (wordList[i].length >= y) {
			listBigWord.push(wordList[i]);
		}
	}

	return listBigWord;
}


