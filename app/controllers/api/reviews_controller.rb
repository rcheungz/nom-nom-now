class Api::ReviewsController < ApplicationController
  
  def index
    @restaurants = Restaurant.all;
    render :index
  end
  
  def show
    @restaurant = Restaurant.find(params[:id])
    
    render :show
  end
  
  private
  
  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :category)
  end
end
