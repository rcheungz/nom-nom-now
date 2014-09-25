class Category < ActiveRecord::Base
  validates :name, :restaurant_id, presence: true
  
  has_many :restaurants
end
