// MTA Lab

var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var lineL = ["8th", "6th", "Union Square", "3rd", "1st"]''
var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

console.log("Your journey first continues through the following stops: 23rd, 28th, 33rd.");
console.log("Then change at Union Square.");
console.log("7 stops in total");

var planTrip = function(train) {
  if (lineN[5] === lineN.indexOf("U")) {
    console.log("This is Line N, stopping at: Times Square, 34th, 28th, 23rd, Union Square, and then 8th. Change at " + lineN.indexOf("U") + " for the rest of Line L & Line 6 lines. " + line6.length + " stops to " + lineN.indexOf("U") + ", 6 stops total on this line.");
  } else if (lineL[2] === lineL.indexOf("U")) {
    console.log("This is Line L, stopping at: 8th, 6th, Union Square, 3rd, and then 1st. Change at " + lineL.indexOf("U") + " for the rest of Line N & Line 6 lines. 3 stops to " + lineL.indexOf("U") + ", " + lineL.length + " stops total on this line.");
  } else if (line6[4] === line6.indexOf("U")) {
    console.log("This is Line 6, stopping at: Grand Central, 33rd, 28th, 23rd, Union Square, and then Astor Place. Change at " + line6.indexOf("U") + " for the rest of Line N & Line L lines. 5 stops to " + line6.indexOf("U") + ", " + lineN.length + " stops total on this line.");
  }
};


// DEMO NOTES

// Make seperate functions for user inputs etc
// Leave above as a 'working out' section of behind the scenes working out