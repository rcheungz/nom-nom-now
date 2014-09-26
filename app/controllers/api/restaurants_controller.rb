class Api::RestaurantsController < ApplicationController
  
  def index
    @restaurants = Restaurant.all;
    render :index
  end
  
  def show
    @restaurant = Restaurant.find(params[:id])
    
    render :show
  end
  
  def search
    
  end
  
  def restaurants_by_category
    
  end
  
  private
  
  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :category)
  end
end
