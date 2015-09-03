Rails.application.routes.draw do
  
  root :to => 'games#rock_paper_scissors_play'
  get '/games/rock_paper_scissors' => 'games#rock_paper_scissors_play' 

end
