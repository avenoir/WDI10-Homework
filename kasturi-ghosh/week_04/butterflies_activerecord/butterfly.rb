class Butterfly < ActiveRecord::Base
	belongs_to :plant #since plant_id is inside the butterflies table
end