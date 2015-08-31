class SecretNumberController < ApplicationController

	def secret_number
   	 	@guess = params[:guess].to_i
    	@answer = rand(10) + 1
    	if @guess == @answer
      	render "win"
    	else
      	render 'lose'
    	end
  	end

end	