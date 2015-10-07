Rails.application.routes.draw do
	# INDEX PAGE ROUTE
  root :to => 'oceans#index'
  get '/oceans' => 'oceans#index'

  # NEW ITEM PAGE
  get '/oceans/new' => 'oceans#new'
  post '/oceans' => 'oceans#create'

  # DELETE ITEM PAGE
  get '/oceans/:id' => 'oceans#show', :as => 'ocean'
  delete '/oceans/:id' => 'oceans#destroy'
  
  # EDIT ITEM PAGE
  get '/oceans/:id/edit' => 'oceans#edit', :as => 'ocean_edit'
  post '/oceans/:id' => 'oceans#update'

end