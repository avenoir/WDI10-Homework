require 'sinatra'
require 'sinatra/reloader'
require 'json'
require 'httparty'

get '/' do
	erb :home
end


