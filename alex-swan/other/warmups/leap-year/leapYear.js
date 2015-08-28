///////////////////////////////
// Leap Year Warmup Exercise //
// 29 / 04 / 15 ///////////////
///////////////////////////////

// Write a function that will take any given year and return whether it is a leap year or not.
// Remember that a leap year is:
// - Every year that is evenly divisible by 4 
// - Except if it is evenly divisible by 100...
// - Unless it is also divisible by 400

// Test Data...
// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true

// How to structure it...
// - We want a custom function called isLeapYear

// Bonus!
// - Ask the user what number they want to test
// - Add the is Leap Year function to the number prototype...  Don't be too concerned about this.



// var isLeapYear = function(year) {
// 	if ((year % 4 !== 0))	 {
// 		return false; //ever year not divisible by 4 is NOT a leap year
// 	}
// 	else if ((year % 100 === 0) && (year % 400 !== 0)) { //of years divisible by 4, it is a leap year if it's NOT divisible by 100 UNLESS it's divisible by 400. i.e. if year divisibly by 100 AND year not divisible by 400 it IS a leap year
// 		return false;
// 		 }

// 		return true; //else, year must be divisible by 4 and not divisible by 100 
//	}

var isCorrect = function(year) {
	if ((year % 4 === 0) && (!(year % 100 === 0) || year % 400 === 0)) { //if year divisible by 4 AND, year EITHER NOT divisible by 100 OR IS divisible by 400

		//e.g. year must be divisible by 4 AND year must either be NOT divisible by 100 OR it must be divisible by 400
		return true;
	}
	else {
		return false;
	}
}

console.log(isCorrect(1997));
console.log(isCorrect(1996));
console.log(isCorrect(1900));
console.log(isCorrect(2000));

// var isLeapYearPrompt = function() {
// 	var year = prompt("Which year do you want to test?")
// 	if ((year % 4 !== 0))	 {
// 		return false; //ever year not divisible by 4 is NOT a leap year
// 	}
// 	else if ((year % 100 === 0) && (year % 400 !== 0)) { //of years divisible by 4, it is a leap year if it's NOT divisible by 100 UNLESS it's divisible by 400. i.e. if year divisible by 100 AND year not divisible by 400 it IS a leap year
	
// 		return false;
// 		 }

// 		return true; //else, year must be divisible by 4 and not divisible by 100 
// 	}


// console.log(isLeapYearPrompt());
// console.log(isLeapYear(1996));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));

//use parseFloat or parseInt to pass string into function as integer.