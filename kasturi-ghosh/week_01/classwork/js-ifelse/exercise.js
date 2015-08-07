//Find The Bigger Number
var greaterNum = function(a, b) {
	var num;
	if (a >= b) {
		num = a;
	} 
	else {
		num = b;
	} 
	return num;
};

console.log("The bigger number is: " + greaterNum(-5,10));
console.log("The bigger number is: " + greaterNum(15,0));

//World Translator
var helloWorld = function(langCode) {
	var message;
	if (langCode === 'es') {
		message = "Hola el mundo";
	} else if (langCode === 'de') {
		message = "Hallo Welt";
	} else { //assume 'en'
		message = "Hello World";
	} 
	return message;
};

console.log("Spanish: " + helloWorld('es'));
console.log("German: " + helloWorld('de'));
console.log("English: " + helloWorld('en'));
console.log("xyz: " + helloWorld('la'));
console.log("xyz: " + helloWorld());

//Grade Assigner
var assignGrade = function(marks) {
	var gradeScore;
	if (marks >=90) {
		gradeScore = "A";
	} else if (marks >=80) {
		gradeScore = "B";
	} else if (marks >=70) {
		gradeScore = "C";
	} else if (marks >=60) {
		gradeScore = "D";
	} else {
		gradeScore ="F";
	}
	return gradeScore;
};

console.log("Grade: " + assignGrade(97));
console.log("Grade: " + assignGrade(80));
console.log("Grade: " + assignGrade(71));
console.log("Grade: " + assignGrade(60));
console.log("Grade: " + assignGrade(58));

//Pluralizer
var pluralize = function(thing, score) {
	var result;
	if ((thing === "sheep") || (thing === "deer")) {
		result = score + " " + thing + ".";
	}
	else if (thing === "goose") {
		result = score + " geese.";
	}
	else if (score === 1) {
		result = score + " " + thing + ".";
	}
	else {
		result = score + " " + thing + "s.";
	}
	return result;
};

console.log(pluralize("dog", 2));
console.log(pluralize("cat", 1));
console.log(pluralize("ship", 0));
console.log(pluralize("goose", 10));
console.log(pluralize("deer", 0));
