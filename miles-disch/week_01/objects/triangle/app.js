/*
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
*/

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function (t) {
	if ( t.sideA === t.sideB === t.sideC ) {
		return 'this is a equilateral!'

	}
	else {
		return 'this is not a equilateral'
	} 
}

console.log(isEquilateral(triangle))

var isIsoceles = function (t) {
	
	// buggy version
	// if ( t.sideA === t.sideB || t.sideB === t.sideC ||  t.sideA === t.sideC) {
	// 	return 'this is a isosceles'
	// }
	// else {
	// 	return 'this is not a isosceles'
	// }

	if (isEquilateral(t) !== true && (t.sideA === t.sideB || t.sideB === t.sideC ||  t.sideA === t.sideC) {
		return  'this is a isosceles';
	} else {
		return 'this is not a isosceles'
	}
}
console.log(isIsoceles(triangle))

var area = function (t) {
	var p = (t.sideA + t.sideB + t.sideC) / 2;
	var heron = p*((p-t.sideA)*(p-t.sideB)*(p-t.sideC));
	return Math.sqrt(heron);


}

console.log(area(triangle))