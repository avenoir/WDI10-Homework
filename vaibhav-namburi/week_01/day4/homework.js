var rectangle = {

    length: 4,
    width: 4
};

var isSquare = function() {

    if (rectangle.length === rectangle.width) {
        return "square";
    } else {
        return "not square";
    }
}

var area = function() {

    return rectangle.length * rectangle.width;

}

var perimeter = function() {

    return 2 * (rectangle.length + rectangle.width);

}

// /////////////////////////////////


var triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

var isEquivalent = function() {

    if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
        return true;
    } else
        return false;
}

var sides = [];

var pusher = function(object) {

    for (x in object) {

        sides.push(object[x]);

    }

}

var isIsoceles = function(object) {

	pusher(object);

    if (sides[0] === sides[1] || sides[0] === sides[2] || sides[1] === sides[2]) {
        return true;
    } else
        return false;

}

console.log(isIsoceles(triangle));

var isTriangle = function(object) {

    sides = [];

    pusher(object);

    if ((sides[0] + sides[1] > sides[2]) && (sides[0] + sides[2] > sides[1]) && (sides[1] + sides[2] > sides[0])) {
        return true;
    } else
        return false;

}


var areaTriangle = function(object) {

    if (isTriangle(object)) {

      	sides = [];

        pusher(object);

        var p = (sides[0] + sides[1] + sides[2]) / 2;

        var sum = p * (p - sides[0]) * (p - sides[1]) * (p - sides[2]);

        return (Math.sqrt(sum));

    }
}

console.log(areaTriangle(triangle));

var isObtuse = function (object){

	sides = [];

	pusher(object);

	var largest = Math.max.apply(Math,sides);

	var indexOfMax = sides.indexOf(largest);

	sides.splice(indexOfMax,1);

	if(Math.pow(sides[0],2) + Math.pow(sides[1],2) < Math.pow(largest,2)){
		return "isObtuse";
	}

}



