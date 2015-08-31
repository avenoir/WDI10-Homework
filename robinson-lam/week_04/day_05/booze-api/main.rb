require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

class Booze < ActiveRecord::Base
end

# after do # Do this after any of the routes
#   ActiveRecord::Base.connection_close
#    # Close so we don't run out of connections to database
# end

get '/' do
  redirect to '/booze'
end

get '/booze' do
  @booze = Booze.all
  erb :'booze/index'
end

post '/booze' do
  booze = Booze.create(:name => params['name'],
                       :description => params['description'],
                       :country_of_origin => params['country_of_origin'])
  redirect to "/booze/#{ booze.id }"
end

get '/booze/new' do
  erb :'booze/new'
end

get '/booze/:id' do
  @booze = Booze.find(params[:id])
  erb :'booze/show'
end

get '/booze/:id/edit' do
  @booze = Booze.find(params[:id])
  erb :'booze/edit'
end

post '/booze/:id' do
  booze = Booze.find(params[:id])
  booze.update(name: "#{ params['name'] }",
               description: "#{ params['description'] }",
               country_of_origin: "#{ params['country_of_origin'] }")
  redirect to "booze/#{ params[:id] }"
end

get '/booze/:id/delete' do
  booze = Booze.find(params[:id])
  booze.destroy
  redirect to "/booze"
end
