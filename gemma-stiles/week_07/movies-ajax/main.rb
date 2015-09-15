require 'sinatra'
require 'sinatra/reloader'
require 'json'

get '/' do 
	erb :home
end

