// Day 5 Week 1

// # Pling Plang Plong

// Write a program that converts a number to a string per the following rules:

// If the number contains 3 as a prime factor, output 'Pling'.
// If the number contains 5 as a prime factor, output 'Plang'.
// If the number contains 7 as a prime factor, output 'Plong'.

// If the number does not contain 3, 5, or 7 as a prime factor, simply return the
// string representation of the number itself.

// E.g. The prime factors of 28 are [2, 2, 7].

// ```# => "Plong"
// ```

// The prime factors of 1755 are [3, 3, 3, 5, 13].

// ```# => "PlingPlang"
// ```

// The prime factors of 34 are [2, 17].

// ```# => "34"


// We need a function that recieves a number

// We need to add pling if that number is divisible evenly by 3

// We need to add plang if that number is divisible by 5

// We need to add plong to a string if that number is divisible evenly by 7

// If the number isn't divisible by 3, 5 or 7 we return the number as a string

// Need to start with a string


var convert = function (num) {

	var string = "";

	if (num % 3 === 0) {
		string += "Pling";
	}

	if (num % 5 === 0) {
		string += "Plang";
	}
	if (num % 7 === 0) {
		string += "Plong";

	if (str.length === 0 { 
		return num + ""; //Return the string value of the num.toString() OR 19 + ""
	})

	console.log(string);

	return string;
	}
}

convert(105);


// Animal Collection

//1. Create a variable called `animals` and set it equal to an empty array. Using any method you prefer, add your animal from the last object exercise to the animals array.
//*/

var animals = [];
animals[0] = {
    userName: "Bugs",
    tagline: "What's up doc?",
    noises: ['chewing', 'sniff'],
}

console.log(animals);


/*
2. Create a variable called `quackers` and assign it to this example object:\n{ username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
Add quackers to the animals array using a different method than before. Inspect your animals array to ensure you have two objects inside.
*/

var quackers = {
    userName: "Daffy Duck",
    tagline: "Yippeeee!",
    noises: ['quack', 'honk', 'sneeze', 'growl'], 
}

animals.push(quackers);
console.log(animals);

/*
3. Create two more animal objects and add them to your animals array. They should have these properties and your choice of values: username (with a string value) tagline (with a string value) noises (with an array of values) Check the length property of your array. It should give you 4.
*/

// if you line up data carefully in arrays you don't need to use objects but difficult if you add more brothers
var names = ['Groucho', 'Harpo', 'Chico'];
var instruments = ['guitar', 'harp', 'piano'];
var vices = ['cigars', 'hijinx', 'women'];

var = crapBrotherPrinter = function (index) {

console.log(names[0] + " plays the " + instruments[0] + ' and enjoys " + vices[index']);

}


crapBrotherPrinter(0);
crapBrotherPrinter(2);

// object oriented programming style:

var bros = [
	{name: 'Groucho', instrument: 'guitar', vice: 'cigars'},
	{name: 'Harpo', instrument: 'harp', vice: 'hijinx'},
	{name: 'Chico', instrument: 'piano', vice: 'women'},
]

printBrother = function (brother) {
	console.log(brother.name + ' plays the ' brother.instrument + ' and enjoys ' + brother.vice);
}

printBrother(bros[1]);

for (var i = 0; i < bros.length; i++) {
	printBrother(bros[i]);
}

//

var vices = {
	groucho: 'cigars',
	harpo: 'hijinx',
	chico: 'women'
};

var instruments = {
	groucho: 'guitar',
	harpo: 'harp',
	chico: 'piano'
}

var objectBrotherPrinter = function (name) {
	console.log(name + " plays the " + instruments[name] + " and enjoys " + vices[name]);
}

objectBrotherPrinter['groucho'];
objectBrotherPrinter['harpo'];

// ___________              __               .__               
// \_   _____/____    _____/  |_  ___________|__| ____   ______
//  |    __) \__  \ _/ ___\   __\/  _ \_  __ \  |/ __ \ /  ___/
//  |     \   / __ \\  \___|  | (  <_> )  | \/  \  ___/ \___ \ 
//  \___  /  (____  /\___  >__|  \____/|__|  |__|\___  >____  >
//     \/        \/     \/                          \/     \/ 
                                                            
var brotherFactory = function(name, instrument, vice) {
  	var brother = {
  		brother.name = name;
  		brother.instrument = instrument;
  		brother.vice = vice;
  	};
  	return brother;
  }                                                         
var bros = [
brotherFactory('Groucho', 'guitar', 'cigars');
brotherFactory('Harpo', 'harp', 'hijinx');
brotherFactory('Chico', 'piano', 'women')
]     

// create and return var brother object:

var brotherFactory = function(name, instrument, vice) {
  	return {
  		brother.name = name;
  		brother.instrument = instrument;
  		brother.vice = vice;
  		play: function () {
  			console.log(name + " plays the " + instrument)
  		}
  	};
  	return brother;
  }                   

