i = 10
while i >= 0
	puts "i is currenty: #{ i }"
	i -= 1 # equivalent to: i = i - 1
end

puts "Blastoff!"

puts "=" * 80

i = 10
until i == 0
	puts "i is currently: #{ i }"
	i -= 1
end

(1..10).each do |num|
	puts "num is currently #{num}"
end

11.times do |j|
	puts " #{ j } is Fabulous"
end

Random.rand(10) #gives random number beterrn 1 and ten

Random.rand(25..40) #gives random number beterrn 1 and ten