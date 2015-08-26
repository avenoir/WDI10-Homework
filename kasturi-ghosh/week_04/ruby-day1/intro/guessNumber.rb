# Activity:
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.

# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.

# Extensions:
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

def prompt(message)
	print messaage
	gets.chomp # implicit return
end

max = prompt ("Choose the maximum value : ").to_i
# max = max.to_i # Force integer conversion

num = Random.rand 0..max;

guess_num = ("Guess a number between 0 to #{ max } : ").to_i
guess_num = gets.to_i

until num == guess_num
	if num > guess_num 
		print "Wrong, guess higher! : "
	else 
		print "Wrong, guess lower! : "
	end
	guess_num = gets.to_i
end

puts "Congratulations! You guessed correct. The number was #{ num }."