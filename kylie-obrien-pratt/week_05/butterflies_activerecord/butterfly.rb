class Butterfly < ActiveRecord::Base
  belongs_to :plant #tells sql to look for column plant_ID
end