var catFactory = function (age, furColor) {
	return {
		var lizzieTheCat = {
  		age: 18,
  		furColor: 'grey',
  		favouriteFood: favouriteFood,
  		indulge: function () {
  			this.eat(this.favouriteFood);
  		},
  		meow: function() {
    	console.log('meowww');
 		},
  		eat: function(food) {
    		console.log('Yum, I love ' + food);  
 		},
  		sleep: function(numMinutes) {
    		for (var i = 0; i < numMinutes; i++) {
     		console.log('z');
    		}
  		}
	}
}                                                            
                   
var daemon = catFactory(1, "brown");                                         
                   
daemon.indulge();                                         

// Constructor
var Brother = function (name, instrument, vice) {
	this.name = name;
	this.instrument = instrument;
	this.vice = vice;

	return this;
};

var g = new Brother('Grouch', 'guitar', 'cigars');



//
var rectangle = {
	length: 4,
	width: 4
};

var badRectangle = {
	length: 5,
	width: 5
};

var isSquare = function (shape) {
	if (shape.length ==== shape.width) {
		return true;
	} else {
		return false;
	}
};

console.log("We passed in: ", rectangle, ". It should be true!", isSquare(rectangle));

// Area of rectangle


var rectangle = {
	length: 4,
	width: 4
};

var area = function(shape){
	return shape.length * shape.width;
}


console.log("We passed in rectangle, ", rectangle, " the area should be 16 ", area(rectangle));
console.log("We passed in rectangle, ", badRectangle, " the area should be 16 ", area(badRectangle));


// Perimeter - returns the perimeter of the rectangle
// 0. What type of data - function that 
// 1. Inside function I need to work out perimeter of rectangle
	// add the width times 2 and the height times 2
// Return perimeter



var perimeter = function (shape) {
		return (shape.length * 2) + (shape.width * 2);
};

console.log("We passed in rectangle, ", rectangle, " the perimeter should be 16 ", area(rectangle));
console.log("We passed in rectangle, ", badRectangle, " the perimeter should be 18 ", area(badRectangle));


// Part 2: The Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// var triangle = {
// sideA: 3,
// sideB: 4,
// sideC: 4
// };

// isEquilateral - Returns whether the triangle is equilateral or not

var triangle = {
	sideA: 4,
	sideB: 4,
	sideC: 4
	};

var badTriangle = {
	sideA: 3,
	sideB: 4;
	side: 4;
};

var isEquilateral = function (shape) {
	if (shape.sideA === shape.sideB) && (shape.sideB === shape.sideC) {
		return true;
	} 
		return false;
};

console.log("We passed in: ", triangle, ". It should return true.", isEquilateral(triangle));
console.log("We passed in: ", badTriangle, ". It should return false.", isEquilateral(badTriangle));

// isIsosceles - Returns whether the triangle is isosceles or not

var isIsosceles = function(shape) {
	if (!isEquilateral(shape) && (shape.sideA === shape.sideB || shape.sideA === shape.sideC || shape.sideB ==== shape.sideC)) {
		return true;
	}
	return false;
}

// Area
1. 
	// (height * base) / 2

var triangle = {
	length: 4,
	width: 4
};

var height = function() {

}

var area = function(shape){
	return (shape.length * shape.width) / 2;
}


console.log("We passed in rectangle, ", rectangle, " the area should be 16 ", area(rectangle));
console.log("We passed in rectangle, ", badRectangle, " the area should be 16 ", area(badRectangle));

// isObtuse - Returns whether the triangle is obtuse or not


// Javascript Bank

var accounts = [
	{balance: 200, ownerName: "Joseph Heller"},
	{balance: 3000, ownerName: "John Brown"},
	{balance: 100000, ownerName: "John Smith"}
	];

for (var = 0; i < accounts.length; i++) {
	var totalBalance = accounts[i];
	if (totalBalance.alreadyRead === true) {
	console.log("You've already read " book.title + " by " + book.author);
	} else {
	console.log("You still need to read " book.title + " by " + book.author);
	}
}








// The Calculator

//Write a function called squareNumber that will take one argument (a number), 
//square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

squareNumber = function(num) {
	var result = num * num;
	var message("The result of squaring the number " + num + " is " + result)
	console.log(message);
}

squareNumber(3)

// Write a function called halfNumber that will take one argument (a number), 
// divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

halfNumber = function(num) {
	var result = num / 2;
	var message ("Half of " + num + " is " + result);
	console.log(message);
}

halfNumber(10)

// Write a function called percentOf that will take two numbers, 
// figure out what percent the first number represents of the second number, and return the result. 
// It should also log a string like "2 is 50% of 4."

percentOf = function(num1, num2) {
	var result = (num1 / num2) * 100;
	var message(num1 + " is " + result + "% of " + num2);
	console.log(message);
}

percentOf(6, 8);

// Write a function called areaOfCircle that will take one argument (the radius), 
// calculate the area based on that, and return the result. It should also log a string 
// like "The area for a circle with radius 2 is 12.566370614359172."

areaOfCircle = function(radius) {
	var result = (Math.PI * (radius * radius));
	var message("The area for a circle with radius " + radius + " is " + result)
	console.log(message);
}

areaOfCircle(3);

// Write a function that will take one argument (a number) and perform the following operations, 
// using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var shoe = halfNumber(10)

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
