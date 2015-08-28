console.log('Is this thing on?')

//Excercise 1: Tell Fortune

function tellfortune(numChildren, partnerName, geoLocation, jobTitle) {
var message =  " you will be a " + jobTitle + ' kids ' + numChildren +  ' and married to ' + partnerName + ' in '  + geoLocation; 
console.log(message);
}
tellfortune(1, "Sanaa", "No-one", "bourkeNSW", "Teacher"); 
tellfortune(4, "Sanaa", "No-one", "bourkeNSW", "Teacher");





//Write a function named greaterNum that:

//takes 2 arguments, both numbers.
//returns whichever number is the greater (higher) number.
//Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").//

//example 1

function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(greaterNum(2, 4));

//example 2

var greaterNum = function (a, b) {
	var greater;
	if (a > b) {
		greater = a;
	} else {
		greater = b;
	};
};
	console.log(greaterNum(7, 12));
	console.log(greaterNum(80, -10));
	console.log(greaterNum(23, 23));






//Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "es", "de", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//Call that function for each of the supported languages and log the result to make sure it works.

// function helloworld(langcode) {
// 	if (langcode ==="en") {
    
// 	}
// }
// var age = 20;
// if (age >= 35) {
//   console.log('You can vote AND hold any place in government!');
// } else if (age >= 25) {
//   console.log('You can vote AND run for the Senate!');
// } else if (age >= 18) {
//   console.log('You can vote!');
// } else {
//   console.log('You have no voice in government!');


var helloworld = function (code) { 
if (code ==='es' ) {
	return 'hello world';
} else if (code === 'de' ) {
	return 'hello world';
} else { 
	return 'hello world';
}
};
console.log(helloworld('es'));
console.log(helloworld('de'));
console.log(helloworld('en'));
console.log(helloworld());


var assignGrade = function (score) {
	
}

function squareNumber (num1) {
	var result = (num1 * num1)
	console.log(result)
}

squareNumber(4);

function halfNumber (num1) {
	var result = (num1 / 2)
	console.log(result)

}

halfNumber(5);



function halfNumber (num1) {
	var result = (num1 / 2)
	console.log("half of " + num1 + "is" + result);

}

halfNumber(5);


function percentOf (num1, num2) {
	var result = num1 / num2 
	console.log( num1 + "is" + result + "percentOf" + num2);
}

percentOf(2, 4)














































