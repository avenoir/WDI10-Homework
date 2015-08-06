// Geometry Function Lab

// Part 1, Rectangle:
var aRectangle = {
	length: 7,
	width: 4
};

// isSquare - Returns whether the rectangle is a square or not
var isSquare = function(rectangle) {
	if (rectangle.length === rectangle.width) {
		return true;
	} else {
		return false;
	}
};

console.log("The rectangle is a square: " + isSquare(aRectangle));

// area - Returns the area of the rectangle
var area = function(rectangle) {
	return rectangle.length * rectangle.width;
};

console.log("Area :" + area(aRectangle));

// perimeter - Returns the perimeter of the rectangle
var perimeter = function(rectangle) {
	return 2 * (rectangle.length + rectangle.width);
};

console.log("Perimeter: " + perimeter(aRectangle));


// Part 2, Triangle
var aTriangle = {
	sideA: 3,
	sideB: 3,
	sideC: 3
};

// isTriangle - Checks if the triangle is valid or not
var isTriangle = function(triangle) {
	var a = triangle.sideA;
	var b = triangle.sideB;
	var c = triangle.sideC;

	if ((a + b > c) && (a + c > b) && (b + c > a)) {
		return true;
	}
	else {
		return false;
	}
};

// isEquilateral - Returns whether the triangle is equilateral or not
var isEquivalent = function(triangle) {
	if (isTriangle(triangle)) {

		if ((triangle.sideA === triangle.sideB) && (triangle.sideA === triangle.sideC) && (triangle.	sideB === triangle.sideC)) {
			return true;
		} else {
			return false;
		}
	}
	else {
		return "Not a valid triangle";
	}
};

console.log("The triangle is equivalent: " + isEquivalent(aTriangle));

// isIsosceles - Returns whether the triangle is isosceles or not
var isIsosceles = function(triangle) {
	if (isTriangle(triangle)) {

		if (((triangle.sideA === triangle.sideB) || (triangle.sideA === triangle.sideC) || (triangle.sideB === triangle.sideC)) && !(isEquivalent(triangle))) {
			return true;
		} else {
			return false;
		}
	}
	else {
		return "Not a valid triangle";
	}
};

console.log("The triangle is isosceles: " + isIsosceles(aTriangle));

// area - Returns the area of the Triangle
var areaTriangle =function(triangle) {
	if (isTriangle(triangle)) {

		var p = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
		var res = p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC)
		var result = Math.sqrt(res).toFixed(2);
		return result;
	} else {
		return "Not a valid triangle";
	}
};

console.log("Area of the triangle: " + areaTriangle(aTriangle));

// isObtuse - Returns whether the triangle is obtuse or not
var isObtuse = function(triangle) {
	if (isTriangle(triangle)) {

		var aSquare = triangle.sideA * triangle.sideA;
		var bSquare = triangle.sideB * triangle.sideB;
		var cSquare = triangle.sideC * triangle.sideC;

		if ((aSquare + bSquare < cSquare) || (aSquare + cSquare < bSquare) || (bSquare + cSquare < aSquare)) {
			return true;
		} else {
			return false;
		}
	} else {
		return "Not a valid triangle";
	}
};

console.log("The triangle is obtuse: " + isObtuse(aTriangle));
