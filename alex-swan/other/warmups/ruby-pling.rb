# print "Pick your range. Lowest: "
# min = gets.to_i
# print "Hightst: "
# max = gets.to_i

# (min..max).each {|a|
# 	output = ""
# 	if a % 3 == 0 
# 		output += "Pling"
# 	end

# 	if a % 5 == 0
# 		output += "Plang"
# 	end

# 	if a % 7 == 0
# 		output += "Plong"
# 	end 

# 	if output != ""
# 		puts output 
	
# 	else
# 		puts a.to_s
# 	end 
# }

# answer

def convert( num )
	str = ""
	str << "Pling" if num % 3 == 0
	str << "Plang" if num % 5 == 0
	str << "Plong" if num % 7 == 0
	return str unless str.empty?
	num.to_i
end

print "Pick a number to convert: "
num = gets.to_i

puts convert( num )


