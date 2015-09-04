# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :text
#  published  :text
#  genre      :text
#  image      :text
#  created_at :datetime
#  updated_at :datetime
#

class Book < ActiveRecord::Base
	belongs_to :author
end
