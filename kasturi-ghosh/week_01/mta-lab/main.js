// MTA Lab
// creating an object 'lines' that has an array of strings for the 3 subway lines
var lines = {
	N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
	L: ['8th', '6th', 'Union Square', '3rd', '1st'],
	"6": ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

// the plan trip function.This function will demonstrate to the traveler how to go from start to destination point
var planTrip = function(departureLine, departureStop, arrivalLine, arrivalStop ) {

	// determining the indexes of the departure, arrival and union square terminals
	var unionIndex = -1; var tempDepart = 0; var tempArrive = 0; 
	var tempUnion = 0; var unionIndexArrival = 0;

	unionIndex = lines[departureLine].indexOf("Union Square");
	unionIndexArrival = lines[arrivalLine].indexOf("Union Square");
	var arrivalIndex = lines[arrivalLine].indexOf(arrivalStop);
	var departureIndex = lines[departureLine].indexOf(departureStop);
	
	// empty arrays to store the trip line details
	var firstPart = []; var secondPart = []; var reverseLine = []; 

	// if you need to change lines
	if (departureLine !== arrivalLine) {
		
		if (departureIndex < unionIndex) {
			firstPart = lines[departureLine].slice(departureIndex + 1, unionIndex + 1);
		} else {
			reverseLine = lines[departureLine].reverse();
			tempDepart = reverseLine.indexOf(departureStop);
			tempUnion = reverseLine.indexOf("Union Square");
			
			firstPart = reverseLine.slice(tempDepart + 1, tempUnion + 1);
		}
		
		if (arrivalIndex < unionIndexArrival) {
			reverseLine = lines[arrivalLine].reverse();
			tempUnion = reverseLine.indexOf("Union Square");
			tempArrive = reverseLine.indexOf(arrivalStop);
			
			secondPart = reverseLine.slice(tempUnion + 1, tempArrive + 1);
		} else {
			secondPart = lines[arrivalLine].slice(unionIndexArrival + 1, arrivalIndex + 1);
		}

		// output to the user
		console.log("Your must travel through the following stops on the " + departureLine + " line: " + firstPart.join(", "));
		console.log("Change at Union Square to Line " + arrivalLine);
		console.log("Your journey continues through the following stops: " + secondPart.join(", "));
		console.log((firstPart.length + secondPart.length) + " stops in total.");
	 }

	// if you donot need to change lines 
	else {

		if (departureIndex < arrivalIndex) {
			firstPart = lines[departureLine].slice(departureIndex + 1, arrivalIndex + 1);
		
		} else {
			reverseLine = lines[departureLine].reverse();
			tempDepart = reverseLine.indexOf(departureStop);
			tempArrive = reverseLine.indexOf(arrivalStop);
			
			firstPart = reverseLine.slice(tempDepart + 1, tempArrive + 1);
		}

		// output to the user
		console.log("Your must travel through the following stops on the " + departureLine + " line: " + firstPart.join(", "));
		console.log(firstPart.length + " stops in total.");	

	}
};

// user inputs
var deptStop = {}; var arrvStop = {};

//testing departure lines
var deptLine = prompt("Enter the departure Line ( N, L, 6):");
if (deptLine === 'N') {
	deptStop = prompt("Enter the departure terminal (Times Square, 34th, 28th, 23rd, Union Square, 8th):");
} else if (deptLine === 'L') {
	deptStop = prompt("Enter the departure terminal (8th, 6th, Union Square, 3rd, 1st):");
} else {
	deptStop = prompt("Enter the departure terminal (Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place):");
}

//asking user input for arrival
var arrvLine = prompt("Enter the arrival Line ( N, L, 6):");
if (arrvLine === 'N') {
	arrvStop = prompt("Enter the arrival terminal (Times Square, 34th, 28th, 23rd, Union Square, 8th):");
} else if (arrvLine === 'L') {
	arrvStop = prompt("Enter the arrival terminal (8th, 6th, Union Square, 3rd, 1st):");
} else {
	arrvStop = prompt("Enter the arrival terminal (Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place):");
}

// calling function planTrip
planTrip(deptLine, deptStop, arrvLine, arrvStop);
