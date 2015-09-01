# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.

print "What the hell is your age?"
user_age = gets.chomp.to_i

print "You are underage" unless user_age >= 18


# Air Conditioning
#
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

print "What's the current temperature?"
temperature = gets.chomp.to_i
print "Is the AC working?"
ac_on = gets.chomp
print "What temperature do you want it to be?"
required_temperature = gets.chomp.to_i

print "Turn on the A/C please" if ac_on == "true" && temperature > required_temperature
print "Fix the A/C now! It's hot!" if ac_on == "false" && temperature > required_temperature
print "Fix the A/c whenever you get the chance... It's cool" if ac_on == "false" && temperature < required_temperature

# 3. Sydney Suburbs
#
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

print "What suburb do you live in? "
suburb = gets.chomp.downcase

compliment = case suburb
when "cabramatta"
  "Vietnamese Food"
when "newtown"
  "cool cemetery"
else
  "I'm sure that's a very nice suburb"
end

puts compliment

