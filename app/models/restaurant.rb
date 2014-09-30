class Restaurant < ActiveRecord::Base
  validates :name, :address, :latitude, :longitude, presence: true
  geocoded_by :address   # can also be an IP address
  before_validation :geocode, if: :address_changed?
  
  has_many :reviews
  has_many :restaurant_categories
  has_many :categories, through: :restaurant_categories
end
