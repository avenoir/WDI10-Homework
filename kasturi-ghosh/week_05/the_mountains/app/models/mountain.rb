# == Schema Information
#
# Table name: mountains
#
#  id            :integer          primary key
#  name          :text
#  image         :text
#  location      :text
#  height        :float
#  first_climber :text
#

class Mountain < ActiveRecord::Base
end
