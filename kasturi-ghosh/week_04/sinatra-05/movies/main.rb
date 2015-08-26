require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do 
	erb :movies
end

get '/movies' do
	# @movie_list = [];
	@title = params[ :movietitle ].upcase
	url = "http://omdbapi.com/?t=#{ @title }"
	movie_info = HTTParty.get url
	@poster = movie_info[ 'Poster' ]
	# @movie_list << params[ :movietitle ] if /@title/.match('params[ :movietitle ]')
	erb :movies
end
