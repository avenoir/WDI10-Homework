class StocksController < ApplicationController
	def stockhome
	end

	def lookupform
	end

	def lookup
		@stock_symbol = params[:stock_symbol].upcase # stock_symbol is the name of input in stock.erb

		unless @stock_symbol.empty? # only execute if the user enters the symbol
			info = YahooFinance::get_quotes YahooFinance::StandardQuote, @stock_symbol
			@result = info[@stock_symbol].lastTrade
		end
	end
end

