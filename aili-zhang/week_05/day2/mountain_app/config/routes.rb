Rails.application.routes.draw do

  root :to => 'mountains#index'
  get '/mountains' => 'mountains#index'
  get '/mountains/new' => 'mountains#new'
  post '/mountains' => 'mountains#create'
  get '/mountains/:id/edit' => 'mountains#edit', :as => 'mountain_edit'
  post '/mountains/:id' => 'mountains#update'
  get '/mountains/:id' => 'mountains#show', :as => 'mountain'
  delete '/mountains/:id' => 'mountains#delete'
  


end
