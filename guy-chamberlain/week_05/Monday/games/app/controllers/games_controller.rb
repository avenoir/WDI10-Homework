class GamesController < ApplicationController


	def rock_paper_scissors_play

		throw = params[:throw].downcase

		plays = ["rock","paper","scissors"]

		if throw == plays[Random.rand(3)]
			@winner = "Player"
		else
			@winner = "Computer"
		end		

	end

end
