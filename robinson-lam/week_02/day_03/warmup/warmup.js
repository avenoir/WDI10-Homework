console.log("Warmup!");

var Serge = {

	checkQuestion: function(string) {
		for ( var x = 0; x < string.length; x++) {
			if ( string[x] === "?" ) {
				return true;
			}
		}
		return false;
	},

	checkYell: function(string) {
		return ((string === string.toUpperCase()) && string);
	},

	respondTo: function(string) {
		if (this.checkQuestion(string)) {
			return "Sure.";
		} else if (this.checkYell(string)) {
			return "Woah, chill out!";
		} else if ( !string ) {
			return "Fine. Be that way!";
		} else {
			return "Whatever.";
		}
	}
};

console.log(Serge.respondTo("Can you buy me lunch?"));
console.log(Serge.respondTo("YOU'RE A NICE GUY"));
console.log(Serge.respondTo(""));
console.log(Serge.respondTo("What the hell."));	