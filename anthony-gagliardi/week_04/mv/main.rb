require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do
	erb :form
end

get '/search' do
	@title = params[:title].upcase
	url = "http://omdbapi.com/?t=#{ @title }"
	movie_info = HTTparty.get url;

	erb :search
end