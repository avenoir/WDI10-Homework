require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'bundler'
require 'nexter'

ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
	:adapter => 'sqlite3',
	:database => 'database.db'
)

class Boardgame < ActiveRecord::Base
end

after do
	ActiveRecord::Base.connection.close
end


get '/' do
	boardgames = Boardgame.all
	@count = boardgames.count
	erb :home
end

get '/boardgames' do 
	@boardgames = Boardgame.all 
	erb :'boardgames/index'
end

get '/boardgames/new' do 
	erb :'boardgames/new'
end

post '/boardgames' do 

	if params['name'] == ""
		@message = "Invalid Entry. Try again."
		erb :'boardgames/new'

	else

		boardgame = Boardgame.new
		boardgame.name = params['name']
		boardgame.designers = params['designers']
		boardgame.year = params['year']
		boardgame.players = params['players']
		boardgame.time = params['time']
		boardgame.website = params['website']
		boardgame.image = params['image']
	
		boardgame.save

		redirect to "/boardgames/#{ boardgame.id }"
	end
end

get '/boardgames/:id' do 
  @boardgame = Boardgame.find params[:id]

  @saved = Boardgame.where( name: "#{@boardgame.name}")
  
  @boardgames = Boardgame.all
  @nexter = Nexter.wrap( @boardgames, @boardgame )

 # binding.pry	
	
  erb :'boardgames/show'
 end

get '/boardgames/:id/delete' do 
	@boardgame  = Boardgame.find params[:id]
	erb :'/boardgames/delete'
end

get '/teststuff/:id' do
	@boardgame  = Boardgame.find params[:id]
	erb :'/boardgames/delete'
end


post '/boardgames/:id/delete' do 
	if params[:y]
		boardgame  = Boardgame.find params[:id]
		boardgame.destroy
		redirect to '/boardgames'
	else
		redirect to '/boardgames'
	end
end

# get '/boardgames/:id/delete' do 
# 	boardgame  = Boardgame.find params[:id]
# 	boardgame.destroy
# 	redirect to '/boardgames'
# end

get '/boardgames/:id/edit' do 
  @boardgame = Boardgame.find params[:id]
  erb :'boardgames/edit'
end

post '/boardgames/:id' do
	boardgame = Boardgame.find params[:id]

	boardgame.name = params['name']
	boardgame.designers = params['designers']
	boardgame.year = params['year']
	boardgame.players = params['players']
	boardgame.time = params['time']
	boardgame.website = params['website']
	boardgame.image = params['image']

	boardgame.save

	redirect to "/boardgames/#{ params[:id] }"
end

