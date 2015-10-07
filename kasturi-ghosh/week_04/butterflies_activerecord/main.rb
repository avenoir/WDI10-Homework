require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
	:adapter => 'sqlite3',
	:database => 'database.db'
)

require_relative './butterfly'
require_relative './plant'

after do
	ActiveRecord::Base.connection.close
end


get '/' do
	erb :home
end

get '/butterflies' do #to show the list of all butterflies
	@butterflies = Butterfly.all # SELECT * FROM butterflies
	erb :'butterflies/index'
end

get '/butterflies/new' do #to add new butterflies
	erb :'butterflies/new'
end

post '/butterflies' do #adding new butterflies and then redirecting it into the show page

	# query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{params['name']}', '#{params['family']}', '#{params['image']}')"

	butterfly = Butterfly.new
	butterfly.name = params['name']
	butterfly.family = params['family']
	butterfly.image = params['image']
	butterfly.plant_id = params['plant_id']

	butterfly.save

	# butterfly = Butterfly.create :name => params[:name], :family => params[:family], :image => params[:image]

	# redirect to '/butterflies'
	redirect to "/butterflies/#{ butterfly.id }"
end

get '/butterflies/:id' do #shows info on the butterfly link you clicked
  # @butterfly = query_db("SELECT * FROM butterflies WHERE id = #{ params[:id].to_i }").first #@butterfly = @butterfly.first

  @butterfly = Butterfly.find params[:id]
  erb :'butterflies/show'
  # @butterfly.inspect

end

get '/butterflies/:id/delete' do #remove a butterfly
	# query_db "DELETE FROM butterflies WHERE id = #{ params[:id] }"

	butterfly  = Butterfly.find params[:id]
	butterfly.destroy
	redirect to '/butterflies'
end

get '/butterflies/:id/edit' do #edit info on a butterfly
  # @butterfly = query_db("SELECT * FROM butterflies WHERE id = #{ params[:id] }").first

  @butterfly = Butterfly.find params[:id]
  erb :'butterflies/edit'
end

post '/butterflies/:id' do #the main update is done here
	# query_db "UPDATE butterflies SET name='#{ params['name'] }', family='#{ params['family']}', image='#{ params['image'] }' WHERE id = #{ params['id'] }"

	butterfly = Butterfly.find params[:id]
	butterfly.update :name => params[:name], :family => params[:family], :image => params[:image], :plant_id => params[:plant_id]
	# butterfly.name = params[:name]
	# butterfly.family = params[:family]
	# butterfly.image = params[:image]

	# butterfly.save

	redirect to "/butterflies/#{ params[:id] }"
end

get '/plants' do
	@plants = Plant.all
	erb :'plants/index'
end

get '/plants/new' do
	erb :'plants/new'
end

post '/plants' do 

	plant = Plant.new
	plant.name = params['name']
	plant.image = params['image']

	plant.save
	redirect to "/plants/#{ plant.id }"
end

get '/plants/:id' do
  @plant = Plant.find params[:id]
  erb :'plants/show'
end

get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :'plants/edit'
end

post '/plants/:id' do 
	plant = Plant.find params[:id]
	plant.update :name => params[:name], :image => params[:image]
	redirect to "/plants/#{ params[:id] }"
end

get '/plants/:id/delete' do
   plant  = Plant.find params[:id]
   plant.destroy
   redirect to '/plants'
end

# def query_db( sql )
# 	puts sql #runs the sql code

# 	db = SQLite3::Database.new 'database.db'
# 	db.results_as_hash = true

# 	@data = db.execute sql
# 	db.close

# 	@data #return what we retrieved
# end
