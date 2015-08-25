

# puts "whats your age kid?"

# age = gets.chomp.to_i

# puts "you're not old enough yet" if age<18

# puts "you're good to go" if age>=18


# 2. Air Conditioning

# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

# puts "What is the correct temperature right now"

# current_temp = gets.chomp.to_i

# puts "is the AC working?"

# status = gets.chomp.downcase

# puts "Whats the temperature you want it to be?"

# wanted_temp = gets.chomp.to_i

# if (status.eql? "true" and current_temp>wanted_temp)
# 	puts "Turn on the A/C Please" 
# elsif (status.eql? "false")
# 	if current_temp>wanted_temp
# 		puts "Fix the A/C now! It's hot!"
# 	else
# 		puts "Fix the AC whenever"
# 	end
# end
	

# 3. Sydney Suburbs

# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

# print "enter your suburb"

# suburb = gets.chomp

# puts case suburb

# when  "mosman"
# 	"Lah dee dah"
# when "newton"
# 	"how how"
# when "katoomba"
# 	"cool"
# else
# 	"interessting"
# end

# Activity:

# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:

# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:

# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

puts "please enter a range (x y) "
range = gets.chomp.split(" ")

string_range = range.map(&:to_i)
puts "you have selected a range from #{string_range[0]} to #{string_range[1]}"

until guess == pc_guess
	
	puts "whats your guess?"
	guess = gets.chomp.to_i

	pc_guess = Random.rand string_range[0]..string_range[1]
	puts "the computer guessed #{pc_guess}"

	result = guess<=>pc_guess

	case result

		when 0
			puts "you won"
		when 1
			puts "guess lower"
		when -1
			puts "guess higher"
	end
		
end





