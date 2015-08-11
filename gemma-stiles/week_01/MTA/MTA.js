// .___  ___. .___________.    ___          __          ___      .______   
// |   \/   | |           |   /   \        |  |        /   \     |   _  \  
// |  \  /  | `---|  |----`  /  ^  \       |  |       /  ^  \    |  |_)  | 
// |  |\/|  |     |  |      /  /_\  \      |  |      /  /_\  \   |   _  <  
// |  |  |  |     |  |     /  _____  \     |  `----./  _____  \  |  |_)  | 
// |__|  |__|     |__|    /__/     \__\    |_______/__/     \__\ |______/  
//                          ______
//                       .-"""".._'.       _,##
//                _..__ |.-"""-.|  |   _,##'`-._
//               (_____)||_____||  |_,##'`-._,##'`
//               _|   |.;-""-.  |  |#'`-._,##'`
//            _.;_ `--' `\    \ |.'`\._,##'`
//           /.-.\ `\     |.-";.`_, |##'`
//           |\__/   | _..;__  |'-' /
//           '.____.'_.-`)\--' /'-'`
//            //||\\(_.-'_,'-'`
//          (`-...-')_,##'`
// _,##'`-._,##'`
//   `-._,##'`


                                                                        
   
// OBJECTIVES                                                                                                     

// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.




// ACTIVITY   
                                                                                    
// Create a program that models a simple subway system.
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




// HINTS

// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)




// PSEUDO CODE
                                                                                                    
// 1 - Work out the best way to store the data
    // - Create object with lines in it, making sure all stations are correctly typed strings

// 2 - Is it easier to try and do one line first, or make that the exception?
    // - One function and have the single line as the else

// 3 - Work out how to get from start station to the intersect
    // - Reverse this to go backwards

// 4 - Work out how to get from the intersect to the finish station
   // - Reverse this to go backwards

// 5 - Console log first part of the trip, the interchange then the second part 


// CODE 

var stations = {
    'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
    '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
};

var intersectStation = "Union Square";

function planTrip(startLine, startStation, endLine, endStation) {
    var visitedStations = [];
    var startLineStation = stations[startLine].indexOf(startStation);
    var startLineEndStation = stations[startLine].indexOf(endStation);
    var startLineIntersect = stations[startLine].indexOf(intersectStation);
    var endLineStation = stations[endLine].indexOf(endStation);
    var endLineIntersect = stations[endLine].indexOf(intersectStation);
    
    if (startLine != endLine) {
        // first part of trip, before changing lines

        if (startLineStation < startLineIntersect) { // we're moving forwards
            for (var i = startLineStation; i <= startLineIntersect; i++) {
                visitedStations.push(stations[startLine][i]);
            };
        } else { // we're moving backwards
            for (var i = startLineStation; i >= startLineIntersect; i--) {
                visitedStations.push(stations[startLine][i]);
            };
        }

        visitedStations.pop(); // remove one of the "Union Squares", not sure if this is the best way but it's a quick fix and works

        // second part of trip, after changing lines
        if (endLineStation > endLineIntersect) { // we're moving forwards
            for (var i = endLineIntersect; i <= endLineStation; i++) {
                visitedStations.push(stations[endLine][i]);
            }
        } else { // we're moving backwards
            for (var i = endLineIntersect; i >= endLineStation; i--) {
                visitedStations.push(stations[endLine][i]);
            }
        }

    } else { // there is no need to changes lines
        if (startLineStation < startLineEndStation) { // we're moving forwards
            for (var i = startLineStation; i <= startLineEndStation; i++) {
                visitedStations.push(stations[startLine][i]);
            };
        } else { // we're moving backwards
            for (var i = startLineStation; i >= startLineEndStation; i--) {
                visitedStations.push(stations[startLine][i]);
            };
        }
    }

    var firstTrip = "You must travel through the following stops on the '" + startLine + "' line: ";

    if (startLine != endLine) {

      for (var i = 1; i <= visitedStations.indexOf(intersectStation); i++) {
          firstTrip += visitedStations[i] + ", ";
      }
      console.log(firstTrip);
      console.log("Change at " + intersectStation + ".");
      
      var secondTrip = "Your journey continues through the following stops: ";
      for (var i = visitedStations.indexOf(intersectStation) + 1; i < visitedStations.length; i++) {
          secondTrip += visitedStations[i] + ", ";
      }
      console.log(secondTrip);
      console.log(visitedStations.length - 1 + " stops in total."); // don't count the stop we get on at
   } else {
      for (var i = 0; i < visitedStations.length; i++) {
          firstTrip += visitedStations[i] + ", ";
      }
      console.log(firstTrip);

   }


}


planTrip('N', 'Times Square', '6', '33rd');
planTrip('L', '8th', 'L', '1st');
planTrip('6', 'Union Square', 'L', '1st');
planTrip('N', '34th', 'L', '1st');
planTrip('N', '28th', '6', 'Grand Central');

