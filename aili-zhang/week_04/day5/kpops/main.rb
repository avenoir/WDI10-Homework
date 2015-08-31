require 'sinatra'
require 'sinatra/reloader'
require 'active_record'


ActiveRecord::Base.establish_connection(
	:adapter => 'sqlite3',
	:database => 'database.db'
)

class Kpop < ActiveRecord::Base
end

after do
	ActiveRecord::Base.connection.close
end


get '/' do
	erb :home
end


get '/kpops' do
	@kpops = Kpop.all
	erb :'kpops/index'
end


get '/kpops/new' do
	erb :'kpops/new'
end


post '/kpops' do
	kpop = Kpop.create :group_name => params[:group_name], :num_members => params[:num_members], :image => params[:image]
	redirect to "/kpops/#{ kpop.id }"
end



get '/kpops/:id' do 
	@kpop = Kpop.find params[:id]
	erb :'kpops/show'
end


get '/kpops/:id/delete' do
	kpop = Kpop.find params[:id]
	kpop.destroy

	redirect to '/kpops'
end


get '/kpops/:id/edit' do
	@kpop = Kpop.find params[:id]
	erb :'kpops/edit'
end



post '/kpops/:id' do
	kpop = Kpop.find params[:id]
	kpop.update :group_name => params[:group_name], :num_members => params[:num_members], :image => params[:image]

	redirect to "/kpops/#{ params[:id] }"
end







