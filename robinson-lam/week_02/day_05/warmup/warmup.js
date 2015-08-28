console.log("99 Bottles of Freakin' Beer");


var Beer = {
	goodForYou: true,

	formatQuantity: function(num) {
		if ( num === 0 ) {
			return "No more bottles of beer";
		} else if ( num === 1 ) {
			return "1 bottle of beer";
		} else {
			return num + " bottles of beer";
		}
	},

	formatAction: function(num) {
		if ( num === 0 ) {
			return "Go to the store and buy some more";
		} else if ( num === 1 ) {
			return "Take it down and pass it around";
		} else {
			return "Take one down and pass it around";
		}
	},

	decrementOrRefill: function(num) {
		if ( num === 0 ) {
			return 99;
		} else {
			return num - 1;
		}
	},


	verse: function(num) {
		var quantity = (this.formatQuantity(num) + " on the wall, " + this.formatQuantity(num) + ". \n");
		var action = (this.formatAction(num) + ", ");
		var newQuantity = (this.formatQuantity(this.decrementOrRefill(num)) + " on the wall.\n");

		var verse = quantity + action + newQuantity;
		return verse;
	},

	song: function(numStart, numFinish) {
		numStart = numStart || 99;
		numFinish = numFinish || 0;

		for ( x = numStart ; x >= numFinish ; x-- ) {
			console.log(this.verse(x));
		}
	}
}	