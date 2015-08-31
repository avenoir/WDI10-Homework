require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'sqlite3'

get '/' do
	erb :home	
end

get '/movies' do
	@title = params[:movie_title]
	url = "http://omdbapi.com/?s=#{ @title }"
	movie_list_hash = HTTParty.get url
	if movie_list_hash['Response'] == 'False'
		erb :error
	else
		@movie_list_array = movie_list_hash['Search']
		@length = @movie_list_array.length
		if @length > 1
			erb :movies
		else
			url = "http://omdbapi.com/?t=#{ @title }"
			movie_info = HTTParty.get url
			@imdbID = movie_info[ 'imdbID' ]
			#check if our database has the movie
			@movie = query_db "SELECT * FROM movies WHERE id = '#{ @imdbID }'"
			@plot = movie_info['Plot']
			if @movie.length != 0
				@poster = @movie.first['poster']
				erb :movies
			else	
				@genre = movie_info[ 'Genre' ]
				@poster = movie_info[ 'Poster' ]
				query_db "INSERT INTO movies (id, title, genre, poster) VALUES ('#{ @imdbID }', '#{ @title }', '#{ @genre}', '#{ @poster }')"
				erb :movies
			end
		end
	end
end

get '/posters' do
		@title_uniq = params[:movie_title]
		url = "http://omdbapi.com/?t=#{ @title_uniq }"
		movie_info = HTTParty.get url
		@length = 1
		@imdbID = movie_info[ 'imdbID' ]
		@movie = query_db "SELECT * FROM movies WHERE id = '#{ @imdbID }'"
		@plot = movie_info[ 'Plot' ]
		if @movie.length != 0
			@poster = @movie.first['poster']
			erb :movies
		else	
			@genre = movie_info[ 'Genre' ]
			@poster = movie_info[ 'Poster' ]
			query_db "INSERT INTO movies (id, title, genre, poster) VALUES ('#{ @imdbID }', '#{ @title_uniq }', '#{ @genre}', '#{ @poster }')"
			erb :movies
		end
end

get '/movies/all' do
	@movies = query_db "SELECT * FROM movies"
	erb :'movies/index'
end

get '/movies/:id/delete' do
	query_db "DELETE FROM movies WHERE id = '#{ params[:id] }'"
	redirect to '/movies/all'
end

def query_db(sql)
	db = SQLite3::Database.new 'database.db'
	db.results_as_hash = true

	@data = db.execute sql
	db.close

	@data # Return whatever we retrieved
end