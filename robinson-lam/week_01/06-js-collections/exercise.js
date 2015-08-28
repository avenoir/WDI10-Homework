console.log("Exercise.js is working, hell yeah");

// Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var choices = ["Blue", "Wicked", "Melon","Blue", "Wicked","Blue", "Wicked","Blue", "Wicked","Blue", "Wicked"];

var suffix;

for(var x = 0 ; x < choices.length ; x++){
  var numberString = x.toString();
  switch(parseInt(numberString[numberString.length - 1]) + 1) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    default:
      suffix = "th";
      break;
  }

  console.log(numberString[numberString.length - 1]);
  console.log("My " + (x+1) + suffix + " choice is " + choices[x] + ".");
};
