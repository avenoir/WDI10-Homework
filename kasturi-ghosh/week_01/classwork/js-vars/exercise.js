console.log("Is this thing on?");

//Exercise 1: Fortune teller
var numChildren = 2;
var namePartner = "Abhishek";
var geogLocation = "Sydney";
var jobTitle = "Developer";

console.log("You will be a " + jobTitle + " in " + geogLocation + ", and married to " + namePartner + " with " + numChildren + " kids.");

//Exercise 2: Age calculator
var currentYear = 2015;
var birthYear = 1990;
var ageOne = currentYear - birthYear;
var ageTwo = ageOne - 1;

console.log("Age is either " + ageOne + " or " + ageTwo);

//Exercise 3: The Lifetime Supply Calculator
var currentAge = 28;
var maxAge = 86;
var snackAmount = 3;
var perYear = snackAmount * 365.25;
var totalSnack = (maxAge - currentAge) * perYear;

console.log("You will need " + totalSnack + " to last until the ripe old age of " + maxAge);

//Exercise 4: The Geometrizer
var radiusCircle = 5;
var circumCircle = 2 * Math.PI * radiusCircle;
var areaCircle = Math.PI * radiusCircle *radiusCircle;

console.log("The circumference is " + circumCircle);
console.log("The area is " + areaCircle);

//Exercise 5: The Temperature Converter
var tempCelcius = 35;
var tempToFarh = ((tempCelcius * 9) / 5) + 32;
var tempFarh = 98;
var tempToCel = ((tempFarh - 32) * 5) / 9;

console.log(tempCelcius + "\u00b0C is " + tempToFarh + "\u00b0F.");
console.log(tempFarh + "\u00b0F is " + tempToCel + "\u00b0C.");
