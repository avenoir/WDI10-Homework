# Calculator

# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu

# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)

# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

# Phase 3
# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality

def prompt(message)
	print message
	gets.chomp  #implicit return
end	


def display_menu
	puts "(q) - quit"
	puts "(+) - add"
	puts "(-) - subtract"
	puts "(*) - multiply"
	puts "(/) - divide"
	puts "(s) - square"
	puts "(c) - cubed"
	puts "(p) - power"

end


def add
	a = prompt('Enter your first number: ').to_i
	b = prompt('Enter your second number: ').to_i
	puts "#{ a } + #{ b } = #{ a + b }"	
end	

def subtract
	a = prompt('Enter your first number: ').to_i
	b = prompt('Enter your second number: ').to_i
	puts "#{ a } - #{ b } = #{ a - b }"	
end	

def multiply
	a = prompt('Enter your first number: ').to_i
	b = prompt('Enter your second number: ').to_i
	puts "#{ a } * #{ b } = #{ a * b }"
end	

def divide
	a = prompt('Enter your first number: ').to_i
	b = prompt('Enter your second number: ').to_i
	puts "#{ a } / #{ b } = #{ a / b }"
end		

def square
	a = prompt('Enter your number: ').to_i
	puts "#{ a } squared = #{ a * a }"
end	

def cube
	a = prompt('Enter your number: ').to_i
	puts "#{ a } cubed = #{ a ** 3 }"
end	

def power
	a = prompt('Enter your first number: ').to_i
	b = prompt('Enter your second number: ').to_i
	puts "#{ a } to the power of #{ b } = #{ a ** b }"
end	


menu_choice = nil

display_menu
	menu_choice = prompt('Please enter your selection: ').downcase

until menu_choice == 'q'

	case menu_choice
	when '+'
		add
	when '-'
		subtract
	when '*'
		multiply
	when '/'
		divide
	when 's'
		square
	when 'c'
		cube
	when 'p'
		power					
	else
		puts "Invalid selection"	
end 

display_menu
	menu_choice = prompt('Please enter your selection: ').downcase

end	
