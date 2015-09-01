Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/home' => 'pages#home'

  get '/stocks' => 'stocks#home'
  get '/stocks/search' => 'stocks#search'

  get '/movies' => 'movies#home'
  get '/movies/search' => 'movies#search'
  get '/movies/poster' => 'movies#poster'
  get '/poster/:movie' => 'movies#poster'

end
