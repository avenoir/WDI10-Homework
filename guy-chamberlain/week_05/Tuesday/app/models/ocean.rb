# == Schema Information
#
# Table name: oceans
#
#  id        :integer          primary key
#  name      :text
#  image     :text
#  km_square :integer
#  max_depth :integer
#

class Ocean < ActiveRecord::Base
end
