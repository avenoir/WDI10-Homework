i = 10
while i >= 0
	puts "i is currently #{ i }"
	i  = i - 1 # equivalent to i -= 1
	# sleep 1 # how many secs to sleep for. Good for countdown
end

i = 10
until i == 0
	puts "i is currently #{i}"
	i -= 1
end

# Iterator | ennumerables
(1..10).each do |num| #(10..1)
	puts "num is currently #{ num }"
end

# 0 to 9
10.times do |j|
	puts "#{ j } is fabulous"
end