class Restaurant < ActiveRecord::Base
  validates :name, :address, presence: true
  
  has_many :reviews
  has_many :restaurant_categories
  has_many :categories, through: :restaurant_categories
end
