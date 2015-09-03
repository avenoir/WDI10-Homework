# == Schema Information
#
# Table name: mountains
#
#  id           :integer          primary key
#  name         :text
#  location     :text
#  image        :text
#  first_person :text
#

class Mountain < ActiveRecord::Base
end
