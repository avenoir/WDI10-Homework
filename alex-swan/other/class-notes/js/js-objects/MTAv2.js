// MTA Lab
// Create a program that models a simple subway system.
var mta = {
	lines: ["N", "L", "6"],
	stops: [["Times Square", "34th", "28th (N)", "23rd (N)", "Union Square", "8th (N)"],
			["8th (L)", "6th", "Union Square", "3rd", "1st"],
			["Grand Central", "33rd", "28th (6)", "23rd (6)", "Union Square", "Astor Place"]],

	planTrip : function(fromLine, fromStop, toLine, toStop){

		console.log("From " + fromStop + " to " + toStop + ":")
		
		var fromLineIndex = mta.lines.indexOf(fromLine); //index of entry line
		var fromStopIndex = mta.stops[fromLineIndex].indexOf(fromStop); //index of entry stop
		var toLineIndex = mta.lines.indexOf(toLine);  //index of exit line
		var toStopIndex = mta.stops[toLineIndex].indexOf(toStop); //index of exit stop
		var fromChangeIndex = mta.stops[fromLineIndex].indexOf("Union Square"); //index of Union Square on entry Line
		var toChangeIndex = mta.stops[toLineIndex].indexOf("Union Square");//index of Union Square on exit Line

		var tripOutput = ["You must travel through the following stops on the " + fromLine + " line: "];
		var changeOutput = "Change at Union Square.";
		var tripTwoOutput = ["Your journey continues through the following stops along the " + toLine + " line: "];

		//calls plotChanges function for each leg of trip
		var firstLeg = mta.plotChanges(fromStopIndex, fromChangeIndex, fromLineIndex);
		var secondLeg = mta.plotChanges(toChangeIndex, toStopIndex, toLineIndex);
		//if no line changes, or if stopping at union square 
		if (fromLine === toLine || toStop === "Union Square"){
				var outputOne = tripOutput + firstLeg.join(", ") + ", " + secondLeg + ".";
				console.log(outputOne);
		} else {
				var outputOne = tripOutput + firstLeg.join(", ") + ".";
				var outputTwo = tripTwoOutput + secondLeg.join(", ") + ".";
				console.log(outputOne);
				console.log(changeOutput);
				console.log(outputTwo);
		};
		//calculate and output stopcount
		var stopCount = firstLeg.length + secondLeg.length; //the number of stops is equal to the length of the plotChanges output array
		console.log(stopCount + " stops in total.");
			
	},
	plotChanges : function(from, to, lineIndex){
			var output = [];
			if (from < to) {
				for (var i = from + 1 ; i <= to; i++) {
					output.push(mta.stops[lineIndex][i]);
				};
			} else {
				for (var i = from - 1; i >= to; i--) {
					output.push(mta.stops[lineIndex][i]);
				};
			};
			return output;
	}
};
mta.planTrip("N", "Times Square", "L", "1st");

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

