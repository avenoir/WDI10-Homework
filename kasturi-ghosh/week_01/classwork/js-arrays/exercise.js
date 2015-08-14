//Top choice array
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var topChoice = ['Orange', 'Dr. Abdul Kalam', 'The Great Gatsby', 'The Big Bang Theory', 'Girl with the dragon tattoo' ];

for (var j = 1; j <= 40; j++) {
	topChoice.push('as');
}

var strLen = topChoice.length;
// var lenToStr = strLen.toString();
// var a = lenToStr.charAt(lenToStr.length - 1);
//console.log(strLen);

for ( var i = 1; i <= strLen; i++ ) {

	var y = i.toString();

	if ( i > 20 ) {

		var a = y.charAt(y.length - 1);

		// console.log(y);
		// console.log(a);

		if ( a === '1' ) {
			console.log("My " + (i) + "st choice is " + topChoice[i-1]);
		}
		else if ( a === '2' ){
			console.log("My " + (i) + "nd choice is " + topChoice[i-1]);
		}
		else if ( a === '3'){
			console.log("My " + (i) + "rd choice is " + topChoice[i-1]);
		}
		else {
			console.log("My " + (i) + "th choice is " + topChoice[i-1]);
			
		}
	} else {

		if ( (i) === 1 ) {
			console.log("My " + (i) + "st choice is " + topChoice[i-1]);
			
		}
		else if ( (i) === 2 ){
			console.log("My " + (i) + "nd choice is " + topChoice[i-1]);
		}
		else if ( (i) === 3 ){
			console.log("My " + (i) + "rd choice is " + topChoice[i-1]);
		}
		else {
			console.log("My " + (i) + "th choice is " + topChoice[i-1]);
		}
	}
	
}


// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. 

var maxOfTwoNumbers = function(a, b) {
	if ( a >= b ) {
		return a;
	} else {
		return b;
	}
};

console.log("The larger numbers is: " + maxOfTwoNumbers(-9, 0));
