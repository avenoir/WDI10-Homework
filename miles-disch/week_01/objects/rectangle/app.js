/*
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
*/

var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function (r) {
	if ( r.length === r.width ) {
		return 'this is a square!'
	} else {
		return 'this is not a square!'
	}
}
console.log(isSquare(rectangle))

var area = function (a) {
	return a.length * a.width
}
console.log(area(rectangle))

var perimeter = function (a) {
	return a.length*2 + a.width*2;
}

console.log(perimeter(rectangle));

