class RestaurantCategory < ActiveRecord::Base
  validates :restaurant_id, :category_id, presence: true
  
  belongs_to :restaurant
  belongs_to :category
end
