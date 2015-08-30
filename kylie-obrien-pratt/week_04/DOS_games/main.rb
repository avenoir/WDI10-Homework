require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'active_record'

ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

class Game < ActiveRecord::Base #
end

after do
  ActiveRecord::Base.connection.close
end

get '/' do #Loads home page url
  erb :home
end

get '/games' do #url of choice
  @games = Game.all #name of table/model
  erb :'DOS_games/index' #routing file
end

get '/games/new' do #gets new page, enter new butterfly
  erb :'DOS_games/new'
end

post '/games' do #links to new game form, creates new entry in table using info entered in form
  # butterfly = Butterfly.new
  # butterfly.name = params['name']
  # butterfly.family = params['family']
  # butterfly.image = params['image']

  # butterfly.save

#params relates to post method, name is key in hash
  @game = Game.create :name => params[:name], :year => params[:year], :creator => params[:creator], :synopsis => params[:synopsis], :rating => params[:rating] #columns in db, form links to col names

  redirect to "/games/#{ game.id }"
end

get '/games/:id' do #retrieve butterfly instance using butterfly id
  @games = Game.find params[:id]
  erb :'DOS_games/show'
end

get '/games/:id/delete' do
  game = Game.find params[:id]
  game.destroy
  redirect to '/games' #looks for get method, url
end

get '/games/:id/edit' do
  @game = Game.find params[:id]
  erb :'DOS_games/edit'
end

post '/games/:id' do
  # query_db "UPDATE butterflies SET name='#{ params['name'] }', family='#{ params['family']}', image='#{ params['image'] }' WHERE id = #{ params['id'] }"
  game = Game.find params[:id]
  # butterfly.name = params[:name]
  # butterfly.family = params[:family]
  # butterfly.image = params[:image]

  # butterfly.save

  game.update :name => params[:name], :year => params[:year], :creator => params[:creator], :synopsis =>[:synopsis], :rating =>[:rating]

  redirect to "/games/#{ game.id }"
end

get '/lookup' do 
  @name = params[:name] #eg Jaws  what types in box
  url = "http://thegamesdb.net/api/GetGamesList.php?name={ @name }"
  game_art = HTTParty.get url #website data
  @boxart = game_art['<boxart side="front" width="1530" height="2126">boxart/original/front/170-1.jpg</boxart>'] #just retrieve poster info, object in array
  erb :show
end
