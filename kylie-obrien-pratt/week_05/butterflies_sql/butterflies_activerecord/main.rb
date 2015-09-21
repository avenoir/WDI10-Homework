require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

#Turn on logging, will show you each SQL statement it writes
ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.db'
    )

class Butterfly < ActiveRecord::Base
end

after do
  ActiveRecord::Base.connection.close
end

get '/' do
  erb :home
end

get '/butterflies/new' do
  erb :'butterflies/new'
end

get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :'butterflies/show'
end

get '/butterflies/:id/:delete' do
  @butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to '/butterflies'
end

get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :'butterflies/edit'
end

post 'butterflies' do
  @butterfly

post '/butterflies/:id' do
  # query_db "UPDATE butterflies SET name='#{ params['name'] }', family='#{ params['family']}', image='#{ params['image'] }' WHERE id = #{ params['id'] }"
  # redirect to "/butterflies/#{ params[:id] }"
  # load exisitng butterfly and changing some properties
  butterfly = Butterfly.find params[:id]
  # butterfly.name = params[:name]
  # butterfly.family = params[:family]
  # butterfly.image = params[:image]

  butterfly.update :name => params[:name], :family => params[:family], :image => params[:image]
  #get request
  redirect to "/butterflies/#{params[:id]}"
end


def query_db(sql)
  puts sql

  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  @data = db.execute sql
  db.close

  @data # Return whatever we retrieved
end












