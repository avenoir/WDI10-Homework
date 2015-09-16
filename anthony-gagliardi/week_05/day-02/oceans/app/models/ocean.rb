# == Schema Information
#
# Table name: oceans
#
#  id       :integer          primary key
#  name     :text
#  location    :float
#  depth    :float
#  area     :float
#

class Ocean < ActiveRecord::Base
end
