# 1. Create an array of the days of the week

# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday

days_of_the_week = %w(Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday)

p days_of_the_week

# 2. My calendar says the first day is Sunday...

# Remove Sunday from the last postion and move it to the first position. Use array methods.

	days_of_the_week.rotate! -1
p days_of_the_week

# 3. Create a new array of the days of the week:

# The first inner array should be the weekdays

days_of_the_week_2 = [days_of_the_week[1..5], [days_of_the_week.first, days_of_the_week.last] ]
p days_of_the_week_2

# The second inner array should be the weekend days

# 4. Remove either the weekdays or the weekends
days_of_the_week_2.pop
# Your choice...

# 5. Sort the remaining days alphabetically
days_of_the_week_2.flatten!.sort!
puts days_of_the_week_2

require 'pry'
binding.pry