console.log("Exercise.js is working, hell yeah");

// Exercise 1: Fortune Teller

var tellFortune = function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
  var fortune = "You will be a "
    + jobTitle + " in "
    + geographicLocation + ", and married to "
    + partnerName + " with "
    + numberOfChildren + " kids.";

  console.log(fortune);
};

tellFortune(2, "Melissa", "London", "Awesome Developer");
tellFortune(100, "Melissa", "Australia", "Chicken Farmer");
tellFortune(0, "Misery", "Nowhere", "Disappointment");

// Exercise 2: The Age Calculator

var calculateAge = function(birthYear) {
  var today = new Date();
  var age = today.getFullYear() - birthYear;
  var ageMessage = "They are either " + age + " or " + (age - 1);
  console.log(ageMessage);
};

calculateAge(1994);
calculateAge(2015);
calculateAge(0);

// Exercise 3: The Lifetime Supply Calculator

var maximumAge = 100;

var calculateSupply = function(currentAge, estimatedAmountPerDay) {
  var totalSnacksForLife = Math.round(10 * 365.25 * (maximumAge - currentAge));
  var supplyMessage =  "You will need " + totalSnacksForLife + " to last you until the ripe old age of " + maximumAge ;

  console.log( supplyMessage );
};

calculateSupply(17, 0.32);
calculateSupply(84, 9);
calculateSupply(21, 10.32);

// Exercise 4: The Geometrizer

var calcCircumference = function(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log( "The circumference is " + circumference );
};

var calcArea = function(radius) {
  var area = Math.PI * radius * radius;
  console.log( "The area is " + area );
};

calcCircumference(50);
calcArea(50);

// Exercise 5: The Temperature Converter

var celsiusToFahrenheit = function(celsius) {
  var fahrenheit = ((celsius * 9) / 5) + 32;
  var ctofMessage = celsius + "°C is " + fahrenheit + "°F.";
  console.log(ctofMessage);
};

var fahrenheitToCelsius = function(fahrenheit) {
  var celsius = ((fahrenheit - 32) * 5) / 9;
  var ftocMessage = fahrenheit + "°F is " + celsius + "°C.";
  console.log(ftocMessage);
};

celsiusToFahrenheit(0);
fahrenheitToCelsius(32);
