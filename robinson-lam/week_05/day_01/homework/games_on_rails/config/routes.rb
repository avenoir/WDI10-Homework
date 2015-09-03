Rails.application.routes.draw do
# Home Page
root :to => 'pages#home'
get '/games' => 'pages#home'

# Magic 8 Ball Page
get '/games/8ball' => 'games#eight_ball'
get '/games/8ball/result' => 'games#eight_ball_result'

# Secret Number Page
get '/games/secretnumber' => 'games#secret_number'
get '/games/secretnumber/result' => 'games#secret_number_result'

# Rock Paper Scissors Page
get '/games/rps' => 'games#rps'
get '/games/rps/result' => 'games#rps_result'

end
