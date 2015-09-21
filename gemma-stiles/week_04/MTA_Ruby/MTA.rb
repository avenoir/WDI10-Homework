require 'pry'

$stations = {

"N" => [ "Times Square", "34th","28th","23rd","Union Square","8th" ],
"L" => [ "8th", "6th", "Union Square", "3rd", "1st" ], 
"6" => [ "Grand Central", "33rd", "28th","23rd","Union Square", "Astor Place" ],
}

$intersect_station = "Union Square"

def plan_trip (start_line, start_station, end_line, end_station)	
    visited_stations = []
    start_line_station = $stations[start_line].index(start_station)
    start_line_end_station = $stations[start_line].index(end_station)
    start_line_intersect = $stations[start_line].index($intersect_station)
    end_line_station = $stations[end_line].index(end_station)
    end_line_intersect = $stations[end_line].index($intersect_station)

	# travelling across different lines, need to change
    if (start_line != end_line)  
    	# first part of the trip, before changing lines  
    	# moving forwards
 		if (start_line_station < start_line_intersect) 
            start_line_station.upto(start_line_intersect) do |i|
            	
            	puts $stations[start_line][i]
            end   
        # moving backwards    
    	else start_line_station.downto(start_line_intersect) do |i|
        		puts $stations[start_line][i]
        	end     	
    	end 

    	# remove additional "Union Square"
    	visited_stations.pop

		# second part of the trip, after changing lines  
    	# moving forwards
 		if (end_line_station > end_line_intersect) 
            end_line_intersect.upto(end_line_station) do |i|	
            	puts $stations[end_line][i]
            end   
        # moving backwards    
    	else end_line_intersect.downto(end_line_station) do |i|
        		puts $stations[end_line][i]
        	end     	
    	end 

    # travelling on the same line, no need to change	
    else 
    	# movings forwards on the same line
    	if (start_line_station < start_line_end_station)
    		start_line_station.upto(start_line_end_station) do |i|
    			puts $stations[start_line][i]
    		end	
    	# moving backwards on the same line	
    	else start_line_station.downto(start_line_end_station) do |i|
    			puts $stations[start_line][i]
    		end	
    	end	
	end #end for line 32 if !=  

# should be pushing to a new array of visited stations not doing puts $stations...






end	#end that pairs with plan_trip line 16   

plan_trip("N", "8th", "6", "33rd")

# plan_trip("L", "8th", "L", "1st")

# plan_trip("6", "Union Square", "L", "1st")


binding.pry
