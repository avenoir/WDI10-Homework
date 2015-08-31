require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do

end

get '/search' do
  @title = params[:title]
  url = "http://omdbapi.com/?t=#{ @title }"

  movie_info = HTTParty.get url
  @title_list = movie_info["Search"]
  @poster = movie_info["Poster"]

  erb :search
end
