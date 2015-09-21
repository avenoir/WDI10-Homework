Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/home' => 'pages#home'
  get '/about' => 'pages#about'

  get '/movies' => 'movies#movies'

  get '/stocks' => 'stocks#stocks'


end