# We need to start off with an empty string
# Add "Pling" if it is divisible by 3
# Add "Plang" if it is divisible by 5
# Add "Plong" if it is divisible by 7

def convert( num )
  str = ""
  str << "Pling" if num % 3 == 0
  str << "Plang" if num % 5 == 0
  str << "Plong" if num % 7 == 0
  return str unless str.empty?
  num.to_i
end

puts convert( 15 )
puts convert( 105 )

print "What number would you like to convert to raindrops? "
num = gets.to_i
puts convert( num )