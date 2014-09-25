class Category < ActiveRecord::Base
  validates :name, presence: true
  
  has_many :restaurants
  has_many :restaurant_categories
  has_many :restaurants, through: :restaurant_categories
end
