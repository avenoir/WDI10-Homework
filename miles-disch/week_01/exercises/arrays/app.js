/*
Create an array to hold your top choices (colors, presidents, whatever).
For each choice, log to the screen a string like: "My #1 choice is blue."
Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
*/
var topChoices = ['apple' , 'pear', 'pineapple', 'alpha', 'beta', 'charlie', 'hopskotch']
var suffix = ["st","nd","rd","th"]



for ( var i = 0 ; i < topChoices.length ; i++ ) {

	if ((i + 1) === 1){
		console.log("My " + (i + 1) + suffix[i] + " Choice " + topChoices[i])
	}
	else if ((i + 1) === 2) {
		console.log("My " + (i + 1) + suffix[i] + " Choice " + topChoices[i])
	}
	else if ((i + 1) === 3){
		console.log("My " + (i + 1) + suffix[i] + " Choice " + topChoices[i])
	}
	else {
		console.log("My " + (i + 1) + suffix[3] + " Choice " + topChoices[i])
	}
}

