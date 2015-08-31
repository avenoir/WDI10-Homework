days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

p days_of_the_week

days_of_the_week.rotate! -1 # cleanest way to tdo this , i did days_of_the_week.unshift(days_of_the_week.pop)

p days_of_the_week

week_parts = [days_of_the_week[1..5], [days_of_the_week.last, days_of_the_week.first]]
p week_parts

week_parts.delete_at -1
p week_parts

week_parts.flatten!.sort!
p week_parts

require 'pry'
binding.pry