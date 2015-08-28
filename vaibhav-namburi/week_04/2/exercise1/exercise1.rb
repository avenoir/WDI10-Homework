days_of_the_week = %w(Monday Tuesday Wednesday Thurday Friday Saturday Sunday)

days_rotated = days_of_the_week.rotate

puts days_rotated

newArray=[]
newArray<<days_of_the_week[0..4]
newArray<<["Saturday","Sunday"]

require "pry"

binding.pry 

newArray.pop

newArray.sort

puts newArray