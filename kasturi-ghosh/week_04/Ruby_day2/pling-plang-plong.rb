# If the number contains 3 as a prime factor, output 'Pling'. If the number contains 5 as a prime factor, output 'Plang'. If the number contains 7 as a prime factor, output 'Plong'.

# If the number does not contain 3, 5, or 7 as a prime factor, simply return the string representation of the number itself.

print "Enter a number : "
number = gets.to_i
message = ''

if number % 3 == 0
	message += 'Pling'
end
if number % 5 == 0
	message += 'Plang'
end
if number % 7 == 0
	message += 'Plong'
end
if message == ''
	message = number.to_s
end

puts message
		