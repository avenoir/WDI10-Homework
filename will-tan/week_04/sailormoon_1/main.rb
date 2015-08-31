require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'base64'
require 'pry'

ActiveRecord::Base.logger = Logger.new(STDERR) # Show SQL statement it writes in the console

ActiveRecord::Base.establish_connection(
	:adapter => 'sqlite3',
	:database => 'database.db'
)

class Sailor < ActiveRecord::Base
end

after do
	ActiveRecord::Base.connection.close
end

get '/' do
	erb :home
end

get '/sailors' do
	@sailors = Sailor.all
	erb :'sailors/index'
end

get '/sailors/new' do
	erb :'sailors/new'
end

post '/sailors' do 
	data = params[:image]
	sailor = Sailor.create :headshot => data
	# binding.pry
	redirect to "/sailors/#{ sailor.id }"
end

get '/sailors/:id' do
  @sailor = Sailor.find params[:id]
  erb :'sailors/show'
end

get '/sailors/:id/delete' do
	sailor = Sailor.find params[:id]
	sailor.destroy
	redirect to '/sailors'
end

get '/sailors/:id/edit' do
	@sailor = Sailor.find params[:id]
	erb :'sailors/edit'
end

post '/sailors/:id' do
	sailor = Sailor.find params[:id]
	sailor.update :name => params[:name], :superpower => params[:superpower], :costume => params[:costume], :headshot => sailor.headshot
	redirect to "/sailors/#{ params[:id] }"
end