
# =========================Specification===========================

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

# ==================================================================


# method to display message and get user input
def prompt(message)
	print message
	gets.chomp
end


# method to display the menu
def display_menu
	print "(+) -- add"
	puts " (a + b) "
	puts "-"*20

	print "(-) -- subtract"
	puts " (a - b) "
	puts "-"*20

	print "(*) -- multiply"
	puts " (a * b) "
	puts "-"*20

	print "(/) -- division"
	puts " (a / b) "
	puts "-"*20

	print "(**) -- exponents"
	puts " (a to the power of b) "
	puts "-"*20

	print "(sq) -- square"
	puts " (square of a) "
	puts "-"*20

	print "(root) -- root"
	puts " (square root of a) "
	puts "-"*20

	puts "(menu) -- display the menu"
	puts "-"*20

	puts "(q) -- quit"
	puts "-"*20
end

display_menu



#====================== Mathematical operations=======================

def add
	a = prompt("Enter your first number: ").to_f
	b = prompt("Enter your second number: ").to_f
	puts "#{ a } + #{ b } = #{ a + b}"
end


def subtract
	a = prompt("Enter your first number: ").to_f
	b = prompt("Enter your second number: ").to_f
	puts "#{ a } - #{ b } = #{ a - b}"
end


def multiply
	a = prompt("Enter your first number: ").to_f
	b = prompt("Enter your second number: ").to_f
	puts "#{ a } * #{ b } = #{ a * b }"
end


def division
	a = prompt("Enter your first number: ").to_f
	b = prompt("Enter your second number: ").to_f
	puts "#{ a } / #{ b } = #{ a / b }"
end


def exponent
	a = prompt("Enter the base number: ").to_f
	b = prompt("Enter the power: ").to_f
	puts "#{ a } to the power of #{ b } is #{ a ** b}"
end


def square
	a = prompt("Enter your number: ").to_f
	puts "square of #{ a } is #{ a * a }"
end


def root
	a = prompt("Enter your number: ").to_f
	puts "root of #{ a } is #{ a ** (1.0 / 2) }"
end



# display proper message and do the operations acccoring to user inputs
menu_choice = nil

until menu_choice == 'q'
	
	menu_choice = prompt("Please enter your selection from the above: ").downcase

	case menu_choice
	when "+"
		puts "You have selected Addition."
		add

	when "-"
		puts "You have selected Subtraction."
		subtract

	when "*"
		puts "You have selected Multiplication."
		multiply

	when "/"
		puts "You have selected Division."
		division

	when "**"
		puts "You have selected Exponents."
		exponent

	when "sq"
		puts "You have selected Square function."
		square

	when "root"
		puts "You have selected Root funtion."
		root

	when "menu"
		display_menu

	when "q"
		break

	else
		puts "Invalid selection"
	end
end




