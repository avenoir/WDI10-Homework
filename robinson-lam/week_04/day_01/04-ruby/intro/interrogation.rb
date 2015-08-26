# Program to ask personal info from a user

print "what's yo first name? "
first_name = gets.chomp # reading user's name from keyboard
puts "Your first name is #{ first_name }."

print "What's yo surname? "
last_name = gets.chomp 

puts "Your full name is #{ first_name } #{ last_name }."

print "What is your city? "
city = gets.chomp
puts "#{ first_name } #{ last_name } lives in #{ city }."




