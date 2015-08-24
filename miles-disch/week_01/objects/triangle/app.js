/*
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
*/

var triangle = {
  sideA: 3,
  sideB: 5,
  sideC: 6
};

var isEquilateral = function (t) {
	if ( t.sideA === t.sideB && t.sideB === t.sideC ) {
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

	if ((isEquilateral(t) !== true) && (t.sideA === t.sideB || t.sideB === t.sideC ||  t.sideA === t.sideC)) {
		return  'this is a isosceles';
	} else {
		return 'this is not a isosceles'
	}
}
console.log(isIsoceles(triangle))

var isObtuse = function ( t ) {
	if ((isIsoceles(t) === 'this is not a isosceles') && (isEquilateral(t) === 'this is not a equilateral')) {
		return 'this is an obtuse triangle'
	}
	else {
		return 'this isnt a obtuse triangle!';
	}
}
console.log(isObtuse(triangle))

var area = function (t) {
	var p = (t.sideA + t.sideB + t.sideC) / 2;
	var heron = p*((p-t.sideA)*(p-t.sideB)*(p-t.sideC)); //herons formula!
	return Math.sqrt(heron);


}

console.log(area(triangle))