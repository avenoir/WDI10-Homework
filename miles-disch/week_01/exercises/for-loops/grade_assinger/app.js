/*
Check the results of assignGrade function from the conditionals exercise for every value
from 60 to 100 - so your log should show "For 89, 
you got a B. For 90, you got an A.", etc.
*/
	for ( score = 60; score < 100; score++ ) {
		if(score >= 90) {
			console.log("For " + score + "," + " got an A");
		} else if (score >= 80) {
			console.log("For " + score + "," + " got an B");
		} else if (score >= 70) {
			console.log("For " + score + "," + " got an C");
		} else if (score >= 60) {
			console.log("For " + score + "," + " got an D");
		} else {
			console.log("For " + score + "," + " got an F");
		}
	}
