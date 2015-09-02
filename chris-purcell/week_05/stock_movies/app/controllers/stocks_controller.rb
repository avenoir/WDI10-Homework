class StocksController < ApplicationController
	def home
	end

	def search
		@stock_symbol = params[:x].upcase
		unless @stock_symbol.empty?
			info = YahooFinance::get_quotes YahooFinance::StandardQuote, @stock_symbol
			@price = info[@stock_symbol].lastTrade
		end
	end
end