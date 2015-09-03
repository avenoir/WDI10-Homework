class GamesController < ApplicationController
	def eight_ball
		render :eight_ball
	end

	def eight_ball_result
		answers = [
			"It is certain",
			"It is decidedly so",
			"Without a doubt",
			"Yes definitely",
			"You may rely on it",
			"As I see it, yes",
			"Most likely",
			"Outlook good",
			"Yes",
			"Signs point to yes",
			"Reply hazy try again",
			"Ask again later",
			"Better not tell you now",
			"Cannot predict now",
			"Concentrate and ask again",
			"Don't count on it",
			"My reply is no",
			"My sources say no",
			"Outlook not so good",
			"Very doubtful"
		]
		index = rand(0...19)

		@question = params[:question]
		@answer = answers[index]

		render :eight_ball_result
	end

	def secret_number
		render :secret_number
	end

	def secret_number_result
		@secret_number = rand(1...10)
		@answer = params[:userchoice]

		@winner = true if ( @secret_number == @answer.to_i )
		render :secret_number_result
	end

	def rps
		render :rps
	end

	def rps_result
		@user_choice = params[:user_choice]

		computer_selections = ["Rock", "Paper", "Scissors"]
		computer_index = rand(0..2)
		@computer_choice = computer_selections[computer_index]

		if @user_choice == @computer_choice
			result = "Tie"
		elsif (@user_choice == "Rock" && @computer_choice == "Scissors") || (@user_choice == "Scissors" && @computer_choice == "Paper") || (@user_choice == "Paper" && @computer_choice == "Rock")
			result = "Player"
		else
			result = "Computer"
		end

		case result
			when "Player"
				@result = "Player Wins"
			when "Computer"
				@result = "Computer Wins"
			when "Tie"
				@result = "It's a tie"
		end
		render :rps_result
	end
end