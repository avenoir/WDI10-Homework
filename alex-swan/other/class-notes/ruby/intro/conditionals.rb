# Examples of contitionals

if 7 > 3
	puts "Mathematics is behaving in Ruby"
end

# Terrible offensie example
gender = 'i don\'t know'
if gender == 'male'
	puts "You are a male"
else
	puts "You must be female"
end

# Better example
if gender == 'male'
	puts "You are a male"
elsif gender == 'female'
	puts "You are a female"
else 
	puts "Gender indeterminate"
end

# Can do if statements on one line
puts "23 is greater than 4" if 23 > 4	


milk = false
if milk !=true
	puts "You need to buy milk"
end
	
unless milk == true
	puts "You need to buy milk"
end

puts "You need to buy milk" unless milk

