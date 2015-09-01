require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'YahooFinance'

get '/' do
	erb :stocks
end

get '/stocks' do

	@stock_symbol = params[ :stocksymbol ].upcase
	unless @stock_symbol.empty?
	 info = YahooFinance::get_quotes( YahooFinance::StandardQuote, @stock_symbol )
	 @price = info[ @stock_symbol ].lastTrade
	end

	erb :stocks

end