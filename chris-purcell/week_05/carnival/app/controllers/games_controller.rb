class GamesController < ApplicationController

	def magic

	end

	def magic_answer

		@answers = ['It is certain',
					'It is decidedly so',
					'Without a doubt',
					'Yes definitely',
					'You may rely on it',
					'As I see it, yes',
					'Most likely',
					'Outlook good',
					'Yes',
					'Signs point to yes',
					'Reply hazy try again',
					'Ask again later',
					'Better not tell you now',
					'Cannot predict now',
					'Concentrate and ask again',
					"Don't count on it",
					'My reply is no',
					'My sources say no',
					'Outlook not so good',
					'Very doubtful']

	end

	def number
		@number = 7
	end

	def number_answer
		@number = 7
		@answer = params[:answer]
	end

	def rps
		choices = ['rock', 'paper', 'scissors']
	end

	def rps_play
		choices = ['rock', 'paper', 'scissors']
		@computer = choices.sample
		@player = params[:throw].downcase.to_s
	end

end