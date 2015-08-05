console.log("Exercises Work!");

// Exercise 1: What number's bigger?

var greaterNum = function(firstNum, secondNum) {
  return ((firstNum > secondNum) ? firstNum : secondNum);
};

console.log(greaterNum(2,39));
console.log(greaterNum(35,3));
console.log(greaterNum(3,3));

// Exercise 2: The World Translator

var helloWorld = function(language) {
  switch(language) {
    case "es":
      return "Hola Mundo";
    case "de":
      return "Hallo Welt";
    default:
      return "Hello World";
  }
};

console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("en"));

// Exercise 3: The Grade Assigner

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

console.log(assignGrade(95));
console.log(assignGrade(85));
console.log(assignGrade(75));
console.log(assignGrade(65));
console.log(assignGrade(35));

// Exercise 4: The Pluralizer

var pluralize = function(noun, number) {
  var collective = false;
  switch(noun) {
    case "goose":
      noun = "geese";
      collective = true;
    case "sheep":
      collective = true;
    case "fish":
      collective = true;
    default:
      if (number === 1 || collective) {
        return number + " " + noun;
      } else {
        noun = noun + "s";
        return number + " " + noun;
      }
  }
};

console.log(pluralize("goose", 3));
console.log(pluralize("sheep", 3));
console.log(pluralize("dog", 3));
console.log(pluralize("cat", 0));
console.log(pluralize("cat", 1));
