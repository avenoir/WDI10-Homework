// MTA Lab
// Create a program that models a simple subway system.

var mta = {
	lines: ["N", "L", "6"],
	stops: [["Times Square", "34th", "28th (N)", "23rd (N)", "Union Square", "8th (N)"],
			["8th (L)", "6th", "Union Square", "3rd", "1st"],
			["Grand Central", "33rd", "28th (6)", "23rd (6)", "Union Square", "Astor Place"]
		]
}

var planTrip = function(fromLine, fromStop, toLine, toStop){
//declare variables for indicies of lines and stops
	var fromLineIndex = mta.lines.indexOf(fromLine);
	var fromStopIndex = mta.stops[fromLineIndex].indexOf(fromStop);
	var toLineIndex = mta.lines.indexOf(toLine);
	var toStopIndex = mta.stops[toLineIndex].indexOf(toStop);
	var fromChangeIndex = mta.stops[fromLineIndex].indexOf("Union Square"); //index of Union Square on fromLine
	var toChangeIndex = mta.stops[toLineIndex].indexOf("Union Square");//index of Union Square on toLine

//declare variables for names of lines and stops
	var from = mta.stops[fromLineIndex][fromStopIndex];
	var to = mta.stops[toLineIndex][toStopIndex];
	var fromLine = mta.lines[fromLineIndex];
	var toLine = mta.lines[toLineIndex];

//declare output variables
	var tripOutput = ["You must travel through the following stops on the " + fromLine + " line: "];
	var stopOutput = [];
	var changeOutput = "";
	var tripTwoOutput = [];
	var stopTwoOutput = [];

//keep track of number of stops
	var stopCount = 0;

//if not changing lines, only look on same line
	if (fromLine === toLine){

		if (fromStopIndex < toStopIndex) { //allows to iterate forwards through the array and list stops
			for (var i = fromStopIndex + 1 ; i <= toStopIndex; i++){
				stopOutput.push(mta.stops[fromLineIndex][i]);
				stopCount ++;
			}
		} else { //alows to iterate backwards through the array and list stops
			for (var i = fromStopIndex - 1 ; i >= toStopIndex; i--){
				tripOutput.push(mta.stops[fromLineIndex][i]);
				stopCount ++;
			}
		} 	

//if changing lines, change via union square
	} else {
		if (fromStopIndex < fromChangeIndex) {
			for (var i = fromStopIndex + 1 ; i <= fromChangeIndex; i++){
			stopOutput.push(mta.stops[fromLineIndex][i]);
			stopCount ++;
		}

		} else {
			for (var i = fromStopIndex - 1 ; i >= fromChangeIndex; i--){
				stopOutput.push(mta.stops[fromLineIndex][i]);
				stopCount ++;
			}

		} 	changeOutput = changeOutput.concat("Change at Union Square.");
			tripTwoOutput.push("Your journey continues through the following stops along the " + toLine + " line: ");
		// calculate second leg	
			if (toChangeIndex < toStopIndex) {
				for (var i = toChangeIndex + 1; i <= toStopIndex; i++){
					stopTwoOutput.push(mta.stops[toLineIndex][i]);
					stopCount ++;
				}

			} else {
				for (var i = toChangeIndex - 1; i >= toStopIndex; i--){
					stopTwoOutput.push(mta.stops[toLineIndex][i]);
					stopCount ++;
				}
			}
	}


//print output
	var outputOne = tripOutput + stopOutput.join(", ") + ".";
	var outputTwo = tripTwoOutput + stopTwoOutput.join(", ") + ".";
	console.log("From " + from + " to " + to + ":")
	console.log(outputOne);
	console.log(changeOutput);
	console.log(outputTwo);
	console.log(stopCount + " stops in total.")
};

planTrip("N", "Times Square", "L", "1st");



// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

