// The Calculator
// Part 1

// Write a function called squareNumber that will take 
// one argument (a number), 
// square that number, 
// and return the result//. 
// It should also log a string like "The result of squaring  the number 3 is 9."

var squareNumber = function (num) {
    var result = num * num;
    var message = 'The result of squaring the number ' + num + ' is ' + result;
    console.log(message);
    return result;
}
squareNumber(3);



// Write a function called halfNumber 
// that will take one argument (a number), 
// divide it by 2, and return the result. 
// It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function (num) {
    var result = num / 2;
    var message = 'Half of ' + num + ' is ' + result;
    console.log(message);
    return result;
}

halfNumber(6);



// Write a function called percentOf 
// that will take two numbers, 
// figure out what percent the first number represents of the second number, 
// and return the result. 
// It should also log a string like "2 is 50% of 4."

var percentOf = function (num1, num2) {
    var result = num1 / num2 * 100;
    var message = num1 + ' is ' + result + '% of ' + num2;
    console.log(message);
    return result;
}
percentOf(2,4);



// Write a function called areaOfCircle 
// that will take one argument (the radius), 
// calculate the area based on that, and return the result. // It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


var areaOfCircle = function (radius) {
    var result = Math.round((Math.PI * radius * radius) * 100) / 100;
    var message = "The area for a circle with radius " + radius + ' is ' + result;
    console.log(message);
    return result;
}
areaOfCircle(3);


//Part 2

// Write a function that will 
// take one argument (a number) 
// and perform the following operations, 
// using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


var calculator = function (number) {
    var half = number / 2;
    var square = half * half;
    var circleArea = Math.round((Math.PI * square * square) * 100) / 100;
    var percentOf = Math.round(circleArea / square * 100 * 100) / 100;
    console.log('half ' + half + ' square ' + square + ' circle area ' + circleArea + ' percent of ' + percentOf);
}
calculator(9);
calculator(10);