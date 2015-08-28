/*
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
*/
// var nLine = ["Time Square", "34th","28th","23rd","Union Square","8th"]
// var lLine = ["8th", "6th","Union Square","3rd",'1st']
// var sixLine = ["Grand Central", "33rd", "28th", "23rd","Astor Place","Union Square"]

// var stations = [nLine, lLine, sixLine]

// var planTripL = function (getOn, getOff) {
// 	for () 
// 	var NumOfStops = Math.abs(lLine.indexOf(getOff) - lLine.indexOf(getOn));
// 		return " there are " + NumOfStops + " stops " + " on line L"
// 	}

// console.log(planTripL("8th", "3rd"))


var stationsObject = {
	lineL: ["8th", "6th","Union Square","3rd",'1st'],
	lineN: ["Time Square", "34th","28th","23rd","Union Square","8th"],
	line6: ["Grand Central", "33rd", "28th", "23rd","Astor Place","Union Square"]
}
var wholeJourney = [];
var oneLineJourney = [];  
var startJourney = []; 
var endJourney = [];

	var route = function ( startLine, startStation, endLine, endStation ) {
		var start = startLine.indexOf(startStation);
		var end = startLine.indexOf(endStation);
		var UnionSquare = startLine.indexOf("Union Square");
			if (startLine === endLine) {	
				if (start > end) {
					for (var i = start; i >= end; i--){
						oneLineJourney.push(startLine[i])
						console.log(startLine)
						console.log(endLine)
					} 
				}
				if (start < end) {	
					for (var i = start; i <= end; i++){
						oneLineJourney.push(startLine[i])
						console.log(startLine)
						console.log(endLine)
					}	 	
				} 
			else {
				console.log(startLine)
				console.log(endLine)
			
				}
			} 

	}


	
		var startPos = function (startStation, startLine) {
			var start = startLine.indexOf(startStation);
			var UnionSquare = startLine.indexOf("Union Square");
				if (start > UnionSquare) {
					for (var i = start; i >= UnionSquare; i-- ) {
						startJourney.push(startLine[i])
					} 			
				}
				else if (start < UnionSquare) {
					for (var i = start; i <= UnionSquare; i++){
						startJourney.push(startLine[i])
					} 
				}
		}

	var endPos = function (endStation, endLine) {
		var end = endLine.indexOf(endStation)
		var UnionSquare = endLine.indexOf("Union Square");
		if (end > UnionSquare) {
			for (var i = end; i >= UnionSquare; i--) {
				endJourney.push(endLine[i])
			}
		}
		else if (start < UnionSquare) {
			for (var i = start; i >= UnionSquare; i++) {
				endJourney.push(endLine[i])
			}
		}

	}



// var wholeJourney = startJourney.concat(endJourney)




// var endPos = function (endStation, endLine) {
// 	var end = stationObject.startStation.indexOf(endStation);
// 	var UnionSquare = stationObject.endStation.indexOf("Union Square");
// }

// var coordinates = function (stationOn, getOn, stationOff, getOff) {

// 	var start = stationsObjects.stationOn.indexOf(getOn) 
// 	var finish = stationsOjects.stationOff.indexOf(getOff)

// }

//find out if we are on the same line

	// var whichLine  = function (staringLine, finishLine) {
	// 	if (startingObject.startingLine === finishLine) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	} 
	// }
// var startPos = function (startLine, startStation) {
// 	var startStationPos = stationsObject.startLine.indexOf(startStation)
// 		var startUSquarePos = stationsObject.startLine.indexOf("Union Square")
// 			if (startStationPos > startLineUSpos) {
// 				for (var i = 0; i < startStationsArray.length; i++) {
// 					console.log(startStationsArray[i])
// 				}
// 			}
// }







