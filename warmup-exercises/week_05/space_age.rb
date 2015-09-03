require 'pry'

class SpaceAge

  def initialize( seconds )
    @seconds = seconds
    @years_on_earth = seconds / 31557600
  end

  def orbital_periods
    {
      :mercury => 0.2408467,
      :venus   => 0.61519726,
      :earth   => 1,
      :mars    => 1.8808158,
      :jupiter => 11.862615,
      :saturn  => 29.447498,
      :uranus  => 84.016846,
      :neptune => 164.79132
    }
  end

  def years_on_planet( planet_name )
    ratio = orbital_periods[ planet_name ]
    years_on_other_planet = @years_on_earth / ratio
    years_on_other_planet.round( 2 )
  end

  def years_on_all_planets
    all_orbital_periods = orbital_periods
    all_orbital_periods.each do |planet, ratio|
      all_orbital_periods[ planet ] = ( @years_on_earth / ratio ).round( 2 )
    end
  end

end

larry = SpaceAge.new( 1_000_000_000 )
larry.years_on_planet( :mercury )
larry.years_on_all_planets

