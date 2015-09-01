require 'sinatra'
require 'sinatra/reloader'
require 'httparty'



# require 'pry'

get '/' do             # like event handlers 
	erb :lookup
end
 


get '/lookup' do 
	@title = params[:movietitle]
	url = "http://omdbapi.com/?s=#{ @title }"
 	similar_name_movie_info = HTTParty.get url
  	@movie_info = similar_name_movie_info['Search']
  	erb :lookup
end

# {"Search":[{"Title":"Aliens","Year":"1986","imdbID":"tt0090605","Type":"movie"},{"Title":"Cowboys & Aliens","Year":"2011","imdbID":"tt0409847","Type":"movie"},{"Title":"Monsters vs. Aliens","Year":"2009","imdbID":"tt0892782","Type":"movie"},{"Title":"Aliens vs. Predator: Requiem","Year":"2007","imdbID":"tt0758730","Type":"movie"},{"Title":"Aliens in the Attic","Year":"2009","imdbID":"tt0775552","Type":"movie"},{"Title":"Ancient Aliens","Year":"2009–","imdbID":"tt1643266","Type":"series"},{"Title":"Evil Aliens","Year":"2005","imdbID":"tt0383353","Type":"movie"},{"Title":"The Troops & Aliens","Year":"1979","imdbID":"tt0079200","Type":"movie"},{"Title":"Aliens in America","Year":"2007–2008","imdbID":"tt0790603","Type":"series"},{"Title":"Aliens of the Deep","Year":"2005","imdbID":"tt0417415","Type":"movie"}]}




#  url = "http://www.omdbapi.com/?i=#{ @search_data["Search"][0]["imdbID"] }"
# -      @film_data = HTTParty.get(url)



# get '/lookup' do 
# @title = params[:movietitle]
# url = "http://omdbapi.com/?t=#{ @title }"
#  movie_info = HTTParty.get url
#   @poster = movie_info['Poster']


# {"Title":"Jaws","Year":"1975","Rated":"PG","Released":"20 Jun 1975","Runtime":"124 min","Genre":"Adventure, Drama, Thriller","Director":"Steven Spielberg","Writer":"Peter Benchley (screenplay), Carl Gottlieb (screenplay), Peter Benchley (based on the novel by)","Actors":"Roy Scheider, Robert Shaw, Richard Dreyfuss, Lorraine Gary","Plot":"When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and grizzled fisherman set out to stop it.","Language":"English","Country":"USA","Awards":"Won 3 Oscars. Another 10 wins & 14 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_SX300.jpg","Metascore":"79","imdbRating":"8.1","imdbVotes":"363529","imdbID":"tt0073195","Type":"movie","Response":"True"}

# get '/lookup' do  # look up of stock happens here   # like event handlers
	
#     @stock_symbol =  params[:stocksymbol]
#     info = YahooFinance.get_quotes YahooFinance::StandardQuote, @stock_symbol 
#     # @ symbols only needed when you need to view 
# 	 @price = info[@stock_symbol].lastTrade 

# 	@result = @price 

# 	erb :lookup
# end




