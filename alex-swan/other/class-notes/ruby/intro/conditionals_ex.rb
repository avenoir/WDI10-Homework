# 1. Drinking age?

# Ask the user for their age.

print "How old are you? "

# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
age = gets.chomp.to_i

# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.
if age < 18
	puts "You're #{age}, no drinks"
elsif age >= 18
	puts "You're #{age}, you may drink"
end

# 2. Air Conditioning

# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
print "What is the current temperature? " 
temp = gets.to_i

print "Is the A/C functional? (y/n) " 
working = gets.chomp.downcase

print "What is your preferred temperature? "  
preferred = gets.to_i

# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

if working == 'y'
	if temp > preferred
	puts "Turn on the A/C Please"
	end
else
	if temp > preferred
	puts "Fix the A/C now! It's hot!" 

	elsif temp < preferred
	puts "Fix the A/C whenever you have the chance... It's cool..."

	end
end

# 3. Sydney Suburbs

# Create a program that asks what suburbs you live in.
print "In which suburb do you live? "
suburb = gets.chomp.downcase
# Depending on the answer, print an appropriate response of your choosing

stereotype = case suburb
when 'Newtown'
	"#{ suburb } is the best suburb!"
when 'Bondi'
	"#{ suburb } Hipster!"
when 'Vaucluse'
	"#{ suburb }, so posh."
else
	"No stereotypes found for #{suburb}"
end

puts stereotype

