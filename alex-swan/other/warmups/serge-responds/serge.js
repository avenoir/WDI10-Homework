// Serge Responds

// Serge answers 'Sure.' if you ask him a question.

// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.

// To call the function, we want to be able to do something like this - Serge.respondTo( "Some string here" )


var Serge = {

	respondTo: function(string) {
		if (this.addressSerge(string)) {
			console.log("Fine. Be that way!")
		} else if ( this.checkCaps(string) ) {
			console.log("Woah, chill out!")
		} else if ( this.checkQuestion(string) ) {
			console.log("Sure.")
		} else {
			console.log("Whatever.");
		}
	},

	checkCaps: function(string) {
		if (string.toUpperCase() === string) {
			return true;
		} 
	},

	checkQuestion: function(string) {
		string = string.trim();
		if (string.endsWith("?")){
			return true;
		} 
	},

	addressSerge: function(string) {
		if (string.substring(0,5).toLowerCase() === "serge" || string.length < 1){
			return true;
		} 
	}

};

// Serge.respondTo("Hello?");
// Serge.respondTo("HELLO!");
// Serge.respondTo("Serge");
// Serge.respondTo("ok")
Serge.respondTo(prompt("What say you?"))
Serge.respondTo(prompt("What say you?"))
Serge.respondTo(prompt("What say you?"))
Serge.respondTo(prompt("What say you?"))
