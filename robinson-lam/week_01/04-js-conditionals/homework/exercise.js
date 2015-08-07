console.log("Homework!");

var squareNumber = function(number) {
  var result = number * number;
  console.log("The result of squaring the number " + number + " is " + result + ".");
  return result;
};

var halfNumber = function(number) {
  var result = number / 2;
  console.log("The result of squaring the number " + number + " is " + result + ".");
  return result;
};

var percentOf = function(a, b) {
  var result = a / b * 100;
  console.log(a + " is " + result + "% of " + b + ".");
  return result;
};

var areaOfCircle = function(radius) {
  var result = 2 * Math.PI * radius * radius;
  result = Number(Math.round(result+'e2')+'e-2');
  console.log("The area for a circle with radius " + radius + " is " + result);
  return result;
};

squareNumber(2);
halfNumber(100);
percentOf(3, 10);
areaOfCircle(50);

var calculate = function(number) {
  var half = halfNumber(number);
  var squared = squareNumber(half);
  var area = areaOfCircle(squared);
  var result = percentOf(area, squared);
  console.log(result);
  return result;
};

calculate(20);

console.log("\nString exercises");

var drEvil = function(amount) {
  var str = amount + " dollars";
  if (amount === 1000000) {
    str = str.concat(" (pinky).");
  }
  console.log(str);
  return str;
};

drEvil(932);
drEvil(1000000);

var mixUp = function(a, b) {
  var stringA = b.slice(0, 2) + a.slice(2, (a.length));
  var stringB = a.slice(0, 2) + b.slice(2, (b.length));
  var result = stringA.concat(" ", stringB);
  console.log(result);
  return result;
};

mixUp("mix", "pod");
mixUp("dog", "dinner");

var fixStart = function(string) {
  var firstChar = new RegExp(string[0], 'g');

  var result = string[0] + string.substr(1).replace(firstChar, "*" );
  console.log(result);
  return result;
};

fixStart("babble");

var verbing = function(string) {
  if (string.length >= 3) {
    if (string.substr(string.length - 3) === "ing") {
      string = string.concat("ly");
    } else {
      string = string.concat(string[string.length - 1], "ing");
    }
  }

  console.log(string);
  return string;
};

verbing("swim");
verbing("swimming");
verbing("go");

var notBad = function(string) {
  var indexOfNot = string.indexOf("not");
  var afterNot = string.substr(indexOfNot);
  var indexOfBad = afterNot.indexOf("bad");
  if ((indexOfNot != -1) && (indexOfBad != -1)) {
    var stringToReplace = string.substr(indexOfNot, indexOfBad + 3);
    var result = string.replace(stringToReplace, "good");
    console.log(result);
    return result;
  } else {
    console.log(string);
    return string;
  }

};

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');


var isLeapYear = function(year) {
  if (!(year % 4) && ((year % 100) || !(year % 400))) {
      console.log(year + " is a leap year!");
      return true;
    } else {
      console.log(year + " is not leap year!");
      return false;
  }
};

var getLeapYearInput = function() {
  var year = prompt("Enter a year");
  return year;
};

isLeapYear(getLeapYearInput());

Number.prototype.isLeapYear = function() {
  if (!(this % 4) && ((this % 100) || !(this % 400))) {
      console.log(this + " is a leap year!");
      return true;
    } else {
      console.log(this + " is not leap year!");
      return false;
  }
};

var year = 2008;
year.isLeapYear();
