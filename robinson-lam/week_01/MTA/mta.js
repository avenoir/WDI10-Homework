console.log("Welcome to this freakin' transport system");

var lines = [{
  name: "N",
  stations: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
}, {
  name: "L",
  stations: ["8th", "6th", "Union Square", "3rd", "1st"]
}, {
  name: "6",
  stations: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}];

var printStations = function(indexOfDepart, indexOfArrive, x) {
  var trip = [];
  if ( indexOfDepart < indexOfArrive ) {
    for ( var y = indexOfDepart + 1; y <= indexOfArrive ; y++ ) {
      trip.push(lines[x].stations[y]);
    }
  } else {
    for ( var y = indexOfDepart - 1; y >= indexOfArrive ; y-- ) {
      trip.push(lines[x].stations[y]);
    }
  }

  return trip;
}

var planTrip = function(lineDepart, stationDepart, lineArrive, stationArrive) {
  var indexOfDepart = 0;
  var indexOfArrive = 0;
  var trip = [];
  var totalStops = 0;

  if ((lineDepart === lineArrive) && (stationDepart === stationArrive)) {
    console.log("You have entered the same locations.");
    return false;
  }

  if (lineDepart === lineArrive) { // Same Lines
    for ( x = 0 ; x < lines.length ; x++ ) { // Checking for the line
      if ( lines[x].name === lineDepart ) { // If it's found
        indexOfDepart = lines[x].stations.indexOf(stationDepart); // Set the index for the departure
        indexOfArrive = lines[x].stations.indexOf(stationArrive); // Set the index for the arrival

        trip = printStations(indexOfDepart, indexOfArrive, x); // Assign the stations for the trip
          console.log("You must travel through the following stops on line " + lines[x].name.toUpperCase() + ": " + trip.join(", ") + "."); // Output the trip
          totalStops = trip.length; // Trip length, number of stations
          console.log("Total stops: " + totalStops); // Output trip length
      }
    }

  } else { // Different Lines
    for ( x = 0 ; x < lines.length ; x++ ) {
      if ( lines[x].name === lineDepart ) {
        indexOfDepart = lines[x].stations.indexOf(stationDepart);
        indexOfArrive = lines[x].stations.indexOf("Union Square"); // Set the index for Union Square because there is a change in line.

        trip = printStations(indexOfDepart, indexOfArrive, x);

        if (trip.length) {
          console.log("You must travel through the following stops on line " + lines[x].name.toUpperCase() + ": " + trip.join(", ") + ".");
          console.log("Change at Union Square");
          totalStops += trip.length; // Add to the trip length with the first part of the trip
        } else {
          console.log("You do not need to take any trips on line: " + lineDepart);
        }
      }

      if (lines[x].name === lineArrive) {
        indexOfDepart = lines[x].stations.indexOf("Union Square"); // Set the index for Union Square on departure because there is a change in line.
        indexOfArrive = lines[x].stations.indexOf(stationArrive);

        trip = printStations(indexOfDepart, indexOfArrive, x);

        if (trip.length) {
          console.log("Your journey continues through the following stops on line " + lines[x].name.toUpperCase() + ": " + trip.join(", ") + ".");
          totalStops += trip.length; // Add to the trip length with the second part of the trip
          console.log("Total stops: " + totalStops);
        } else {
          console.log("You do not need to take any trips on line: " + lineArrive);
        }
      }
    }
  }

};

console.log("\nFrom Town Square to 8th\n");
planTrip("N", "Times Square", "N", "8th");
console.log("\nFrom 8th to Town Square\n");
planTrip("N", "8th", "N", "Times Square");

console.log("\nFrom N: Town Square to L: 1st\n");
planTrip("N", "Times Square", "L", "1st");

console.log("\nSame Station\n");
planTrip("N", "Times Square", "N", "Times Square");

console.log("\nFrom N: Union Square to L: 1st\n");
planTrip("N", "Union Square", "L", "1st");
