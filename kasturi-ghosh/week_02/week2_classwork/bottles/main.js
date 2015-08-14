// defining the beer object
var Beer = {
	// the song is contained in the 2 arrays
	line: [ ' bottles of beer on the wall,', ' bottles of beer. \nTake one down and pass it around,', ' bottles of beer on the wall.' ],
	lineLast: 'No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.',

	// this function determines the number of arguments pssed into it and calls different functions appropriately
	song: function( num1, num2 ) { 
		var beerSong = [];
		if ( num1 === undefined && num2 === undefined ) {
			beerSong = this.wholeSong();
		} else if ( num1 &&  num2 === undefined ) {
			beerSong = this.fromSong( num1 );
		} else {
			beerSong = this.partSong( num1, num2 );
		}
		return beerSong;
	},

	// for the entire song
	wholeSong: function() {
		// calls the function to write the song and pushes it into the array fullSong
		var fullSong = this.loop( 99, 1 )
		// writes the last line of the song into the array
		fullSong.push(this.lineLast);
		return fullSong;
	},

	// when just the from argument is passed
	fromSong: function( num ) {
		// calls the function to write the song and pushes it into the array fromSong
		var fromNumSong = this.loop( num, 1 )
		fromNumSong.push(this.lineLast);
		return fromNumSong;
	},

	//when from and to arguments are passed
	partSong: function( num1, num2 ) {
		// calls the function to write the song and pushes it into the array partOfSong
		var partOfSong = this.loop( num1, num2 )
		return partOfSong;
	},

	// writes the song
	loop: function( from, to ) {
		var theSong = [];
		for( var i = from; i >= to; i-- ) {
			theSong.push( i + this.line[0] + from + this.line[1] + (i - 1) + this.line[2] );
		}
		return theSong;
	}

};

//console.log(Beer.song());
//console.log(Beer.song(80));
console.log(Beer.song(45, 32));


