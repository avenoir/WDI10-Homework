require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'sqlite3'
require 'pry'

def query_db(sql)
	puts sql

	db = SQLite3::Database.new 'database.db'
	db.results_as_hash = true

	@data = db.execute sql
	db.close

	@data
end

get '/' do 
	erb :movies
end

get '/mvi' do 
	@title = params[:movie].downcase.tr(" ", "+")
	url = "http://omdbapi.com/?s=#{ @title }"
	movie_info = HTTParty.get url
	@list_of_movies = movie_info["Search"]
	erb :movies

end

get '/movies/index' do
	@movies = query_db('SELECT * from movies').first
	erb :'movies/index'
end

get '/poster/:id' do
	@movies = query_db("SELECT * from movies WHERE title = '#{ params[:id]}'")

	if @movies.empty?
		url = "http://omdbapi.com/?t=#{params[:id]}"
		movie_infos = HTTParty.get url
		@title = movie_infos["Title"]
		@poster = movie_infos["Poster"]
		@plot = movie_infos["Plot"]
		@imdb_id = movie_infos["imdbID"]
		query_db("INSERT INTO movies (title, plot, image) VALUES ('#{ params[:id] }', '#{ @plot }', '#{ @poster }')")
	else 
		@movies = @movies.first
		binding.pry
		@title = @movies["title"].tr('+', ' ')
		@poster = @movies["image"]
		@plot = @movies["plot"]
		# @imdb_id = @movies["imdbID"]
	end

	erb :poster
end

