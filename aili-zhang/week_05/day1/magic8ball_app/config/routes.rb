Rails.application.routes.draw do
  root :to => 'pages#magic'
  get '/magic' => 'pages#magic'
end
