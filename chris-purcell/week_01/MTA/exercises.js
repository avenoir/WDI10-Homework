var lineL = ["8th", 
			"6th",
			"Union Square", 
			"3rd", 
			"1st"];

var lineSix = ["Grand Central",
			"33rd",
			"28th", 
			"23rd",
			"Union Square",
			"Astor"]; 

var lineN = ["Times Square",
			"34th",
			"28th",
			"23rd",
			"Union Square",
			];



var planOut = function (lineOn, stationOn, lineOff, stationOff){
	var stationsVisitedArray = [];
	var start = lineOn.indexOf(stationOn)
	var finish = lineOff.indexOf(stationOff)
	var numberOfStop ;
	if (lineOn === lineOff){
		for (i = 0; i < (stations.lineOff.indexOf(stationOff) - stations.lineOn.indexOf(stationOn)); i++){
			stationsVisitedArray.push(lineOn.stationOn)
			console.log(stationsVisitedArray);
		}
		numberOfStop = finish - start; 
	}
}


var planTripL = function (getOn, getOff){
//	for (var i = 0; i < lineL.length; i ++){
	var start = lineL.indexOf(getOn);
	var finish = lineL.indexOf(getOff);
	var numberOfStop = finish - start;
	return "There are " + numberOfStop + " between " + getOn + " and " + getOff + ".";			
}

var planTripN = function (getOn, getOff) {
	var stationStops = 0;
	var numberOfStop = (getOff) - (getOn);
	if (numberOfStop < 0) {
		start = lineN.reverse().indexOf(getOn);
		finish = lineN.reverse().indexOf(getOff);
		console.log(finish - start);
	} else if (numberOfStop > 0){
		start = lineN.indexOf(getOn);
		finish = lineN.indexOf(getOff);
		console.log(finish - start);
	}
}



var stations = {
	lineL:lineL,
	lineSix:lineSix,
	lineN:lineN
};

var planTrip1 = function(startLine, startStation, finishLine, finishStation){
	if (startLine === finishLine){
	} if (startLine !== finishLine) {
		var arrayStartStation = [];
		var arrayFinishStation = [];
		var startStationPos = stations.startLine.indexOf(startStation);
	}
}

//var coordinations = function (lineOn, getOn, lineOff, getOff){
//	var start = (stationObj.lineOn.indexOf(getOn));
//	var finish = (stationObj.lineOff.indexOf(getOff));
//	var numberOfStop;
//	if (lineOff === lineOn) {
//		numberOfStop = finish - start;
//		return numberOfStop; 
//	}
// }

//	var startingPoint = function (startingLine, startingStation){ //"lineN", "28th"

//	if( stations.startingLine.indexOf(startingStation) < indexOf("Union Square")){
//		var listOfStations = startingLine.slice(indexOf(startingStation)), (indexOf("Union Square"));   
//  } else if{
//		var listOfStations = startingLine.reverse().slice(indexOf(startingStation), (indexOf("Union Square"));
//    } else {
//    	var listOfStations = ["Union Square"];
//        }
//    }


//find out if we are on the same line
//	var sameLine = function(startingLine, finishLine) {
//		if (stationObj.startingLine === finishLine){
//			return true;
//		} 
//	}


	
//var startStationPos = station.startLine.indexOf(startStation);
//var startLineUSPos = stations.startLine.indexOf("Union Sqare");
//var startStationsArray = stations.startLine.slice();


