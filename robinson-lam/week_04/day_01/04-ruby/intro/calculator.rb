# World's Crappiest but pretty damn accurate calculator

def prompt(message)
  print message
  gets.chomp
end

def display_menu
  puts "(+) - add"
  puts "(-) - subtract"
  puts "(*) - multiply"
  puts "(/) - divide"
  puts "(^) - exponent"
  puts "(&) - square root"
  puts "(q) - quit"
end

def add
  a = prompt("Enter your first number: ").to_i
  b = prompt("Enter your second number: ").to_i
  puts "#{ a } + #{ b } = #{ a + b }"
end

def subtract
  a = prompt("Enter your first number: ").to_i
  b = prompt("Enter your second number: ").to_i
  puts "#{ a } - #{ b } = #{ a - b }"
end

def multiply
  a = prompt("Enter your first number: ").to_i
  b = prompt("Enter your second number: ").to_i
  puts "#{ a } * #{ b } = #{ a * b }"
end

def divide
  a = prompt("Enter your first number: ").to_i
  b = prompt("Enter your second number: ").to_i
  puts "#{ a } / #{ b } = #{ a / b }"
end

def exponent
  a = prompt("Enter your base number: ").to_i
  b = prompt("Enter your exponent number: ").to_i
  puts "#{ a } ^ #{ b } = #{ a ** b }"
end

def sqroot
  a = prompt("Enter your base number: ").to_i
  puts "Square root of #{ a } = #{ Math.sqrt a }"
end

menu_choice = nil # User hasn't chosen anything yet

until menu_choice == "q"
  display_menu
  menu_choice = prompt("Please enter your selection: ").downcase

  case menu_choice
  when "+"
    add
  when "-"
    subtract
  when "*"
    multiply
  when "/"
    divide
  when "^"
    exponent
  when "&"
    sqroot
  when "q"
    puts "Seeya nerd"
  else
    puts "Invalid selection"
  end
end
