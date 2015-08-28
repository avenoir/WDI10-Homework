// Exercises: for loops
// The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for ( var i = 0 ; i <= 20 ; i++ ) {
	if ( i % 2 === 0 ) {
		console.log( i + " is even" );
	} else {
		console.log( i + " is odd" );
	}
}


// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (var i = 0; i <= 10; i++) {
	console.log( i + " * 9 = " + (i * 9) );
}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (var i = 0; i <= 10; i++) {
	for (var j = 0; j <= 10; j++)
	console.log(i + " * " + j  + " = " + i * j);
}


// The Grade Assigner
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

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

// for (var i = 60; i <= 100; i++) {
// 	var grade = assignGrade( i );
// 		if (grade === "A") {
// 			console.log("For " + i + ", you get an " + assignGrade(i));
// 		} else {
// 			console.log("For " + i + ", you get a " + assignGrade(i));
// 		}
// 	}

var score = 60;
while (score <=100) {
	var grade = assignGrade( score )
	console.log('For ' + score + ' ayou got a ' + grade);
	score++
}