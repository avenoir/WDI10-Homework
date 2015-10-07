require 'sinatra'
require 'sinatra/reloader'

require 'pry'



## if someone tries to get url hello, the following code is executed

get '/hello' do
	"Hello world from Sinatra!"
end

get '/mother' do
	"Hi Mom"
end

get '/hi/:name' do
	"Hi #{ params[:name]}"
end

#convert to floating point version
get '/multiply/:x/:y' do
	result = params[:x].to_f * params[:y].to_f
	"The result is #{result}"
end

get '/time' do
	Time.now.to_s
end
