# == Schema Information
#
# Table name: series
#
#  id         :integer          not null, primary key
#  name       :text
#  author_id  :integer
#  created_at :datetime
#  updated_at :datetime
#

class Series < ActiveRecord::Base
	belongs_to :author
	has_many :books
end
