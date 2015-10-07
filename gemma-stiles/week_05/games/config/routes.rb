Rails.application.routes.draw do

  root :to => 'pages#home'

  get '/home' => 'pages#home'
  get '/rules' => 'pages#rules'

  get '/eightball' => 'eightball#eightball'

  get '/secret_number' => 'secret_number#secret_number'

  get '/rock_paper_scissors' => 'rock_paper_scissors#rock_paper_scissors'

end
