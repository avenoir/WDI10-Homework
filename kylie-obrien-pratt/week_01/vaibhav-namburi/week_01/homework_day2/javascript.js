
// Exercise 1

var squareNumber=function(number){

		var result= Math.pow(number,2);

		console.log("The square of " + number + " is " + result);

		return result;

}

var halfNumber = function(number){

	var result = number/2;

	console.log("Half of " + number + " is " + result);

	return result;

}

var percentOf = function(number1, number2){

	var result = Math.round((number1/number2)*100) + "%";

	console.log(number1 + " is " + result + " of " + number2 );

	return result;

}

var areaOfCircle = function(number){

	var result = +((Math.PI*Math.pow(number,2)).toFixed(2));

	alert(" The area of a circle with a radius of " + number + " is " + result);

	return result;

}

// Exercise 2

// var halfValue= halfNumber(10);
// var squareHalfValue= squareNumber(halfValue);
// var area = areaOfCircle(squareHalfValue);
// var percentage = percentOf(area);

// Strings

// Dr Evil

var drEvil = function(number){

	if(number===1000000)
	{
		return number + "dollars" + " (pinky) "
	}
	else
		return number + "dollars"
}

// MixUp

var mixUp = function(word, word2){

	var wordFirst = word.slice(0,2);
	var word2First = word2.slice(0,2);
	var wordLast = word.substr(2,word.length-2);
	var word2Last = word2.substr(2,word2.length-2);

	console.log(wordFirst+word2Last + " and " + word2First+wordLast);

}



// FixStart

var fixStart = function (word){
	
	var firstLetter = word[0];
	var newWord = word.slice(1);

	var newieWord = newWord.split(firstLetter).join("*");
	
	console.log(word[0] + newieWord);

}

fixStart("babble");

// FixStart using Regex
var regexFunc = function(){
var regexValue = prompt("What do you want replaced?");
var regexSentence = prompt("What is the sentence to regex?");

var regex = new RegExp(regexValue, "g"); // this creates a regex and essentially means var regex = /regexValue/g

var newSentence = regexSentence.replace(regex, "*");

alert(newSentence);

}

// regexFunc();

// verbing

var verbing = function (word){

	if(word.length < 3)
		return word;

	else {

			var lastLetters = word.slice(-3);

			if(lastLetters==="ing"){
			return	word.replace("ing" , "ly");
			}

			else
			return	word.concat("ing");

	}

}
console.log(verbing("go"));

// NotBad

var notBad = function(sentence){

	var not = sentence.indexOf("not");
	var bad = sentence.lastIndexOf("bad");

	
	if ( not===-1 || bad ===-1){

		return sentence;
	}


	else if(bad>not){

		var newSentence= sentence.slice(0,not);
		var newSplitSentence = newSentence.concat("good!")
		return newSplitSentence;

	}


}

console.log(notBad('This dinner is bad!'))













