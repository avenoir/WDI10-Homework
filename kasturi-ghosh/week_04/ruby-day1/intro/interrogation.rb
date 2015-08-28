# Program to ask personal info from a user

# puts "What is your first name?"
print "What is your first name? : "
first_name = gets.chomp # Reading user's first name from the keyboard, cleaning the /n
puts "Your first name is #{ first_name }."

print "What is your last name? : "
last_name = gets.chomp
puts "Your last name is #{ last_name }."

puts "Your full name is #{ first_name } #{ last_name }."

print "What is your city? : "
city = gets.chomp
puts "#{ first_name } #{ last_name } resides in #{ city }."
