class PageController < ApplicationController 
	def search
		render :search
	end

	def movie
    @title = params[:title]
    url = "http://omdbapi.com/?t=#{ @title }"

    movie_info = HTTParty.get url
    @title = movie_info['Title']
    @poster = movie_info['Poster']
    @plot = movie_info['Plot']

	  render :result
	end

	def stocks
		@stock_symbol = params[:stock]

		unless @stock_symbol.empty?
			info = YahooFinance.get_quotes(YahooFinance::StandardQuote, @stock_symbol)
			@price = info[@stock_symbol].lastTrade
			@name = info[@stock_symbol].name
		end

		render :price
	end
end