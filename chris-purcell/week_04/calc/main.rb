require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
	erb :calc
end

get '/calc' do
	@x = params[:x].to_f
	@y = params[:y].to_f

	@result = case params[:operation].to_s
	when '+' then @x + @y
	when '-' then @x - @y
	when '*' then @x * @y
	when '/' then @x / @y
	end
	erb :calc
end

get '/about' do
	erb :about
end

get '/help' do
	erb :help
end

get '/advertise' do
	erb :advertise
end

get '/' do
	erb :/
end
	
# get '/multiply/:x/:y' do
# 	@result = params[:x].to_f * params[:y].to_f
# 	erb :calc
# end

# get '/add/:x/:y' do
# 	@result = params[:x].to_f + params[:y].to_f
# 	erb :calc
# end

# get '/minus/:x/:y' do
# 	@result = params[:x].to_f + params[:y].to_f
# 	erb :calc
# end

# get '/divide/:x/:y' do
# 	@result = params[:x].to_f + params[:y].to_f
# 	erb :calc
# end