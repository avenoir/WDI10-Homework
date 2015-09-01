if 7 > 3
  puts "Mathematics is behaving in Ruby"
end

# Terrible offensive example

gender = "I haven't decided yet"

if gender == "male"
  puts "you are a male"
elsif gender == "female"
  puts "you are a female"
else
  puts "gender indeterminate"
end

# one line if statement:
puts "23 is greater than 4" if 23 > 4


milk = false
if milk != true
  puts "you need to buy milk"
end

unless milk == true
  puts "You need to buy milk"
end
