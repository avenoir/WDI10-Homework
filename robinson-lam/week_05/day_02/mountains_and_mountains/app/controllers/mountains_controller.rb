class MountainsController < ApplicationController
	skip_before_filter :verify_authenticity_token # REMOVE THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
		redirect_to mountain_path(mountain.id)
	end

	private
	def mountain_params
		params.require(:mountain).permit(:name, :elevation, :image)
	end
end
