##############################
# What are the requirements? #
##############################

# We need an initialize method ( initialize )
# We need a name method ( generate_name )
# We need something to generate the letters ( generate_letters )
# We need something to generate the numbers ( generate_numbers )
# We need a reset method ( that just calls the name method ) ( reset )

require 'pry'

class Robot
  attr_accessor :name
  def initialize
    generate_name
  end

  def generate_name
    @name = "#{ generate_letters }#{ generate_numbers }"
  end

  def generate_letters
    alphabet = ( "A".."Z" ).to_a
    alphabet.sample( 2 ).join( "" )
  end

  def generate_numbers
    Random.rand 100..999
  end

  def reset_name
    generate_name
  end
end

larry = Robot.new
puts larry.name
larry.reset_name
puts larry.name