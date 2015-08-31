class StocksController < ApplicationController
	def stocks
		@stock_symbol = params[:stock]
		info = YahooFinance.get_quotes YahooFinance::StandardQuote, @stock_symbol
        @price = info[@stock_symbol].lastTrade if params[:stock]
    end   
end	
