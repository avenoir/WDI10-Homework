require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
	:adapter => 'sqlite3',
	:database => 'database.db'
	)


class Alien < ActiveRecord::Base
end

after do 
	ActiveRecord::Base.connection.close
end	

get '/' do 
	erb :home
end

get '/aliens' do 
	@aliens = Alien.all
	erb :'aliens/index'
end	

get '/aliens/new' do
	erb :'aliens/new'
end

post '/aliens' do	

	alien = Alien.create :species => params[:species], :planet => params[:planet], :bio => params[:bio], :image => params[:image]

	redirect to "/aliens/#{ alien.id }"
end


get '/aliens/:id' do

  	@alien = Alien.find params[:id]

  erb :'aliens/show'
end

get '/aliens/:id/delete' do
	alien = Alien.find params[:id]
	alien.destroy #this line makes me sad :(
	redirect to '/aliens'
end

get '/aliens/:id/edit' do
	@alien = Alien.find params[:id]
  	erb :'aliens/edit'
end	

post '/aliens/:id' do

	alien = Alien.find params[:id]
	alien.species = params['species']
	alien.planet = params['planet']
	alien.bio = params['bio']
	alien.image = params[:image]

	alien.save

	redirect to "/aliens/#{ alien.id }"
end


def query_db(sql)
	puts sql

	db = SQLite3::Database.new 'database.db'
	db.results_as_hash = true

	@data = db.execute sql
	db.close

	@data # return whatever we retrieved
end

