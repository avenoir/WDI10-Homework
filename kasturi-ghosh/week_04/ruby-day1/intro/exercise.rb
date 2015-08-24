# Drinking age
# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.

print "What is your age? : "
age = Integer( gets.chomp )

if age < 18
	puts "Sorry, no drinks for you" 
else 
	puts "You may have a drink"
end

# Air conditioning
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

print "What is the current temperature? : "
current_temp = Float( gets.chomp )

print "What temperature do you wamt? : "
desired_temp = Float( gets.chomp )

print "Is the A/C working? ( yes/ no) : "
working = gets.chomp

if working == 'yes' && ( current_temp > desired_temp )
	puts "Turn on the A/C please."
elsif working == 'no' && ( current_temp > desired_temp )
	puts "Fix the A/C now! It's hot!"
elsif working == 'no' && ( current_temp < desired_temp )
	puts "Fix the A/C whenever you have the chance... It's cool..."
end

# Sydney Suburbs
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

print "What suburb do you live in? : "
suburb  = gets.chomp.downcase

# case can return a value
response = case suburb
when 'newtown'
  "It's #{ suburb }."
when 'redfern'
  "It's #{ suburb }."
else
  "You gave me #{ suburb } -- I have no idea where it is."
end

puts response

