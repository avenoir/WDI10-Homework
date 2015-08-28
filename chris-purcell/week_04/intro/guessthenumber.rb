# Generate a basic guess the number game. Computer generates random number between 1 & 10
# The user plays until they guess correctly.
#The user should be asked to guess a number
# if the answer is correct the user should be congratulated.
#if the users guess is wrong, should be prompted to guess agai.



## THIS FIRST ONE IS JUST RUNNING A RANDOM VALUE BETWEEN ONE & TEN & CONTINUE ON UNTIL THEY GUESS CORRECTLY

# random_value = Random.rand 1..10

# print "what is the number?"
# usr_guess = gets.to_i

# while usr_guess != random_value
# 	if usr_guess == random_value
# 		puts "You are correct. Well done"
# 	elsif usr_guess != random_value
# 		print "please guess again : "
# 		usr_guess = gets.to_i
# 	if usr_guess == random_value
# 		puts "You are correct. Well done"
# 	elsif usr_guess != random_value
# 		puts "nope"
# 	end
# 	end
# end

# THIS ONE IS AN INPUT THE USER SELECTS AS MAX NUMBER FOR GAME & THE GAME IS THEN BASED OFF THIS

print "What number would you like the maximum for the game, to be? : "
max = gets.to_i
chosen_value = Random.rand 1..max

print "Pick a number between 1 & #{ max }"

print "What is your first choice? : "
user_guess = gets.to_i

## THE WHILE LOOP HERE WILL LOOP UNTIL GUESSED CORRECTLY
while user_guess != chosen_value
	if user_guess == chosen_value
		puts "You are correct. Well done"
	elsif user_guess >= chosen_value
		puts "Lower" # IF THERE SELECTION IS HIGHER THAN THE CORRECT ANSWER IT WILL PROMPT LOWER TO HELP
		print "What is your next choice (REMEMBER LOWER)? : "
		user_guess = gets.to_i
		if user_guess == chosen_value
			puts "CORRECT!"
		end
	elsif user_guess <= chosen_value
		puts "Higher" # IF THE NUMBER IS LOWER, IT PROMPTS FOR A HIGHER NUMBER
		print "What is your next choice (REMEMBER HIGHER)? : "
		user_guess = gets.to_i
		if user_guess == chosen_value
			puts "CORRECT!"
		end
	end
end


# def prompt(message)
# 	print message
# 	gets.chomp
# end

# max = prompt("Enter the maximum possible value to be guessed: ").to_i

# mystery_number = Random.rand 0..max

# guess = prompt("Guess a number between 0 and #{ max }").to_i

# until guess == mystery_number
# 	if guess>mystery_number
# 		puts "Wrong, guess lower!"
# 	elsif


