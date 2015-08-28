# examples of conditionals

if 7 > 3
	puts "Maths is working."
end

#terrible offensive example
gender = 'i have\'nt decided yet' # fails.
if gender == 'male'
	puts 'You have a dick.'
else 
	puts 'You have a vagina.'
end

if gender == 'male'
	puts "you are a male"
elsif gender == 'female'
	puts 'you are a female.'
else 
	puts "Gender indeterminate" # allows for undetermined sex.
end

puts "23 is greater than 4" if 23>4

milk = false
if milk != true
	puts "Buy some milk or your cereal will be dry"
end

unless milk == true
	puts "BUY SOME MILK BRO"
end

puts "BUY BUY BUY MILK" unless milk

