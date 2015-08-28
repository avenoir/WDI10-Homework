// *** MTA Lab ***

// * Create a program that models a simple subway system.
// The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number 
//of stops for the trip in the console:



var subwayTrains = {N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'], 
					L: ['8th', '6th', 'Union Square', '3rd', '1st'], 
					S: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']};
					
var planTrip = function (startTrain, startStop, endTrain, endStop) {
	//Return Variable
	var totalStops = 0;
	var tripRoute = [];
	//Setting Variables
	var startTrain1 = subwayTrains[startTrain];
	var startStop1 = subwayTrains[startTrain].indexOf(startStop);
	var endTrain1 = subwayTrains[endTrain];
	var endStop1 = subwayTrains[endTrain].indexOf(endStop);
	//Union Square Stop - Transfer At
	var startUnion = startTrain1.indexOf('Union Square');
	var endUnion = endTrain1.indexOf('Union Square');

	//Display Trip
	console.log("TRIP START: " + startTrain + " : " + startStop);
	console.log("TRIP END: " + endTrain + " : " + endStop);
	
	//Checking if you need to transfer.
	if ( startTrain === endTrain ) {
		
		console.log( 'NO TRANSFER NEEDED' ); //No Transfer Notice

		if ( startStop1 < endStop1 ) {
		
			totalStops = endStop1 - startStop1;
			tripRoute.push( startTrain1.slice(startStop1, endStop1 + 1).join(" ---> "));

		} else {
			
			totalStops = startStop1 - endStop1
			tripRoute.push(startTrain1.slice( endStop1, startStop1 + 1 ).reverse().join(" ---> "));
		}

		//Checking direction - Uptown
	} else if (startStop1 > startUnion) {
		//Trip1
		totalStops += (startStop1 - startUnion);
		tripRoute.push( startTrain1.slice( startUnion, startStop1 + 1).reverse());
		
		//Trip2 - Checking direction - Uptown
		if (endStop1 > endUnion) {
			
			totalStops += (endStop1 - endUnion);
			tripRoute.push( endTrain1.slice( endUnion, endStop1 + 1));

		} else {
			//Direction - Downtown
			totalStops += (endUnion - endStop1);
			tripRoute.push( endTrain1.slice( endStop1, endUnion + 1).reverse());
		}
		//Checking direction - DownTown
	} else if (startStop1 < startUnion) {//start less US
			//Trip1
			totalStops += ( startUnion - startStop1 );
			tripRoute.push( startTrain1.slice( startStop1, startUnion + 1));
			//Trip2 - Checking direction - Downtown
			if (endStop1 < endUnion) {
				totalStops += (endUnion - endStop1);
				tripRoute.push( endTrain1.slice( endStop1, endUnion + 1).reverse());
			} else {
			//Direction - UpTown
				totalStops += (endStop1 - endUnion);
				tripRoute.push( endTrain1.slice( endUnion, endStop1 + 1));
			}
		//Starting At Union Square
	} else if (startStop1 === startUnion) { 
			//Trip1
			totalStops += (startStop1 - startUnion);
			tripRoute.push( startTrain1.slice( startUnion, startStop1 + 1).reverse());
			//Trip2 - //Checking direction - UpTown
			if (endStop1 > endUnion) {
				totalStops += (endStop1 - endUnion);
				tripRoute.push( endTrain1.slice( endUnion, endStop1 +1));
			} else {
			//Checking direction - DownTown
				totalStops += (endUnion - endStop1);
				tripRoute.push( endTrain1.slice( endStop1, endUnion + 1).reverse());
			}

	}

	if (!(tripRoute.length === 2)) {
		var message = console.log('Total Stops: ' + totalStops, 'Trip Route: ' + tripRoute.join(' ---> '));

	} else {
		var message = console.log('Total Stops: ' + totalStops, 'Trip Route: ' + tripRoute[0].join(' ---> ') +'| Transfer |'+ tripRoute[1].join(' --->'));	
	}
	
	return [totalStops, tripRoute, message];
}

console.log('TRIP 1')
console.log(planTrip('S', '33rd', 'N', 'Times Square'));
console.log('TRIP 2')
planTrip('N', 'Times Square', 'S', '33rd');
console.log('TRIP 3')
planTrip('L', 'Union Square', 'S', '33rd');
console.log('TRIP 4')
planTrip('S', '33rd', 'L', '1st');
console.log('TRIP 5')
planTrip('L', '8th', 'L', '1st');
console.log('TRIP 6')
planTrip('L', '1st', 'L', '8th');
console.log('TRIP 7')
planTrip('N', 'Times Square', 'N', '23rd');
console.log('TRIP 8')
planTrip('N', 'Times Square', 'N', 'Union Square');
console.log('TRIP 9')
planTrip('S', '33rd', 'S', '33rd');
console.log('TRIP 10')
planTrip('N', '28th', 'N', 'Times Square');




