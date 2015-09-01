print "What number would you like to convert? : "
number = gets.to_i

def convert( num )
	str = ""
	str << "Pling" if num % 3 == 0
	str << "Plang" if num % 5 == 0
	str << "Plong" if num % 7 == 0
	return str unless str.empty?
	num.to_i
end

 puts convert(number)


