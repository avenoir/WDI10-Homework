// Geometry Function Lab

// Part 1, Rectangle

// Given the following 
// a rectangle object like the one below, 
// write the following functions:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
   length: 4,
   width: 4
};

var isSquare = function ( shape ) {
    if ( shape.length === shape.width ) {
        return 'This is a square';
    } else {
        return 'This is a retangle';
    }
}

isSquare( rectangle );



var area = function ( shape ) {
    return 'The area is ' +  rectangle.length * rectangle.width;
}

area( rectangle );



var perimeter = function ( shape ) {
    return 'The perimeter is ' + ( ( 2 * rectangle.length ) + ( 2 * rectangle.width ) );
}

perimeter( rectangle );



// Part 2, Triangle

// Given the following a triangle object like the one below, write the following functions:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// The area is half of the base times height
// isObtuse - Returns whether the triangle is obtuse or not

 var triangle = {
    sideA: 13,
    sideB: 18,
    sideC: 12
};

var isEquilateral = function ( shape ) {
    if ( triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC && triangle.sideA === triangle.sideC ) {
        return "The triangle is equilateral";
    }
}

isEquilateral ( triangle );



var isIsosceles = function ( shape ) {

    if ( ( triangle.sideA === triangle.sideB && triangle.sideB !== triangle.sideC ) ||
	( triangle.sideB === triangle.sideC && triangle.sideC !== triangle.sideA ) ||
	( triangle.sideC === triangle.sideA && triangle.sideA !== triangle.sideB ) )  {
    	return "The triangle is isosceles";
    }
}
isIsosceles ( triangle );



var isObtuse = function ( shape ) {
    if ( triangle.sideA !== triangle.sideB && triangle.sideB !== triangle.sideC && triangle.sideA !== triangle.sideC ) {
        return "The triangle is obtuse";
    }
}
isObtuse ( triangle );



// The area is half of the base times height
// s = ( a + b + c ) / 2;
// Area = √( s(s-a)(s-b)(s-c) )

 var triangle = {
    sideA: 14,
    sideB: 24,
    sideC: 31
};


var triangleArea = function ( shape ) {

    var a = triangle.sideA; 
    var b = triangle.sideB;
    var c = triangle.sideC;
    var s = ( a + b + c ) / 2;
    var area = Math.round( Math.sqrt( s * (s - a) * (s - b) * (s - c) ) * 100 ) / 100;
    
    return 'The area is ' +  area;
}

triangleArea ( triangle );
