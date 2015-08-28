# Calculator

def prompt(message)
	print message
	gets.chomp
end

def display_menu
	puts "(+) - add"
	puts "(-) - subtract"
	puts "(x) - multiply"
	puts "(/) - divide"
	puts "(e) - exponent"
	puts "(sqrt) - square root"
	puts "(q) - quit"
end

def add
	a = prompt( "Enter your first number : " ).to_i
	b = prompt( "Enter your second number : " ).to_i
	puts "#{ a } + #{ b } = #{ a + b }"
end

def subtract
	a = prompt( "Enter your first number : " ).to_i
	b = prompt( "Enter your second number : " ).to_i
	puts "#{ a } - #{ b } = #{ a - b }"
end

def multiply
	a = prompt( "Enter your first number : " ).to_i
	b = prompt( "Enter your second number : " ).to_i
	puts "#{ a } x #{ b } = #{ a * b }"
end

def divide
	a = prompt( "Enter your first number : " ).to_i
	b = prompt( "Enter your second number : " ).to_i
	puts "#{ a } / #{ b } = #{ a / b }"
end

def exponent
	a = prompt( "Enter your first number : " ).to_i
	b = prompt( "Enter your second number : " ).to_i
	puts "#{ a } ^ #{ b } = #{ a ** b }"
end

def square_root
	a = prompt( "Enter the number : " ).to_i
	puts "Sq.rt of #{ a } = #{ Math.sqrt(a) }"
end

menu_choice = nil

until menu_choice == 'q'
	case menu_choice
	when '+'
		add
	when '-'
		subtract
	when 'x'
		multiply
	when '/'
		divide
	when 'e'
		exponent
	when 'sqrt'
		square_root
	else puts "Invalid selection"
	end

	display_menu
	menu_choice = prompt( "Please enter your selection : " ).downcase
end