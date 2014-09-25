class Restaurant < ActiveRecord::Base
  validates :name, :address, presence: true
  
  has_many :reviews
  has_many :categories
end
