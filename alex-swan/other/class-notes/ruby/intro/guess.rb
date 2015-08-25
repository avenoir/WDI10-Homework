# Title: Guess The Number
# Activity:

# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:

# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.

def prompt(message)
	print message
	gets.chomp #implicit return
end

max = prompt("Pick your max number: ").to_i # Force integer conversion

number = Random.rand(max) # or 0..max
guess = nil

until guess == number 
	guess = prompt("Guess a number between 0 and #{max}: ").to_i

	if guess < number
		puts "Wrong, guess higher!"

	else #no need for else if because we're already inside loop i.e. guess != number
		puts "Wrong, guess lower!"
	end
end

puts "You guessed it: #{number}!"

# Extensions:

# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"