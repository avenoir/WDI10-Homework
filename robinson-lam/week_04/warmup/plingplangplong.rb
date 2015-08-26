puts "Please enter a number: "
numberToCheck = gets.chomp.to_i

result = ""

result += "Pling" if numberToCheck % 3 == 0

result += "Plang" if numberToCheck % 5 == 0

result += "Plong" if numberToCheck % 7 == 0

if result
  print result
else
  print numberToCheck
end
