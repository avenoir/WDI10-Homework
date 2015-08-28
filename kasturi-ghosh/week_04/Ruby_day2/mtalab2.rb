# the plan_trip function encapsulates the mta functionality
def plan_trip ( departure_line, departure_stop, arrival_line, arrival_stop )

	# the hash function has key as lines and values as stops
	lines = {
	:N => [ 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th' ],
	:L => [ '8th', '6th', 'Union Square', '3rd', '1st' ],
	:Line6 => [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place' ] 
    }

    # variables to hold indexes
	union_index = lines[departure_line.to_sym].index("Union Square")
	union_index_arrival = lines[arrival_line.to_sym].index("Union Square")
	arrival_index = lines[arrival_line.to_sym].index(arrival_stop)
	departure_index = lines[departure_line.to_sym].index(departure_stop)

	# empty arrays to store stops
	travel_line_dept = []
	travel_line_arrv = []

	# traveling on the same line
	if departure_line == arrival_line 

		# in forward direction
		if departure_index < arrival_index
			travel_line_dept << lines[departure_line.to_sym][(departure_index + 1)..arrival_index] 
		else
			# in backward direction
			travel_line = lines[departure_line.to_sym][arrival_index..(departure_index - 1)]
			travel_line_dept << travel_line.reverse
		end

		# output to the user
		message1 = "Your must travel through the following stops on the #{ departure_line } line: #{ travel_line_dept.flatten }. "
		message2 = "#{ travel_line_dept.flatten.length } stops in total. "
		message = message1 + message2;

	# if user has to switch lines at union square
	else

		# forward direction from dept stop to union square
		if departure_index < union_index
			travel_line_dept << lines[departure_line.to_sym][(departure_index + 1)..union_index]
		else
			# reverse direction from dept stop to union square
			travel_line = lines[departure_line.to_sym][union_index..(departure_index - 1)]
			travel_line_dept << travel_line.reverse
		end

		# forward direction from union square to arrival stop
		if arrival_index > union_index_arrival
			travel_line_arrv << lines[arrival_line.to_sym][(union_index_arrival + 1)..arrival_index]
		else

			# reverse direction from union square to arrival stop
			travel_line = lines[arrival_line.to_sym][arrival_index..(union_index_arrival - 1)]
			travel_line_arrv << travel_line.reverse
		end

		# output to the user
		message1 = "Your must travel through the following stops on the #{ departure_line } line: #{ travel_line_dept.flatten }. "
		message2 = "Change at Union Square to Line #{ arrival_line }. "
		message3 = "Your journey continues through the following stops: #{ travel_line_arrv.flatten }. "
		message4 = "#{ travel_line_dept.flatten.length + travel_line_arrv.flatten.length } stops in total. "
		message = message1 +  message2 + message3 + message4
	end

	# return the message
	return message;

end

# promts messages to the user
def prompt( message )
	print message
	gets.chomp
end

# testing departure lines
dept_line = prompt("Enter the departure Line ( N, L, Line6): ");
if (dept_line === 'N') 
 	dept_stop = prompt("Enter the departure terminal (Times Square, 34th, 28th, 23rd, Union Square, 8th): ");
elsif (dept_line === 'L')
 	dept_stop = prompt("Enter the departure terminal (8th, 6th, Union Square, 3rd, 1st): ")
else
 	dept_stop = prompt("Enter the departure terminal (Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place): ")
end

  # asking user input for arrival
arrv_line = prompt("Enter the arrival Line ( N, L, Line6): ");
if (arrv_line === 'N')
 	arrv_stop = prompt("Enter the arrival terminal (Times Square, 34th, 28th, 23rd, Union Square, 8th): ")
elsif (arrv_line === 'L')
 	arrv_stop = prompt("Enter the arrival terminal (8th, 6th, Union Square, 3rd, 1st): ");
else
 	arrv_stop = prompt("Enter the arrival terminal (Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place): ")
end

# calling function plan_trip and alerting the user
puts plan_trip(dept_line, dept_stop, arrv_line, arrv_stop)

# values to check
# puts plan_trip('N', 'Times Square', 'L', '8th');
# puts plan_trip('N', '8th', 'L', '8th');
# puts plan_trip('Line6', '33rd', 'N', '34th');
# puts plan_trip('L', '1st', 'L', '8th');
