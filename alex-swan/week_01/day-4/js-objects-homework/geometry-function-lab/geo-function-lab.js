// Geometry Function Lab
// Part 1, Rectangle

// Given the following a rectangle object like the one below, write the following functions:
// isSquare - Returns whether the rectangle is a square or not
var isSquare = function(r){
	if (r.length === r.width) {
	var square = true;
	} else {
		var square = false;
	}
	return square;
}
// area - Returns the area of the rectangle
var area = function(r){
	return r.length * r.width;
}
// perimeter - Returns the perimeter of the rectangle
var perimeter = function(r){
	return r.length * 2 + r.width * 2;
}
var rectangle = {
  length: 4,
  width: 4
};

console.log(isSquare(rectangle));
console.log(area(rectangle));
console.log(perimeter(rectangle));

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
// isEquilateral - Returns whether the triangle is equilateral or not
var isEquilateral = function(t){
	if ((t.sideA === t.sideB) && (t.sideB === t.sideC)) {
		return true;
	} else {
		return false;
	}n
}
// isIsosceles - Returns whether the triangle is isosceles or not
var isIsosceles = function(t){
	if ((isEquilateral(t) === true) || ((t.sideA === t.sideB) || (t.sideA === t.sideC) || (t.sideB === t.sideC))){
		return true;
	} else {
		return false;
	}
}
// area - Returns the area of the Triangle
var areaTriangle = function(t){
	if (isIsosceles(t) === true) {
		if (t.sideA === t.sideB){
			var base = t.sideC / 2;
			var side = t.sideA
		} else if (t.sideB === t.sideC){
			var base = t.sideA / 2;
			var side = t.sideB;
		} else {
			var base = t.sideB / 2;
			var side = t.sideC;
		}
	} else if (isEquilateral(t)) {
			var base = t.sideA / 2;
			var side = t.sideA;
	} else {
		console.log("Stop being obtuse.")
	}
	var height = Math.sqrt(side * side - base * base);
	return height * base;
};
// isObtuse - Returns whether the triangle is obtuse or not
var isObtuse = function(t){
	var cosA = (t.sideB * t.sideB + t.sideC * t.sideC - t.sideA * t.sideA) / (2 * t.sideB * t.sideC);
	var A = 180 * Math.acos(cosA)/Math.PI;
	var cosB = (t.sideC * t.sideC + t.sideA * t.sideA - t.sideB *t.sideB) / (2 * t.sideC * t.sideA);
	var B = 180 * Math.acos(cosB)/Math.PI;
	var C = 180 - A - B;

	if (A > 90 || B > 90 || C > 90){
		return true;
	} else {
		return false;
	}
};

var isObtuse2 =function(t){
	var max = Math.max(t.sideA,t.sideB,t.sideC);
		return max;
	
	}


var triangle = {
  sideA: 4,
  sideB: 3,
  sideC: 3
};

console.log(isEquilateral(triangle));
console.log(isIsosceles(triangle));
console.log(areaTriangle(triangle));
console.log(isObtuse(triangle));
console.log(isObtuse2(triangle));