var mta = {

    N: ["Times Square", "34th", "28th (N)", "23rd (N)", "Union Square", "8th (N)"],
    L: ["8th (L)", "6th", "Union Square", "3rd", "1st"],
    "6": ["Grand Central", "33rd", "28th (6)", "23rd (6)", "Union Square", "Astor Place"],

    planTrip: function (fromLine, fromStop, toLine, toStop) {

 //index variables
        var toChangeIndex, tripOutput;
        var fromStopIndex = mta[fromLine].indexOf(fromStop);
        var toStopIndex = mta[toLine].indexOf(toStop);
        var fromChangeIndex = mta[fromLine].indexOf("Union Square");
        var toChangeIndex = mta[toLine].indexOf("Union Square");

 //output variables
        var tripOutput = ["You must travel through the following stops on the " + fromLine + " line: "];
        var tripTwoOutput = ["Your journey continues through the following stops along the " + toLine + " line: "];
        var changeOutput = "Change at Union Square.";

 //call plotChanges function for each leg of trip
        var firstLeg = mta.plotChanges(fromStopIndex, fromChangeIndex, fromLine);
        var secondLeg = mta.plotChanges(toChangeIndex, toStopIndex, toLine);

 //assemble output
        console.log("From " + fromStop + " to " + toStop + ":");

        if (fromStop === toStop) {
            console.log("0 Stops in total.");
            return;
        } else if (fromLine === toLine || toStop === "Union Square") {
            console.log(tripOutput + firstLeg.join(", ") + ", " + secondLeg + ".");
        } else {
            console.log(tripOutput + firstLeg.join(", ") + ".");
            console.log(changeOutput);
            console.log(tripTwoOutput + secondLeg.join(", ") + ".");
        }
        console.log(firstLeg.length + secondLeg.length + " stops in total.");
    },

    plotChanges: function (from, to, line) {
        var output = [];
        var direction = (from < to ? 1 : -1);
        for (var i = from + direction; (from < to ? i <= to : to <= i) ; i = i + direction) {
            output.push(mta[line][i]);
        }
        return output;
    }
};

mta.planTrip("N", "Times Square", "N", "Times Square");

mta.planTrip("N", "Times Square", "N" , "8th (N)");

mta.planTrip("L" , "8th (L)" , "6" , "Grand Central");

mta.planTrip("N", "Times Square" , "6" , "Astor Place");


// // MTA Lab
// // Create a program that models a simple subway system.
// var mta = [
// {line: 'N', stops: ["Times Square", "34th", "28th (N)", "23rd (N)", "Union Square", "8th (N)"]},
// {line: 'L', stops: ["8th (L)", "6th", "Union Square", "3rd", "1st"]},
// {line: '6', stops: ["Grand Central", "33rd", "28th (6)", "23rd (6)", "Union Square", "Astor Place"]}
// ]
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

