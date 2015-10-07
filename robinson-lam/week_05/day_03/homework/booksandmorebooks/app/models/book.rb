# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :text
#  genre      :text
#  pages      :integer
#  series_id  :integer
#  author_id  :integer
#  created_at :datetime
#  updated_at :datetime
#

class Book < ActiveRecord::Base
	belongs_to :author
	belongs_to :series
end
