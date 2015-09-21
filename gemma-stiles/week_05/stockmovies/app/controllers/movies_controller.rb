class MoviesController < ApplicationController

	def movies
		@title = params[:movie] #IRL: params[:something]
		url = "http://omdbapi.com/?t=#{@title}"
		movie_info = HTTParty.get url;
		
			@poster = movie_info['Poster']
			@plot = movie_info['Plot']
			@poster = movie_info["Poster"]
			@title = movie_info['Title']
			@genre = movie_info['Genre']
			@released = movie_info['Released']
			@director = movie_info['Director']
			@writer = movie_info['Writer']
			@plot = movie_info['Plot']
			@runtime = movie_info['Runtime']

	end

end
