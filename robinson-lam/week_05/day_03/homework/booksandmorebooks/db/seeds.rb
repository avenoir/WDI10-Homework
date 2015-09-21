# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.destroy_all
Book.destroy_all
Series.destroy_all

Author.create({ :id => 1, :name => 'Patrick Rothfuss', :dob => '1973-06-06', :signature => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Pat_Rothfuss_Signature.png/320px-Pat_Rothfuss_Signature.png' })
Book.create({ :id => 1, :title => 'The Name of the Wind', :genre => 'Heroic Fantasy', :pages => 662, :series_id => 1, :author_id => 1 })
Book.create({ :id => 2, :title => "The Wise Man's Fear", :genre => 'Heroic Fantasy', :pages => 994, :series_id => 1, :author_id => 1 })
Series.create({ :id => 1, :name => 'The Kingkiller Chronicle', :author_id => 1 })