console.log("Friday homework MTA");


/* 
Activity

Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

Hints:

Work out how you would do it on paper first! Then start to explain that process in Javascript.
Get the program to work for a single line before trying to tackle multiple lines.
Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
The key to the lab is finding the index positions of each stop. (hint: indexOf())
Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

//  Method //
//  1st Locate "from" line and station 
//  2nd Locate "to" line and station 

// If stationFrom and stationTo are on same line determine direction 
// travelLine in the determined direction stationFrom to stationTo

// If stationFrom and stationTo they are on different lines 
// Determine direction of stationFrom to "UnionSquare"
// travelLine in that direction from stationFrom to UnionSquare
// Change lines to stationTo line 
// Determine direction of "UnionSquare" to stationTo 
// travelLine in that direction from UnionSquare to stationTo 

// Sample Input: //
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// Sample Output: //
// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
*/

var lines = {
		"N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
		"L": ["8th", "6th", "Union Square", "3rd", "1st"],
		"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}


var travelLine = function(line, stationFrom, stationTo) {

	// Determine direction of travel
	if (lines[line].indexOf(stationFrom) < lines[line].indexOf(stationTo) ) {
		var direction = 1;     // Going forward along line
	} else {
		var direction = -1;    // Going backwards along line
	}
	// Travel the line
	var stations = [];
	for ( var i = lines[line].indexOf(stationFrom); i != lines[line].indexOf(stationTo); i += direction ) {
		if (i != lines[line].indexOf(stationFrom)) { // Ignore first stations because already there!
			stations.push(lines[line][i]);
		}
	}
	stations.push(lines[line][i]);

	return stations;
}

var planTrip = function(lineFrom, stationFrom, lineTo, stationTo) {
	
	if ( lines[lineFrom].indexOf(stationFrom) === -1 || lines[lineTo].indexOf(stationTo) === -1 ) {
		console.log("Invalid Station!");
	} else { 
		var stations;
		var stopCount = 0;
	    if (lineFrom === lineTo) {
			stations = travelLine(lineFrom, stationFrom, stationTo);
			stopCount = stations.length;
			console.log("You must travel through the following stops on the " + lineFrom + " line: " + stations.join(", ") + ".");
		} else {
			// Gotta change at Union Square
			stations = travelLine(lineFrom, stationFrom, "Union Square");
			console.log("You must travel through the following stops on the " + lineFrom + " line: " + stations.join(", ") + ".");
			stopCount = stations.length;
			
			console.log("Change at Union Square.");
			
			stations = travelLine(lineTo, "Union Square", stationTo);
			console.log("Your journey continues through the following stops on " + lineTo + " line: " + stations.join(", ") + ".");
	    	stopCount += stations.length;
	    }
	    console.log(stopCount + " stops in total.")
	}

}

planTrip('N', 'Times Square', '6', '33rd');

