# Array and Hash access
# A. Given the following data structure:

a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?
# How would you add your name to the array?
p a[1]
a.push "Alex"
p a


# B. Given the following data structure:


h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# How would you return the string "One"?

# p h[1]

# How would you return the string "Two"?

p h[:two]

# How would you return the number 2?

p h['two']



# How would you add {3 => "Three"} to the hash?
h[3] = "Three" 

# How would you add {:four => 4} to the hash?
h[:four] = 4


# C. Given the following data structure:



is = {true => "It's true!", false => "It's false"}
# What is the return value of 
# p is[2 + 2 == 4]
# "It's true"!
# What is the return value of 
# p is["Erik" == "Jonathan"]
# "It's false"
# What is the return value of 
# p is[9 > 10]
# "It's false!"
# What is the return value of 
# p is[0]
# "It's true!" X nil ??? ==> going looking for the key of 0 in the hash, which does not exist
# What is the return value of 
# p is["Erik"]
# "It's true!" X nil ?? ==> looking for key of Erik which does not exist


# D. Given the following data structure:

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
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users['Jonathan'][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
users['Erik'][:favorite_numbers] << 7

# How would you add yourself to the users hash?
users['Alex'] = {twitter: 'alxswan', favorite_numbers: [7,8,11]}
# How would you return the array of Erik's favorite numbers?

users['Erik'][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
users['Erik'][:favorite_numbers].min
# How would you return an array of Anil's favorite numbers that are also even?
users['Anil'][:favorite_numbers].each do |n| puts n if n.even? end
users['Anil'][:favorite_numbers].select do |n| n.even? end
# How would you return an array of the favorite numbers common to all users?
users["Jonathan"][:favorite_numbers]+users["Erik"][:favorite_numbers] | users["Anil"][:favorite_numbers]

 # & (and: give me what is in both) | (or: give me what is in either)
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
(users["Jonathan"][:favorite_numbers]+users["Erik"][:favorite_numbers] | users["Anil"][:favorite_numbers]).uniq.sort
require 'pry'
binding.pry
