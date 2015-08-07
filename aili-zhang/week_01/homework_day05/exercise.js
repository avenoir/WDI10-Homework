
//   __  __   _____    ___              _              _      
// |  \/  | |_   _|  /   \     o O O  | |     __ _   | |__   
// | |\/| |   | |    | - |    o       | |__  / _` |  | '_ \  
// |_|__|_|  _|_|_   |_|_|   TS__[O]  |____| \__,_|  |_.__/  
// _|"""""|_|"""""|_|"""""| {======|_|"""""|_|"""""|_|"""""| 
// "`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-' 



// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."


// There are 3 subway lines:

// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.





//                    _                         _       _                            
//   _ __    __ _    | |__    ___      o O O   | |     (_)    _ _      ___     ___   
//  | '  \  / _` |   | / /   / -_)    o        | |     | |   | ' \    / -_)   (_-<   
//  |_|_|_| \__,_|   |_\_\   \___|   TS__[O]  _|_|_   _|_|_  |_||_|   \___|   /__/_  
// _|"""""|_|"""""|_|"""""|_|"""""| {======|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""| 
// "`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'    


var trainLines = {
  "N" : ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" : ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};




//   _  _              _      _ __                          
//  | || |    ___     | |    | '_ \   ___      _ _    ___   
//  | __ |   / -_)    | |    | .__/  / -_)    | '_|  (_-<   
//  |_||_|   \___|   _|_|_   |_|__   \___|   _|_|_   /__/_  
// _|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""| 
// "`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-' 


// check if the line number is in the trainLines object or not
var isValidLine = function(lineNum){
  if (trainLines[lineNum] === undefined){
    return false;
  }
  return true;
}


// check if the stop belongs to the line number
var isValidStop = function(stop, lineNum){
  if (trainLines[lineNum].indexOf(stop) === -1){
    return false;
  }
  return true;
};


// check if the stops we get on and off are in the same line number
var isSameLine = function(startLine, endLine){
  if (startLine === endLine){
    return true;
  }
  return false;
};


// check the direction of the train
var isLeftToRight = function(startStop, endStop, lineNum){
  if (trainLines[lineNum].indexOf(startStop) <= trainLines[lineNum].indexOf(endStop)){
    return true;
  }
  return false;
};


// return stops that need to be travel through
var stops = function(startStop, endStop, lineNum){
  var myStops = [];

  // if the direction is from left to right, push the stops to a new array in the order of direction
  if (isLeftToRight(startStop, endStop, lineNum) === true){
    for (var i = trainLines[lineNum].indexOf(startStop); i <= trainLines[lineNum].indexOf(endStop); i++){
      myStops.push(trainLines[lineNum][i]);
    }

  // if the direction is from right to left, push the stops to a new array in the opposite order
  } else{
      for (var j = trainLines[lineNum].indexOf(startStop); j >= trainLines[lineNum].indexOf(endStop); j--){
        myStops.push(trainLines[lineNum][j]);
      }
  }
  
  return myStops;
};




//     ___     _                              _____             _      _ __  
//    | _ \   | |    __ _    _ _       o O O |_   _|    _ _    (_)    | '_ \ 
//    |  _/   | |   / _` |  | ' \     o        | |     | '_|   | |    | .__/ 
//   _|_|_   _|_|_  \__,_|  |_||_|   TS__[O]  _|_|_   _|_|_   _|_|_   |_|__  
// _| """ |_|"""""|_|"""""|_|"""""| {======|_|"""""|_|"""""|_|"""""|_|"""""| 
// "`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-' 


var planTrip = function(startingLineNum, startingStop, endingLineNum, endingStop){

  // instead of tying 'Union Square' several times, just store this string in a variable 
  var changeStop = "Union Square";

  // if the lines are invalid, print out the message
  if (isValidLine(startingLineNum) === false || isValidLine(endingLineNum) === false){
    console.log("The line is invalid. Please choose a valid line.");
  }

  // if stops are invalid, print out the message
  else if (isValidStop(startingStop, startingLineNum) === false || isValidStop(endingStop, endingLineNum) === false ){
    console.log("The stop is not in the train line. Please double check.");

  } else {
    
    // if the stops we get on and off are in the same line, print out the message
    if (isSameLine(startingLineNum, endingLineNum) === true){
      console.log("You can reach " + endingStop + " from " + startingStop + " directly by catching line " + startingLineNum);
    }

    else {

      // get the index of the stop 'Union Square' in the train line that we want to get on
      var startUnionSquareIndex = trainLines[startingLineNum].indexOf(changeStop);

      // get the index of the stop 'Union Square' in the train line that we want to get off
      var endUnionSquareIndex = trainLines[endingLineNum].indexOf(changeStop);

      // the following is just printing out the proper message to the console
      console.log("You must travel through the following stops on the " + startingLineNum + " line: " + stops(startingStop, trainLines[startingLineNum][startUnionSquareIndex], startingLineNum).join(" --> "));
      console.log("Change at " + changeStop);
      console.log("Your journey continues through the following stops: " + stops(trainLines[endingLineNum][endUnionSquareIndex], endingStop, endingLineNum).join(" --> ") + " on the " + endingLineNum + " line");
      console.log(stops(trainLines[endingLineNum][endUnionSquareIndex], endingStop, endingLineNum).length + stops(startingStop, trainLines[startingLineNum][startUnionSquareIndex], startingLineNum).length - 1 + " stops in total.");
    }
  }
};




//   _____                    _        _              __ _                          
//  |_   _|   ___     ___    | |_     (_)    _ _     / _` |                         
//    | |    / -_)   (_-<    |  _|    | |   | ' \    \__, |    _       _       _    
//   _|_|_   \___|   /__/_   _\__|   _|_|_  |_||_|   |___/   _(_)_   _(_)_   _(_)_  
// _|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""| 
// "`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-' 


planTrip("L", "Times Square", "N", "34th");
planTrip("6", "Astor Place", "N", "34th");
planTrip("L", "23rd", "N", "Times Square");
planTrip("L", "8th", "N", "8th");
planTrip("1", "12th", "N", "8th");



     //                                                      ..::''''::..
     //                                            .:::.   .;''        ``;.
     //    ....                                    :::::  ::    ::  ::    ::
     //  ,;' .;:                ::  ..:            `:::' ::     ::  ::     ::
     //  ::.      ..:,:;.,:;.    .   ::   .::::.    `:'  :: .:' ::  :: `:. ::
     //   '''::,   ::  ::  ::  `::   ::  ;:   .::    :   ::  :          :  ::
     // ,:';  ::;  ::  ::  ::   ::   ::  ::,::''.    .    :: `:.      .:' ::
     // `:,,,,;;' ,;; ,;;, ;;, ,;;, ,;;, `:,,,,:'   :;:    `;..``::::''..;'
     //                                                      ``::,,,,::''












