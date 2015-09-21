Rails.application.routes.draw do
 root :to => 'books#index'
 resources :authors, :books
end
