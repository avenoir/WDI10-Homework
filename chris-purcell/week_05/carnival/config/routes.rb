Rails.application.routes.draw do
 root :to => 'pages#home'
 get '/home' => 'pages#home'


 get '/magic' => 'games#magic'
 get '/number' => 'games#number'
 get '/rps' => 'games#rps'

 get '/magic_answer' => 'games#magic_answer'

 get '/number_answer' => 'games#number_answer'

 get '/games/rps_play' => 'games#rps_play'
 get '/games/rps/:throw' => 'games#rps_play'


end
