console.log("Is this thing on?");

//Exercise 1: Fortune teller
var fortuneTeller = function(numChildren, namePartner, geogLocation, jobTitle) {
	console.log("You will be a " + jobTitle + " in " + geogLocation + ", and married to " + namePartner + " with " + numChildren + " kids.");
};

fortuneTeller(2, 'Abhishek', 'Sydney', 'Developer');

//Exercise 2: Age calculator
var ageCalculator = function (birthYear) {
	var currentYear = (new Date()).getFullYear();
	var ageOne = currentYear - birthYear;
	var ageTwo = ageOne - 1;

	console.log("Age is either " + ageOne + " or " + ageTwo);
};

ageCalculator(1990);

//Exercise 3: The Lifetime Supply Calculator
var lifeSupplyCalc = function(currentAge, snackAmount) {
	var maxAge = 80;
	var perYear = snackAmount * 365.25;
	var totalSnack = (maxAge - currentAge) * perYear;

	console.log("You will need " + totalSnack + " to last until the ripe old age of " + maxAge);
};

lifeSupplyCalc(28, 3);

//Exercise 4: The Geometrizer
var calcCircumference = function(radiusCircle) {
	var circumCircle = 2 * Math.PI * radiusCircle;
	console.log("The circumference is " + Math.ceil(circumCircle));
};

var calcArea = function(radiusCircle) {
	var areaCircle = Math.PI * radiusCircle *radiusCircle;
	console.log("The area is " + Math.ceil(areaCircle));
};

calcCircumference(5);
calcArea(5);

//Exercise 5: The Temperature Converter
var celciusToFahrenheit = function(tempCelcius) {
	var tempToFarh = ((tempCelcius * 9) / 5) + 32;
	console.log(tempCelcius + "\u00b0C is " + tempToFarh + "\u00b0F.");
};
	

var fahrenheitToCelcius = function(tempFarh) {
	var tempToCel = ((tempFarh - 32) * 5) / 9;
	console.log(tempFarh + "\u00b0F is " + tempToCel + "\u00b0C.");
};

celciusToFahrenheit(35);
fahrenheitToCelcius(98);
