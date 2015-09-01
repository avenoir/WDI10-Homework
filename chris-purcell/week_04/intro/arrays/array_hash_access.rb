a = ['Jeffrey', 'Logan', 'Fahchina']
puts a[1]
a.push('Chris')

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
p h[1]
p h[:two]
p h["two"]
h[3] = "Three"
h[:four] = 4


is = {true => "It's true!", false => "It's false"}
puts is[2+2 == 4] # ITS TRUE!
puts is["Erik" == "Jonathan"] #ITS FALSE
puts is[9 > 10] #ITS FALSE
puts is[0] #nil
puts is["Erik"] #nil

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
puts users['Jonathan'][:twitter]
puts users['Erik'][:favorite_numbers] << 7
users["Chris"] = {:twitter => "is shit", :favorite_numbers => [8, 12, 23]}
users["Erik"][:favorite_numbers]
users["Erik"][:favorite_numbers].min #returns the smallest number
users["Anil"][:favorite_numbers].select { |num| num.even? } # Returns the even values in the favorite numbers array for Anil
users["Anil"][:favorite_numbers] + users["Erik"][:favorite_numbers] + users["Jonathan"][:favorite_numbers] + users["Chris"][:favorite_numbers]
require 'pry'
binding.pry