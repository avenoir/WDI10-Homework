var lines = { 
N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
L: ["8th", "6th", "Union Square", "3rd", "1st"],
6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};


var planTrip = function(lineOn, stopOn, lineOff, stopOff){
	var indexOn = lines[lineOn].indexOf(stopOn); // index of origin
	var indexOff = lines[lineOff].indexOf(stopOff); // index of destination
	var lineOnUnion = lines[lineOn].indexOf("Union Square");  //index of U.S
	var lineOffUnion = lines[lineOff].indexOf("Union Square"); //index of U.S
	var stopcounter = 0
	var trip1Stops = "";
	var trip2Stops = "";

for (var i = indexOn; i <= lineOnUnion; i++){ // from origin to unionsquare
	stopcounter += 1;
	trip1Stops = trip1Stops + " " + lines[lineOn][i];
}

if (indexOff < lineOffUnion){ // from unionsquare to destination

	for (var j = lineOffUnion -1; j >= indexOff; j = j - 1){
		stopcounter += 1;
		trip2Stops = trip2Stops + " " + lines[lineOff][j];
	}
} else { // from unionsquare to desination

	for (var k = lineOffUnion +1; k <= indexOff; k++){
		stopcounter +=1;
		trip2Stops = trip2Stops + " " + lines[lineOff][k];
	}	
}

// stopcounter - 1, because you dont want to include your origin as a stop
return "You must travel through the following stops on the " + lineOn + " line:" + trip1Stops + ". Change at Union Square. Your journey continues through the following stops:" + trip2Stops + ". " + (stopcounter - 1) + " stops in total.";
}


console.log(planTrip("N", "Times Square", "L", "6th"));
console.log(planTrip("N", "Times Square", "L", "1st"));
console.log(planTrip("6", "Grand Central", "L", "1st"));
