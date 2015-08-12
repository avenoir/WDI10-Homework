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
	// var unionIndex, tempDepart, tempArrive, tempUnion, unionIndexArrival;

	var unionIndex = -1; var tempDepart = 0; var tempArrive = 0; 
	var tempUnion = 0; var unionIndexArrival = 0;

	unionIndex = lines[departureLine].indexOf("Union Square");
	unionIndexArrival = lines[arrivalLine].indexOf("Union Square");
	var arrivalIndex = lines[arrivalLine].indexOf(arrivalStop);
	var departureIndex = lines[departureLine].indexOf(departureStop);
	
	// empty arrays to store the trip line details
	var firstPart = []; var secondPart = []; var reverseLine = []; 

	// empty message strings to store messages
	var message1, message2, message3, message4, message;

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

		// output to the user is stored in the messages
		message1 = "Your must travel through the following stops on the " + departureLine + " line: " + firstPart.join(", ");
		message2 = "Change at Union Square to Line " + arrivalLine;
		message3 = "Your journey continues through the following stops: " + secondPart.join(", ");
		message4 = (firstPart.length + secondPart.length) + " stops in total.";
		message = message1 + "\n" + message2 + "\n" + message3 + "\n" + message4;

		// return final message
		return message;

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

		// output to the user is stored in the following messages
		message1 = "Your must travel through the following stops on the " + departureLine + " line: " + firstPart.join(", ");
		message2 = firstPart.length + " stops in total.";
		message = message1 + "\n" + message2;

		// return final message
		return message;

	}
};

// user inputs
var deptLine, deptStop, arrvLine, arrvStop;
// var stops = [];

// var departure = {};
// var arrival = {};

var controlPrompt = function ( typeOfLine ) {
	var line = prompt( "Enter the " + typeOfLine + " line ( N, L, 6 ):" ).toUpperCase();
	var stop = prompt( "Enter the " + typeOfLine + " terminal (" + lines[line].join(", ") + ")." );

	// stops.push({
	// 	line: line,
	// 	stop: stop
	// });

	if ( typeOfLine === "departure" ) {
		deptLine = line;
		// stops.push( {
		// 	line: line,
		// 	stop: stop
		// })
		// departure["line"] = line;
		deptStop = stop;
		// departure["stop"] = stop;
	} else {
		arrvLine = line;
		// arrival["line"] = line;
		arrvStop = stop;
		// arrival["stop"] = stop;
	}

}

controlPrompt("departure");
controlPrompt("arrival");
alert(planTrip(deptLine, deptStop, arrvLine, arrvStop));



// // testing departure lines
// var deptLine = prompt("Enter the departure Line ( N, L, 6):");
// if (deptLine === 'N') {
// 	deptStop = prompt("Enter the departure terminal (Times Square, 34th, 28th, 23rd, Union Square, 8th):");
// } else if (deptLine === 'L') {
// 	deptStop = prompt("Enter the departure terminal (8th, 6th, Union Square, 3rd, 1st):");
// } else {
// 	deptStop = prompt("Enter the departure terminal (Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place):");
// }

// // asking user input for arrival
// var arrvLine = prompt("Enter the arrival Line ( N, L, 6):");
// if (arrvLine === 'N') {
// 	arrvStop = prompt("Enter the arrival terminal (Times Square, 34th, 28th, 23rd, Union Square, 8th):");
// } else if (arrvLine === 'L') {
// 	arrvStop = prompt("Enter the arrival terminal (8th, 6th, Union Square, 3rd, 1st):");
// } else {
// 	arrvStop = prompt("Enter the arrival terminal (Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place):");
// }

// // calling function planTrip and alerting the user
// alert(planTrip(deptLine, deptStop, arrvLine, arrvStop));
