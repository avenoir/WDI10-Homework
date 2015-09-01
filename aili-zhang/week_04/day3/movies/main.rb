require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
	erb :search
end

get '/result' do
	@title = params[:title]
	url = "http://omdbapi.com/?s=#{ @title }"
	movie_info = HTTParty.get url
	
	@title_list = movie_info["Search"]
	poster = movie_info["Poster"]

	erb :result
end

