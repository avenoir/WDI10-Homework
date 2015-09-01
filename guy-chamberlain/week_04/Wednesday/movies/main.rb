require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do
	erb :movie
end

get "/search" do
	@name = params[:name]
	@poster = nil
	unless @name.empty?
		url = "http://omdbapi.com/?s=#{@name}"
		@movielist = HTTParty.get url
		if @movielist.has_key?('Response') && @movielist['Response'] == false
			erb :movie
		elsif @movielist.has_key?('Search') && @movielist['Search'].count == 1
		    redirect "/get_poster?id=#{ @movielist['Search'][0]['imdbID'] }"
		else
			erb :movielist
		end
	end
end

get "/get_poster" do
	@id = params[:id]
	url = "http://omdbapi.com/?i=#{@id}"
	movie_info = HTTParty.get url
	@poster = movie_info['Poster']
	erb :movie
end



