// var Serge = {

// 	var respondTp
	
// 	respondQuestion: function ( string ) {
// 		for ( i = 0; i > string.length; i++ ) {
// 			if ( string[i] === '?' ) {
// 				return "Sure" 
// 			}
// 		}
// 	},

// 	respondYell: function ( string ) {
// 		for ( i = 0; i > string.length; i++ ) {
// 			if ( string[i] === string[i].toUpperCase()) {
// 				return "woah chill out!"
// 			}
// 		} 
// 	},

// 	respondSilence: function ( string ) { 
// 		if ( string === "" ) {
// 			return "Fine. be that way!"
// 		} 
// 	},

// 	respondTo: function ( string ) { 
		
// 	}  

// }

// console.log(Serge.respondQuestion('hello?'))


var Serge = {

  respondTo: function( string ) {
    if (this.isQuestion( string )) {
      console.log("sure.");
    } else if (this.sayNothing( string )) {
      console.log("Fine. Be that way!");
    } else if (this.allCaps( string )) {
      console.log("Woah, chill out.");
    } else {
      console.log("Whatever.");
    }

  },

  isQuestion: function( string ) {
    // string = string.trim()
    // if ( string.endsWith("?")) {
    //   return true;
    // } else {
    //   return false;
    // }

    return ( string.trim().endsWith("?") );
  },

  allCaps: function( string ) {
    // if (string === string.toUpperCase()) {
    //   return true;
    // }
    // return false;

    return ( string === string.toUpperCase() );
  },

  sayNothing: function( string ) {
    // if (string === "") {
    //   return true;
    // }
    // return false;

    return (string.trim() === "");
  }
};

console.log(Serge.respondTo("How are you?  "));
console.log(Serge.respondTo("    "));
console.log(Serge.respondTo("SDFHSF"));
console.log(Serge.respondTo("hi there"));