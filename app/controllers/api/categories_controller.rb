class Api::CategoriesController < ApplicationController
  
  def index
    @categories = Category.all
    if params[:query]
      @category = Category.find_by(name: params[:query])
      render :shawna
    end
  end
 
  def show
    @category = Category.find(params[:id])
  end
  
  def search
    
  end
  
  
  
end