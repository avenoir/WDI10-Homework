/* Given the following a rectangle object like the one below, write the following functions:
 *
 * isSquare - Returns whether the rectangle is a square or not
 * area - Returns the area of the rectangle
 * perimeter - Returns the perimeter of the rectangle
 */

// rectangle object
var rectangle = {
	length: 4,
	width: 4
};

// check if the rectangle is a square
var isSquare = function(rectangularObject) {
	if (rectangularObject.length === rectangularObject.width) {
		return true;
	} else {
		return false;
	}
};

// calculate area of rectangle
var areaRectangle = function(rectangularObject) {
	return rectangularObject.length * rectangularObject.width;
};

// calculate the perimeter of rectangle
var perimeter = function(rectangularObject) {
	return rectangularObject.length * 2 + rectangularObject.width * 2;
};

console.log(isSquare(rectangle));
console.log(areaRectangle(rectangle));
console.log(perimeter(rectangle));

/*Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
 */

// triangle object
var triangle = {
	sideA: 100,
	sideB: 4,
	sideC: 5
};

// check if a triangle is equilateral
var isEquilateral = function(triangularObject) {

	// if A = B and A = C; B = C
	if((triangularObject.sideA === triangularObject.sideB) && (triangularObject.sideA === triangularObject.sideC)) {
		return true;
	} else {
		return false;
	}
};

// check if a triangle is isosceles
var isIsosceles = function(triangularObject) {
	if(isEquilateral(triangularObject)) {			// all equilateral triangles are also isosceles
		return true;
	} else if((triangularObject.sideA === triangularObject.sideB) && (triangularObject.sideA !== triangularObject.sideC)) {
		return true;
	} else if ((triangularObject.sideA === triangularObject.sideC) && (triangularObject.sideA !== triangularObject.sideB)) {
		return true;
	} else if ((triangularObject.sideB === triangularObject.sideC) && (triangularObject.sideB !== triangularObject.sideA)) {
		return true;
	} else {
		return false;
	}
};

// calculate the area of a triangle using Heron's Formula A = sqrt(p(p-a)(p-b)(p-c)) where p = (a+b+c)/2
var areaTriangle = function(triangularObject) {
	var p = (triangularObject.sideA + triangularObject.sideB + triangularObject.sideC) / 2;
	return Math.sqrt(p * (p - triangularObject.sideA) * (p - triangularObject.sideB) * (p- triangularObject.sideC));
};

console.log(isEquilateral(triangle));
console.log(isIsosceles(triangle));
console.log(areaTriangle(triangle));


























