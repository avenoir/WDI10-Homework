require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
	erb :form
end

	# get stuff from the params hash ( params[:stock] )
	# Use the Yahoo finance gem to get the information about it
	# Store the value of the last trade in an instance variable ( @last_trade )
get '/lookup' do
	@stock_symbol = params[:stocksymbol].upcase
	unless @stock_symbol.empty?
		info = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_symbol)
		@price = info[@stock_symbol].lastTrade
	erb :lookup
end



# get '/multiply/:x/:y' do 
# 	@ result = params[:x].to_f * params[:y].to_f
# 	erb :calc #do embedded ruby in calc file
# end

# get '/add/:x/:y' do
# 	@result = params[:x].to_f + params[:y].to_f
# 	erb :calc
# end