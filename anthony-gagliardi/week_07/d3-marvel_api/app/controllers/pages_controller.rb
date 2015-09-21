class PagesController < ApplicationController
  def index
  	@char = @client.characters(:name => 'Spider-Man')[:data][:results][0]
  end
end
