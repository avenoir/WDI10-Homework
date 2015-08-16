// Exercises: Arrays

// Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var myTopChoices = [ "Beyonce", "Taylor", "Katy", "Nicky", "Britney", "Christina" ]

for ( var i = 0; i < myTopChoices.length; i++ ) {
	var rank = i + 1 
	console.log("My #" + (rank) + " choice" + " is " + myTopChoices[i] )
}

var myTopChoices = [ "Beyonce", "Taylor", "Katy", "Nicky", "Britney", "Christina", "Beyonce", "Taylor", "Katy", "Nicky", "Britney", "Christina", "Beyonce", "Taylor", "Katy", "Nicky", "Britney", "Christina", "Beyonce", "Taylor", "Katy", "Nicky", "Britney", "Christina", "Beyonce", "Taylor", "Katy", "Nicky", "Britney", "Christina", "Beyonce", "Taylor", "Katy", "Nicky", "Britney", "Christina", "Beyonce", "Taylor", "Katy", "Nicky", "Britney", "Christina", "Beyonce", "Taylor", "Katy", "Nicky", "Britney", "Christina", "Beyonce", "Taylor", "Katy", "Nicky", "Britney", "Christina", "Beyonce", "Taylor", "Katy", "Nicky", "Britney", "Christina", ]

for ( var i = 0; i < myTopChoices.length; i++ ) {

	var rank = i + 1

	if ( rank === 1 || rank % 10 === 1 ) {
		console.log("My " + rank + "st choice" + " is " + myTopChoices[i] )

	} else if ( rank === 2 || rank % 10 === 2) {
		console.log("My " + rank + "nd choice" + " is " + myTopChoices[i] )

	} else if ( rank === 3 || rank % 10 === 3) {
		console.log("My " + rank + "rd choice" + " is " + myTopChoices[i] )

	} else {
		console.log("My " + rank + "th choice" + " is " + myTopChoices[i] )

	}
}