class Api::RestaurantsController < ApplicationController
  
  def index
    @restaurants = []
    list = Restaurant.all
    if params[:query]
      searchString = params[:query].downcase
      searchStrings = searchString.split(" ")
      debugger;
      searchStrings.each do |string|
        list.each do |restaurant|
          category_names = restaurant.categories.collect { |category| category.name }
          if restaurant.name.downcase.include?(string)
            @restaurants << restaurant unless @restaurants.include?(restaurant)
          elsif category_names.include?(string)
            @restaurants << restaurant unless @restaurants.include?(restaurant)
          end
        end
      end
    else 
      @restaurants = Restaurant.all
    end
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
