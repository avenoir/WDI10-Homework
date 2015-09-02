class MovieController < ApplicationController

	def search 
		@name = params[:name]
		@poster = nil
		unless @name.nil? || @name.empty?
			url = "http://omdbapi.com/?s=#{@name}"
			@movielist = HTTParty.get url
			if @movielist.has_key?('Search') && @movielist['Search'].count == 1
			    # redirect "/get_poster?id=#{ @movielist['Search'][0]['imdbID'] }"
				redirect_to :action => 'get_poster', :id => "#{ @movielist['Search'][0]['imdbID'] }"
			elsif @movielist.has_key?('Search') && @movielist['Search'].count > 1
				render "movielist"
			else
				# no movie found
				render "movie"
			end
		else
			render "movie"	
		end
	end

	def get_poster 
		@id = params[:id]

		url = "http://omdbapi.com/?i=#{@id}"
		movie_info = HTTParty.get url
		@poster = movie_info['Poster']
			
		render "movie"
	end


end
