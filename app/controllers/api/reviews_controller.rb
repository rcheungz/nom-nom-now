class Api::ReviewsController < ApplicationController
  
  def create
    @review = current_user.reviews.new(review_params)
    
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def destroy
    review = current_user.reviews.find(params[:id])
    review.try(:destroy)
    render json: {}
  end
  
  def show
    @review = Review.find(params[:id])
  end
  
  def udpate
    @review = current_user.reviews.find(params[:id])#problem?
    
    if @review.update_attributes(review_params) {
      render json: @review
    } else {
      render json: @review.errors.full_messages, status: :unprocessable_entity 
    }
  end
  
  private
  
  def review_params
    params.require(:review).permit(:body, :restaurant_id)
  end
  
end
