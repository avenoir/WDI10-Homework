require "sinatra"
require "sinatra/reloader"
require "httparty"
require "sqlite3"

get "/" do
	erb :movie
end

get "/search" do
	@name = params[:name]
	@poster = nil
	unless @name.empty?
		url = "http://omdbapi.com/?s=#{@name}"
		@movielist = HTTParty.get url
		if @movielist.has_key?('Search') && @movielist['Search'].count == 1
		    redirect "/get_poster?id=#{ @movielist['Search'][0]['imdbID'] }"
		elsif @movielist.has_key?('Search') && @movielist['Search'].count > 1
			erb :movielist
		else
			# no movie found
			erb :movie
		end
	end
end

get "/get_poster" do
	@id = params[:id]

    movie_info = query_db("SELECT * FROM movies WHERE id = '#{@id}' ").first

	if movie_info.nil?
		url = "http://omdbapi.com/?i=#{@id}"
		movie_info = HTTParty.get url
		@poster = movie_info['Poster']
		
		# Insert into database
		query_db "INSERT INTO movies (id, poster) VALUES ( '#{@id}', '#{@poster}' )"
	else
		@poster = movie_info['poster']			
	end
	# end	
	erb :movie
end

def query_db(sql)
  puts sql

  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  @data = db.execute sql
  db.close

  @data # Return whatever we retrieved
end



