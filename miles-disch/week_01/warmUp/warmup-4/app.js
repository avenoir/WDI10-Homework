var humans = {

	counter: function ( string, char ) {
		var nuc = 0;
		for ( i = 0; i < string.length; i++ ) {
			if (string[i] === char) {
				nuc++;
			} 
		}
		return nuc;
	},

	result: function ( string ) {
		var nucTotal = {
			'A': this.counter( string, 'A' ),
			'C': this.counter( string, 'C' ),
			'G': this.counter( string, 'G' ),
			'T': this.counter( string, 'T' ),
			'U': this.counter( string, 'U' )
		}
		return nucTotal;
	}

}

console.log(humans.counter('ADASUT','A'));

console.log(humans.result('ACFGTUADS'));

