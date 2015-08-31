# Program to ask personal info

print "Whats your first name? :"
first_name = gets.chomp #reading users name from keyboard. # chomp removes the enter symbol.
puts "Your first name is #{first_name}."

print "What is your surname? :"
last_name = gets.chomp
puts "Your surname is #{last_name}"

puts "Your full name is #{first_name} #{last_name}."

print "Whats your city?"
city = gets.chomp
puts "You live in #{city}"

puts "#{first_name} #{last_name} resides in #{city}."