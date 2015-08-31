Rails.application.routes.draw do
  
  root :to => 'movie#search'
  get '/search' => 'movie#search'
  get '/get_poster/:id' => 'movie#get_poster'

  get '/get_quote' => 'stock#get_quote'
end
