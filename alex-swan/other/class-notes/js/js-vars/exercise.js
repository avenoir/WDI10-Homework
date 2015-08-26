console.log('Is this thing on?');

//Exercise 1: Fortune Teller
var numChildren = 2;
var partnerName = "Andrew";
var geoLoc = "NYC";
// Note "location" is a reserved word
var jobTitle = "Programmer";
//Note: better to store long string in a variable and console.log that variable
var fortune = "You will be a " + jobTitle + " in " + geoLoc + " and married to " + partnerName + " with " + numChildren + " kids.";
console.log( fortune );


//Exercise 2: The Age Calculator
var currentYear = 2015;
var birthYear = 1988;
var ageBdayGone = currentYear - birthYear;
var ageBdayYet = currentYear - birthYear - 1;
console.log("They are either " + ageBdayGone + " or " + ageBdayYet + ".");

//Exercise 3: The Lifetime Supply Calculator
var age = 26;
var maxAge = 100;
var estPerDay = 2;
var totalPerDay = (maxAge - age) * estPerDay * 365.25;
console.log("You will need " + totalPerDay + " to last you until the ripe old age of " + maxAge + ".");
//Option 2, easier to read
var yearsRemaining = maxAge - age;
var perYear = estPerDay * 365.25;
var amountRequired = yearsRemaining * perYear;
console.log(amountRequired);
//Exercise 4: The Geometrizer
var radius = 5;
var circumference = 2 * Math.PI * radius;
console.log("The curcumference is " + Math.round(circumference) + ".");
var area = Math.PI * radius * radius;
console.log("The area is " + Math.round(area) + ".")

//Exercise 5: The Temperature Converter
var celcius = 22;
var cToF = celcius * 9/5 + 32; //or * 1.8 rather than * 5/9
console.log(celcius + "\xB0C" + " is " + cToF + "\xB0F"); //can use in HTML file: metacharset = utf
var fahrenheit = 50;
var fToC = (fahrenheit - 32) * 5/9; //or / 1.8 rathern than * 5/9
console.log(fahrenheit + "\xB0F" + " is " + fToC + "\xB0C");

