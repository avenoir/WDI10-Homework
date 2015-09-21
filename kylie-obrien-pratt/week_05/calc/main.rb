require 'sinatra'
require 'sinatra/reloader'


15:0> def h(name)
puts "Hello #{name}!"
end
=> :h

get '/' do
	erb :clac
end

get '/' do
	erb :calc
end

get '/calc' do
	#calculation happens here
	@x = params[:x].to_f
	@y = params[:y].to_f

	@result = case params[:operation]
	when '+' then @x + @y
	when '-' then @x - @y
	when '/' then @x / @y
	when '*' then @x * @y
	end

	erb :calc
end




get '/help' do
	erb :help
end

get '/advertise' do
	erb :advertise
end


# get '/multiply/:x/:y' do 
# 	@ result = params[:x].to_f * params[:y].to_f
# 	erb :calc #do embedded ruby in calc file
# end

# get '/add/:x/:y' do
# 	@result = params[:x].to_f + params[:y].to_f
# 	erb :calc
# end