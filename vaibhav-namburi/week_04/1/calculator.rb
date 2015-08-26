# hopeless calculator
def prompt(message)
	puts message
	gets.chomp #implicit return
end

def display_menu
	puts "(q) for quit"
	puts "(+) for addition"
	puts "(-) for subtract"
	puts "(/) for divide"
	puts "(*) for multiply"
	puts "(power) for power"
	puts "(root) for root"
end

def promptation
	a=prompt("Enter your first number: ").to_i
	b=prompt("Enter your second number: ").to_i
	[a,b]
end

def add
	a,b = promptation
	puts "the addition of #{a} and #{b} is #{a+b}"
end

def subtract
	a,b = promptation
	puts "the addition of #{a} and #{b} is #{a-b}"
end

def divide
	a,b = promptation
	puts "the addition of #{a} and #{b} is #{a/b}"
end

def multiply
	a,b = promptation
	puts "the addition of #{a} and #{b} is #{a*b}"
end

def power
	a,b = promptation
	puts "the addition of #{a} and #{b} is #{a**b}"
end

def root
	a,b = promptation
	puts "the addition of #{a} and #{b} is #{a**(1/b)}"
end

menu_choice = nil

until menu_choice == 'q'

	display_menu

	menu_choice = prompt("please enter your selection").downcase

	case menu_choice

		when '+'
			add
		when '-'
			subtract
		when '/'
			divide
		when '*'
			multiply
		when 'power'
			square
		when 'root'
			root
		else
			puts "please enter a valid operation"
	end
end