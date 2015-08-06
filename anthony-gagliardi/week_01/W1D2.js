// Part 1

var squareNumber = function(square){
    var result = square * square;
    console.log(result);
}
squareNumber(20)

var halfNumber = function(half){
    var result = half / 2;
    console.log(result);
}
halfNumber(10)

var percentOf = function(num1, num2){
	var result = num1 / 100 * num2;
	console.log(result);
}
percentOf(64.9, 216)

var areaOfCircle = function(area){
	var result = Math.PI * area * area;
	console.log('The area for a circle with radius 2 is ' + Math.round(result + "e+2")); // 2 Numbers past decimal point (can't get decimal point)
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


// BONUS: DrEvil:

var drEvil = function(evil) {
	if (evil < 1000000) {
		return '$' + evil + '... Boooriiiing'
	} else if (evil >= 1000000) {
		return '$' + evil + ' (pinky)'
	}
}
console.log(drEvil(10))
console.log(drEvil(1000000))
console.log(drEvil(100000))
console.log(drEvil(10000000))


// BONUS: MixUp


// BONUS: FixStart


// BONUS: Verbing


// BONUS: Not Bad

