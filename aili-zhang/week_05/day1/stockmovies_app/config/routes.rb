Rails.application.routes.draw do
  # resources :movies

  root :to => 'stocks#home'
  get '/stockhome' => 'stocks#stockhome'
  get '/stockhome/lookup' => 'stocks#lookupform'
  get '/stockhome/result' => 'stocks#lookup'


  get '/moviehome' => 'movies#moviehome'
  get '/moviehome/search' => 'movies#searchform'
  get '/moviehome/result' => 'movies#search'


end
