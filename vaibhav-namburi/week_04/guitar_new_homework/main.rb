require 'pry'
require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"

ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(

	:adapter => 'sqlite3',
	:database => 'database.db'

)

class Guitar < ActiveRecord::Base
end

after do
	ActiveRecord::Base.connection.close
end

get '/' do 

	erb :home
end

get '/guitars' do

	@guitars = Guitar.all

	erb :"guitars/index"
end

get '/guitars/new' do
	erb :"guitars/new"
end

post '/guitars/create' do

	guitar = Guitar.create :name=>params[:name], :guitarist=>params[:guitarist], :image=>params[:image]

	redirect to "/guitars/#{guitar.id}"

end

get '/guitars/:id' do

	@guitar = Guitar.find params[:id]
	@guitarist = (@guitar.guitarist).tr(" ", "_")

	erb :"guitars/show"

end

get '/guitars/delete/:id' do

	guitar = Guitar.find params[:id]
	guitar.destroy

	redirect to '/guitars'
end

get '/guitars/edit/:id' do

	@guitar = Guitar.find params[:id]

	erb :'guitars/edit'

end

post '/guitars/:id' do

	guitar = Guitar.find params[:id]

	guitar.update name: params[:name], guitarist: params[:guitarist], image: params[:image]

	redirect to "/guitars/#{params[:id]}"
end
