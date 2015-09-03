class StockController < ApplicationController


	def get_quote 
		@stock_symbol = params[:stock_symbol]
		unless @stock_symbol.nil? || @stock_symbol.empty?
			info = YahooFinance.get_quotes YahooFinance::StandardQuote, @stock_symbol
			@price = info[@stock_symbol].lastTrade
		end
		render "stock"
	end


end
