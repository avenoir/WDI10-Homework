# == Schema Information
#
# Table name: books
#
#  id              :integer          not null, primary key
#  title           :text
#  date_of_publish :date
#  genre           :text
#  cover           :text
#  created_at      :datetime
#  updated_at      :datetime
#

class Book < ActiveRecord::Base
	belongs_to :author
end
