console.log("Exercise.js is working, hell yeah");

var maxOfTwoNumbers = function(a, b) {
  if (a>b) {
    console.log(a);
    return a;
  } else {
    console.log(b);
    return b;
  }
};

var maxOfThree = function(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
    return a;
  } else if (b > c) {
    console.log(b);
    return b;
  } else {
    console.log(c);
    return c;
  }
};

maxOfThree(3, 6, 1);
maxOfThree(33, 26, 11);
maxOfThree(23, 806, 30);

var vowels = ["a","e","i","o","u"];

var isVowel = function(character) {
  for( var x = 0; x < vowels.length ; x++){
    if ( character === vowels[x] ) {
      console.log(character + " is a vowel.");
      return true;
    }
  }
  console.log(character + " is not a vowel.");
  return false;
};

isVowel("e");
isVowel("r");
isVowel("3");
isVowel("i");
isVowel("o");

var sumArray = function(array) {
  var total = 0;

  for( var x = 0; x < array.length ; x++){
    total += array[x];
  }
  console.log(total);
  return total;
};

var multiplyArray = function(array) {
  var total = 1;

  for( var x = 0; x < array.length ; x++){
    total *= array[x];
  }
  console.log(total);
  return total;
};

sumArray([1,2,3,4]);
multiplyArray([1,2,3,4]);


var reverseString = function(string) {
  var reversedString = [];
  for( var x = string.length - 1 ; x >= 0 ; x--){
    reversedString.push(string[x]);
  }
  console.log(reversedString.join(''));
  return reversedString.join('');
};

reverseString("Maaaaate");

var findLongestWord = function(arrayOfWords) {
  var longestWord = arrayOfWords[0];
  for( var x = 0 ; x < arrayOfWords.length ; x++ ){
    if ( arrayOfWords[x].length > longestWord.length ) {
      longestWord = arrayOfWords[x];
    }
  }
  console.log(longestWord.length);
  return longestWord.length;
};

findLongestWord(["chicken", "dog", "robinson", "what"]);

var filterLongWords = function(arrayOfWords, lengthValue) {
  var longestWords = [];
  for( var x = 0 ; x < arrayOfWords.length ; x++ ){
    if ( arrayOfWords[x].length >= lengthValue ) {
      longestWords.push(arrayOfWords[x]);
    }
  }
  console.log(longestWords);
  return longestWords;
};

filterLongWords(["chicken", "dog", "robinson", "what"], 5);

// ==================================================================================================================================
// Homework: The Word Guesser

console.log("\nHomework: The Word Guesser\n\n");

// Game Variables
var letterFound = false;
var gameRunning = true;

// Wheel of Fortune Variables
var rewardAmount = 0;
var rewardMultiplier = 0;

// Hangman Variables
var limbs = 0;
var guessedLetters = [];

// Functions
var fillBlanks = function(wordToGuess) { // returns an array the same length as the word that is passed in and fills it with _'s
  var blankArray = [];
  for(var x = 0; x < wordToGuess.length ; x++){
    blankArray.push("_");
  }
  return blankArray;
};

var guessLetter = function(letter) {
  // Check if letter has already been used
  for(var x = 0 ; x < guessedLetters.length ; x++) {
    if (letter === guessedLetters[x]) {
      console.log("You have already used that letter!");
      return false; // Exit the function returning false
    }
  }

  // Checking if letter is in the answer
  for(var x = 0 ; x < wordToGuess.length ; x++) {
    if (letter === wordToGuess[x]) {
      currentProgress[x] = letter; // Replace the "_" with the user's letter
      letterFound = true; // A letter has been found
      rewardMultiplier += 1; // Multiplier will increment each time the letter is found in the word
    }
  }

  console.log(currentProgress);

  // Checking for wins
  if (letterFound) {
    console.log("Nice! The letter " + letter + " is in the word!");
    rewardAmount += ((Math.random() * (5000 - 1) + 1) * rewardMultiplier); // Add random amount for being correct
    rewardMultiplier = 0; // Reset multiplier
    letterFound = false; // Reset letter being found
    guessedLetters.push(letter); // Push the letter into the array of used letters

    if (currentProgress.join('') === wordToGuess) {
      console.log("Congrats! The word was: " + currentProgress.join('') + "!");
      console.log("Your reward is: $" + Math.ceil(rewardAmount) + "!");
      gameRunning = false;
    }
  } else {
    console.log("Bad luck! " + letter + " is not in the word!");
    guessedLetters.push(letter);
    limbs++; // Add limb for losing
    rewardAmount -= (Math.random() * (1000 - 1) + 1); // Subtract random amount from 1 to 1000 for losing
    if (limbs === 6) {
      console.log(" ________\n |      |\n |      O\n |     /|\\ \n |     / \\ \n_|_\n"); // Drawing the dead man
      console.log("GAME OVER. Reward: $" + Math.ceil(rewardAmount));
      gameRunning = false;
    }
  }
};

var wordToGuess = prompt("Enter a word to play with:");
var currentProgress = fillBlanks(wordToGuess);

while(gameRunning){
  guessLetter(prompt("Enter a letter to guess:"));
}

