//The odd/even reporter
for (var i = 0; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i + " even");
	} else {
		console.log(i + " odd");
	}
}

//Multiplication Tables
for (var i = 0; i <= 10; i++) {
	console.log(i + " x 9 = " + i * 9);
}

//Nested loop
for (var i = 1; i <= 10; i++) {
	for (var j = 1; j <= 10; j++) {
		console.log(i + " x " + j + " = " + i * j);
	}
}

//Grade Assigner
	for (var marks = 60; marks <= 90; marks++) {
		if (marks >=90) {
			console.log("For " + marks + " you got an A.");

		} else if (marks >=80) {
			console.log("For " + marks + " you got a B.");

		} else if (marks >=70) {
			console.log("For " + marks + " you got a C.");

		} else if (marks >=60) {
			console.log("For " + marks + " you got a D.");
			
		} else {
			console.log("For " + marks + " you got an F.");
		}
	}
