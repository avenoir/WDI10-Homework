require 'sinatra'
require 'sinatra/reloader'

get '/' do
	erb :pairbot
end

get '/pairbot' do
	@y = params[:yes]
	@n = params[:no]
	if @y
		erb :test_pass
	else
		erb :write_test
	end
end

get '/test_pass' do
	@y = params[:yes]
	@n = params[:no]
	if @y 
		erb :refactor
	else
		erb :write_code
	end
end

get '/refactor' do
  	@y = params[:yes]
	@n = params[:no]
	if @y 
		erb :refactor_code
	else
		erb :new_feature
	end
end

get '/write_code' do
  	@d = params[:done]
	erb :test_pass if @d
end

get '/refactor_code' do
  	@d = params[:done]
	erb :test_pass if @d
end

get '/write_test' do
  	@d = params[:done]
	erb :test_pass if @d
end

get '/new_feature' do
  	@c = params[:continue]
	erb :pairbot if @c
	
end

get '/inspiration' do
	erb :inspiration
end

get '/run_tests' do
	erb :run_tests
end



