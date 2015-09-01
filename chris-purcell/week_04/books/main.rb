require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
require 'pry'

ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
		:adapter => 'sqlite3',
		:database => 'database.db'
	);

class Book < ActiveRecord::Base
end

after do 
	ActiveRecord::Base.connection.close
end

get '/' do
	erb :home	
end
	
get '/books' do
	@book = Book.all
	erb :'books/index'
end

get '/authors' do
	@book = Book.all
	erb :'books/index_authors'
end

get '/author' do

end
get "/books/new" do
	erb :'books/new'
end

post '/books/create' do
	book = Book.create :title => params[:title], :author => params[:author], :cover => params[:cover], :summary => params[:summary], :read => params[:read].downcase
	redirect to '/books'
end

get '/books/:id/delete' do
	book = Book.find params[:id]
	book.destroy
	redirect to '/books'
end

get '/books/:id/edit' do 
	@book = Book.find params[:id]
	erb :'books/edit'
end

get '/books/:id' do
	@book = Book.find params[:id]
	erb :'books/show'
end

post '/books/:id' do
	book = Book.find params[:id]
	book.title = params[:title]
	book.author = params[:author]
	book.cover = params[:cover]
	book.summary = params[:summary]
	book.read = params[:read].downcase
	book.save

	#Book.update :title => params[:title], :author => params[:author], :cover => params[:cover], :summary => params[:summary], :read => params[:read]
	redirect to '/books'
end


