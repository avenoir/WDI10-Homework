// We need an Anagram object.

// We need a bunch of functions...
//   One that will be able to sort strings into alphabetical order
//      Let's call this one sortAlphabetically
//   One that will be able to test they have the same characters
//      Let's call this one theEqualizer (sameLetters)
//   One that will decide whether the two words are anagrams
//   and test that the words aren't equal
//      Let's call this one areAnagrams
//   One that will figure out all anagrams
//   - this brings all the previous functions together
//      Let's call this one matches

var Anagram = {
  sortAlphabetically: function ( word ) {
    return word.split("").sort().join("");
  },

  theEqualizer: function ( setWord, guessWord ) {
    setWord = setWord.toLowerCase();
    guessWord = guessWord.toLowerCase();
    return this.sortAlphabetically( setWord ) === this.sortAlphabetically( guessWord );
  },

  areAnagrams: function ( setWord, guessWord ) {
    return setWord !== guessWord && this.theEqualizer( setWord, guessWord );
  },

  matches: function ( word, potentialAnagrams ) {
    var anagrams = [];

    for ( var i = 0; i < potentialAnagrams.length; i++ ) {
      var currentWord = potentialAnagrams[i];
      if ( this.areAnagrams( word, currentWord ) ) {
        anagrams.push( currentWord )
      }
    }

    return anagrams;
  }
}