// js-homework-1.md

// The Calculator
// Part 1
var squareNumber = function(num){
	result = num * num;
	return result;
};
var number = 3;
var msg = "The result of squaring the number " + number + " is " + squareNumber(3);
console.log(msg);


//============================================================


var halfNumber = function(num){
	var half = num / 2;
	return  half;
};
console.log("Half of " + 5 + " is " + halfNumber(5));


//============================================================


var percentOf = function(num1, num2){
	var devision = num1 / num2;
	var percent = devision * 100 + "%";
	return percent;
};
var num1 = 1;
var num2 = 4;
console.log(num1 + " is " + percentOf(num1, num2) + " of " + num2);


//============================================================


var areaOfCircel = function(radius){
	var area = Math.PI * radius * radius;
	return area.toFixed(2); // round the result to 2 decimal
};
var rad = 2;
console.log("The area for a circle with radius " + rad + " is " + areaOfCircel(rad));


//============================================================


// Part 2
var combineFunc = function(number){
	var half = halfNumber(number);
	var square = squareNumber(half);
	var area = areaOfCircel(square);
	var percentage = percentOf(area, square);
	return percentage;
};
console.log(combineFunc(3));


//============================================================


// js-homework-2.md
// DrEvil
var DrEvil = function(amount){
	var result;
	if(amount === 1){ 
		result = amount + " dollar";
	}else if(amount === 1000000){
		result = amount + " dollars (pinky)"
	}else{
		result = amount + " dollars";
	};
	return result;
};
console.log(DrEvil(10));
console.log(DrEvil(1));
console.log(DrEvil(1000000));


//============================================================


// MixUp
var mixUp = function(string1, string2){

	// if either of strings has less than 2 characters 
	if(string1.length < 2 || string2.length < 2){
		return "The length of both strings should be at least 2."
	}

// get the first two characters of both strings
	var char1 = string1.charAt(0) + string1.charAt(1); 
	var char2 = string2.charAt(0) + string2.charAt(1);

	// make two empty strings to store the new strings
	var newString1 = "";
	var newString2 = "";

	// from the third character of original string, copy everything into the new string.
	for(var i = 2; i < string1.length; i++){
		newString1 += string1.charAt(i);
	}
	newString1 = char2 + newString1;

	for(var j = 2; j < string2.length; j++){
		newString2 += string2.charAt(j);
	}
	newString2 = char1 + newString2;

	var finalString = newString1 + " " + newString2;

	return finalString;
};
console.log(mixUp("a", "bbb"))
console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));


//============================================================


// FixStart
var fixStart = function(str){
	if(str.length < 1){
		return "The length of the string should be at least 1."
	}
    var str2 = "";
	var firstChar = str.charAt(0);
	for(var i = 1; i < str.length; i++){
		if(str.charAt(i) === firstChar){
			str2 += "*";	
		} else {
  			str2 += str.charAt(i);
		}
	}
	str2 = firstChar + str2;
	return str2;
};
console.log(fixStart("babble"));
console.log(fixStart("amnaba"));


//============================================================


// Verbing
var verbing = function(str){
	var newString;

	// check the string length of bigger than 3 first
	if(str.length >= 3){

		// if the string is ending with 'ing', just dd 'ly' in the end of the string
		if(str.charAt(str.length-3) + str.charAt(str.length-2) + str.charAt(str.length-1) === "ing"){
			newString = str + "ly";

		}else{

			// otherwise, if it is one of vowel words as we have to repeat the last letter when adding 'ing' in the end
			// to check if we need to repeat, just check if the second last letter is one of 'a', 'e', 'i', 'o', 'u'
			if(str.charAt(str.length-2) === "a" || str.charAt(str.length-2) === "e" || str.charAt(str.length-2) === "i" || str.charAt(str.length-2) === "o" || str.charAt(str.length-2) === "u"){
				newString = str + str.charAt(str.length-1) + "ing";

			// if it is not a vowel word, just add 'ing' in the end of the string without repeating the last letter
			}else{
				newString = str + "ing";
			}
		};

	// if the length of the string is less than 3
	}else{
		newString = str;
	}
	return newString;
};
console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));
console.log(verbing("sit"));



//============================================================


// Not Bad
var notBad = function(str){
	var newString;

	// get the index of 'not' and 'bad'
	var indexOfNot = str.search("not");
	var indexOfBad = str.search("bad");

	// if the words 'not' and 'bad' exist in the string and 'bad' comes after 'not'
	if(indexOfNot >= 0 && indexOfBad >= 0 && indexOfNot < indexOfBad){

		// copy the string that start from 'not' and ending with 'bad' to a new variable, and replace the whole string with 'good'
		var replacingString = "";
		for (var i = indexOfNot; i <= indexOfBad+2; i++){
			replacingString += str.charAt(i);
		}
		replacingString = replacingString.replace(replacingString, "good");

		// copy the string before the word 'not' to a new variable
		var firstPartOfStr = "";
		for(var j = 0; j < indexOfNot; j++){
			firstPartOfStr += str.charAt(j);
		}

		// copy the string after the word 'bad' to a new variable
		var lastPartOfStr = "";
		for(var k = indexOfBad+3; k < str.length; k++){
			lastPartOfStr += str.charAt(k);
		}
		
		// combine all strings together
		newString = firstPartOfStr + replacingString + lastPartOfStr;

	// if 'not' or/and 'bad' dont exist in the given string, or if 'bad' does not come after the word 'not', keep the original string
	}else{
		newString = str;
	}

	return newString;
};
console.log(notBad("This dinner is not that bad!"));
console.log(notBad("This movie is not so bad!"));
console.log(notBad("This dinner is bad!"));















