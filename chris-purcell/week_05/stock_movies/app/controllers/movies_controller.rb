class MoviesController < ApplicationController
	def home
	end

	def search
		@title = params[:movie].downcase.tr(" ", "+")
		url = "http://omdbapi.com/?s=#{ @title }"
		movie_info = HTTParty.get url
		@list_of_movies = movie_info["Search"] || []
	end

	def poster
		@title = params[:movie].downcase.tr(" ", "+")
		url = "http://omdbapi.com/?t=#{ @title }"
		movie_infos = HTTParty.get url
		@title = movie_infos["Title"]
		@poster = movie_infos["Poster"]
		@plot = movie_infos["Plot"]
		@imdb_id = movie_infos["imdbID"]
	end
end