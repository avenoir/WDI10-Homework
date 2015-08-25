# puts "Friday homework MTA" 


# /* 
# Activity

# Create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# planTrip 'N', 'Times Square', '6', '33rd'  # This is only a suggested function name and signature.

# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.  For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays. 
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

# Hints:

# Work out how you would do it on paper first! Then start to explain that process in Javascript.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt   later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop.  hint: indexOf   
# Make sure the stops that are the same for different lines have different names  i.e. 23rd on the N and on the 6 need to be differentiated 

# #  Method #
# #  1st Locate "from" line and station 
# #  2nd Locate "to" line and station 

# # If station_from and station_to are on same line determine direction 
# # travel_line in the determined direction station_from to station_to

# # If station_from and station_to they are on different lines 
# # Determine direction of station_from to "UnionSquare"
# # travel_line in that direction from station_from to UnionSquare
# # Change lines to station_to line 
# # Determine direction of "UnionSquare" to station_to 
# # travel_line in that direction from UnionSquare to station_to 

# # Sample Input: #
# # planTrip 'N', 'Times Square', '6', '33rd'  # This is only a suggested function name and signature.

# # Sample Output: #
# # puts   shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# */

$lines = {
		 N:  ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
		 L:  ["8th", "6th", "Union Square", "3rd", "1st"],
		'6':  ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}


def travel_line(line, from_ind, to_ind)

	# Determine direction of travel
	from_ind < to_ind ? direction = 1 : direction = -1
	
	# Travel the line going in the direction of travel
	stations = []
	i = from_ind
	while i != to_ind
		if  i != from_ind   									# Ignore first stations because already there!
			stations << $lines[line][i] 
		end
		i += direction
	end
	if  i != from_ind   										# Again ignore first stations because already there!
		stations << $lines[line][i] 
	end

	stations
end

def planTrip(line_from, station_from, line_to, station_to)
	
	puts "Traveling FROM #{station_from} line #{line_from.to_s} TO #{station_to} line #{line_to.to_s}"

	# Check if the two $lines exist
	if   !($lines.has_key? line_from) || !($lines.has_key? line_to) 
		puts "Line not found!"
		puts "---------------"
		return
	end

	station_from_ind = $lines[line_from].index station_from  
	station_to_ind = $lines[line_to].index station_to 

	# Check that we have too valid stations 
	if  station_from_ind == nil || station_to_ind == nil  
		puts "Station not found for specified line!"		
		puts "-------------------------------------"
		return	
	end 

	# Check if we have to change $lines or not.
	if  line_from == line_to  
			
		# We only have travel one line from origin station to destination station.
		stations1 = travel_line( line_from, station_from_ind, station_to_ind )
	
		stations2 = []
	elsif
	
		# First travel from 'from' station to union square 
		stations1 = travel_line( line_from, station_from_ind, $lines[line_from].index("Union Square") )

		# Now travel from union square to destination station	
		stations2 = travel_line( line_to,$lines[line_to].index("Union Square"), station_to_ind )
	end	    
	print_it line_from, station_from, line_to, station_to, stations1, stations2 

end

def print_it(line_from, station_from, line_to, station_to, stations1, stations2)
		
	stop_count = 0

	if stations1.count > 0 
		puts "You must travel through the following stops on the #{line_from.to_s} line: #{stations1.join ', '}."
		stop_count += stations1.count
	end	
	if stations2.count > 0 
		puts "Change at Union Square."
		puts "Your journey continues through the following stops on #{line_to.to_s} line: #{stations2.join ', '}."
	   	stop_count += stations2.count
	end

	puts "#{stop_count} stops in total."
	puts "-----------------------------------------------------------------------------------------"
end

planTrip  :junk,'Junk',:junk,'Junk' 
planTrip  :N,'Junk',:'6','Junk' 
planTrip  :N, 'Times Square', :'6', 'Astor Place' 
planTrip  :N, 'Times Square', :'6', 'Union Square' 
planTrip  :N, 'Times Square', :N, '23rd' 
planTrip  :N, 'Times Square', :N, 'Times Square' 
planTrip  :N, 'Union Square', :'6', 'Union Square' 
planTrip :'6', '33rd', :N, 'Times Square' 
planTrip  :N, 'Times Square', :'6', '33rd' 


