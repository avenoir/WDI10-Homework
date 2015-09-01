class Plant < ActiveRecord::Base
	has_many :butterflies #butterflies table has the plant_id
end