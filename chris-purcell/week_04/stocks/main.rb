require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'
require 'pry'

get '/' do 
	erb :stocks
end

get '/stocks' do
	@stock_symbol = params[:x].upcase
	unless @stock_symbol.empty?
		info = YahooFinance::get_quotes YahooFinance::StandardQuote, @stock_symbol
		@price = info[@stock_symbol].lastTrade
	end
	erb :stocks
end