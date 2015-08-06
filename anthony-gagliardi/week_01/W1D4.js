//Geometry Function Lab Part 1: Rectangle

var rectangle = {
  length: 4,
  width: 4
};

var badRectangle = {
  length: 5,
  width: 4,
};

var isSquare = function(shape){
	if (shape.length === shape.length) {
		return true;
	} else {
		return false;
	}
}
console.log("We passed in: ", rectangle, " it should be true.", isSquare(rectangle))
console.log("We passed in: ", badRectangle, " it should be false.", isSquare(badRectangle))

//

var area = function(shape){
	return shape.length * shape.width
}
console.log("We passed in: ", rectangle, " the area should be 16.", isSquare(rectangle))
console.log("We passed in: ", badRectangle, " the area should be 20.", isSquare(badRectangle))

//

var area = function(shape){
	return (shape.length * 2) + (shape.width * 2)
}
console.log("We passed in: ", rectangle, " the perimeter should be 16.", isSquare(rectangle))
console.log("We passed in: ", badRectangle, " the perimeter should be 18.", isSquare(badRectangle))


//Geometry Function Lab Part 2: Triangle

var triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

var badTriangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

//Equilateral

var isEquilateral = function(shape){
	if(triangle.sideA === triangle.sideB && shape.sideB === triangle.sideC) {
	    return true;
	}
	return false;
};
console.log("We passed in: ", triangle, ", it should return true.", isEquilateral(triangle);
console.log("We passed in: ", badTriangle, ", it should return true.", isEquilateral(badTriangle);


//Isosceles

var isIsosceles = function(shape) {
	if (!isEquilateral(shape) && (shape.sideA === shape.sideB || shape.sideA === shape.sideC || shape.sideB === side.C)) {
		return true;
	}
	return false;
}
console.log("We passed in: ", triangle, ", it should return true.", isIsosceles(triangle));
console.log("We passed in: ", badTriangle, ", it should return true.", isIsosceles(badTriangle));


// Area

var area = function(shape) {
    if (triangle === 6) {
		return true;
	} else if (badTriangle === 5.5) { // CANNOT GET TO 'DEFINE'
		return false;
	}
}
console.log("We passed in: ", triangle, ", it should return true.", area(triangle));
console.log("We passed in: ", badTriangle, ", it should return false.", area(badTriangle));


// Obtuse

var angle = {
  cornerA: 90,
  cornerB: 90,
  cornerC: 90
};

var badAngle = {
  cornerA: 90,
  cornerB: 46,
  cornerC: 44,
};

var isObtuse = function(shape) {
	if (shape.cornerA >= 91 && shape.cornerB <= 45 / Math.PI && shape.cornerC <= 45) {
		return true;
	} else if (shape.cornerA == 90 && shape.cornerB == 90 && shape.cornerC === 90){
		return false;
	} else {
		return false // CAN'T GET IF TO PRINT -TRUE- OTHERWISE -FALSE-
	}
};
console.log("We passed in: ", angle, ", it should return true.", isObtuse(angle));
console.log("We passed in: ", badAngle, ", it should return false.", isObtuse(badAngle));