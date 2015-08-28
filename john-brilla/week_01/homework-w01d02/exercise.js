/*The Calculator*/

console.log('The Calculator');

var squareNumber = function (num) {
	var square = num * num;
	console.log('The result of squaring the number ' + num + ' is ' + square);
	
	return square;
}

var halfNumber = function (num) {
	var half = num / 2;
	console.log('Half of ' + num + ' is ' + half);

	return half;
}

var percentOf = function (x, y) {
	var percent = (x / y) * 100;
	console.log(x + ' is ' + percent.toFixed(2) + ' of ' + y);
	var outPut = parseFloat(percent.toFixed(2));

	return outPut;
}

var areaOfCircle = function (radius) {
	var area = Math.PI * (radius * radius);
	console.log('The area for a circle with radius ' + radius + ' is ' + area.toFixed(2));
	var outPut = parseFloat(area.toFixed(2)); //Converts back to integer.
	return  outPut; 
}

var allFuncs = function (x) {
	var half = halfNumber(x);
	var square = squareNumber(half);
	var area = areaOfCircle(square);
	var percentage = percentOf(square, area);
	console.log('The answer is ' + percentage);

	return percentage;
}

//DR EVIL

var drEvil = function (x) {

	if (x >= 1000000) {
		return x + ' Dollars' + ' (pinky)';
	} else {
		return x + ' Dollars';
	}
	
}

//MIX UP

var mixUp = function (x, y) {
	if (x.length >= 2 && y.length >= 2) {
		var newWords = y[0] + x.slice(1) + ' ' + x[0] + y.slice(1);
	} else {
		var message = console.log('words are not long enough');
		return message;
	}

	return new_words;
}


//Fix Start

var fixStart = function (x) {
	var re = new RegExp(x[0],"g"); // Create new RegExp variable to work correctly in the replace method.
	var replacedText = x.replace(re, '*'); //Replace all x[0] with *
	var newWord = x[0] + replacedText.slice(1); //Replace first with original
	
	return newWord;
}

//Verbing
var verbing = function (x) {
	if (x.length >= 3 && x.slice(-3) === 'ing') {
		var newString = x + 'ly'; //If length is greater or equal to 3 AND last 3 letters are 'ing'
	} else if(x.length >= 3 ) { //&& x.slice(-1) === 'a' || 'e'
		var newString = x + 'ing'
	} else {
		var newString = x;
	}

	return newString;
}

//NOT BAD
//
var notBad = function (x) {
	var not = x.search('not')
	var bad = x.search('bad')

	if (not <= bad && bad != -1) { //'not' result is less then 'bad' AND bad is not equal to -1 - true
		var newPhrase = x.slice(0, not - 1) + ' good' + x.slice(bad + 3); //Takes everything from before not ADDS good + everything after bad.
	} else {
		var newPhrase = x; // original input
	}

	return newPhrase;
}





