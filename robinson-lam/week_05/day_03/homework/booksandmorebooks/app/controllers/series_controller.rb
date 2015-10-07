class SeriesController < ApplicationController
  def index
  	@seriess = Series.all
  end

  def show
  	@series = Series.find params[:id]
  end

  def new
    @series = Series.new
  end

  def edit
  	@series = Series.find params[:id]
  end

  def create
  	series = Series.create series_params
  	redirect_to series_path(series)
  end

  def update
  	series = Series.find params[:id]
  	series.update series_params
  	redirect_to series_path(series)
  end

  def destroy
  	series = Series.find params[:id]
  	series.destroy
  	redirect_to series_index_path
  end

  private
  def series_params
  	params.require(:series).permit(:name, :author_id)
  end
end
