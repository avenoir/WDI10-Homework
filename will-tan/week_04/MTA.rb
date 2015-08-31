MTA = {
	"N Line" => {
		:stop => [ 'Time Square', '34th', '28th on N', '23rd on N', 'Union Square', '8th on N']
	},
	"L Line" => {
		:stop => [ '8th on L', '6th', 'Union Square', '3rd', '1st']
	},
	"6 Line" => {
		:stop => [ 'Grand Central', '33rd', '28th on 6', '23rd on 6', 'Union Square', 'Astor Place']
	},
}

def prompt message
	print "#{ message }"
	gets.chomp
end

# Calculate number of stops between final arrival stop and departure stop
def calculate_num_stops ( start_line, start_stop, end_line, end_stop )
	num_stops = 0
	if start_line == end_line 	
		index_start_stop = MTA[ start_line ][ :stop ].find_index start_stop
		index_end_stop = MTA[ end_line ][ :stop ].find_index end_stop
		return ( index_end_stop - index_start_stop ).abs
	else
		# calculate number of stops to Union Square on same line then calculate number of stops on end line from US to end_stop
		num = ( calculate_num_stops( start_line, start_stop, start_line, "Union Square") ).abs
		return num += ( calculate_num_stops( end_line, "Union Square", end_line, end_stop ) ).abs
	end
end

a = prompt("Line you are getting on: ")
b = prompt("Stop you are getting on: ")
c = prompt("Line you are getting off: ")
d = prompt("Stop you are getting off: ")

puts "#{calculate_num_stops(a, b, c, d)} stops to your destination."