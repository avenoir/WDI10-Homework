console.log("Exercise.js is working, hell yeah");

// Exercise 1: The even/odd reporter
console.log("\nExercise 1: The even/odd reporter:");

for( var x = 0 ; x <= 20 ; x++ ){
  if ( !(x % 2) ) {
    console.log(x + " is even.");
  } else {
    console.log(x + " is odd.");
  }
};

// Exercise 2: Multiplication Tables
console.log("\nExercise 2: Multiplication Tables:");

for( var x = 0 ; x <= 10 ; x++ ){
  for( var y = 1 ; y <= 10 ; y++ ){
    console.log(x + " * " + y + " = " + (x * y));
  }
};

// Exercise 3: The Grade Assigner
console.log("\nExercise 3: The Grade Assigner:");

var assignGrade = function(score) {
  if(score >= 90) {
    return "A";
  }
  else if ( score >= 80 && score <= 89 ) {
    return "B";
  }
  else if ( score >= 70 && score <= 79) {
    return "C";
  }
  else if ( score >= 60 && score <= 69) {
    return "D";
  }
  else {
    return "F";
  }
};

for( var x = 60 ; x <= 100 ; x++ ){
  console.log("For " + x + ", you got a " + assignGrade(x) + ".");
};

