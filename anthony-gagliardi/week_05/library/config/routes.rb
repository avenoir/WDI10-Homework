Rails.application.routes.draw do
  resources :authors

  get '/' => 'authors#index'
end
