class OceansController < ApplicationController

	skip_before_filter :verify_authenticity_token

	def index
		@oceans = Ocean.all
	end

	def new

	end

	def create
		o = Ocean.create ocean_params
		redirect_to oceans_path
	end

	def show
		@ocean = Ocean.find params[:id]
	end

	def destroy
		ocean = Ocean.find params[:id]
		ocean.destroy
		redirect_to oceans_path
	end

	def edit
		@ocean = Ocean.find params[:id]
	end

	def update
		o = Ocean.find params[:id]
		o.update ocean_params
		redirect_to ocean_path(o.id)
	end

	private

	def ocean_params
		params.require(:ocean).permit(:name, :image, :km_square, :max_depth )
	end
end
