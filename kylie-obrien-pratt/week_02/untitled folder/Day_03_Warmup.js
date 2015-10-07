Serge Responds

Serge answers 'Sure.' if you ask him a question.

He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.

To call the function, we want to be able to do something like this - Serge.respondTo( "Some string here" )

What do you need to do?

Make your HTML and JS files
Make sure you work with an object to get this working - remember to keep your functions small!
Figure out the appropriate response
If you are flying through, do something cool with the CSS or work more on the homework from last night


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

