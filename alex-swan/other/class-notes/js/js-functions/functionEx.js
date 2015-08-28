console.log('Is this thing on?');

//Exercise 1: Fortune Teller
//takes 4 arguments: number of children, partner's name, geographic location, job title.
//outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments.

var tellFortune = function(numChildren, partnerName, geoLoc, jobTitle) {
	var message = "You will be a " + jobTitle + " in " + geoLoc + " and married to " + partnerName + " with " + numChildren + " kids.";
	console.log(message);
	}

tellFortune(7, "Jon Snow", "The North", "Night Watchman");
tellFortune(5, "Daenerys Targerian", "Kings Landing", "Lord of the Seven Kingdoms");
tellFortune(0, "Littlefinger", "The Eyrie", "Chief Whinger");


//Exercise 2: The age calc
//Write a function named calculateAge that:

//takes 2 arguments: birth year, current year.
//calculates the 2 possible ages based on those years.
//outputs the result to the screen like so: "You are either NN or NN"
//Call the function three times with different sets of values.
//Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var calculateAge = function(birthYear) {
	var currentYear = new Date().getFullYear();

	var age1 = currentYear - birthYear -1;
	var age2 = currentYear - birthYear;
	console.log("You are either " + age1 + " or " + age2);
}
calculateAge(1988);
calculateAge(2000);
calculateAge(1932);

//Exercise 3: The Lifetime Supply Calculator

/*Write a function named calculateSupply that:

takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.

*/

var calculateSupply = function(age, amountPerDay) {
	var maxAge = 100;
	var yearsRemaining = maxAge - age;
	var perYear = Math.ceil(amountPerDay) * 365.25;
	var amountRequired = yearsRemaining * perYear;
	console.log("You will need " + amountRequired + " to last you until the ripe old age of " + maxAge)
}

calculateSupply(20, 100.22);
calculateSupply(40, 2);
calculateSupply(22, 22);

/*
Exercise 4:The Geometrizer

Create a function called calcCircumfrence:
Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

var calcCircumference = function(radius) {
	var circumference = 2 * Math.PI * radius;
	console.log("The curcumference is " + Math.round(circumference) + ".");
}

var calcArea = function(radius) {
	var area = Math.PI * radius * radius;
	console.log("The area is " + Math.round(area) + ".")
}

calcCircumference(5);
calcArea(5);

/*
Exercise 5: The Temperature Converter

Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

var celsiusToFahrenheit = function(celcius) {
	var celcius = celcius;
	fahrenheit = celcius * 9/5 + 32;
	console.log(celcius + "\xB0C" + " is " + fahrenheit + "\xB0F"); //meta charset="utf-8" if wanting to use copied symbol
}


var fahrenheitToCelsius = function(fahrenheit) {
	var fahrenheit = fahrenheit;
	celcius = (fahrenheit - 32) * 5/9;
	console.log(fahrenheit + "\xB0F" + " is " + celcius + "\xB0C");
}
celsiusToFahrenheit(11.2);
fahrenheitToCelsius(52.16);