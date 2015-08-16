// Exercises: if/else statements

// Ex 1: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").


var greaterNum = function(num1, num2) {
	if (num1 > num2) {
		return num1;
	}
	else {
		return num2;
	}
}

console.log("The greater number of " + 5 + " and " + 10 + " is " + greaterNum(5 ,10));
console.log("The greater number of " + 20 + " and " + 10 + " is " + greaterNum(20 ,10));

var num1 = 5, num2 = 10, num3 = 30, num4 = 11;
console.log("The greater number of " + num1 + " and " + num2 + " is " + greaterNum(num1 ,num2));
console.log("The greater number of " + num3 + " and " + num4 + " is " + greaterNum(num3 ,num4));




// Ex 2: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.


var helloWorld = function(code) {
	if (code === "es") {
		return "Hola, mundo"
	}

	else if (code === "fr") {
		return "Bonjour, le monde";
	}
	else { //assume 'en'
		return "Hello, World";
	}

};

console.log(helloWorld("en"));
console.log(helloWorld("fr"));
console.log(helloWorld("es"));
console.log(helloWorld());


/*
Ex 3: The Grade Assigner

Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
*/

var assignGrade = function(score) {
	if (score >= 90) {
		return "A";
	} else if (score >= 80) {
		return "B";
	} else if (score >= 70) {
		return "C"; 
	} else if (score >=60) {
		return "D"
	} else if (score < 60) {
		return "F"
	}
};
console.log(assignGrade(99));
console.log(assignGrade(81));
console.log(assignGrade(65));
console.log(assignGrade(59));
console.log(assignGrade(21));

/*
Ex 4: The Pluralizer

Write a function named pluralize that:
takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

var pluralize = function(noun, number) {
	if (noun === "sheep" || noun === "geese" || noun === "mouse") {
	 	return  number + " " + noun;
	 }
	else if (number === 1) {
		return number + " " + noun
	}
	else {
		return number + " " + noun + "s";
	}
}
console.log(pluralize("cat", 1));
console.log(pluralize("cat", 4));
console.log(pluralize("elephant", 100));
console.log(pluralize("elephant", 1));
console.log(pluralize("elephant", 0));
console.log(pluralize("sheep", 10));
console.log(pluralize("geese", 20));