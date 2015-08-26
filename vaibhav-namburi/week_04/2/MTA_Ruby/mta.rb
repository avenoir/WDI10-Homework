mta = {
lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
lineL: ["8th", "6th", "Union Square", "3rd","1st"],
line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"] 
}

def prompt(message)
	puts message
	gets.chomp
end

def union(line)
	line.index("Union Square")
end

def startSection(start_station, start_line)

	start = start_line.index(start_station)

	if start < union(start_line)

		start_line[start..union(start_line)]

	else

		start = start_line.reverse!.index(start_station)

		start_line[start..union(start_line)]
		
	end

end

def endSection(end_station, end_line)

	ending = end_line.index(end_station)

	if ending > union(end_line)

		end_line[union(end_line)..ending]

	else

		ending = end_line.reverse!.index(end_station)

		end_line[union(end_line)..ending]
		
	end

end

def wholeJourney(start_station, start_line,end_station, end_line)

	if(start_line == end_line)

		puts startSection[(start_line.index(start_station))..(start_line.index(end_station))]

	else

		puts (startSection(start_station, start_line) | endSection(end_station, end_line))

	end

end

start_line = mta[prompt("please enter your starting line lineN/L/6").to_sym]
start_station = prompt("please enter your starting station")
end_line = mta[prompt("please enter your ending line lineN/L/6").to_sym]
end_station = prompt("please enter your ending station")


wholeJourney(start_station, start_line,end_station, end_line)



