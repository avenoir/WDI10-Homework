require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do
	erb :weather
end

get "/getweather" do
	url = "http://www.bom.gov.au/fwo/IDQ60901/IDQ60901.94578.json"
	@weather = HTTParty.get url
	erb :results
end

