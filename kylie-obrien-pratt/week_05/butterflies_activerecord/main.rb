require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

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

get '/butterflies' do
  @butterflies = Butterfly.all
  erb :'butterflies/index'
end

get '/butterflies/new' do
  erb :'butterflies/new'
end

post '/butterflies' do
  butterfly = Butterfly.create :name => params[:name], :family => params[:family], :image => params[:image], :plant_id => params[:plant_id]

  redirect to "/butterflies/#{ butterfly.id }"
end

get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :'butterflies/show'
end

get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to '/butterflies'
end

get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :'butterflies/edit'
end

post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.update :name => params[:name], :family => params[:family], :image => params[:image], :plant_id => params[:plant_id]

  redirect to "/butterflies/#{ butterfly.id }"
end

get '/plants' do
  @plants = Plant.all
  erb :'plants/index'
end

get '/plants/new' do
  erb :'plants/new'
end

post '/plants' do
  plant = Plant.create :name => params[:name], :image => params[:image]
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
  redirect to "/plants/#{ plant.id }"
end

get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to '/plants'
end
    # enter new data in form
    get '/plants/new' do
      erb :'plants/new'
    end

    #if post to plants
    post '/plants' do
      plant = Plant.create :name => params[:name], :image => params[:image]
      redirect to "/plants/#{plant.id}"
    end


    # get data from db, redirects browser to show page of individual plant
    get '/plants?:id' do
      @plant = Plant.find params[:id]
      erb :'plants/show'
    end

    get '/plants/:id/edit' do
      @plant = Plant.find params[:id]
      erb :edit.erb

    post '/butterflies/:id' do
    #triggered if post request to /plants/id
      plant = Plant.find params[:id]
      plant.update :name => params[:name], :image => params[:image]
      # redirect is get request, next time search for this id it redirects to this url
      redirect to "/plants/#{params[:id]}"
    end

    #delete record from /plants
    get '/plants/:id/:delete' do
      plant = Plant.find params[:id]
      plant.destroy
      redirect to '/plants'
    end
end









# # when to write @ for  method?
# #   order of methods?

# require 'sinatra'
# require 'sinatra/reloader'
# require 'sqlite3'
# require 'active_record'

# #Turn on logging, will show you each SQL statement it writes
# ActiveRecord::Base.logger = Logger.new(STDERR)

# ActiveRecord::Base.establish_connection(
#     :adapter => 'sqlite3',
#     :database => 'database.db'
#     )

# require_relative './butterfly'
# require_relative './plant'

# class Butterfly < ActiveRecord::Base
#     end

#     after do
#       ActiveRecord::Base.connection.close
#     end

#     get '/' do
#       erb :home
#     end

#     get '/butterflies/new' do
#       erb :'butterflies/new'
#     end

#     get '/butterflies/:id' do
#       @butterfly = Butterfly.find params[:id]
#       erb :'butterflies/show'
#     end

#     get '/butterflies/:id/:delete' do
#       butterfly = Butterfly.find params[:id]
#       butterfly.destroy
#       redirect to '/butterflies'
#     end

#     get '/butterflies/:id/edit' do
#       @butterfly = Butterfly.find params[:id]
#       erb :'butterflies/edit'
#     end

#     post 'butterflies' do
#       @butterfly

#       #Updates a record

#     post '/butterflies/:id' do
#       # query_db "UPDATE butterflies SET name='#{ params['name'] }', family='#{ params['family']}', image='#{ params['image'] }' WHERE id = #{ params['id'] }"
#       # redirect to "/butterflies/#{ params[:id] }"
#       # load exisitng butterfly and changing some properties
#       butterfly = Butterfly.find params[:id]
#       # butterfly.name = params[:name]
#       # butterfly.family = params[:family]
#       # butterfly.image = params[:image]

#       butterfly.create :name => params[:name], :family => params[:family], :image => params[:image], :plant_id => params[:plant_id]
#       #get request
#       redirect to "/butterflies/#{butterfly[:id]}"
#     end

#        post '/butterflies/:id' do
#       # query_db "UPDATE butterflies SET name='#{ params['name'] }', family='#{ params['family']}', image='#{ params['image'] }' WHERE id = #{ params['id'] }"
#       # redirect to "/butterflies/#{ params[:id] }"
#       # load exisitng butterfly and changing some properties
#       butterfly = Butterfly.find params[:id]
#       # butterfly.name = params[:name]
#       # butterfly.family = params[:family]
#       # butterfly.image = params[:image]

#       butterfly.update :name => params[:name], :family => params[:family], :image => params[:image]
#       #get request
#       redirect to "/butterflies/#{params[:id]}"
#     end

#     #shows list of all plants
#     get '/plants' do
#       @plants = Plant.all
#       erb :'plants/index'
#     end

