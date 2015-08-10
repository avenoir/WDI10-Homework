console.log("Is this thing on");

// Part1

var squareNumber = function (num) {
	var result = num * num;
	console.log("The result of squaring the number " + num + " is " + result);
	return result;
};

var halfNumber = function (num) {
	var result = num / 2;
	console.log("Half of " + num + " is " + result);
	return result;
};

var percentOf = function (num1, num2) {
	var result = num1 / num2  * 100;
	result = result.toFixed(2);
	console.log(num1 + " is " + result + "% of " + num2);
	return result;
};

var areaOfCircle = function (radius) {
	var result = Math.PI * (radius * radius);
	result = result.toFixed(2);
	console.log("The area of a circle with radius " + radius + " is " + result);
	return result;
};

var mainFunction = function () {
	var a = halfNumber(20);
	var b = squareNumber(a);
	var c = areaOfCircle(b);
	percentOf(c, b);
};

mainFunction();









