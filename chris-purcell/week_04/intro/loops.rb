i = 10
while i >= 0
	puts "i is currently : #{ i }"
	i = i - 1 # or i -= 1
	#sleep 0.4
end

puts "Blast"

puts "=" * 80

i = 10
until i == 0
	puts "i is currently: #{ i }"
	i -= 1
end


# Iterator / ennumerables (THIS IS THE PREF METHOD FOR LOOPS)

(1..10).each do |num| ## this 'num' only lives inside the loop itself. cannot be called outside.
	puts "number is currently #{ num }"
end

10.times do |num|
	puts "number is currently #{ num }"
end

## Random
## Random.rand(max value)
## Random.rand 25..40 ## between range only

