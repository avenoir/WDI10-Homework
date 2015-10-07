# == Schema Information
#
# Table name: authors
#
#  id         :integer          not null, primary key
#  name       :text
#  dob        :date
#  signature  :text
#  created_at :datetime
#  updated_at :datetime
#

class Author < ActiveRecord::Base
	has_many :books
	has_many :series
end
