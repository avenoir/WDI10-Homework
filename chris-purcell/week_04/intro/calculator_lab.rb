# A calculator (CRAPPY BUT ACCURATE)


def prompt(message)
	print message
	gets.chomp
end

def display_menu
	puts "(q) - quit"
	puts "(+) - add"
	puts "(*) - times"
	puts "(/) - divide"
	puts "(-) - minus"
	puts "(ex) - exponent"
	puts "(sq) - square root"
end

def add 
	a = prompt('enter your first number : ').to_i
	b = prompt('enter second number : ').to_i
	puts "#{ a } + #{ b } = #{ a + b }"
end

def times
	a = prompt('enter first number : ').to_i
	b = prompt('enter second number : ').to_i
	puts "#{ a } * #{ b } = #{ a * b }"
end

def divide
	a = prompt('enter first number : ').to_i
	b = prompt('enter second number : ').to_i
	puts "#{ a } / #{ b } = #{ a / b }"
end

def minus
	a = prompt('enter first number : ').to_i
	b = prompt('enter second number : ').to_i
	puts "#{ a } - #{ b } = #{ a - b }"
end

def exponents
	a = prompt('Enter the number you would like to times by itself : ').to_i
	b = prompt('Enter the number of times you would like this to be done : ').to_i
	puts "#{ a } * #{ a }, #{ b } times = #{ (a * a) * b }"
end

def square_root
	a = prompt('Enter the number of which you would like to find the square root : ').to_i
	puts "#{ a } squared = #{ a * a }"
end

menu_choice = nil

until menu_choice == 'q'
	case menu_choice
	when '+'
		add
	when '*'
		times
	when '/'
		divide
	when '-'
		minus
	when 'ex'
		exponents
	when 'sq'
		square_root
	else
		puts "invalid selection"
	end

	display_menu
	menu_choice = prompt('Please enter your selection: ').downcase
end