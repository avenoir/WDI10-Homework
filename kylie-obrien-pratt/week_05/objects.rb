
bros = [
{
	name: 'Groucho',
	instrument: 'Guitar',
	vice: 'cigars'
},

{


}


]

def plays(brother)
	"#{{brother[:name]} plays the #{brother}[:instrument]}"
end

def enjoys(brother)
	"#{{brother[:name]} enjoys #{brother}[:vice]}"
end

bros.each do |b|
	puts plays(b)
	puts enjoys(b)
end

class MarxBrother
	attr_accessor :name, :vice, :instrument #Let Ruby write your getters and setters
	attr_reader: year_of_birth
	# set information
	def initialize(name, instrument, vice, year_of_birth)
		@name = name
		@instrument = instrument
		@vice = vice
		@year_of_birth = year_of_birth
	end

	def year_of_birth
		@year_of_birth

	# method to tell you how old they are
	def age
		Time.now.year - @year_of_birth
	end

	end

	def play
		"#{@name} plays the #{@instrument}"
	end

	def enjoy
		"#{@name} enjoys the #{@vice}"
	end
end

bros = [ #create array brothers
	MarxBorther.new('groucho', 'guitar', 'cigars', 1888),
	MarxBrother.new('harpo', 'harp', 'mutism', 1890),
	MarxBrother.new('chico', 'piano', 'infidelity', 1879)

]

bros.each do |b|
	puts b.play #function attached to brother object
	puts b.enjoy
end

require 'pry'
binding.pry