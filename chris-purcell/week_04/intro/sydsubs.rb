print "Where do you live? : "
suburb = gets.downcase.chomp

case suburb
when "pymble"
	puts 'Legend'
when "sydney"
	puts 'Eh'
when "pyrmont"
	puts "Gay"
when "blue mountains"
	puts "Mah man"
when "chicken coop"
	puts "You need a home."
else
	puts "WHY DO YOU LIVE THERE!? THATS GROSS"
end

correct_value = case suburb
when "pymble"
	'Legend'
when "sydney"
	'Eh'
when "pyrmont"
	"Gay"
when "blue mountains"
	"Mah man"
when "chicken coop"
	"You need a home."
else
	"WHY DO YOU LIVE THERE!? THATS GROSS"
end

puts correct_value

# puts case suburb

# when "pymble"
# 	'Legend'
# when "sydney"
# 	'Eh'
# when "pyrmont"
# 	"Gay"
# when "blue mountains"
# 	"Mah man"
# when "chicken coop"
# 	"You need a home."
# else
# 	"WHY DO YOU LIVE THERE!? THATS GROSS"
# end