Rails.application.routes.draw do
  root :to => 'mountains#index'
  get '/mountains' => 'mountains#index'

  get '/mountains/new' => 'mountains#new'
  post '/mountains' => 'mountains#create'

  get '/mountains/:id' => 'mountains#show', :as => 'mountain'

  get '/mountains/:id/edit' => 'mountains#edit'
  post '/mountains/:id' => 'mountains#update'
end
