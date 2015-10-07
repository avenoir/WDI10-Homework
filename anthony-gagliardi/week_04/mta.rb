def prompt(message)
	print message
	gets.chomp # Implicit return
end

def display_menu
	p "Please choose your desired route:"
	p "(N) - Line N"
	p "(L) - Line L"
	p "(6) - Line 6"
	p "(Q) - Go back home"
end

def line_n
	p "Stops:"
	p "(1) - Times Square"
	p "(2) - 34th"
	p "(3) - 28th"
	p "(4) - 23rd"
	p "(5) - Union Square"
	p "(6) - 8th"
	a = prompt("What stop do you want to get off at? ").to_i
	if a == 1
		p "This is the first stop on this line"
	elsif a == 2
		p "This is the second stop on this line"
	elsif a == 3
		p "This is the third stop on this line"
		p "Change here for Line 6 services"
		p "(Y) - Yes"
		p "(N) - No"
		b = prompt("Change here? ").chomp.downcase
			if b == 'y'
				line_6
			elsif b == nil

			else
				p "Invalid input"
			end
	elsif a == 4
		p "This is the fourth stop on this line"
		p "Change here for Line 6 services"
		p "(Y) - Yes"
		p "(N) - No"
		b = prompt("Change here? ").chomp.downcase
			if b == 'y'
				line_6
			elsif b == nil

			else
				puts "Invalid input"
			end
	elsif a == 5
		p "This is the fifth stop on this line"
		p "Change here for Line L and Line 6 services"
		p "(Y) - Yes"
		p "(N) - No"
		b = prompt("Change here? ").chomp.downcase
		  if b == 'y'
			p "(L) - Line L"
			p "(6) - Line 6"
			c = prompt("Which line to change to? ").chomp.downcase
			if c == 'l'
				line_l
			elsif c == 6
				line_6
			elsif c == nil
				p "Choose a line to change to: "
			else
				p "Invalid input"
			end
		end
	elsif a == 6
		p "This is the sixth stop on this line"
		p "Please deploy yourself at this stop, as this is the end of this line"
	elsif a == nil
		# Nothing
	end
end

def line_l
	p "Stops:"
	p "(1) - 1st"
	p "(2) - 3rd"
	p "(3) - Union Square"
	p "(4) - 6th"
	p "(5) - 8th"
	a = prompt("What stop do you want to get off at? ").to_i
	if a == 1
		p "This is the first stop on this line"
	elsif a == 2
		p "This is the second stop on this line"
	elsif a == 3
		p "This is the third stop on this line"
		p "Change here for Line N & Line 6 services"
		p "(Y) - Yes"
		p "(N) - No"
		b = prompt("Change here? ").chomp.downcase
		  if b == 'y'
			p "(N) - Line N"
			p "(6) - Line 6"
			c = prompt("Which line to change to? ").chomp.downcase
			if c == 'n'
				line_n
			elsif c == 6
				line_6
			elsif c == nil
				p "Choose a line to change to: "
			else
				p "Invalid input"
			end
		end
	elsif a == 4
		p "This is the fourth stop on this line"
	elsif a == 5
		p "This is the fifth stop on this line"
		p "Please deploy yourself at this stop, as this is the end of this line"
	elsif a == nil
		# I said nothing
	end
end

def line_6
	p "Stops:"
	p "(1) - Grand Central"
	p "(2) - 33rd"
	p "(3) - 28th"
	p "(4) - 23rd"
	p "(5) - Union Square"
	p "(6) - Astor Place"
	a = prompt("What stop do you want to get off at? ").to_i
	if a == 1
		p "This is the first stop on this line"
	elsif a == 2
		p "This is the second stop on this line"
	elsif a == 3
		p "This is the third stop on this line"
		p "Change here for Line N services"
		p "(Y) - Yes"
		p "(N) - No"
		b = prompt("Change here? ").chomp.downcase
			if b == 'y'
				line_n
			elsif b == nil

			else
				p "Invalid input"
			end
	elsif a == 4
		p "This is the fourth stop on this line"
		p "Change here for Line N services"
		p "(Y) - Yes"
		p "(N) - No"
		b = prompt("Change here? ").chomp.downcase
			if b == 'y'
				line_n
			elsif b == nil

			else
				p "Invalid input"
			end
	elsif a == 5
		p "This is the fifth stop on this line"
		p "Change here for Line N & Line L services"
		p "(Y) - Yes"
		p "(N) - No"
		b = prompt("Change here? ").chomp.downcase
		  if b == 'y'
			p "(N) - Line N"
			p "(L) - Line L"
			c = prompt("Which line to change to? ").chomp.downcase
			if c == 'n'
				line_n
			elsif c == 'l'
				line_l
			elsif c == nil
				p "Choose a line to change to: "
			else
				p "Invalid input"
			end
		end
	elsif a == 6
		p "This is the sixth stop on this line"
		p "Please deploy yourself at this stop, as this is the end of this line"
	elsif a == nil
		# NOTHINGGGGG
	end
end

menu_choice = nil

until menu_choice == 'q'
  	case menu_choice
		when 'n'
			line_n
		when 'l'
			line_l
		when '6'
			line_6
		when nil
			# ...
		else
			p "Incorrect input"
 	 end

	display_menu
	menu_choice = prompt('Please enter your selection: ').downcase
end