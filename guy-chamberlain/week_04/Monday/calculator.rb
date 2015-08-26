
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
	gets.chomp
end

def display_menu
	puts "(+) - add"
	puts "(*) - multiply"
	puts "(/) - divide"
	puts "(-) - subtract"
	puts "(**) - exponent"
	puts "(s) - square root"
	puts "(q) - quit"
end

def gimmy_two()
	a = prompt("Enter your first number ").to_i
	b = prompt("Enter your decond number ").to_i
	[a,b]
end

def add
	n = gimmy_two
	puts "#{ n[0] } + #{ n[1] } = #{ n[0] + n[1] }"
end

def multiply
	n = gimmy_two
	puts "#{ n[0] } x #{ n[1] } = #{ n[0] * n[1] }"
end

def divide
	n = gimmy_two
	puts "#{ n[0] } / #{ n[1] } = #{ n[0] / n[1] }"
end

def subtract
	n = gimmy_two
	puts "#{ n[0] } - #{ n[1] } = #{ n[0] - n[1] }"
end

def exponent
	n = gimmy_two
	puts "#{ n[0] } to the power of #{ n[1] } = #{ n[0] ** n[1] }"
end

def square
	n = prompt("Enter a number ").to_i
	puts "The square root of #{ n } is #{ Math.sqrt(n) }"
end

menu_choice = nil
 
until menu_choice == "q"

	display_menu
	menu_choice = prompt("Please enter your selection : ").downcase

	case menu_choice
	when "+"
		add	
	when "*"
		multiple
	when "/"
		divide
	when "-"
		subtract
	when "**"
		exponent
	when "s"
		square
	when "q"
		# We will fall through the loop here
	else
		puts "Unknown selection"
	end	

end

