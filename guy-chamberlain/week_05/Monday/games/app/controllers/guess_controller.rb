class GuessController < ApplicationController

  def guessit
  end

  def checkguess
    num = params[:num]

    if num == Random.rand(10).to_i
      @yesno = "Correct!!"
    else
      @yesno = "Wrong"
    end

    render 'response'  

  end


end
