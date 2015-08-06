console.log("Exercise.js is working, hell yeah");

// Exercise 1: Fortune Teller

var numberOfChildren = 2;
var partnerName = "Melissa";
var geographicLocation = "London";
var jobTitle = "Awesome Developer";

console.log("You will be a "
    + jobTitle + " in "
    + geographicLocation + ", and married to "
    + partnerName + " with "
    + numberOfChildren + " kids.");

// Exercise 2: The Age Calculator

var currentYear = 2015;
var birthYear = 1994;

var age = currentYear - birthYear;
console.log( "They are either " + age + " or " + (age - 1) );

// Exercise 3: The Lifetime Supply Calculator

var currentAge = 21;
var maximumAge = 100;
var estimatedAmountPerDay = 10;
var totalSnacksForLife = 10 * 365 * (maximumAge - currentAge);

console.log( "You will need " + totalSnacksForLife + " to last you until the ripe old age of " + maximumAge );


// Exercise 4: The Geometrizer

var radius = 50;
console.log( "The circumference is " + (2 * Math.PI * radius) );
console.log( "The area is " + Math.PI * Math.pow((radius), 2) );


// Exercise 5: The Temperature Converter

var temperatureCelsius = 40;
var temperatureFahrenheit = ((temperatureCelsius * 9) / 5) + 32;
console.log(temperatureCelsius + "°C is " + temperatureFahrenheit + "°F.");

var temperatureFahrenheit2 = 32;
var temperatureCelsius2 = ((temperatureFahrenheit2 - 32) * 5) / 9;
console.log(temperatureFahrenheit2 + "°F is " + temperatureCelsius2 + "°C.");

