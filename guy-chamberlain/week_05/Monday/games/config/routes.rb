Rails.application.routes.draw do
  
  get '/magic8/:question' => 'magic8#answer'

  get '/guess' => 'guess#guessit'
  get '/checkguess' => 'guess#checkguess'

  get '/games/rock_paper_scissors/:throw' => 'games#rock_paper_scissors_play'
  

end
