# World's Crappiest But Still Accurate Calculator

def prompt(message)
	print message
	gets.chomp # Implicit return
end

def display_menu
	puts "(+) - add"
	puts "(-) - takeaway"
	puts "(*) - multipy"
	puts "(/) - divide"
	puts "(2) - square root"
	puts "(3) - exponent"
	puts "(q) - quit"
end

def add
	a = prompt('Enter your first number: ').to_i
	b = prompt('Enter your second number: ').to_i
	puts "#{ a } + #{ b } = #{ a + b }"
end

def takeaway
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
	a = prompt('Enter number to calculate square root: ').to_i
	puts "#{ a } * #{ a } = #{ a * a }²"
end

def exponent
	a = prompt('Enter a number: ').to_i
	b = prompt('Raised to the power of: ').to_i
	puts "#{ a } ** #{ b } = #{ a ** b }"
end

menu_choice = nil

until menu_choice == 'q'
	case menu_choice
	when '+'
		add
	when '-'
		takeaway
	when '*'
		multiply
	when '/'
		divide
	when '2'
		square
	when '3'
		exponent
	when nil
		# The Abyss'sness
	else
		puts "Invalid selection"
	end

	display_menu
	menu_choice = prompt('Please enter your selection: ').downcase
end