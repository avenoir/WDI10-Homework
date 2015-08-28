// # 99 Bottles of Beer

// Write a program which prints out the lyrics to that beloved classic, that field-trip favorite: _99 Bottles of Beer on the Wall._

// ## Requirements

// * The program should be called with `Beer.song`
// * The program should output text to the console
// * Each verse should be separated by a single blank line.

var Beer = {

	song: function( num, stop ) {
		for ( var i = num; i >= stop; i-- ) {
			this.lines(i);
		}
	},

	lines: function( num ){
		var string = (this.quantity(num) + this.bottle(num) + " of beer on the wall, " + this.quantity(num) + this.bottle(num) + " of beer.");
		console.log(string[0].toUpperCase() + string.slice(1));
		console.log("");
		num --;
		console.log(this.takeOne(num) + (this.quantity(num)) + this.bottle(num) +" of beer on the wall.");
		console.log("");
	},

	bottle: function( num ) {
		if ( num === 1 ) {
			return " bottle";
		} else {
			return " bottles";
		}
	},

	quantity: function( num ) {
		if ( num === 0 ) {
			return "no more";
		} else if (num < 0) {
			num = 99;
			return num;	
		} else {
			return num;
		}
	},

	takeOne: function( num ) {
		if ( num + 1 === 0 ) {
			return "Go to the store and buy some more, ";
		} else if (num + 1 === 1) {
			return "Take it down and pass it around, ";
		} else {
			return "Take one down and pass it around, ";
		}
	}
};


// ## Extensions

// * Make the type of beer customizable
// * Allow the following function calls to work:
//   - ` Beer.song() ` - That should do the whole song
//   - ` Beer.song(45) ` - This should do from 45 down
//   - ` Beer.song(34, 12) ` - This should print from 34 to 12

// ## Data

// Here's a sampling of the lyrics...

// ```
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.

// 97 bottles of beer on the wall, 97 bottles of beer.
// Take one down and pass it around, 96 bottles of beer on the wall.
// ```

// Then, at the end...

// ```
// 1 bottle of beer on the wall, 1 bottle of beer.
// Take it down and pass it around, no more bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// ```
