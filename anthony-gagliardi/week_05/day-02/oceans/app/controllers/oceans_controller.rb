class OceansController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @oceans = Ocean.all
  end

  def new
  end

  def create
    oceans = Ocean.create oceans_params
    redirect_to oceans_path
  end

  def show
    @oceans = Ocean.find params[:id]
  end

  def destroy
    oceans = Ocean.find params[:id]
    oceans.destroy
    redirect_to oceans_path
  end

  def edit
    @oceans = Ocean.find params[:id]
  end

  def update
    oceans = Ocean.find params[:id]
    oceans.update oceans_params
    redirect_to ocean_path(planet.id)
  end

  private
  def oceans_params
    params.require(:oceans).permit(:name, :location, :depth, :area)
  end

end