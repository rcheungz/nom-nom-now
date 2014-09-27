class Api::CategoriesController < ApplicationController
  
  def index
    @categories = Category.all
    if params[:query]
      searchString = params[:query].downcase
      @category = Category.find_by(name: searchString)
      render :shawna
    end
  end
 
  def show
    @category = Category.find(params[:id])
  end
  
  def search
    
  end
  
  
  
end