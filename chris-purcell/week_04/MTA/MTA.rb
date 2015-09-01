
lines = { 
	:N => ['TIMES SQUARE', '34TH', '28TH ON N', '23RD ON N', 'UNION SQUARE', '8TH ON N'],
	:L => ['8TH ON L', '6TH', 'UNION SQUARE', '3RD', '1ST'],
	:SIX => ['GRAND CENTRAL', '33RD', '28TH ON SIX', '23RD ON SIX', 'UNION SQUARE', 'ASTOR PLACE']
}## THIS HASH STORES THE ARRAYS OF LINES: THEY ARE IN CAPTIALS TO SUPPORT THE UPCASE COMMANDS LATER IN THE CODE. TO ALLOW BOTH LOWER & UPPER CASE TO BE USED BY THE USER


## THIS MENUS ARE INTENDED TO HELP WITH EASE OF USE IN CASE YOU SORT OF REMEMBER WHICH STATION YOUR GETTING ON & OFF AT, BUT NOT THE LINE, OR VIS-VERSA
def line_choices 
	puts "N"
	puts "L"
	puts "SIX"
end

def line_N # WAS TRYING TO USE puts lines[:l] to get them displayed, however, each time i did this it would result in failing code. placed values into this myself.
	puts "Times Square"
	puts "34th"
	puts "28th on N"
	puts "23rd on N"
	puts "Union Square"
	puts "8th on N"
end

def line_L
	puts "8th on L"
	puts "6th"
	puts "Union Square"
	puts "3rd"
	puts "1st"
end

def line_6
	puts "Grand Central"
	puts "33rd"
	puts "28th on six"
	puts "23rd on six"
	puts "Union Square"
	puts "Astor Place"
end

puts "Which line is your starting station on? : " # Prompt the user for information about the line they want to travel from.
line_choices									  # Display their possible choices
start_line = gets.chomp.upcase 					  # Store their choice in a variable for later use.

puts "Which station are you leaving from? : "     # Prompt user for information about the station they are departing from.
if start_line.to_sym == :N 						  # Display their possible choices.
	line_N
elsif start_line.to_sym == :L
	line_L
else
	line_6
end
leaving_from = gets.chomp.upcase 				   # Store the departure location in a variable for later use.

puts "Which line is your final destination on? : " # Prompt the user for information about the line they need to travel on.
line_choices									   # Display their possible choices
end_line = gets.chomp.upcase 					   # Store the arrival line in a variable for later use

puts "To which station would you like to go? : "   # Prompt the user for information about the station they would like to visit.
if end_line.to_sym == :N 						   # Depending on their chosen line a menu will show with the various stations available on that line.
	line_N											
elsif end_line.to_sym == :L
	line_L
else
	line_6
end
destination = gets.chomp.upcase 				   # Stores their destination in a variable for later use.


## This is the setup for printing out & displaying the stations you need to visit & how many stops till that station.
leaving_from_index = lines[start_line.to_sym].index(leaving_from) 						# This provides the index location of the station from which we depart
union_square_index_start = lines[start_line.to_sym].index('UNION SQUARE') 				# This provides the index location of union square on the same as start line
union_square_index_end = lines[end_line.to_sym].index('UNION SQUARE') 					# This provides the index location of union square on the same line as end line.
destination_index = lines[end_line.to_sym].index(destination) 							# This provides the destinations index location.

trip_start = [] 																		# Empty arrays to store info for switching lines
trip_end = [] 
trip = [] 																				# Empty array for the same line travel.

if start_line == end_line  																# This block of code will only execute if the line we are riding on is the same for the whole trip.
	if leaving_from_index.to_i > destination_index.to_i 								# If the starting location is further down the line than the destination we need too 
		trip << lines[start_line.to_sym][destination_index..leaving_from_index].reverse # Reverse the line so that we get the correct print out for stations visited.
		puts "You have #{trip[0].length - 1} stops to reach your destination." 			# This uses the trip variables length as the answer to the number of stations you must visit. minus 1 as the station we started on should not be counted.
		puts trip
	else 
		trip << lines[start_line.to_sym][leaving_from_index..destination_index] 		# Pushes the stations visited into the array.
		puts "You have #{trip[0].length - 1} stops to reach your destination." 			# If we are going down the line in the same order as array, this will be displayed. minus 1 as the station we first leave from does not need to be counted.
	end
else
	puts "You have #{((leaving_from_index - union_square_index_start).abs) + ((destination_index - union_square_index_end).abs)} stops until you reach your destination." # this displays the number of stops in total with both lines combined. the .abs method is used to ensure the numbers are always positive.
	if leaving_from_index.to_i > union_square_index_start.to_i 							# This is the same idea as the one line if statement, it checks if it needs to reverse the line to give the correct order of stations
		trip_start << lines[start_line.to_sym][union_square_index_start..leaving_from_index].reverse # this reverses the array if the above is true.
		puts trip_start 																	# prints same
	else 
		trip_start << lines[start_line.to_sym][leaving_from_index..union_square_index_start] # If moving down the line the same way as listed in array, just append the info into that array
		puts trip_start																		 # and show it
	end
	if union_square_index_end.to_i > destination_index.to_i 								# Again, same idea as above, it checks if it needs to reverse the array to print the correct order of stations.
		trip_end << lines[end_line.to_sym][destination_index..union_square_index_end].reverse # Appends the correct order of stations to the array
		puts trip_end																		# and is printed.
	else
		trip_end << lines[end_line.to_sym][union_square_index_end..destination_index]		# If moving in the same direction as array, store values
		puts trip_end																		# and print them
	end
	#puts "You have #{((trip_start.length) + (trip_end.length))} stops until you reach your destination."
end