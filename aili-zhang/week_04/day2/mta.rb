
#  __  __   _____    ___              _       ___     ___   
# |  \/  | |_   _|  /   \     o O O  | |     /   \   | _ )  
# | |\/| |   | |    | - |    o       | |__   | - |   | _ \  
# |_|__|_|  _|_|_   |_|_|   TS__[O]  |____|  |_|_|   |___/  
# _|"""""|_|"""""|_|"""""| {======|_|"""""|_|"""""|_|"""""| 
# "`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-' 


subway_lines = {
	:N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
	:L => ["8th", "6th", "Union Square", "3rd", "1st"],
	6.to_s.to_sym => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}
 

def prompt message
	print message
	gets.chomp
end


# check if the lines user getting on and off are the same
def is_same_line on_line, off_line
	if on_line == off_line
		true
	else
		false
	end
end


# check if the stop is on the left side of "Union Square" in the given line
def is_left_to_union line, on_stop, changing_stop
	if line.index(on_stop) <= line.index(changing_stop)
		true
	else
		false
	end
end


# getting stops the user needs to travel
def getting_stops on_line, on_stop, off_line, off_stop
	stops = []

	if is_same_line(on_line, off_line)
		exit if on_line.index(on_stop) == on_line.index(off_stop) 
			
		stops << (on_line[ on_line.index(on_stop)..on_line.index(off_stop) ]) 
		"you have to travel through: #{ stops.join(" -> ") }"

	else
		if is_left_to_union(on_line, on_stop, "Union Square")
			stops << on_line[on_line.index(on_stop)..on_line.index("Union Square")]

		else
			stops << on_line[on_line.index("Union Square")..on_line.index(on_stop)].reverse
		end

		if is_left_to_union(off_line, off_stop, "Union Square")
			stops << off_line[off_line.index(off_stop)..off_line.index("Union Square")].reverse

		else
			stops << off_line[off_line.index("Union Square")..off_line.index(off_stop)]
		end

		# delete "Union Square" from stops[1] as it is duplicate with stops[0]
		stops[1].shift

		"You have to travel through: #{ stops[0].join(" -> ") }\n Change at: Union Square\n Your travel continues through: #{ stops[1].join(" -> ") }\n The total number of stops you have to travel is: #{ stops.flatten.length }"
	end
end


# getting user input
def my_trip
	trip = []

	on_line = prompt("Please choose a subway line to get on (N L 6): ")
	puts "You have selected line #{ on_line }"

	on_stop = prompt("Please choose a stop to get on: ")

	off_line = prompt("Please choose a subway line to get off (N L 6): ")
	puts "You have selected line #{ off_line }"

	off_stop = prompt("Please choose a stop to get off: ")

	trip << on_line << on_stop << off_line << off_stop
	trip
end


mta = my_trip

# if the lines user entered do not exist, exit the program without error message
exit if !subway_lines.keys.include?(mta[0].to_sym)
exit if !subway_lines.keys.include?(mta[2].to_sym)

# if the stops user entered do not exist, exit the program without error message
exit if !subway_lines[mta[0].to_sym].include?(mta[1])
exit if !subway_lines[mta[2].to_sym].include?(mta[3])


# otherwise, get the stops users need to travel
puts ( getting_stops (subway_lines[mta[0].to_sym] ), mta[1], subway_lines[mta[2].to_sym], mta[3] )


# .-.-. .-.-. .-.-. .-.-. .-.-.      .-.-. .-.-. .-.-.  
# '. T )'. h )'. a )'. n )'. k ).-.-.'. Y )'. o )'. u ) 
#   ).'   ).'   ).'   ).'   ).' '._.'  ).'   ).'   ).'  





