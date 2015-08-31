Rails.application.routes.draw do
  root :to => 'page#search'

  get '/search' => 'page#search'
  get '/movie' => 'page#movie'x
  get '/stock' => 'page#stocks'
end
