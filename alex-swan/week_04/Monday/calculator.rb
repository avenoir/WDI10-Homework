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
	gets.chomp #Implicit Return
end

def display_menu
	puts "(+) - add"
	puts "(-) - subtract"
	puts "(*) - multiply"
	puts "(/) - divide"
	puts "(**) - exponent"
	puts "(sqrt) - square root"
	puts "(q) - quit"

end

def get_int(nth)
	prompt("Enter your #{nth} number: ").to_i
end


def add
	a = get_int('first')
	b = get_int('second')
	puts"#{ a } + #{ b } = #{ a + b }"
end

def subtract
	a = prompt("Enter your first number: ").to_i
	b = prompt("Enter your second number: " ).to_i
	puts"#{ a } - #{ b } = #{ a - b }"
end

def multiply
	a = prompt("Enter your first number: ").to_i
	b = prompt("Enter your second number: " ).to_i
	puts"#{ a } * #{ b } = #{ a * b }"
end

def divide
	a = prompt("Enter your first number: ").to_f
	b = prompt("Enter your second number: " ).to_f
	puts"#{ a } / #{ b } = #{ a / b }"
end

def exponent
	a = prompt("Enter your number: ").to_f
	b = prompt("Enter your exponent: " ).to_f
	puts"#{ a } ** #{ b } = #{ a ** b }"
end

def square_root # Does not work for negative numbers
	a = prompt("Enter your number: ").to_f
	puts"Square root of #{ a } = #{ Math.sqrt(a) }"
end


menu_choice = nil

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
	when '**'
		exponent
	when "sqrt"
		square_root
	else
		puts "Invalid selection"
	end

	display_menu
	menu_choice = prompt('Please enter your selection: ').downcase

end
