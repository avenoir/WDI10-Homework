Rails.application.routes.draw do
  root :to => 'pages#guess'
  get '/secret_number' => 'pages#guess'
end
