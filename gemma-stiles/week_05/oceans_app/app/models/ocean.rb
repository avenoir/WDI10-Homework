# == Schema Information
#
# Table name: oceans
#
#  id        :integer          primary key
#  name      :text
#  location  :text
#  image     :text
#  volume    :float
#  coastline :float
#

class Ocean < ActiveRecord::Base
end
