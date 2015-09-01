require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'sqlite3'

require 'pry' 

#write a if statement to check if stuff in database is already there, so display database data instead of imdb website data 

# require 'pry'

get '/' do             # like event handlers 
	erb :lookup
end
 


get '/lookup' do 
	@title = params[:movietitle]

  	@saved = query_db "SELECT * FROM movies WHERE name='#{@title}' COLLATE NOCASE"

  	if @saved.empty? # not currently in the database

		url = "http://omdbapi.com/?t=#{ @title }"
		movie_info = HTTParty.get url
		@poster = movie_info['Poster']
		@title1 = movie_info['Title']
		@imdbid = movie_info['imdbID']
         
         @message = "movie loading  from OMDB"

		query_db "INSERT INTO movies (imdbid, name, image) VALUES ('#{ @imdbid }','#{ @title1 }', '#{ @poster}')"

	else # already in the database, so no need to bother OMDB

		@saved = @saved.first
		@poster = @saved['image']
		@title1 = @saved['name']
		@imdbid = @saved['imdbID']
        
         @message = "movie loading  from database"
	end

  	erb :lookup
end

get '/saved' do	
  @saved = query_db 'SELECT * FROM movies'
  erb :'/saved'
end






def query_db(sql)
  puts sql

  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  @data = db.execute sql
  db.close

  @data # Return whatever we retrieved
end



