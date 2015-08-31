# bros = [
# 	{
# 		name: "Groucho",
# 		instrument: "Guitar",
# 		vice: 'cigars'
# 	},

# 	{
# 		name: "Harpo",
# 		instrument: "Harp",
# 		vice: 'Mutism'
# 	},

# 	{
# 		name: "Chico",
# 		instrument: "Piano",
# 		vice: "women"
# 	}
# ]

class MarxBrother
	attr_accessor :name
	attr_accessor :vice
	attr_accessor :instrument

	def initialize(name, instrument, vice, year_of_birth)
		@name = name
		@instrument = instrument
		@vice = vice
		@year_of_birth = year_of_birth
		puts "MAKING A BROTHER!"
	end

	def year_of_birth
		@year_of_birth
	end

	def age
		Time.now.year - @year_of_birth
	end

	def play
		"I play the #{ @instrument }."
	end

	def enjoy
		"I enjoy #{ @vice }."
	end
end


require "pry"
binding.pry