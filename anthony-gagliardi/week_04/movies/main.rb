require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'sqlite3'

get '/' do
	erb :form
end

get '/search' do 
	@title = params[:movietitle]
	url = "http://omdbapi.com/?t=#{ @title }"
	movie_info = HTTParty.get url
	@poster = movie_info['Poster']
	@poster
	erb :search
end

get '/butterflies/:id' do
	@butterfly = query_db("SELECT * FROM butterflies WHERE id = #{ params[:Poster] }").first
	erb :'butterflies/show' # SHOW for show function (index - all, show - single)
end