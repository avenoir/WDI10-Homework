
puts "Maximum Value? "
max_value = gets.to_i

random_number = Random.rand 0..max_value
puts random_number
correct = false

puts "Guess the number! : "

until correct
  user_answer = gets.to_i
  result = user_answer <=> random_number

  case result
  when 0
    correct = true
    puts "You guessed correct!"
  when -1
    puts "Wrong! Your answer is lower than the correct answer!"
  when 1
    puts "Wrong! Your answer is higher than the correct answer!"
  end
end

