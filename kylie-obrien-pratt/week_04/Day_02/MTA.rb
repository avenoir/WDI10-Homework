# // MTA

# // // don't need to use constructors or factories for MTA. stick to arrays of strings
# // Find indexes of the start and finish stations
# // Aim to set up arrays and objects at minimum
# //  The program should work out which stops you need to go to like Trip Planner
# // Program should state which stations you need to go through and the total number of stations
# // You don't know what direction you're going to be going in - you could go forward or backwards or both
# // Union Square is where they change from one line to another line

# // You don't need to prompt the user for input, hard code planTrip = function()
# // Get program to work for one line before you tackle multiple lines

# // Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# // The key to the lab is finding the index positions of each stop. (hint: indexOf())

# // console.log() shows output similar to this:
# // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# // "Change at Union Square."
# // "Your journey continues through the following stops: 23rd, 28th, 33rd."
# // "7 stops in total."

	
	// can use startingLine.slice; startingLine.reverse (permanently reverses variable, therefore create new variable reverseLine = lines[arrivalLine].reverse
	// array.length console.log number of stops. "n stops in total"
	// use separate section to logic for prompting the user, makes it easier to debug and reuse, 
	// could still use it for applications where you don't prompt the user
//

method.abs #convert to absolute value

#newline.chomp


lineN = ["Time Square", "34th", "28th", "23rd", "Union Square", "8th"]
lineL = ["8th", "6th", "Union Square", "3rd", "1st"]
line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]


def planTrip = (startLine, startStation, endLine, endStation) {
	//Check if the end station and line are the same as the starting station and line
	if(startLine == endLine && startStation == endStation) {
		console.log("The starting point is the same as the end point");
		return;
	}
	//Check to see if they are on the same line
	if(startLine == endLine) {
		var lineRef;
		if(startLine === "N") {
			lineRef = lineN;
		}
		else if(startLine === "L") {
			lineRef = lineL;
		}
		else if(startLine === "6") {
			lineRef = line6;
		}

		if(startStationIndex > endStationIndex) {
			console.log("Your journey will be as follows:");
			var indexDifference = startStation - endStationIndex;
			for(var i = startStation; i >= indexDifference; i--) {
				console.log(lineRef[i]);
			}
			
		}

		else {
			console.log("Your journey will be as follows:");
			var indexDifference = endStationIndex - startStation;
			for(var i = startStation; i <= indexDifference; i++) {
				console.log(lineRef[i]);
			}
		}
	}

	var endLineRef;
	if(startLine === "N") {
		startLineRef = lineN;
	}
	else if(startLine === "L") {
		startLineRef = lineL;
	}
	else if(startLine === "6") {
		startLineRef = line6;
	}
	else {
		console.log("Invalid line, valid lines are: N, L, 6");
		return;
	}

	var startStationIndex = startLineRef.indexOf(startStation);
	if(startStationIndex == NaN) {
		console.log("Station doesn't exist on starting line");
		return;
	}


	var endLineRef;
	if(endLine === "N") {
		endLineRef = lineN;
	}
	else if(endLine === "L") {
		endLineRef = lineL;
	}
	else if(endLine === "6") {
		endLineRef = line6;
	}
	else {
		console.log("Invalid line, valid lines are: N, L, 6");
		return;
	}
	
	var endStationIndex = endLineRef.indexOf(endStation);
	if(endStationIndex == NaN) {
		console.log("Station doesn't exist on the End Line");
		return;
		}
}
	//Find the path now


	//









# 	//

# 	lineN = [Times Square, 34th, 28th, 23rd, Union Square, 8th]
# lineL = [8th, 6th, Union Square, 3rd, 1st]
# line6 = [Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place]

# def planTrip (startLine, startStation, endLine, endStation)
# 	# Check if the end station and line are the same as the starting station and line
# 	if(startLine == endLine && startStation == endStation) {
# 		print "The starting point is the same as the end point"
	

# # Check to see if they are on the same line

# 	if startLine == endLine 
		
# 		if startLine == "N"
# 			lineRef = lineN;
		
# 		elsif startLine == "L" 
# 			lineRef = lineL
		
# 		elsif startLine == "6"
# 			lineRef = line6;
# 	end

# 	if startStationIndex > endStationIndex 
# 		print "Your journey will be as follows: "
# 		# prints list of stations on journey
# 		def indexDifference = startStation - endStationIndex;
# 			i = startStation
# 			until == indexDifference
#     		puts "lineRef: #{ i }"
#     		i -= 1

# 	end

# 	else 
# 			print "Your journey will be as follows: "
# 			def indexDifference = endStationIndex - startStation
# 			i = startStation
# 			until == indexDifference
#     		puts "lineRef: #{ i }"
#     		i += 1
		
#     	end

# end

