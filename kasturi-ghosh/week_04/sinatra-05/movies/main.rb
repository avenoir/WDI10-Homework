require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'sqlite3'

get '/' do 
	erb :home
end

get '/movies' do

	@title = params[ :movietitle ]
	url = "http://omdbapi.com/?s=#{ @title }"

	movie_info_list = HTTParty.get url
	@title_list = movie_info_list[ 'Search' ]
	
	erb :movies
end

get '/poster' do

	@title = params[ :movietitle ]

	@saved = query_db "SELECT * FROM movies WHERE title='#{@title}' COLLATE NOCASE"

    if @saved.empty?

    	@message = "Loading poster from OMDB"
		url = "http://omdbapi.com/?t=#{ @title }"

		movie_info = HTTParty.get url
		@poster = movie_info[ 'Poster' ]
		@year = movie_info[ 'Year' ]

		query_db "INSERT INTO movies (title, year, image) VALUES ('#{@title}', '#{@year}', '#{@poster}')"

	else # already in the database, so no need to bother OMDB

		@message = "Loading movie from Database"

        @saved = @saved.first
        @poster = @saved['image']
        @title = @saved['title']
        @year = @saved['year']

    end

	erb :poster
end

get '/saved' do    
  @saved = query_db 'SELECT * FROM movies'
  erb :'/saved'
end

def query_db( sql )
	puts sql #runs the sql code

	db = SQLite3::Database.new 'database.db'
	db.results_as_hash = true

	@data = db.execute sql
	db.close

	@data #return what we retrieved
end