

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)

var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lineL = ["8th", "6th", "Union Square", "3rd","1st"];
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

var startingPoint = function (startingLine, startingStation){

	var start = startingLine.indexOf(startingStation); var union = startingLine.indexOf("Union Square");

	if(start < union){
		return startingLine.slice(start, union );
	}
	else{

		startingLine=startingLine.reverse();

		start = startingLine.indexOf(startingStation); union = startingLine.indexOf("Union Square");

		return startingLine.slice(start, union );
	}

}



var endingPoint = function (endingLine, endingStation){

	var end = endingLine.indexOf(endingStation); var union = endingLine.indexOf("Union Square");

	if(end < union){
		endingLine = endingLine.reverse();

		end = endingLine.indexOf(endingStation); 
		union = endingLine.indexOf("Union Square");
		

		return endingLine.slice(union+1,end +1); 
	}
	else{
		return endingLine.slice(union+1,end +1 );
	}

}



var wholeJourney = function(startingLine, startingStation, endingLine, endingStation){

	if(startingLine === endingLine){
		console.log( startingLine.slice(startingLine.indexOf(startingStation),endingLine.indexOf(endingStation)+1) );
	}
	else{
	console.log( [startingPoint(startingLine,startingStation)," switch at Union Square to ",endingPoint(endingLine, endingStation)].join(" ") );
	}
}

wholeJourney(lineN, "Times Square", lineN , "8th"); //same line

wholeJourney(lineL , "8th" , line6 , "Grand Central"); //to union and back from union

wholeJourney(lineN , "Times Square" , line6 , "Astor Place"); //to union and front from union







