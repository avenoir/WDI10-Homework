a = ["Anil", "Erik", "Jonathan"]
puts a[1]

a<<"Vaibhav"
puts a

###########
puts "!"*30

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}


puts h[1]
puts h[:two]

is = {true => "It's true!", false => "It's false"}

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# puts users["Anil"][:favorite_numbers].select(&:even?)
puts "0"*30

temp=[]
users.collect{ |x,y|
	temp << y[:favorite_numbers]
	temp.flatten!.uniq.sort
	puts temp
}
require 'pry'
binding.pry

