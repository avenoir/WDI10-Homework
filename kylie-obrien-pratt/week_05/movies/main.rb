require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
	erb :film
end

get '/lookup' do 
  @title = params[:movietitle] #eg Jaws  what types in box
  url = "http://omdbapi.com/?t=#{ @title }"
  movie_info = HTTParty.get url #website data
  @poster = movie_info['Poster'] #just retrieve poster info, object in array
  @title1 = movie_title['Title']
  @year = movie_year['Year']
  @released = release_date['Release']
  erb :film
end

