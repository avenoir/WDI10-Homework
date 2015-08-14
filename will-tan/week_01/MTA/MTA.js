// Objects declaration: each train line is an object with key 'stopName' that stores an array of names of stops on the train line
var lineL = {
	lineName: 'L line',
	stopName: [ '8th On L', '6th', 'Union Square', '3rd', '1st' ]
};

var lineSixth = {
	lineName: '6 line',
	stopName: [ 'Grand Central', '33rd', '28th On 6', '23rd On 6', 'Union Square', 'Astor']
};

var lineN = {
	lineName: 'N line',
	stopName: [ 'Time Square', '34th', '28th On N', '23rd On N', 'Union Square', '8th On N']
};

// Print out train trip, stop by stop
var planTrip = function ( startLine, startStop, endLine, endStop ) {
	var numStop = 0;
	var startLineStartStopIndex = startLine.stopName.indexOf( startStop );
	var startLineEndStopIndex = startLine.stopName.indexOf( endStop );
	var startLineUSquareIndex = startLine.stopName.indexOf( 'Union Square' );
	var endLineUSquareIndex = endLine.stopName.indexOf( 'Union Square' );
	var endLineEndStopIndex = endLine.stopName.indexOf( endStop );
	var announcement;

	if ( startLine === endLine ) { // check if user is going to the same train line
		if ( startStop === endStop ) { // check if user is already at his destination	
			console.log( "You are at your destination." );
		} else {
			announcement = printStops( startLine, startLineStartStopIndex, startLineEndStopIndex );
			console.log( "You must travel through the following stops on the " + startLine.lineName + ": " + announcement );
			printNumOfStops( startLineStartStopIndex, startLineEndStopIndex );
		}
	} else { // if going to different train line, get to Union Square first, then change
		if ( endStop === 'Union Square' ) { // check if user is going to Union Square
			announcement = printStops( startLine, startLineStartStopIndex, startLineUSquareIndex );
			console.log( "You must travel through the following stops on the " + startLine.lineName + ": " + announcement );
			printNumOfStops( startLineStartStopIndex, startLineUSquareIndex );
		} else if ( startStop === 'Union Square' ) {
			announcement = printStops( endLine, endLineUSquareIndex, endLineEndStopIndex );
			console.log("You must travel through the following stops on the " + endLine.lineName + ": " + announcement );
			printNumOfStops( startLineStartStopIndex, startLineUSquareIndex, endLineUSquareIndex, endLineEndStopIndex );
		} else {
			announcement = printStops( startLine, startLineStartStopIndex, startLineUSquareIndex );
			console.log( "You must travel through the following stops on the " + startLine.lineName + ": " + announcement );
			console.log( "Change at Union Square." );
			announcement = printStops( endLine, endLineUSquareIndex, endLineEndStopIndex );
			console.log( "Your journey continues through the following stops: " + announcement);
			printNumOfStops( startLineStartStopIndex, startLineUSquareIndex, endLineUSquareIndex, endLineEndStopIndex );
		}
	}
};

// Print out the stops, given the train line the user is on and the indices of the start and end stops of that train line
var printStops = function ( startLine, startIndex, endIndex ) {
	var str = '';

	if ( startIndex < endIndex ) { // if end stop is after start stop, travel forward and store each stop name in str
		for ( var i = startIndex + 1; i <= endIndex; i++ ) {
			if ( i === endIndex ) {
				str += startLine.stopName[ i ] + '.';
			}
			else {
				str += startLine.stopName[ i ] + ', ';
			}
		}
	} else { // travel backward
		for ( var i = startIndex - 1; i >= endIndex; i-- ) {
			if ( i === endIndex ) {	
				str += startLine.stopName[ i ] + '.';
			}
			else {
				str += startLine.stopName[ i ] + ', ';
			}
		}
	}
	return str;
};

var printNumOfStops = function ( startLineStartStopIndex, startLineEndStopIndex, endLineStartStopIndex, endLineEndStopIndex ) {
	var endLineStartStopIndex = endLineStartStopIndex || 0;
	var endLineEndStopIndex = endLineEndStopIndex || 0;
	var numStops = 0;
	numStops = Math.abs( startLineStartStopIndex - startLineEndStopIndex ); // calculate number of stops
	numStops += Math.abs( endLineStartStopIndex - endLineEndStopIndex );
	console.log( numStops + " stops in total." );
};

/************ test cases for same line ************/

console.log( "test case 1: same line forward" ); 
planTrip( lineSixth, 'Grand Central', lineSixth, 'Astor' );
console.log( "" );

console.log( "test case 2: same line backward" );
planTrip( lineL, '1st', lineL, '8th On L' );
console.log( "" );

console.log( "test case 3: same line same stop" );
planTrip( lineL, '1st', lineL, '1st' );
console.log( "" );

/************ test cases for different line ************/

console.log( "test case 4: different line but stop at 'Union Square'" );
planTrip( lineL, '1st', lineSixth, 'Union Square' );
console.log( "" );

console.log( "test case 5: forward to Union Square, Union Square forward to destination" );
planTrip( lineN, 'Time Square', lineL, '1st' );
console.log( "" );

console.log( "test case 6: backward to Union Square, Union Square forward to destination" );
planTrip( lineN, '8th On N', lineSixth, 'Astor' );
console.log( "" );

console.log( "test case 7: forward to Union Square, Union Square backward to destination" );
planTrip( lineSixth, 'Grand Central', lineN, 'Time Square' );
console.log( "" );

console.log( "test case 8: backward to Union Square, Union Square backward to destination" );
planTrip( lineSixth, 'Astor', lineL, '8th On L' );
console.log( "" );

console.log("test case 9: start at Union Square, Union Square forward to destination" );
planTrip( lineL, 'Union Square', lineN, '8th On N' );
console.log( "" );

console.log("test case 10: start at Union Square, Union Square backward to destination" );
planTrip( lineSixth, 'Union Square', lineL, '8th On L' );
console.log( "" );

console.log("test case 11: same stop, different line" );
planTrip( lineN, '8th on N', lineL, '8th On L' );
console.log( "" );


		// My Own Train of Thoughts
		// I want to find the index of startStop and endStop
		// console.log( startLine.stopName.indexOf( startStop ) );

		// Then, print out every stop in between startStop and endStop
		// console.log( startLine.stopName.indexOf( endStop ) );

		// If endStop index is > startStop index, travel backwards; else, travel forward
		// if ( startLine.stopName.indexOf( startStop ) < startLine.stopName.indexOf( endStop ) ) {
		// 	// print the stopNames forward,
		// 	printStops( startLine, startLine.stopName.indexOf( startStop ), startLine.stopName.indexOf( endStop ) );
		// } else {
		// 	// print the stopNames backward
		// 	//printStops( startLine, indexOf( endStop ), indexOf( startStop ) );
		// }

