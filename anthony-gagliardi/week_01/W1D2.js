// Part 1

var squareNumber = function(number){
    var result = number * number;
    console.log(result);
}
squareNumber(20)

var halfNumber = function(number){
    var result = number / 2;
    console.log(result);
}
halfNumber(10)

var percentOf = function(number){
	var result = number * 255;
	console.log(result);
}
percentOf(0.35)

var areaOfCircle = function(number){
	var result = Math.PI * number * number;
	return 'The area for a circle with radius 2 is ' + Math.round(result + "e+2"); // 2 Numbers past decimal point (can't get decimal point)
}
areaOfCircle(40)


// Part 2

var mathinAround = function(number){
	var x = number / 2;
	var y = x * x;
	var z = Math.PI * y * y;
	var result = y / z * 100;
	console.log(x);
	console.log(y);
	console.log(z);
    console.log(result);
}
mathinAround(10)