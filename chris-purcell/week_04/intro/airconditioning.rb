print "Whats the current temperature? : "
temp = gets.to_i
print "Is the AC working? yes or no : "
ac_working = gets.chomp.downcase
print "What temperature do you want? : "
pref_temp = gets.to_i

if temp > pref_temp && ac_working == "yes"
	puts "Turn on the AC please."
end

if ac_working == "no" && temp > pref_temp
	puts "Fix the AC brah, it's hot!"
end

if ac_working == "no" && temp < pref_temp
	puts "Fix the AC whenever, it's cool."
end

