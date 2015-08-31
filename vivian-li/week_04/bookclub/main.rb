require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
  )


class Books < ActiveRecord::Base
end


after do  
  ActiveRecord::Base.connection.close
 end
    


get '/' do
  erb :home
end

get '/books' do
  @books = Books.all 
	erb :'books/index'
end

get '/books/new' do
  erb :'books/new'
end

post '/books' do


  book = Books.create :title => params[:title], :author => params[:author], :booktype => params[:booktype], :name => params[:name], :image => params[:image], :link => params[:link]
  redirect to "/books/#{ book.id }"


end

get '/books/:id' do

  @book = Books.find params[:id]
  erb :'books/show'
end

get '/books/:id/delete' do

   book = Books.find params[:id]
   book.destroy 
    redirect to '/books'
end

get '/books/:id/edit' do

    @book = Books.find params[:id]
	  erb :'books/edit'
end

post '/books/:id' do

  book = Books.find params[:id]
  book.update :title => params[:title], :author => params[:author], :booktype => params[:booktype], :name => params[:name], :link => params[:link]
  redirect to "/books/#{ params['id']}"
end


def query_db(sql)
  puts sql

  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  @data = db.execute sql
  db.close

  @data # Return whatever we retrieved
end

