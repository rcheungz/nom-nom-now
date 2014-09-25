json.extract! @restaurant, :id, :name, :address, :created_at, :updated_at
json.categories @restaurant.categories
json.reviews @restaurant.reviews