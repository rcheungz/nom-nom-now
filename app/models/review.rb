class Review < ActiveRecord::Base
  validates :body, :user_id, :restaurant_id, :rating, presence: true
  
  belongs_to :user
  belongs_to :restaurant 
end
