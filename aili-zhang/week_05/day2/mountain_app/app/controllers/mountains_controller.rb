class MountainsController < ApplicationController


	skip_before_filter :verify_authenticity_token

	def index
		@mountains = Mountain.all
	end

	def show
		@mountain = Mountain.find params[:id]
	end

	def new
	end

	def create
		mountain = Mountain.create mountain_params
		redirect_to mountains_path
	end

	def delete
		mountain = Mountain.find params[:id]
		mountain.destroy
		redirect_to mountains_path
	end

	def edit
		@mountain = Mountain.find params[:id]

	end

	def update
		mountain = Mountain.find params[:id]
		mountain.update mountain_params
		redirect_to mountain_path(mountain.id)
	end


	private 
	def mountain_params
		params.require(:mountain).permit(:name, :location, :image, :first_person)
	end


end