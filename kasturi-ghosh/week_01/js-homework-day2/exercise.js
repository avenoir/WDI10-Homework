//The Calculator - Part 1
var squareNumber = function(num) {
	var squareNum = num * num;
	var message = "The result of squaring the number " + num + " is " + squareNum;
	console.log(message);
	return squareNum;
};

squareNumber(4);

var halfNumber = function(num) {
	var halfNum = num / 2;
	var message = "Half of " + num + " is " + halfNum;
	console.log(message);
	return halfNum;
};

halfNumber(9);

var percentOf =function(a, b) {
	var aOfb = (( a / b ) * 100).toFixed(2);
	var message = a + " is " + aOfb + "% of " + b;
	console.log(message);
	return aOfb;
};

percentOf(2, 4);

var areaOfCircle = function(radius) {
	var area = (Math.PI * radius * radius).toFixed(2);
	var message = "The are of a circle with radius " + radius + " is " + area;
	console.log(message);
	return area;
};

areaOfCircle(6);


//The Calculator - Part 2
var calculate = function(num) {
	var halfNum = halfNumber(num);
	//console.log("Half of " + num + " is " + halfNum);

	var squareNum = squareNumber(halfNum);
	//console.log("Square of " + halfNum + " is " + squareNum);

	var area = areaOfCircle(squareNum);
	//console.log("Area of " + squareNum + " is " + area);

	var percent = percentOf(area, squareNum);
	//console.log(area + " is " + percent + "% of " + squareNum);
};

calculate(10);
